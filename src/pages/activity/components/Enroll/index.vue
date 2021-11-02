<script lang="ts" setup>
import { computed } from "vue";
import ActivityProps from "../../../../types/activity/ActivityProps";
import usePhotoPath from "../../../use/usePhotoPath";
import Accordion from "@/components/Accordion/index.vue";
import dayjs from "dayjs";

const props = defineProps<{
  currentEvent: ActivityProps | null;
}>();

const activityPhotoUrl = computed(() => {
  if (props.currentEvent !== null) {
    return usePhotoPath(props.currentEvent.photo);
  }

  return null;
});

const startDate = computed(() => {
  if (props.currentEvent !== null) {
    return dayjs(props.currentEvent.start_date);
  }

  return null;
});

const endDate = computed(() => {
  if (props.currentEvent !== null) {
    return dayjs(props.currentEvent.end_date);
  }

  return null;
});

const speakerAvatarUrl = (imagePath: string) => {
  return usePhotoPath(imagePath);
};
</script>

<template>
  <div class="enroll-component h-full p-6 max-w-600px lg:max-w-auto relative">
    <template v-if="currentEvent !== null">
      <figure>
        <img :src="activityPhotoUrl" alt="Activity Image" />
      </figure>

      <h2 class="text-2xl py-4 font-bold font-noto">
        {{ currentEvent.title_zh }}
      </h2>

      <ul class="text-sm font-podkova">
        <li class="mb-2">
          講者 |
          <span
            v-for="({ name_zh, speaker_id }, index) in currentEvent.speakers"
            :key="speaker_id"
            >{{ name_zh }}
            {{ index !== currentEvent.speakers.length - 1 ? "、" : "" }}</span
          >
        </li>

        <li class="mb-2">
          日期 |
          {{ startDate?.format("YYYY-MM-DD") }}
        </li>

        <li class="mb-2">
          時間 | {{ startDate?.format("HH:mm") }} -
          {{ endDate?.format("HH:mm") }}
        </li>

        <li class="mb-2">地點 | {{ currentEvent.location_zh }}</li>
        <li class="flex justify-center items-center mb-8 mt-6">
          <a
            :href="
              currentEvent.registration_url.startsWith('http')
                ? currentEvent.registration_url
                : `https://${currentEvent.registration_url}`
            "
            target="_blank"
            class="bg-black block px-6 py-3 text-white"
            >報名網址</a
          >
        </li>
        <li class="mb-4">
          <accordion trigger-name="活動簡介">
            <div>{{ currentEvent.introduction_zh }}</div>
          </accordion>
        </li>
        <li class="mb-4">
          <accordion trigger-name="講者簡介">
            <div
              v-for="{
                speaker_id,
                avatar_url,
                name_zh,
                introduction_zh,
              } in currentEvent.speakers"
              :key="speaker_id"
            >
              <div class="flex items-center mb-3">
                <figure class="w-3/12">
                  <img :src="speakerAvatarUrl(avatar_url)" alt="avatar" />
                </figure>
                <p class="w-9/12 ml-3">{{ name_zh }}</p>
              </div>

              <div class="pb-4">{{ introduction_zh }}</div>
            </div>
          </accordion>
        </li>
      </ul>
    </template>

    <div
      v-else
      class="text-gray-500 text-sm flex justify-center items-center h-full"
    >
      點選左側，了解更多活動資訊！
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
