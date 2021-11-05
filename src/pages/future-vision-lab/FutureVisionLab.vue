<script lang="ts" setup>
import { ref, onMounted } from "vue";
import SidebarMenu from "./components/SidebarMenu.vue";
import Works from "./components/Works.vue";
import Introduction from "./components/Introduction.vue";
import Schedule from "./components/Schedule.vue";
import { getWorks } from "../../api/works";
import { WorkProps } from "../../types/work";

type contentProps =
  | "exhibition"
  | "futureVisionLab"
  | "introduction"
  | "schedule";

const fvlWorks = ref<WorkProps[]>([]);

const searchParams = ref({ limit: 100, search: "fvl" });

onMounted(() => {
  handleGetWorks();
});

const handleGetWorks = async () => {
  fvlWorks.value = await getWorks(searchParams.value);
};

const currentContent = ref<contentProps>("exhibition");

const handleChangeCurrentContent = (content: contentProps) => {
  currentContent.value = content;
};
</script>

<template>
  <div class="bg-black min-h-100vh lg:pl-20">
    <transition-group name="slide-fade">
      <template
        v-if="
          currentContent === 'futureVisionLab' ||
          currentContent === 'exhibition'
        "
      >
        <img
          :key="1"
          class="fixed top-0 left-0"
          src="../../assets/images/future-vision-lab/left-top-decoration.png"
          alt="Decoration"
        />
        <img
          :key="2"
          class="fixed bottom-0 right-0"
          src="../../assets/images/future-vision-lab/right-bottom.decoration.png"
          alt="Decoration"
        />
      </template>
    </transition-group>

    <div
      class="
        max-w-full
        pt-12
        lg:py-12
        relative
        flex flex-col-reverse
        lg:flex-row
        text-sm
      "
      :class="
        (currentContent === 'exhibition' ||
          currentContent === 'futureVisionLab') &&
        'justify-between lg:max-w-4/5'
      "
    >
      <sidebar-menu
        :fvl-works="fvlWorks"
        :current-content="currentContent"
        @change-current-content="handleChangeCurrentContent"
      ></sidebar-menu>

      <transition name="fade" mode="out-in">
        <works
          v-if="
            currentContent === 'exhibition' ||
            currentContent === 'futureVisionLab'
          "
          :works="fvlWorks"
        ></works>

        <schedule v-else-if="currentContent === 'schedule'"></schedule>

        <introduction v-else></introduction>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
