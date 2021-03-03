import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import PrefecturePage from "@/views/PrefecturePage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Prefecture",
    component: PrefecturePage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
