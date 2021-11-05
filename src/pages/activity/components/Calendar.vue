<script setup lang="ts">
import { computed, ref } from "vue";
import Dropdown from "@/components/Dropdown.vue";
import colors from "./utils/colors";
import { ActivityProps, ActivityCategoryProps } from "../../../types/activity";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

const props = defineProps<{
  data: ActivityProps[];
  currentEvent: ActivityProps | null;
  categories: ActivityCategoryProps[];
  filterCategory: number;
  now: Dayjs;
  next: Dayjs;
  loading: boolean;
}>();

// register emit event
const emits = defineEmits([
  "changeMonth",
  "filterCategory",
  "changeCurrentEvent",
]);

// handle category block color
const adjustedCategories = computed(() => {
  return props.categories.map((el, index) => ({
    ...el,
    bgColor: colors[index].bgColor,
    textColor: colors[index].textColor,
  }));
});

const currentCategory = computed(() => {
  if (props.filterCategory === 0) return null;

  const result = adjustedCategories.value.find(
    ({ category_id }) => category_id === props.filterCategory
  );

  return result ? result : null;
});

const monthList = [
  "一月",
  "二月",
  "三月",
  "四月",
  "五月",
  "六月",
  "七月",
  "八月",
  "九月",
  "十月",
  "十一月",
  "十二月",
];

const currentStatus = ref<"now" | "next">("now");

const current = computed(() => ({
  month: props[currentStatus.value].get("month"),
  totalDate: props[currentStatus.value].daysInMonth(),
  date: props[currentStatus.value].get("date"),
  day: props[currentStatus.value].get("day"),
}));

const handleChangeMonth = (month: "now" | "next") => {
  currentStatus.value = month;

  // emit change month event to parent
  emits("changeMonth", month);
};

const handleEvents = (day: number) => {
  const d = props.now.set("date", day).format("YYYY-MM-DD");

  const result: ActivityProps[] = [];
  for (let i = 0; i < props.data.length; i++) {
    const c = props.data[i];
    const startDate = c.start_date;
    const endDate = c.end_date;

    if (dayjs(d).isBetween(startDate, endDate, "date", "[]")) {
      result.push(c);
    }
  }

  return result;
};

const handleCategoryStyle = (activity: ActivityProps) => {
  const result = adjustedCategories.value.find(
    ({ category_id }) => category_id === activity.category.category_id
  );

  if (result) {
    return {
      backgroundColor: result.bgColor,
      color: result.textColor,
    };
  }

  return {
    backgroundColor: "#000000",
    color: "#ffffff",
  };
};

const handleFilterCategory = (categoryId: number) => {
  // emit filter category event to parent
  emits("filterCategory", categoryId);
};

const handleCurrentEvent = (activity: ActivityProps) => {
  emits("changeCurrentEvent", activity);
};

const handleTimeFormat = (time: string) => {
  return dayjs(time).format("HH:mm");
};

// generate random number array, value between 2 to 4 for skeleton effect
const handleRandomNumberArray = () => {
  const min = 2;
  const max = 4;

  return Array.from(
    { length: 6 },
    () => Math.floor(Math.random() * (max - min)) + min
  );
};
</script>

