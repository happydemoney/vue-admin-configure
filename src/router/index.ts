import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index.vue";

import ChartRouter from "./modules/chart"
import TableRouter from "./modules/table"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    meta: {
      title: 'dashboard',
      icon: 'pie-chart'
    }
  },
  ChartRouter,
  TableRouter
];

export {
  routes
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
