<script setup lang="ts">
import { ref } from "vue";
import cultureDepartmentLogo from "../../../assets/images/footer-icon/culture-department.webp";
import clabLogo from "../../../assets/images/footer-icon/clab.webp";
import technologyMediaLogo from "../../../assets/images/footer-icon/technology-media.webp";
import TNUALogo from "../../../assets/images/footer-icon/tnua.webp";
import internetCenterLogo from "../../../assets/images/footer-icon/internet-center.webp";
import USCLogo from "../../../assets/images/footer-icon/usc.svg";
import optomaLogo from "../../../assets/images/footer-icon/optoma.webp";

const manufacturers = ref([
  {
    name: "指導單位",
    lists: [
      {
        imageSrc: cultureDepartmentLogo,
        imageName: "Culture Department",
        imageStyle: "w-25",
      },
    ],
  },
  {
    name: "主辦單位",
    lists: [
      {
        imageSrc: clabLogo,
        imageName: "Clab",
        imageStyle: "w-30",
      },
    ],
  },
  {
    name: "執行單位",
    lists: [
      {
        imageSrc: technologyMediaLogo,
        imageName: "Technology Media",
        imageStyle: "w-25",
      },
    ],
  },
  {
    name: "合作單位",
    lists: [
      {
        imageSrc: TNUALogo,
        imageName: "TNUA",
        imageStyle: "w-18.5 mr-4",
      },
      {
        imageSrc: internetCenterLogo,
        imageName: "Internet Center Logo",
        imageStyle: "w-30 mr-4",
      },
      {
        imageSrc: USCLogo,
        imageName: "USC",
        imageStyle: "w-23.5 mr-4",
      },
    ],
  },
  {
    name: "贊助單位",
    lists: [
      {
        imageSrc: optomaLogo,
        imageName: "Optoma",
        imageStyle: "w-25",
      },
    ],
  },
]);
</script>

<template>
  <div class="manufacturers">
    <div v-for="{ name, lists } in manufacturers" :key="name">
      <div class="footer-item">
        <h6 class="footer-item-title">{{ name }}</h6>

        <div class="flex justify-center">
          <img
            v-for="({ imageSrc, imageName, imageStyle }, index) in lists"
            :key="index"
            :class="['self-center', imageStyle]"
            :src="imageSrc"
            :alt="imageName"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.manufacturers {
  @apply pb-8 flex flex-col items-center justify-center lg:flex-row lg:items-start;

  .footer-item-title {
    @apply text-xs mb-7.5;

    color: var(--footer-title);
  }

  .footer-item {
    @apply flex justify-center items-center mb-8 flex-col lg:items-start lg:mr-10.5 lg:mb-0;
  }
}
</style>
