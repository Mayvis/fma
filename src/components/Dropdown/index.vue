<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <div class="dropdown-component w-full relative">
    <div @click="isOpen = !isOpen" class="relative">
      <slot name="trigger"></slot>

      <img
        src="../../assets/images/common/arrow-down-black.svg"
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
