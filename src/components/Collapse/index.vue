<script setup lang="ts">
import { onMounted, computed, ref } from "vue";

const props = defineProps({
  collapseLine: {
    type: Number,
    default: 3,
    required: true,
  },
});

const cssVars = computed(() => {
  return {
    "--collapse-line": props.collapseLine,
  };
});

const collapseRef = ref<HTMLElement | null>(null);
const childrenEl = ref<HTMLElement | null>(null);

onMounted(() => {
  handleCheckSlot();

  childrenEl.value = (collapseRef.value as HTMLElement)
    .firstElementChild as HTMLElement;

  // Add slot collapse class
  childrenEl.value.classList.add("collapse");
});

function handleCheckSlot() {
  if (
    !(
      (collapseRef.value as HTMLElement).firstElementChild instanceof
      HTMLElement
    )
  ) {
    (collapseRef.value as HTMLElement).remove();

    throw new Error("Slot is not a HTMLElement");
  }
}

const toggle = ref(false);

function handleRemoveCollapse() {
  toggle.value = true;

  // Remove slot collapse class
  (childrenEl.value as HTMLElement).classList.remove("collapse");
}
</script>

<template>
  <div ref="collapseRef" class="relative" :style="cssVars">
    <slot></slot>

    <div class="cover" :class="toggle && 'hidden'">
      <button
        class="
          text-white
          bg-black
          text-xs
          w-full
          lg:w-auto
          p-1
          lg:py-0
          flex
          items-center
          justify-center
          lg:justify-start
        "
        @click="handleRemoveCollapse"
      >
        閱讀更多
        <img
          src="../../assets/images/common/arrow-down.svg"
          alt="閱讀更多"
          class="px-1 w-16px"
        />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.collapse) {
  display: -webkit-box;
  -webkit-line-clamp: var(--collapse-line);
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.cover {
  @apply absolute bottom-0 left-0 w-full h-3/4 lg:h-1/2 flex items-end;

  background: linear-gradient(180deg, hsla(0, 0%, 100%, 0) 55%, #ffffff 92%);

  &.hidden {
    display: none;
  }
}
</style>
