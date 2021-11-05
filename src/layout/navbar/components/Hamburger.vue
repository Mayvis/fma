<script lang="ts" setup>
import { ref } from "vue";

const trigger = ref(false);

function handleDropdown() {
  trigger.value = !trigger.value;
}
</script>

<template>
  <button
    class="hamburger p-12px border-l-1 border-black lg:hidden"
    :class="trigger && 'trigger'"
    @click="handleDropdown"
  >
    <span class="line" :class="[trigger && 'transform rotate-45']"></span>
    <span class="line my-12px" :class="trigger && 'hidden'"></span>
    <span class="line" :class="[trigger && 'transform -rotate-45']"></span>
  </button>
</template>

<style lang="scss" scoped>
.hamburger {
  @apply outline-none;

  &.trigger {
    .hidden {
      display: none;
    }
  }

  .line {
    @apply bg-black w-36px h-1px block;
  }
}
</style>
