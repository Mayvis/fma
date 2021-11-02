import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";

import About from "@/pages/about/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    name: "Layout",
    children: [
      {
        path: "about",
        component: () => import("@/pages/about/index.vue"),
        name: "About",
      },
      {
        path: "activity",
        component: () => import("@/pages/activity/index.vue"),
        name: "Activity",
      },
      {
        path: "future-vision-lab",
        component: () => import("@/pages/future-vision-lab/index.vue"),
        name: "Future Vision Lab",
      },
    ],
  },
];

const VueRouter = createRouter({
  history: createWebHistory(),
  routes,
});

export default VueRouter;
