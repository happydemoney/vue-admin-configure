import Vue from "vue";
import VueRouter from "vue-router";
import { RouteConfig } from "vue-router/types";
import Layout from "@/layout/index.vue";

import ChartRouter from "./modules/chart";
import TableRouter from "./modules/table";
import FormRouter from "./modules/form";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "root",
    redirect: "/index",
    component: Layout,
    meta: {
      title: "dashboard",
      icon: "pie-chart"
    },
    children: [
      {
        path: "index",
        name: "home",
        component: () =>
          import(/* webpackChunkName: "HelloWorld" */ "@/views/dashboard.vue"),
        meta: {
          title: "index",
          icon: "pie-chart"
        }
      }
    ]
  },
  ChartRouter,
  TableRouter,
  FormRouter
];

export { routes };

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
