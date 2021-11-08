<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const show = ref(true);
const count = ref(0);
const loadingTimer = ref<ReturnType<typeof setInterval> | null>(null);
const time = 20;

onMounted(() => {
  handleLoadingCount();
});

onUnmounted(() => {
  handleClearTimer();
});

function handleLoadingCount() {
  loadingTimer.value = setInterval(() => {
    count.value++;
    if (count.value >= 100) {
      handleClearTimer();
      count.value = 100;
      show.value = false;
    }
  }, time);
}

function handleClearTimer() {
  if (loadingTimer.value) {
    clearInterval(loadingTimer.value);
  }
}
</script>

<template>
  <div class="loading-page" v-if="show">
    <p>Loading.......{{ count }}%</p>
  </div>
</template>

<style lang="scss" scoped>
.loading-page {
  @apply w-full h-screen top-0 left-0 fixed bg-white z-999 flex justify-center items-center;

  p {
    @apply bg-black text-white font-podkova px-2 font-bold;
    font-size: 2vw;
  }
}
</style>
