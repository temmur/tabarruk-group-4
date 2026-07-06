import { createRouter, createWebHistory } from 'vue-router'
import PAbout from '@/views/PAbout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
   {
    path: '/',
    name: 'LayoutDefault', 
    component: ()=> import('@/layout/LDefault.vue'),
    children: [
        {
            path: '/',
            name: 'home',
            component: ()=> import('@/views/PHome.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: PAbout
        },
        {
            path: '/news',
            name: 'News',
            component: ()=> import('@/views/PNews.vue')
        }
    ]
   }
  ],
})

export default router