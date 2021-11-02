<script setup lang="ts"></script>

<template>
  <div class="copyright flex justify-center items-center flex-wrap">
    <p class="footer-name">未來媒體藝術節</p>
    <span class="text-xs mx-6 hidden lg:block">|</span>

    <p class="footer-name">Copyright © 2021 All Rights Reserved.</p>
    <span class="text-xs mx-6 hidden lg:block">|</span>

    <p class="footer-name">本網站圖文資料未經授權請勿使用</p>
    <span class="text-xs mx-6 hidden lg:block">|</span>

    <div class="flex items-center">
      <p class="footer-name">追蹤我們</p>
      <router-link to="/" class="mx-2">
        <img
          class="self-center"
          src="src/assets/images/footer-icon/footer-facebook.svg"
          alt="facebook"
        />
      </router-link>
      <router-link to="/" class="mr-2">
        <img
          class="self-center"
          src="src/assets/images/footer-icon/footer-instagram.svg"
          alt="instagram"
        />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.copyright {
  p,
  span {
    color: var(--footer-title);
  }

  .footer-name {
    @apply text-xs text-center w-full py-2 lg:w-auto lg:py-0;
  }
}
</style>
