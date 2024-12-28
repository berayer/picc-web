import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ENTRANCE',
      redirect: '/login',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/login.vue'),
        },
      ],
    },
  ],
})

export async function setupRouter(app: App) {
  app.use(router)
  // 加载一些插件
  await router.isReady
}

export default router
