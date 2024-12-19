import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GalleryView from '@/views/GalleryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Clint | Home' },
    },
    {
      path: '/projects',
      name: 'projects',
      component: GalleryView,
      meta: { title: 'Clint | Projects' }

      // add error page | not found page
    },
  ],
})

export default router
