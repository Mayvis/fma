<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import AppFooter from "./footer/index.vue";
import AppNavbar from "./navbar/index.vue";

const key = computed(() => useRoute().path);
</script>

<template>
  <section>
    <app-navbar></app-navbar>
    <router-view :key="key"></router-view>
    <app-footer></app-footer>
  </section>
</template>

<style></style>
