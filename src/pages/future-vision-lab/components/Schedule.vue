<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";
import scheduleData from "../utils/schedule-data";
import ScheduleItem from "./ScheduleItem.vue";

const data = ref(scheduleData);

const handleCheckDateValid = (date: string) => {
  return !dayjs(date).isValid();
};

const handleFormatWorkDate = (date: string) => {
  if (handleCheckDateValid(date)) return "N/A";

  return dayjs(date).format("MM/DD ddd");
};
</script>

<template>
  <div
    class="
      lg:max-w-600px
      2xl:max-w-1120px
      flex flex-wrap
      font-podkova
      text-white
      px-4
      lg:pl-12 lg:pr-2
      mb-12
    "
  >
    <div
      class="w-full lg:max-w-800px 2xl:w-1/2 mb-8"
      v-for="(times, key) in data"
      :key="key"
    >
      <div class="text-4xl my-3">
        {{ handleFormatWorkDate(key.split("_")[0]) }}. -
        {{ handleFormatWorkDate(key.split("_")[1]) }}.
      </div>

      <template v-for="(contents, time) in times" :key="time">
        <div class="flex mb-4">
          <div class="min-w-52px">{{ time }}</div>

          <div class="w-1px h-auto bg-white mx-3"></div>

          <schedule-item :contents="contents"></schedule-item>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
