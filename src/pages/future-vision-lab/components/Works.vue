<script setup lang="ts">
import { WorkProps } from "../../../types/work";

const props = defineProps<{ works: WorkProps }>();
</script>

<template>
  <div class="w-full lg:w-3/4 pl-4 lg:pl-3 flex flex-wrap">
    <div
      v-for="({ photo_1, work_zh, work_en, work_id }, index) in props.works"
      :key="index"
      class="w-1/2 pr-4 pb-4"
    >
      <router-link
        :to="{
          name: 'FutureVisionLabWorkDetail',
          params: { id: work_id, slug: $slugify(work_en.title, '-') },
        }"
        class="work"
        :style="{ backgroundImage: `url(${$getPhotoPath(photo_1)})` }"
      >
        <div class="text-white font-podkova text-sm mb-2">
          {{ work_en.title }}
        </div>
        <div class="text-white font-podkova text-sm">
          {{ work_zh.title }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work {
  @apply relative min-h-200px bg-center bg-no-repeat flex flex-col-reverse pl-3 z-1 cursor-pointer bg-no-repeat;

  &::before {
    @apply w-full h-full absolute left-0 top-0 -z-1;
    content: "";
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.48),
      rgba(0, 0, 0, 0.16) 38.65%,
      transparent 86.29%
    );
  }
}
</style>
