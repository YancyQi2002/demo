import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        name: 'Index',
        path: '/',
        component: () => import('@/pages/Index.vue'),
    }
]

export default routes