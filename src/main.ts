import { createApp } from "vue";
import VueRouter from "./router";
import App from "./App.vue";

// CSS basic
import "@/styles/index.scss";
import "@/styles/custom.scss";
import "@/styles/theme.scss";

// windiCSS part
import "virtual:windi.css";
import "virtual:windi-devtools";

const app = createApp(App);

// global register event
import getPhotoPath from "./utils/getPhotoPath";
import slugify from "./utils/slugify";
app.config.globalProperties.$getPhotoPath = getPhotoPath;
app.config.globalProperties.$slugify = slugify;

// give typescript hint for vue template
// doc:https://v3.vuejs.org/guide/typescript-support.html#using-with-options-api
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $getPhotoPath: (path: string) => string;
    $slugify: (text: string, separator: string) => string;
  }
}

app.use(VueRouter).mount("#app");
