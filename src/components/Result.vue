<template>
  <div class="result">
    <h2 class="class-result-heading">
      <span class="normal-text">Vous correspondez à la classe</span>
      <span class="bold-text"> {{ classRecommendation }} </span>
      <img :src="logoSource" alt="Logo Classe" class="logo" v-if="logoSource" />
    </h2>

    <!-- Conteneur responsif pour la vidéo -->
    <div class="responsive-video">
      <iframe
        v-if="isYouTubeVideo"
        :src="videoSource"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <video v-else autoplay controls :src="videoSource"></video>
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
      return '/dofusclass/src/assets/ecaflip-logo.png';
    case 'Eniripsa':
      return '/dofusclass/src/assets/eniripsa-logo.png';
    case 'Iop':
      return '/dofusclass/src/assets/iop-logo.png';
    case 'Cra':
      return '/dofusclass/src/assets/cra-logo.png';
    case 'Feca':
      return '/dofusclass/src/assets/feca-logo.png';
    case 'Sacrieur':
      return '/dofusclass/src/assets/sacrieur-logo.png';
    case 'Sadida':
      return '/dofusclass/src/assets/sadida-logo.png';
    case 'Osamodas':
      return '/dofusclass/src/assets/osamodas-logo.png';
    case 'Enutrof':
      return '/dofusclass/src/assets/enutrof-logo.png';
    case 'Sram':
      return '/dofusclass/src/assets/sram-logo.png';
    case 'Xelor':
      return '/dofusclass/src/assets/xelor-logo.png';
    case 'Pandawa':
      return '/dofusclass/src/assets/pandawa-logo.png';
    case 'Roublard':
      return '/dofusclass/src/assets/roublard-logo.png';
    case 'Zobal':
      return '/dofusclass/src/assets/zobal-logo.png';
    case 'Steamer':
      return '/dofusclass/src/assets/steamer-logo.png';
    case 'Eliotrope':
      return '/dofusclass/src/assets/eliotrope-logo.png';
    case 'Huppermage':
      return '/dofusclass/src/assets/huppermage-logo.png';
    case 'Ouginak':
      return '/dofusclass/src/assets/ouginak-logo.png';
    case 'Forgelance':
      return '/dofusclass/src/assets/forgelance-logo.png';
    default:
      return '';
  }
})();

// Définir la source de la vidéo en fonction de la classe recommandée
const videoSource = (() => {
  switch (classRecommendation) {
    case 'Ecaflip':
      return 'https://www.youtube-nocookie.com/embed/JAhil1C--8w?autoplay=1&vq=hd1080';
    case 'Eniripsa':
      return 'https://www.youtube-nocookie.com/embed/RL28MJKZnZQ?autoplay=1&vq=hd1080';
    case 'Iop':
      return 'https://www.youtube-nocookie.com/embed/EaOZNYoZBms?autoplay=1&vq=hd1080';
    case 'Cra':
      return 'https://www.youtube-nocookie.com/embed/SXwZCdTAfWc?autoplay=1&vq=hd1080';
    case 'Feca':
      return 'https://www.youtube-nocookie.com/embed/Qbdjrv5lp58?autoplay=1&vq=hd1080';
    case 'Sacrieur':
      return 'https://www.youtube-nocookie.com/embed/D4MS1VNDyz4?autoplay=1&vq=hd1080';
    case 'Sadida':
      return 'https://www.youtube-nocookie.com/embed/5CrLx8uHN-U?autoplay=1&vq=hd1080';
    case 'Osamodas':
      return 'https://www.youtube-nocookie.com/embed/dRfW1YQGLW4?autoplay=1&vq=hd1080';
    case 'Enutrof':
      return 'https://www.youtube-nocookie.com/embed/a8TLMsyA89o?autoplay=1&vq=hd1080';
    case 'Sram':
      return 'https://www.youtube-nocookie.com/embed/Lx4fUSRgqAY?autoplay=1&vq=hd1080';
    case 'Xelor':
      return 'https://www.youtube-nocookie.com/embed/hfqXC2wmGes?autoplay=1&vq=hd1080';
    case 'Pandawa':
      return 'https://www.youtube-nocookie.com/embed/hhVoMRdF3qg?autoplay=1&vq=hd1080';
    case 'Roublard':
      return 'https://www.youtube-nocookie.com/embed/GtguUNDxl9Q?autoplay=1&vq=hd1080';
    case 'Zobal':
      return 'https://www.youtube-nocookie.com/embed/HTG0ubzSYpo?autoplay=1&vq=hd1080';
    case 'Steamer':
      return 'https://www.youtube-nocookie.com/embed/NilZno8Nycw?autoplay=1&vq=hd1080';
    case 'Eliotrope':
      return 'https://www.youtube-nocookie.com/embed/qXDhqKxb2Gw?autoplay=1&vq=hd1080';
    case 'Huppermage':
      return 'https://www.youtube-nocookie.com/embed/0PMLM_Noc7A?autoplay=1&vq=hd1080';
    case 'Ouginak':
      return 'https://www.youtube-nocookie.com/embed/vL-hKRlyPUg?autoplay=1&vq=hd1080';
    case 'Forgelance':
      return 'https://www.youtube-nocookie.com/embed/U7M3NnH8_og?autoplay=1&vq=hd1080';
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
  align-items: center;
  text-align: center;
  width: 100%;
}

.class-result-heading {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* Espace entre le texte et le logo */
  font-size: 1.5em;
  margin-bottom: 1rem;
}

.normal-text {
  font-weight: normal;
}

.bold-text {
  font-weight: bold;
}

.logo {
  width: 40px;
  height: auto;
}

.responsive-video {
  position: relative;
  width: 100%;
  max-width: 800px;
  padding-top: 56.25%; /* Ratio 16:9 */
  margin-top: 1rem;
}

.responsive-video iframe,
.responsive-video video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

</style>
