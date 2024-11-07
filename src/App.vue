<template>
  <div>
    <a href="https://dofus.com/fr/" target="_blank">
      <img src="./assets/dofus.webp" alt="Logo Dofus" style="width: 350px; height: auto;" />
    </a>
  </div>
  <router-view />
</template>

<script setup>
import Quiz from './views/Quiz.vue'
import BackButton from './components/BackButton.vue';
</script>
