import Layout from "@/layout/index.vue";

const FormRouter = {
  path: "/form",
  component: Layout,
  redirect: "noRedirect",
  name: "form",
  meta: {
    title: "form",
    icon: "s-grid"
  },
  children: [
    {
      path: "index",
      component: () => import("@/views/form/index.vue"),
      name: "tableIndex",
      meta: { title: "form", icon: "s-grid", noCache: true }
    }
  ]
};

export default FormRouter;
