<script lang="ts" setup>
import { getWorks } from "../../api/works";
import { onMounted, ref } from "vue";
import WorkProps from "../../types/work/WorkProps";

const works = ref<WorkProps[]>([]);

onMounted(async () => {
  works.value = await getWorks({ limit: 20, search: "" });
});
</script>

<template>
  <div class="w-full p-12 flex"></div>
</template>

<style lang="scss" scoped></style>
