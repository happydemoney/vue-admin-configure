import Layout from "@/layout/index.vue";

const TableRouter = {
    path: '/table',
    component: Layout,
    redirect: 'noRedirect',
    name: 'table',
    meta: {
      title: 'table',
      icon: 's-grid'
    },
    children: [
        {
            path: 'index',
            component: () => import('@/views/table/index.vue'),
            name: 'tableIndex',
            meta: { title: 'table', icon: 's-grid', noCache: true }
        }
    ]
}

export default TableRouter