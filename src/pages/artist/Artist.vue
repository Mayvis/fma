<script setup lang="ts">
import { onMounted, reactive, ref, Ref, computed } from "vue";
import { getGroups } from "../../api/groups";
import { GroupProps } from "../../types/group";
import ShowMoreCircle from "./components/ShowMoreCircle.vue";
import SkyBackground from "@/components/SkyBackground.vue";
import Loading from "@/components/Loading.vue";

const groups = ref<GroupProps[]>([]);
onMounted(async () => {
  groups.value = await getGroups();
});

const show = ref(false);

// Fix issue that circleRef in setup got Object (empty) by using defineExpose
// Reference: https://stackoverflow.com/questions/67033933/cant-use-template-ref-on-component-in-vue-3-composition-api
const showMoreRef = ref<{ circleRef: HTMLElement } | null>(null);

const circleStyle = computed(() => {
  if (showMoreRef.value?.circleRef) {
    const { offsetHeight, offsetWidth } = showMoreRef.value.circleRef;

    return {
      offsetHeight,
      offsetWidth,
    };
  }

  return null;
});

const circlePosition = reactive({ x: 0, y: 0 });

const handleMouseMove = (event: MouseEvent) => {
  if (circleStyle.value) {
    circlePosition.x = event.clientX - circleStyle.value.offsetHeight / 2;
    circlePosition.y =
      event.clientY - circleStyle.value.offsetWidth / 2 + window.scrollY;
  }
};
</script>

<template>
  <!-- loading -->
  <loading></loading>

  <!-- sky background -->
  <sky-background className="pt-4 w-2/7"></sky-background>

  <!-- top button part -->
  <div class="container mx-auto">
    <div class="flex items-center justify-center py-36">
      <div class="text-3xl flex">
        <button
          class="
            bg-black
            text-white
            font-bold
            mr-1
            px-8
            py-4
            outline-none
            focus:outline-none
            flex
            items-center
          "
        >
          <img
            class="transform origin-center rotate-180 scale-240 mr-6"
            src="../../assets/images/common/arrow-right-big-white.svg"
            alt="Work"
          />
          作品
        </button>
        <button
          class="
            ml-1
            border-1 border-black
            font-podkova
            px-2
            py-4
            outline-none
            focus:outline-none
          "
        >
          Future Vision Lab
        </button>
      </div>
    </div>

    <p class="font-noto text-sm text-center pb-12">
      以「未來」為命題，邀請國內外23組藝術家、24件作品。
    </p>
  </div>

  <!-- bottom groups part -->
  <div class="flex flex-wrap">
    <show-more-circle
      v-show="show"
      ref="showMoreRef"
      :circle-position="circlePosition"
    ></show-more-circle>

    <div
      v-for="({ photo, group_zh, group_en }, index) in groups"
      :key="index"
      class="lg:w-1/4 relative"
      @mouseenter="show = true"
      @mousemove="handleMouseMove"
      @mouseleave="show = false"
    >
      <div
        :style="{ backgroundImage: `url(${$getPhotoPath(photo)})` }"
        class="pt-7/10 w-full bg-center bg-cover"
      ></div>

      <div class="absolute bottom-2 left-2 text-sm flex flex-col">
        <div class="custom-background self-start mb-1 px-1">
          {{ group_zh.name }}
        </div>
        <div class="custom-background self-start px-1">
          {{ group_en.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.custom-background {
  background: linear-gradient(
    92.43deg,
    silver,
    #9e9e9e 49.48%,
    #e9e9e9 75.52%,
    #838383
  );
}
</style>
