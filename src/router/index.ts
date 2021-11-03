import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    name: "Layout",
    children: [
      {
        path: "about",
        component: () => import("@/pages/about/About.vue"),
        name: "About",
      },
      {
        path: "activity",
        component: () => import("@/pages/activity/Activity.vue"),
        name: "Activity",
      },
      {
        path: "future-vision-lab",
        component: () =>
          import("@/pages/future-vision-lab/FutureVisionLab.vue"),
        name: "Future Vision Lab",
      },
      {
        path: "future-vision-lab/:id/detail/:slug",
        component: () => import("@/pages/future-vision-lab/WorkDetail.vue"),
        name: "Future Vision Lab Work Detail",
      },
    ],
  },
];

const VueRouter = createRouter({
  history: createWebHistory(),
  routes,
});

export default VueRouter;
