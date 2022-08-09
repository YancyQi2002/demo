// @ts-ignore
const routes: RouteRecordRaw[] = []

const modules = import.meta.globEager('./module/*.ts')

for (const path in modules) {
  // @ts-ignore
  routes.push(...modules[path].default)
}

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router