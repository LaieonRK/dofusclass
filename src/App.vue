<template>
  <div>
    <div>
      <a href="https://dofus.com/fr/" target="_blank">
        <img src="./assets/dofus.webp" alt="Logo Dofus" style="width: 200px; height: auto;" />
      </a>
      <!-- Titre principal -->
      <h1 class="main-title">Quelle classe est faite pour vous ?</h1><br>
    </div>
  <router-view />
  </div>
</template>

<script setup>
import Quiz from './views/Quiz.vue'
import BackButton from './components/BackButton.vue';
</script>

<style scoped>
.main-title {
  font-size: 2rem;
  font-weight: bold;
  color: #9DC843; /* Couleur dorée pour se marier avec le thème Dofus */
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Ombre pour ajouter du relief */
  -webkit-text-stroke: 0.5px black; /* Contour noir autour des lettres */
}
</style>
