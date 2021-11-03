<script lang="ts" setup>
import { ref, onMounted } from "vue";
import Dropdown from "@/components/Dropdown.vue";
import Works from "./components/Works.vue";
import Introduction from "./components/Introduction.vue";
import Schedule from "./components/Schedule.vue";
import { getWorks } from "../../api/works";
import WorkProps from "../../types/work/WorkProps";

const works = ref<WorkProps[]>([]);
const fvlWorks = ref<WorkProps[]>([]);

const searchParams = ref({ limit: 20, search: "" });
const searchFvlParams = ref({ limit: 20, search: "fvl" });

onMounted(() => {
  handleGetWorks();
  handleGetFvlWorks();
});

const handleGetWorks = async () => {
  works.value = await getWorks(searchParams.value);
};

const handleGetFvlWorks = async () => {
  fvlWorks.value = await getWorks(searchFvlParams.value);
};

const currentContent = ref("exhibition");
</script>

<template>
  <div class="bg-black min-h-100vh lg:pl-20">
    <transition-group name="slide-fade">
      <template
        v-if="
          currentContent === 'exhibition' ||
          currentContent === 'futureVisionLab'
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
      <div class="sidebar bottom-0 font-podkova z-100 w-full lg:w-248px">
        <div class="bg-white border-1 border-black pl-4 py-3">
          <div
            class="relative z-1"
            :class="currentContent === 'exhibition' && 'decoration'"
          >
            <button
              class="pt-4 pb-4 outline-none focus:outline-none z-2"
              @click="currentContent = 'exhibition'"
            >
              全部
            </button>
          </div>

          <dropdown
            arrow-position="left"
            @click="currentContent = 'futureVisionLab'"
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
                v-for="({ work_zh }, index) in fvlWorks"
                :key="index"
                class="p-2"
              >
                <button
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
                </button>
              </div>
            </div>
          </dropdown>
        </div>

        <button
          class="custom-button menu-background"
          @click="currentContent = 'schedule'"
        >
          展演日程
        </button>
        <button
          class="custom-button menu-background"
          @click="currentContent = 'introduction'"
        >
          計畫介紹
        </button>
      </div>

      <transition name="fade" mode="out-in">
        <works
          v-if="
            currentContent === 'exhibition' ||
            currentContent === 'futureVisionLab'
          "
          :works="currentContent === 'exhibition' ? works : fvlWorks"
        ></works>

        <schedule v-else-if="currentContent === 'schedule'"></schedule>

        <introduction v-else></introduction>
      </transition>
    </div>
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
