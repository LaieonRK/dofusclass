<template>
  <div class="result">
    <h2>
      <span class="normal-text">Vous correspondez à la classe</span>&nbsp;
      <span class="bold-text"> {{ classRecommendation }} </span>
      <!-- Affichage dynamique du logo -->
      <img :src="logoSource" alt="Logo Classe" class="logo" v-if="logoSource" />
    </h2>

    <!-- Affichage dynamique de la vidéo -->
    <div>
      <iframe
        v-if="isYouTubeVideo"
        :src="videoSource"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video"
      ></iframe>
      <video v-else autoplay controls :src="videoSource" class="video"></video>
    </div>

    <br>
    <button @click="goToQuiz" class="back-button">
      <span class="icon">←</span> Retour au quiz
    </button>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// Récupérer classRecommendation à partir de route.query
const classRecommendation = route.query.classRecommendation;

// Définir la source du logo en fonction de la classe recommandée
const logoSource = (() => {
  switch (classRecommendation) {
    case 'Ecaflip':
      return '/images/ecaflip-logo.png';
    case 'Eniripsa':
      return '/images/eniripsa-logo.png';
    case 'Iop':
      return '/images/iop-logo.png';
    case 'Cra':
      return '/images/cra-logo.png';
    case 'Feca':
      return '/images/feca-logo.png';
    case 'Sacrieur':
      return '/images/sacrieur-logo.png';
    case 'Sadida':
      return '/images/sadida-logo.png';
    case 'Osamodas':
      return '/images/osamodas-logo.png';
    case 'Enutrof':
      return '/images/enutrof-logo.png';
    case 'Sram':
      return '/images/sram-logo.png';
    case 'Xelor':
      return '/images/xelor-logo.png';
    case 'Pandawa':
      return '/images/pandawa-logo.png';
    case 'Roublard':
      return '/images/roublard-logo.png';
    case 'Zobal':
      return '/images/zobal-logo.png';
    case 'Steamer':
      return '/images/steamer-logo.png';
    case 'Eliotrope':
      return '/images/eliotrope-logo.png';
    case 'Huppermage':
      return '/images/huppermage-logo.png';
    case 'Ouginak':
      return '/images/ouginak-logo.png';
    case 'Forgelance':
      return '/images/forgelance-logo.png';
    default:
      return '';
  }
})();

// Définir la source de la vidéo en fonction de la classe recommandée
const videoSource = (() => {
  switch (classRecommendation) {
    case 'Ecaflip':
      return 'https://www.youtube-nocookie.com/embed/JAhil1C--8w?autoplay=1';
    case 'Eniripsa':
      return 'https://www.youtube-nocookie.com/embed/RL28MJKZnZQ?autoplay=1';
    case 'Iop':
      return 'https://www.youtube-nocookie.com/embed/EaOZNYoZBms?autoplay=1';
    case 'Cra':
      return 'https://www.youtube-nocookie.com/embed/SXwZCdTAfWc?autoplay=1';
    case 'Feca':
      return 'https://www.youtube-nocookie.com/embed/Qbdjrv5lp58?autoplay=1';
    case 'Sacrieur':
      return 'https://www.youtube-nocookie.com/embed/D4MS1VNDyz4?autoplay=1';
    case 'Sadida':
      return 'https://www.youtube-nocookie.com/embed/5CrLx8uHN-U?autoplay=1';
    case 'Osamodas':
      return 'https://www.youtube-nocookie.com/embed/dRfW1YQGLW4?autoplay=1';
    case 'Enutrof':
      return 'https://www.youtube-nocookie.com/embed/a8TLMsyA89o?autoplay=1';
    case 'Sram':
      return 'https://www.youtube-nocookie.com/embed/Lx4fUSRgqAY?autoplay=1';
    case 'Xelor':
      return 'https://www.youtube-nocookie.com/embed/hfqXC2wmGes?autoplay=1';
    case 'Pandawa':
      return 'https://www.youtube-nocookie.com/embed/hhVoMRdF3qg?autoplay=1';
    case 'Roublard':
      return 'https://www.youtube-nocookie.com/embed/GtguUNDxl9Q?autoplay=1';
    case 'Zobal':
      return 'https://www.youtube-nocookie.com/embed/HTG0ubzSYpo?autoplay=1';
    case 'Steamer':
      return 'https://www.youtube-nocookie.com/embed/NilZno8Nycw?autoplay=1';
    case 'Eliotrope':
      return 'https://www.youtube-nocookie.com/embed/qXDhqKxb2Gw?autoplay=1';
    case 'Huppermage':
      return 'https://www.youtube-nocookie.com/embed/0PMLM_Noc7A?autoplay=1';
    case 'Ouginak':
      return 'https://www.youtube-nocookie.com/embed/vL-hKRlyPUg?autoplay=1';
    case 'Forgelance':
      return 'https://www.youtube-nocookie.com/embed/U7M3NnH8_og?autoplay=1';
    default:
      return '';
  }
})();

// Détecter si la vidéo est une vidéo YouTube
const isYouTubeVideo = videoSource.includes('youtube-nocookie.com');

const goToQuiz = () => {
  router.push('/'); // Rediriger vers la page du quiz directement
};
</script>

<style scoped>
.result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%; /* Assure que le conteneur prend toute la largeur */
}

.result h2 {
  display: flex;
  align-items: center;
}

.logo {
  width: 40px;
  height: auto;
  margin: 0 10px;
}

.video {
  width: 60vw; /* Prend toute la largeur de la fenêtre */
  height: 20vw; /* Hauteur proportionnelle pour un ratio 16:9 */
  max-width: 800px; /* Empêche de dépasser les bords */
  margin-top: 1rem;
}

.normal-text {
  font-weight: normal;
}

.bold-text {
  font-weight: bold;
}
</style>
