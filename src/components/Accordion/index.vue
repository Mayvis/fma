<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{
  triggerName: string | "";
}>();

const open = ref(true);

const handleAccordion = () => {
  open.value = !open.value;
};

const beforeEnter = (el: HTMLElement) => {
  el.style.height = "0";
};

const enter = (el: HTMLElement) => {
  el.style.height = el.scrollHeight + "px";
};

const beforeLeave = (el: HTMLElement) => {
  el.style.height = el.scrollHeight + "px";
};

const leave = (el: HTMLElement) => {
  el.style.height = "0";
};
</script>

<template>
  <button
    class="
      trigger-button
      mb-2
      outline-none
      focus:outline-none
      flex
      items-center
    "
    @click="handleAccordion"
  >
    <img
      src="../../assets/images/common/arrow-down-black.svg"
      alt="閱讀更多"
      class="px-1 mr-2 w-16px transform"
      :class="!open && '-rotate-90'"
    />
    {{ props.triggerName }}
  </button>

  <transition
    name="accordion"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @after-leave="leave"
  >
    <div v-show="open">
      <slot></slot>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
