<script setup lang="ts">
import { useRoute } from "vue-router";
import {
  computed,
  onMounted,
  ref,
  getCurrentInstance,
  ComponentInternalInstance,
} from "vue";
import { getWork } from "../../api/works";
import { getGroup } from "../../api/groups";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import dayjs from "dayjs";
import { ArtistProps } from "../../types/artist";
import { GroupProps } from "../../types/group";
import { WorkProps, WorkPhotoProps } from "../../types/work";
import WorkDetailRecommend from "./components/WorkDetailRecommend.vue";

const dayList = ref(["日", "一", "二", "三", "四", "五", "六"]);

// Not using { ctx } = getCurrentInstance() because typescript error, need to specify any type
const { appContext } = getCurrentInstance() as ComponentInternalInstance;

const route = useRoute();

const workId = computed(() => {
  return route.params.id as string;
});

const work = ref<WorkProps | null>(null);
const artistsInfo = ref<{ artistId: string; avatar: string; name: string }[]>(
  []
);

onMounted(async () => {
  work.value = await getWork(workId.value);

  if (work.value) {
    // get each group of artists, and remove duplicate artist
    for (let i = 0; i < work.value.groups.length; i++) {
      const { artists }: GroupProps = await getGroup(
        work.value.groups[i].group_id
      );

      artists.forEach(({ avatar, artist_zh, artist_id }) => {
        if (artistsInfo.value.length !== 0) {
          if (
            artistsInfo.value.findIndex(
              ({ artistId }) => artistId === artist_id
            ) !== -1
          ) {
            artistsInfo.value.push({
              avatar: appContext.config.globalProperties.$getPhotoPath(avatar),
              name: artist_zh.name,
              artistId: artist_id,
            });
            return;
          }
        }

        artistsInfo.value.push({
          avatar: appContext.config.globalProperties.$getPhotoPath(avatar),
          name: artist_zh.name,
          artistId: artist_id,
        });
      });
    }
  }
});

const workPhotoGroup = computed(() => {
  const keys: Array<keyof WorkPhotoProps> = [
    "photo_1",
    "photo_2",
    "photo_3",
    "photo_4",
    "photo_5",
  ];
  const result: string[] = [];

  if (work.value === null) return result;

  keys.forEach((key) => {
    let photoPath = (work.value as WorkProps)?.[key];

    if (photoPath && photoPath.length > 0) {
      // Doc: https://v3.vuejs.org/api/composition-api.html#provide-inject
      result.push(appContext.config.globalProperties.$getPhotoPath(photoPath));
    }
  });

  return result;
});
</script>

<template>
  <div
    class="container mx-auto lg:max-w-1200px pt-5 flex flex-col font-podkova"
  >
    <div class="breadcrumb flex items-center mb-4 text-sm font-noto px-2 mx-2">
      <router-link
        :to="{ name: 'FutureVisionLab' }"
        class="font-bold flex items-center"
        ><img
          src="../../assets/images/common/arrow-right-big.svg"
          alt="Redirect to future vision lab"
          class="mr-1"
        />作品列表</router-link
      >
      <div class="flex items-center">
        <span class="block mx-2">/</span>{{ work?.work_en.title }}
      </div>
    </div>

    <div class="flex flex-wrap">
      <div class="work-carousel-part w-full lg:w-1/2 min-h-362px px-3">
        <carousel>
          <slide v-for="(photo, index) in workPhotoGroup" :key="index">
            <img :src="photo" alt="Work Photo" />
          </slide>

          <template v-slot:addons="{ slidesCount }">
            <Navigation v-if="slidesCount !== 0" />
          </template>
        </carousel>

        <div class="text-sm py-10" v-html="work?.work_zh.proposal"></div>
      </div>

      <div class="w-full lg:w-1/2 px-3">
        <h2 class="font-bold mb-2">{{ work?.work_zh.title }}</h2>
        <h2 class="font-bold mb-4">{{ work?.work_en.title }}</h2>
        <ul class="text-xs">
          <li class="list-item">
            <div class="decoration">年份</div>
            <div>{{ dayjs(work?.year).get("year") }}</div>
          </li>
          <li class="list-item">
            <div class="decoration">媒材</div>
            <div>{{ work?.work_zh.material }}</div>
          </li>
          <li class="list-item">
            <div class="decoration">尺寸/影片長度</div>
            <div>{{ work?.work_zh.dimension }}</div>
          </li>
          <li class="list-item">
            <div class="decoration">所有權/其他說明</div>
            <div>{{ work?.work_zh.note }}</div>
          </li>
          <li class="list-item">
            <div class="decoration">藝術家</div>
            <div>
              <div
                v-for="{ avatar, name, artistId } in artistsInfo"
                :key="artistId"
                class="flex items-center py-4 ml-4"
              >
                <img :src="avatar" alt="Avatar" class="w-20 h-20 mr-2" />
                <div>{{ name }}</div>
              </div>
            </div>
          </li>
          <li class="list-item start">
            <div class="decoration">場次時間</div>
            <div class="flex-1">
              <div
                v-for="session in work?.session"
                class="flex items-center my-4"
              >
                <span>
                  {{ dayjs(session.start).format("MM/DD") }}
                </span>
                <span class="mx-2 block"
                  >({{ dayList[dayjs(session.start).get("day")] }})</span
                >
                <span>
                  {{ dayjs(session.start).format("HH:mm") }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="bg-black h-1px mt-24 mb-8"></div>

    <div class="mb-8">
      <p class="text-center font-podkova text-sm font-bold py-4">猜你也喜歡</p>

      <work-detail-recommend></work-detail-recommend>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-carousel-part {
  .carousel__slide {
    @apply pt-16/25 bg-black;

    img {
      @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain;
    }
  }

  :deep(.carousel__prev) {
    @apply bg-black top-full left-auto right-8 w-46px h-46px;
  }
  :deep(.carousel__next) {
    @apply bg-black top-full w-46px h-46px right-5;
  }
}

.list-item {
  @apply flex items-center my-2;

  &.start {
    @apply items-start;
  }

  .decoration {
    @apply min-w-120px flex justify-center items-center bg-gray-100 py-4 font-bold mr-2 text-xs;
  }
}
</style>
