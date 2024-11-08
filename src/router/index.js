// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Quiz from '../views/Quiz.vue';
import Result from '../components/Result.vue';

const routes = [
  { path: '/dofusclass', component: Quiz },
  { path: '/dofusclass/result', component: Result },
];

const router = createRouter({
  history: createWebHistory('/dofusclass/'), // Spécifiez le sous-répertoire ici
  routes,
});

export default router;
