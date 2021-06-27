import Layout from "@/layout/index.vue";

const TabsRouter = {
  path: "/tabs-drag",
  component: Layout,
  redirect: "noRedirect",
  name: "tabs",
  meta: {
    title: "tabs-drag",
    icon: "s-grid"
  },
  children: [
    {
      path: "index",
      component: () => import("@/views/tabsDrag/index.vue"),
      name: "tabsIndex",
      meta: { title: "tabs", icon: "s-grid", noCache: true }
    }
  ]
};

export default TabsRouter;
