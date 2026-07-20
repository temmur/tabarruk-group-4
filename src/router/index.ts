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
            path: '/news/:slug',
            name: 'news-single',
            component: ()=> import('@/views/PNewsSingle.vue')
        },
        {
        
            path: '/news',
            name: 'News',
            component: ()=> import('@/views/PNews.vue')
        },
        {
            path: '/country/:route',
            name: 'country-single',
            component: ()=> import('@/views/Countries/PSingle.vue')
        },
        {

            path: '/news/:id',
            name: 'news-single',
            component: () => import('@/views/PNewsSingle.vue')
        },
        {
            path: '/playground',
            name: 'playground',
            component: ()=> import('@/views/PPLaygraund.vue')
        },
        {
            path: '/sightList/:route',
            name: 'sights-all',
            component: () => import('@/views/Sights/PSights.vue')
        },
        {
           path: '/sight/:country/:id',
           name: 'sight-single',
           component: () => import('@/views/Sights/PSightsSingle.vue')
        },
            path: '/faq',
            name: 'faq',
            component: ()=> import('@/views/PFaq.vue')
        }
    ]
   },
  ],
})


export default router