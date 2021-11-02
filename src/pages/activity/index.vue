<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import SkyBackground from "@/components/SkyBackground/index.vue";
import Calendar from "./components/Calendar/index.vue";
import Enroll from "./components/Enroll/index.vue";
import Modal from "./components/EnrollModal/index.vue";
import { getActivitiesByMonth } from "../../api/activities";
import dayjs, { Dayjs } from "dayjs";
import { getActivitiesCategories } from "../../api/activities-categories";
import ActivityProps from "../../types/activity/ActivityProps";

const loading = ref(false);

const activitiesCategories = ref([]);
onMounted(async () => {
  activitiesCategories.value = await getActivitiesCategories();
});

const now = ref(dayjs());
const next = ref(dayjs().add(1, "month"));

onMounted(() => {
  handleGetActivities(now.value);
});

const currentMonthActivities = ref<ActivityProps[]>([]);
const currentEvent = ref<ActivityProps | null>(null);

const handleGetActivities = async (currentMonth: Dayjs) => {
  try {
    loading.value = true;
    currentMonthActivities.value = await getActivitiesByMonth({
      date: currentMonth.toISOString(),
    });

    loading.value = false;
  } catch (e) {
    loading.value = false;
  }
};

const filteredCurrentMonthActivities = computed(() => {
  if (filterCategory.value === 0) return currentMonthActivities.value;

  return currentMonthActivities.value.filter(
    ({ category }) => category.category_id === filterCategory.value
  );
});

const handleChangeMonth = (currentMonth: string) => {
  if (currentMonth === "now") {
    handleGetActivities(now.value);
    return;
  }

  handleGetActivities(next.value);
};

const filterCategory = ref(0);
const handleFilterCategory = (categoryId: number) => {
  if (filterCategory.value === categoryId) {
    filterCategory.value = 0;
    return;
  }

  filterCategory.value = categoryId;
};

const handleChangeCurrentEvent = (activity: ActivityProps) => {
  currentEvent.value = activity;
};

const handleClearCurrentEvent = () => {
  currentEvent.value = null;
};
</script>

<template>
  <div class="activity">
    <div class="relative">
      <sky-background></sky-background>

      <img
        src="../../assets/images/activity/mask.svg"
        alt="Background Mask"
        class="fixed left-0 top-0 -z-998 max-w-1200px lg:max-w-1440px lg:w-auto"
      />
    </div>

    <div
      class="
        container
        mx-auto
        py-12
        flex
        lg:max-h-1096px
        xl:max-h-1065px
        lg:pr-4
      "
    >
      <div class="w-full lg:w-8/12 xl:w-9/12 px-4 font-podkova lg:mr-5">
        <calendar
          :data="filteredCurrentMonthActivities"
          :current-event="currentEvent"
          :categories="activitiesCategories"
          :filter-category="filterCategory"
          :now="now"
          :next="next"
          :loading="loading"
          @change-month="handleChangeMonth"
          @filter-category="handleFilterCategory"
          @change-current-event="handleChangeCurrentEvent"
        ></calendar>
      </div>

      <div
        class="
          hidden
          lg:block lg:w-4/12
          xl:w-3/12
          border-1 border-gray-500
          overflow-y-scroll
          bg-white
        "
        :class="currentEvent === null ? 'bg-opacity-50' : ''"
      >
        <enroll :loading="loading" :current-event="currentEvent"></enroll>
      </div>

      <teleport to="#enroll-modal">
        <modal
          :data="currentEvent"
          @clear-current-event="handleClearCurrentEvent"
        >
          <div class="overflow-y-scroll max-h-80vh my-12 bg-white">
            <enroll :loading="loading" :current-event="currentEvent"></enroll>
          </div>
        </modal>
      </teleport>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
