import { createRouter, createWebHistory } from 'vue-router';

import ProjectIndex from './pages/projects/Index.vue';
import ProjectShow from './pages/projects/Show.vue';
import Home from './pages/Home.vue';
import ContactPage from './pages/Contact.vue';
import NotFound from './pages/404.vue';

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
      path: '/projects/:slug',
      name: 'projects.show',
      props: true,
      component: ProjectShow,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
});

export { router };
