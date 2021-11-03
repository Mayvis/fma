<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);

const props = defineProps<{
  arrowPosition: "left" | "right" | "hidden";
}>();
</script>

<template>
  <div class="w-full relative select-none">
    <div @click="isOpen = !isOpen" class="relative">
      <img
        v-if="props.arrowPosition === 'left'"
        src="../assets/images/common/arrow-down-black.svg"
        alt="Arrow Down"
        class="
          absolute
          cursor-pointer
          top-1/2
          transform
          origin-top
          -translate-y-1/2
          z-10
        "
        :class="!isOpen && '-rotate-90'"
      />

      <slot name="trigger"></slot>

      <img
        v-if="props.arrowPosition === 'right'"
        src="../assets/images/common/arrow-down-black.svg"
        alt="Arrow Down"
        class="absolute right-2 top-1/2 transform cursor-pointer"
        :class="
          isOpen ? 'rotate-0 -translate-y-1/2' : '-rotate-180 translate-y-1/2'
        "
      />
    </div>

    <div v-show="isOpen" class="dropdown-menu w-full" @click="isOpen = !isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
