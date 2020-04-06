import Layout from "@/layout/index.vue";

const ChartRouter = {
  path: "/chart",
  component: Layout,
  redirect: "noRedirect",
  name: "Chart",
  meta: {
    title: "Chart",
    icon: "s-order"
  },
  children: [
    {
      path: "line",
      component: () =>
        import(/* webpackChunkName: "line" */ "@/views/chart/line.vue"),
      name: "lineChart",
      meta: { title: "line Chart", icon: "s-goods", noCache: false }
    },
    {
      path: "pie",
      component: () =>
        import(/* webpackChunkName: "pie" */ "@/views/chart/pie.vue"),
      name: "pieChart",
      meta: { title: "pie Chart", icon: "pie-chart", noCache: true }
    }
  ]
};

export default ChartRouter;
