import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Team from '../views/Team.vue';
import Pokemon from '../views/Pokemon.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/team', component: Team },
  { path: '/team/:id', component: Pokemon },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
