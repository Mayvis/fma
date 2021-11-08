<script setup lang="ts">
import Dropdown from "@/components/Dropdown.vue";
import { WorkProps } from "../../../types/work";

const emits = defineEmits(["changeCurrentContent"]);

type contentProps =
  | "exhibition"
  | "futureVisionLab"
  | "introduction"
  | "schedule";

const props = defineProps<{
  fvlWorks: WorkProps;
  currentContent: contentProps;
}>();

const handleChangeCurrentContent = (content: string) => {
  emits("changeCurrentContent", content);
};
</script>

<template>
  <div class="sidebar bottom-0 font-podkova z-100 w-full lg:w-248px">
    <div class="bg-white border-1 border-black pl-4 py-3">
      <div
        class="relative z-1"
        :class="currentContent === 'exhibition' && 'decoration'"
      >
        <button
          class="pt-4 pb-4 outline-none focus:outline-none z-2"
          @click="handleChangeCurrentContent('exhibition')"
        >
          全部
        </button>
      </div>

      <dropdown
        arrow-position="left"
        @click="handleChangeCurrentContent('futureVisionLab')"
      >
        <template v-slot:trigger>
          <div
            class="relative z-1 py-5"
            :class="currentContent === 'futureVisionLab' && 'decoration'"
          >
            <button class="pl-5 outline-none focus:outline-none block">
              Future Vision Lab
            </button>
          </div>
        </template>

        <div class="py-3">
          <div
            v-for="({ work_zh, work_id, work_en }, index) in props.fvlWorks"
            :key="index"
            class="p-2"
          >
            <router-link
              :to="{
                name: 'FutureVisionLabWorkDetail',
                params: { id: work_id, slug: $slugify(work_en.title, '-') },
              }"
              class="
                flex
                justify-start
                items-center
                text-sm
                outline-none
                focus:outline-none
              "
            >
              <span class="hover:bg-black hover:text-white">
                {{ work_zh.title }}
              </span>
            </router-link>
          </div>
        </div>
      </dropdown>
    </div>

    <button
      class="custom-button menu-background"
      @click="handleChangeCurrentContent('schedule')"
    >
      展演日程
    </button>
    <button
      class="custom-button menu-background"
      @click="handleChangeCurrentContent('introduction')"
    >
      計畫介紹
    </button>
  </div>
</template>

<style lang="scss" scoped>
.decoration {
  &::before {
    @apply absolute -left-10px top-0 w-full h-full mb-2 -z-1 transform -translate-x-4;

    content: "";
    background: linear-gradient(
      91.9deg,
      #bdbdbd 2.61%,
      #a2a2a2 49.06%,
      #e7e7e7 73.1%,
      #8b8b8b 97.74%
    );
    animation: slide 0.4s linear;

    @keyframes slide {
      0% {
        left: 10%;
      }
      100% {
        left: -10;
      }
    }
  }
}

.custom-button {
  @apply w-full lg:my-4 py-4 border-1 border-black flex justify-center items-center outline-none focus:outline-none;
}

.menu-background {
  background: linear-gradient(
    91.9deg,
    #bdbdbd 2.61%,
    #a2a2a2 49.06%,
    #e7e7e7 73.1%,
    #8b8b8b 97.74%
  );
}
</style>
