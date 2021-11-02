<script setup lang="ts">
import FooterManufacturer from "./components/FooterManufacturer.vue";
import FooterCopyright from "./components/FooterCopyright.vue";
</script>

<template>
  <footer class="footer py-11">
    <footer-manufacturer></footer-manufacturer>

    <footer-copyright></footer-copyright>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: var(--footer-bg);
}
</style>
