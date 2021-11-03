import { createApp } from "vue";
import VueRouter from "./router";
import App from "./App.vue";

import "@/styles/index.scss";
import "@/styles/custom.scss";
import "@/styles/theme.scss";

// windiCSS part
import "virtual:windi.css";
import "virtual:windi-devtools";

createApp(App).use(VueRouter).mount("#app");
