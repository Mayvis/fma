<script lang="ts" setup>
const props =
  defineProps<{ style?: { [key: string]: string }; className?: string }>();
</script>

<template>
  <video
    playsinline
    autoplay
    loop
    muted
    :class="`fixed left-0 top-0 -z-999 max-w-1440px pt-10vh ${props.className}`"
    :style="props.style"
  >
    <source src="../assets/videos/sky2Clip.mov" type="video/mp4" />
  </video>
</template>

<style lang="scss" scoped></style>
