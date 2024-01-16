import { createRouter, createWebHistory } from 'vue-router';

import ProjectIndex from './pages/projects/Index.vue';
import Home from './pages/projects/Home.vue';
import ContactPage from './pages/projects/Contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectIndex,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
  ],
});

export { router };
