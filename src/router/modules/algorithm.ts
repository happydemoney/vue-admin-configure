import Layout from "@/layout/index.vue";

const AlgorithmRouter = {
  path: "/algorithm",
  component: Layout,
  redirect: "noRedirect",
  name: "Sort",
  meta: {
    title: "Sort",
    icon: "s-order"
  },
  children: [
    {
      path: "sort",
      component: () =>
        import(/* webpackChunkName: "line" */ "@/views/algorithm/sort/index.vue"),
      name: "algorithmSort",
      meta: { title: "algorithm sort", icon: "s-goods", noCache: false }
    }
  ]
};

export default AlgorithmRouter;
