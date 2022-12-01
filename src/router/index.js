import { createRouter, createWebHistory } from 'vue-router';
import BlogView from '@/views/BlogView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'blog',
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:id',
      name: 'post',
      component: () => import('../views/PostView.vue'),
    },
  ],
});

export default router;
