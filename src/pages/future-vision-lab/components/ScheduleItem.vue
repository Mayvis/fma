<script setup lang="ts">
interface Iprops {
  groupZhName: string;
  groupEnName: string;
  workEnName: string;
  workZhName: string;
  time: number;
}
const props = defineProps<{ contents: Iprops[] }>();
</script>

<template>
  <div class="flex flex-col text-white">
    <div
      class="schedule"
      v-for="(
        { groupZhName, groupEnName, workEnName, workZhName, time }, index
      ) in contents"
      :class="index !== contents.length - 1 && 'mb-4'"
      :key="index"
    >
      <div class="content">
        <div class="flex-1">
          <div class="p-2 pb-0">
            {{ groupZhName }} | {{ workZhName }} | {{ time }} mins
          </div>
          <div class="p-2">{{ groupEnName }} | {{ workEnName }}</div>
        </div>

        <div class="icon-button">&#10141;</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.schedule {
  @apply self-start bg-opacity-90 p-2 rounded cursor-pointer hover:bg-blue-500;

  background-color: #414141;
}
.content {
  @apply flex items-center;

  &:hover {
    .icon-button {
      @apply scale-100 w-30px h-30px;
    }
  }

  .icon-button {
    @apply w-0 h-0 bg-black rounded-full transform scale-0 duration-600 flex justify-center items-center;
  }
}
</style>
