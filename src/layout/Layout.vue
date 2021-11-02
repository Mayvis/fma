<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppFooter from "./footer/AppFooter.vue";
import AppNavbar from "./navbar/AppNavbar.vue";

const key = computed(() => useRoute().path);
</script>

<template>
  <app-navbar></app-navbar>
  <router-view :key="key"></router-view>
  <app-footer></app-footer>
</template>

<style></style>
