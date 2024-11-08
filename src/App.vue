<template>
  <div>
    <a href="https://dofus.com/fr/" target="_blank">
      <img src="./assets/dofus.webp" alt="Logo Dofus" style="width: 200px; height: auto;" />
    </a>
  </div>
  <router-view />
</template>

<script setup>
import Quiz from './views/Quiz.vue'
import BackButton from './components/BackButton.vue';
import { onMounted } from 'vue';

onMounted(() => {
  const isDevelopment = window.location.hostname === 'localhost';
  const favicon = document.createElement('link');
  console.log(favicon)
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = `${isDevelopment ? '' : '/dofusclass'}/dofus.webp`;
  console.log(favicon.href)
  document.head.appendChild(favicon);
});
</script>