<template>
  <div class="mb-4">
    <div class="flex font-podkova mb-6">
      <button
        class="switch-month-button mr-3"
        :class="currentStatus === 'now' && 'active'"
        @click="handleChangeMonth('now')"
      >
        {{ monthList[current.month] }}
      </button>

      <button
        class="switch-month-button"
        :class="currentStatus === 'next' && 'active'"
        @click="handleChangeMonth('next')"
      >
        {{ monthList[next.get("month")] }}
      </button>
    </div>

    <!-- category button group part -->
    <div class="hidden lg:flex flex-wrap items-center">
      <button
        class="mr-2 mb-1 focus:outline-none outline-none"
        @click="handleFilterCategory(0)"
      >
        總覽
      </button>

      <!-- category skeleton loading -->
      <template v-if="loading && categories.length === 0">
        <div
          v-for="(number, index) in handleRandomNumberArray()"
          :key="index"
          :class="`loading-bar bg-gray-300 p-3 mx-2 mb-2 rounded-full w-${number}/12`"
        ></div>
      </template>

      <template v-else>
        <button
          v-for="{ category_id, name_zh, bgColor } in adjustedCategories"
          :key="category_id"
          class="category-button"
          :class="
            filterCategory !== 0 && filterCategory !== category_id
              ? 'opacity-20'
              : ''
          "
          @click="handleFilterCategory(category_id)"
        >
          <span
            class="rounded-full block w-3 h-3 mr-2"
            :style="{ backgroundColor: bgColor }"
          ></span>
          {{ name_zh }}
        </button>
      </template>
    </div>

    <!-- category button group dropdown menu -->
    <dropdown class="lg:hidden" arrow-position="right">
      <template v-slot:trigger>
        <button
          class="
            w-full
            flex
            p-3
            items-center
            focus:outline-none
            outline-none
            bg-gray-100
            focus:outline-none
            outline-none
            text-sm
          "
        >
          <template v-if="currentCategory === null">總覽</template>

          <template v-else>
            <span
              class="rounded-full block w-3 h-3 mr-2"
              :style="{ backgroundColor: currentCategory?.bgColor }"
            ></span>
            {{ currentCategory?.name_zh }}
          </template>
        </button>
      </template>

      <button
        class="
          w-full
          flex
          items-center
          bg-gray-200
          px-2
          py-3
          outline-none
          focus:outline-none
          text-sm
        "
        @click="handleFilterCategory(0)"
      >
        總覽
      </button>
      <button
        v-for="{ category_id, name_zh, bgColor } in adjustedCategories"
        :key="category_id"
        @click="handleFilterCategory(category_id)"
        class="
          w-full
          flex
          items-center
          bg-gray-200
          px-2
          py-3
          outline-none
          focus:outline-none
          text-sm
        "
      >
        <span
          class="block w-3 h-3 mr-2 rounded-full"
          :style="{ backgroundColor: bgColor }"
        ></span>
        {{ name_zh }}
      </button>
    </dropdown>
  </div>

  <div class="hidden lg:flex">
    <div
      v-for="(week, index) in ['S', 'M', 'T', 'W', 'T', 'F', 'S']"
      class="w-full lg:w-1/7 text-center text-gray-500"
      :key="index"
    >
      {{ week }}
    </div>
  </div>

  <div class="flex flex-wrap border-t-1 border-r-1 border-gray-500">
    <!-- Calendar compensate part -->
    <div
      v-for="d in current.day - 1"
      :key="d"
      class="
        border-b-1 border-l-1 border-gray-500
        w-full
        lg:w-1/7
        h-160px
        hidden
        lg:block
        bg-white bg-opacity-50
      "
    ></div>

    <!-- Calendar kernel part -->
    <div
      v-for="d in current.totalDate"
      :key="d"
      class="
        border-b-1 border-l-1 border-gray-500
        w-full
        min-h-100px
        lg:min-h-auto
        h-auto
        lg:h-160px lg:w-1/7 lg:overflow-auto
        bg-white bg-opacity-50
      "
    >
      <div class="day pt-1 pl-1 text-gray-400 text-sm">
        {{ d }}
      </div>

      <!-- skeleton loading block -->
      <div class="loading-cell p-1" v-if="loading">
        <span class="block bg-gray-300 p-2 w-2/3 mb-2 loading-bar"></span>
        <div class="bg-gray-300 p-3 loading-bar"></div>
      </div>

      <template v-else>
        <div
          v-for="(result, index) in handleEvents(d)"
          :key="index"
          class="cell p-1 cursor-pointer"
          @click="handleCurrentEvent(result)"
        >
          <div class="event text-xs mb-2">
            <div class="event-time text-gray-500 mb-1">
              {{ handleTimeFormat(result.start_date) }} -
              {{ handleTimeFormat(result.end_date) }}
            </div>

            <div
              class="event-title py-2 px-1 text-white truncate"
              :class="
                props.currentEvent?.activity_id === result.activity_id
                  ? 'outline-red-500'
                  : ''
              "
              :style="handleCategoryStyle(result)"
            >
              {{ result.title_zh }}
            </div>
          </div>
        </div>
      </template>
    </div>

    <!-- Calendar compensate part -->
    <template v-if="7 - ((current.totalDate + current.day - 1) % 7) !== 7">
      <div
        v-for="d in 7 - ((current.totalDate + current.day - 1) % 7)"
        :key="d"
        class="
          border-b-1 border-l-1 border-gray-500
          hidden
          lg:block lg:w-1/7
          h-160px
          bg-white bg-opacity-50
        "
      ></div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.switch-month-button {
  @apply text-4xl font-bold focus:outline-none border-none outline-none text-gray-300;

  &.active {
    @apply text-black;
  }
}

.category-button {
  @apply outline-none focus:outline-none mx-2 rounded-full bg-gray-300 px-2 mb-2 flex items-center;
}
</style>
