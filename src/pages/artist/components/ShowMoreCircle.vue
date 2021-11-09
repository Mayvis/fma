<script setup lang="ts">
import { onMounted, ref } from "vue";

const circleRef = ref<HTMLElement | null>(null);
defineExpose({ circleRef });

const props = defineProps<{
  circlePosition: { x: number; y: number };
}>();
</script>

<template>
  <button
    ref="circleRef"
    class="
      absolute
      bg-black
      text-white
      z-1
      w-120px
      h-120px
      text-sm
      rounded-full
      pointer-events-none
    "
    :style="{
      left: props.circlePosition.x + 'px',
      top: props.circlePosition.y + 'px',
    }"
  >
    View More
  </button>
</template>

<style lang="scss" scoped></style>
