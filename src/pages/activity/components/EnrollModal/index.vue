<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";
import { ActivityProps } from "../../types/ActivityProps";

const emits = defineEmits(["clearCurrentEvent"]);

const props = defineProps<{
  data: ActivityProps | null;
}>();

const isOpen = ref(true);

watch(
  () => props.data,
  (newVal) => {
    isOpen.value = newVal !== null;
  }
);

const handleToggleModal = () => {
  emits("clearCurrentEvent");

  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div
    v-if="isOpen"
    class="
      modal-component
      fixed
      top-0
      left-0
      w-full
      h-full
      flex
      justify-center
      items-center
      bg-gray-500 bg-opacity-50
      z-99999
      py-8
      px-4
      lg:hidden
    "
    :class="data === null ? 'hidden' : ''"
    @click.self="handleToggleModal"
  >
    <div class="relative">
      <!-- close enroll modal -->
      <button
        class="enroll-modal-close-button lg:hidden"
        @click="handleToggleModal"
      >
        <span class="transform rotate-45"></span>
        <span class="transform -rotate-45"></span>
      </button>

      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.enroll-modal-close-button {
  @apply absolute right-0 top-48px bg-black px-12px py-24px outline-none focus:outline-none z-10000;

  &:hover {
    span {
      @apply scale-120;
    }
  }

  span {
    @apply bg-white block h-1px w-24px;
  }
}
</style>
