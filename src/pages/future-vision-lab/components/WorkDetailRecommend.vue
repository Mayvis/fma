<script setup lang="ts">
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { getWorks } from "../../../api/works";
import { computed, onMounted, ref } from "vue";
import { WorkProps } from "../../../types/work";

const works = ref<WorkProps[]>([]);
onMounted(async () => {
  works.value = await getWorks({ limit: 10, search: "fvl" });
});

const containPhotoWorks = computed(() => {
  return works.value.filter(({ photo_1 }) => photo_1);
});
</script>

<template>
  <div class="hidden lg:block mx-8">
    <carousel :items-to-show="3">
      <slide
        v-for="(
          { photo_1, work_zh, work_en, work_id }, index
        ) in containPhotoWorks"
        :key="index"
      >
        <router-link
          :to="{
            name: 'FutureVisionLabWorkDetail',
            params: { id: work_id, slug: $slugify(work_en.title, '-') },
          }"
        >
          <div class="image-wrapper">
            <img :src="$getPhotoPath(photo_1)" alt="Work photo" />

            <div
              class="
                absolute
                bottom-0
                left-0
                text-white text-sm text-left
                bg-black bg-opacity-20
                w-full
              "
            >
              <div class="pl-1 truncate">{{ work_zh.title }}</div>
              <div class="pl-1 truncate">{{ work_en.title }}</div>
            </div>
          </div>
        </router-link>
      </slide>

      <template v-slot:addons>
        <navigation></navigation>
      </template>
    </carousel>
  </div>

  <div class="flex flex-wrap px-3 lg:hidden">
    <div
      v-for="(
        { photo_1, work_zh, work_en, work_id }, index
      ) in containPhotoWorks"
      :key="index"
      class="my-2 relative cursor-pointer"
    >
      <router-link
        :to="{
          name: 'FutureVisionLabWorkDetail',
          params: { id: work_id, slug: $slugify(work_en.title, '-') },
        }"
      >
        <div class="image-wrapper">
          <img :src="$getPhotoPath(photo_1)" alt="Work photo" />

          <div
            class="
              absolute
              bottom-0
              left-0
              text-white text-sm text-left
              bg-black bg-opacity-20
              w-full
            "
          >
            <div class="pl-1 truncate">{{ work_zh.title }}</div>
            <div class="pl-1 truncate">{{ work_en.title }}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carousel__slide {
  .image-wrapper {
    @apply relative overflow-hidden h-200px w-260px;

    img {
      @apply absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover w-full h-full;
    }
  }
}

:deep(.carousel__prev) {
  @apply bg-black;
}
:deep(.carousel__next) {
  @apply bg-black;
}
</style>
