<script setup lang="ts">
import Hamburger from "./components/Hamburger.vue";
import { ref } from "vue";

const navLinks = ref([
  {
    name: "藝術家",
    url: "/",
  },
  {
    name: "作品",
    url: "/",
  },
  {
    name: "FUTURE VISION LAB",
    url: "/future-vision-lab",
  },
  {
    name: "活動",
    url: "/activity",
  },
  {
    name: "關於展覽",
    url: "/about",
  },
]);
</script>

<template>
  <nav
    class="
      fixed
      top-0
      left-0
      w-full
      flex
      justify-between
      items-stretch
      border-1 border-black
      bg-white
      z-9999
    "
  >
    <router-link to="/" class="pl-2 py-1">
      <img src="../../assets/images/logo.svg" alt="Logo" />
    </router-link>

    <ul class="hidden lg:flex">
      <li class="block" v-for="({ name, url }, index) in navLinks" :key="index">
        <router-link :to="url" class="nav-link">{{ name }}</router-link>
      </li>
    </ul>

    <hamburger></hamburger>
  </nav>
</template>

<style lang="scss" scoped>
.nav-link {
  @apply w-37 h-full pl-1 text-sm flex items-center justify-start hover:text-white hover:bg-black font-podkova;

  &.router-link-exact-active {
    @apply bg-black text-white;
  }
}
</style>
