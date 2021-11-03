import { createApp } from "vue";
import VueRouter from "./router";
import App from "./App.vue";

import "@/styles/index.scss";
import "@/styles/custom.scss";
import "@/styles/theme.scss";

// windiCSS part
import "virtual:windi.css";
import "virtual:windi-devtools";

const app = createApp(App);

import usePhotoPath from "./pages/use/usePhotoPath";
app.config.globalProperties.$usePhotoPath = usePhotoPath;

// give typescript hint for vue template
// doc:https://v3.vuejs.org/guide/typescript-support.html#using-with-options-api
declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $usePhotoPath: (path: string) => string;
  }
}

app.use(VueRouter).mount("#app");
