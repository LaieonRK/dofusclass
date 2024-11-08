<template>
  <div>
    <div>
      <a href="https://dofus.com/fr/" target="_blank">
        <img src="./assets/dofus.webp" alt="Logo Dofus" style="width: 200px; height: auto;" />
      </a>
    </div>
  <router-view />
  </div>
</template>

<script setup>
import Quiz from './views/Quiz.vue'
import BackButton from './components/BackButton.vue';
</script>
