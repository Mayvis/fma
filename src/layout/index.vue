<script lang="ts">
export default {
  name: "Layout",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppFooter from "./footer/index.vue";
import AppNavbar from "./navbar/index.vue";

const key = computed(() => useRoute().path);
</script>

<template>
  <app-navbar></app-navbar>
  <router-view :key="key"></router-view>
  <app-footer></app-footer>
</template>

<style></style>
