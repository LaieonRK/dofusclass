// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Quiz from '../views/Quiz.vue';
import Result from '../components/Result.vue';

const routes = [
  { path: '/', component: Quiz },
  { path: '/result', component: Result },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
