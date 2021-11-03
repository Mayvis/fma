<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import AppFooter from "./footer/AppFooter.vue";
import AppNavbar from "./navbar/AppNavbar.vue";

const key = computed(() => useRoute().path);
const footerExclude = ref(["/future-vision-lab"]);
</script>

<template>
  <section class="pt-14">
    <app-navbar></app-navbar>
    <router-view :key="key"></router-view>
    <app-footer v-if="!footerExclude.includes(key)"></app-footer>
  </section>
</template>

<style lang="scss" scoped></style>
