<template>
  <div class="test">
    <a href="https://dofus.com/fr/" target="_blank">
      <img src="./assets/dofus.webp" alt="Logo Dofus" style="width: 200px; height: auto;" />
    </a>
    <!-- Titre principal -->
    <h1 class="main-title">Quelle classe est faite pour vous ?</h1><br>
    <router-view />
  </div>
  <!-- Footer -->
    <footer class="footer">
      <p>COPYRIGHT © 2024 Dofusclass. Tous droits réservés</p>
      DOFUS est un MMORPG édité par Ankama. | « Dofusclass.com » et ses services dérivés sont des sites non-officiels sans aucun lien avec Ankama.
    </footer>
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

.footer {
  background-color: #000000;
  width: 100vw;
  padding-top: 2px;
  padding-bottom: 25px;
}

.test {
  min-height: 100vh; 
  margin: 0 auto;
  width: 100vw;
}
</style>
