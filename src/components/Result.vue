<template>
  <!-- Bouton Retour au quiz en haut à gauche -->
  <button @click="goToQuiz" class="back-to-quiz-button">
    <span class="icon">←</span> Retour au quiz
  </button>

  <div class="result">
    <h2 class="class-result-heading">
      <span class="normal-text">Vous correspondez à la classe</span>
      <span class="bold-text"> {{ classRecommendation }} </span>
      <img :src="logoSource" alt="Logo Classe" class="logo" v-if="logoSource" />
    </h2>

    <div class="responsive-video">
      <!-- Vidéo YouTube -->
      <iframe
        v-if="isYouTubeVideo"
        :src="videoSource"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Groupe de boutons PVP et PVM, avec indication du bouton actif -->
    <div class="button-group">
      <button 
        @click="toggleImage('PVP')" 
        :class="['styled-button', showPVPImage ? 'active-button' : '']"
      >
        PVP
      </button>
      <button 
        @click="toggleImage('PVM')" 
        :class="['styled-button', showPVMImage ? 'active-button' : '']"
      >
        PVM
      </button>
    </div>
    <!-- Conteneur pour le lien des builds et le tableau -->
    <div ref="imageSection">
    <!-- Lien vers les builds PVM (si mode PVM activé) -->
    <div v-if="showPVMImage" class="build-link-container">
      <a :href="pvmBuildUrl" target="_blank" class="build-link">Voir les builds</a>
    </div>

    <!-- Lien vers les builds PVP (si mode PVP activé) -->
    <div v-if="showPVPImage" class="build-link-container">
      <a :href="pvpBuildUrl" target="_blank" class="build-link">Voir les builds</a>
    </div>

    <!-- Conteneur pour le tableau des points positifs et négatifs -->
    <div v-if="showPVPImage || showPVMImage" class="table-container">
      <table class="points-table">
        <thead>
          <tr>
            <th>Points positifs</th>
            <th>Points négatifs</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(point, index) in pointsTable" :key="index">
            <td class="positive">+ {{ point.positif }}</td>
            <td class="negative">- {{ point.negatif }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const classRecommendation = route.query.classRecommendation;

// Définir la source du logo en fonction de la classe recommandée
const logoSource = (() => {
  switch (classRecommendation) {
    case 'Ecaflip':
      return './ecaflip-logo.png';
    case 'Eniripsa':
      return './eniripsa-logo.png';
    case 'Iop':
      return './iop-logo.png';
    case 'Cra':
      return './cra-logo.png';
    case 'Feca':
      return './feca-logo.png';
    case 'Sacrieur':
      return './sacrieur-logo.png';
    case 'Sadida':
      return './sadida-logo.png';
    case 'Osamodas':
      return './osamodas-logo.png';
    case 'Enutrof':
      return './enutrof-logo.png';
    case 'Sram':
      return './sram-logo.png';
    case 'Xelor':
      return './xelor-logo.png';
    case 'Pandawa':
      return './pandawa-logo.png';
    case 'Roublard':
      return './roublard-logo.png';
    case 'Zobal':
      return './zobal-logo.png';
    case 'Steamer':
      return './steamer-logo.png';
    case 'Eliotrope':
      return './eliotrope-logo.png';
    case 'Huppermage':
      return './huppermage-logo.png';
    case 'Ouginak':
      return './ouginak-logo.png';
    case 'Forgelance':
      return './forgelance-logo.png';
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

const isYouTubeVideo = videoSource.includes('youtube-nocookie.com');
const imageSection = ref(null);
const showPVPImage = ref(false);
const showPVMImage = ref(false);

// URL des builds PVM et PVP en fonction de la classe recommandée
const pvmBuildUrl = computed(() => `https://huzounet.fr/equipments?mode=pvm&classe=${classRecommendation.toLowerCase()}`);
const pvpBuildUrl = computed(() => `https://huzounet.fr/equipments?mode=pvp&classe=${classRecommendation.toLowerCase()}`);

// Données des points positifs et négatifs factices (à personnaliser par classe et mode)
const pointsData = {
  Ecaflip: {
    PVP: [
      { positif: "Grande mobilité", negatif: "Peu de sorts de protection" },
      { positif: "Dégâts critiques élevés", negatif: "Dépend des coups critiques" },
      { positif: "Capacité de régénération", negatif: "Vulnérable aux classes à distance" },
      { positif: "Chance de renverser la situation", negatif: "Aléatoire dans certains sorts" }
    ],
    PVM: [
      { positif: "Bon en dégâts monocible", negatif: "Moins efficace en support" },
      { positif: "Peut se soigner", negatif: "Fragile face aux groupes d'ennemis" },
      { positif: "Bonne mobilité", negatif: "Dépend de la chance pour certains sorts" },
      { positif: "Polyvalent en solo", negatif: "Moins efficace en groupe" }
    ]
  },
  Eniripsa: {
    PVP: [
      { positif: "Excellente capacité de soin", negatif: "Dégâts limités" },
      { positif: "Apporte des boosts d'équipe", negatif: "Faible en combat solo" },
      { positif: "Sorts de protection efficaces", negatif: "Vulnérable aux classes de dégâts" },
      { positif: "Polyvalent en support", negatif: "Dépendance élevée aux alliés" }
    ],
    PVM: [
      { positif: "Meilleur soigneur en PvM", negatif: "Dégâts faibles" },
      { positif: "Boosts et protections d'équipe", negatif: "Nécessite un placement précis" },
      { positif: "Peut annuler des effets négatifs", negatif: "Peu de mobilité" },
      { positif: "Essentiel dans les donjons", negatif: "Dépend fortement des alliés" }
    ]
  },
  Iop: {
    PVP: [
      { positif: "Dégâts explosifs en mêlée", negatif: "Vulnérable aux classes à distance" },
      { positif: "Excellents sorts de buff", negatif: "Faible capacité de survie" },
      { positif: "Peut facilement neutraliser des ennemis", negatif: "Mobilité limitée" },
      { positif: "Solide en 1v1", negatif: "Prévisible dans ses combos" }
    ],
    PVM: [
      { positif: "Dégâts massifs", negatif: "Peu de sorts de protection" },
      { positif: "Utile pour éliminer des boss", negatif: "Manque de polyvalence" },
      { positif: "Bon en gestion de zone", negatif: "Vulnérable aux groupes d'ennemis" },
      { positif: "Rapide en combats courts", negatif: "Essoufflement dans les combats longs" }
    ]
  },
  Cra: {
    PVP: [
      { positif: "Excellente portée", negatif: "Fragile en mêlée" },
      { positif: "Bon en contrôle de zone", negatif: "Peu de mobilité" },
      { positif: "Peut ralentir l'ennemi", negatif: "Prévisible" },
      { positif: "Dégâts à distance élevés", negatif: "Dépend des lignes de vue" }
    ],
    PVM: [
      { positif: "Gestion de groupes d'ennemis", negatif: "Peu de survie en solo" },
      { positif: "Utile pour les combats à distance", negatif: "Dépend des placements" },
      { positif: "Réduction de la mobilité ennemie", negatif: "Dépend des PM pour le placement" },
      { positif: "Polyvalent en zones ouvertes", negatif: "Fragile en corps à corps" }
    ]
  },
  Feca: {
    PVP: [
      { positif: "Excellentes protections", negatif: "Dégâts limités" },
      { positif: "Peut immobiliser les ennemis", negatif: "Dépend des alliés" },
      { positif: "Bon contrôle de terrain", negatif: "Lent dans ses attaques" },
      { positif: "Utile en support d'équipe", negatif: "Faible contre les classes de soin" }
    ],
    PVM: [
      { positif: "Parfait pour protéger l'équipe", negatif: "Faible en solo" },
      { positif: "Capacité de tanker les dégâts", negatif: "Dégâts faibles" },
      { positif: "Bon en contrôle de zone", negatif: "Dépend fortement des alliés" },
      { positif: "Excellent en combats prolongés", negatif: "Manque de burst de dégâts" }
    ]
  },
  Sacrieur: {
    PVP: [
      { positif: "Grande résistance", negatif: "Dépend des points de vie" },
      { positif: "Dégâts augmentent avec la douleur", negatif: "Doit s'exposer pour infliger des dégâts" },
      { positif: "Mobilité élevée", negatif: "Peut être surchargé de dégâts" },
      { positif: "Excellent en tanking", negatif: "Dépend des soins d’alliés" }
    ],
    PVM: [
      { positif: "Très bon tank", negatif: "Peu de capacité à soigner" },
      { positif: "Peut gérer plusieurs ennemis", negatif: "Risques élevés en solo" },
      { positif: "Grande durabilité", negatif: "Dépend des soutiens en équipe" },
      { positif: "Dégâts adaptatifs", negatif: "Moins de contrôle de zone" }
    ]
  },
  Sadida: {
    PVP: [
      { positif: "Excellente capacité de contrôle", negatif: "Peu de mobilité" },
      { positif: "Soin et soutien par les invocations", negatif: "Dépend des invocations pour tanking" },
      { positif: "Peut affaiblir les ennemis", negatif: "Vulnérable en combat rapproché" },
      { positif: "Polyvalent avec des zones de poison", negatif: "Fragile contre les dégâts directs" }
    ],
    PVM: [
      { positif: "Peut soigner toute l'équipe", negatif: "Peu de sorts offensifs directs" },
      { positif: "Contrôle de zones avec poison", negatif: "Faible contre les ennemis résistants aux altérations" },
      { positif: "Excellente durabilité avec invocations", negatif: "Dépendance aux invocations pour les dégâts" },
      { positif: "Adaptable aux besoins de l'équipe", negatif: "Difficile à jouer en solo" }
    ]
  },
  Osamodas: {
    PVP: [
      { positif: "Invocation de créatures", negatif: "Peu de défense personnelle" },
      { positif: "Polyvalent en support", negatif: "Dépend des invocations" },
      { positif: "Peut soigner et booster les alliés", negatif: "Fragile en mêlée" },
      { positif: "Adaptable en fonction des besoins", negatif: "Invocations facilement neutralisées" }
    ],
    PVM: [
      { positif: "Excellent en solo grâce aux invocations", negatif: "Peu de sorts offensifs directs" },
      { positif: "Polyvalence avec divers types d'invocations", negatif: "Peu de contrôle sur certaines invocations" },
      { positif: "Utile pour les combats prolongés", negatif: "Dépend des invocations pour tanker" },
      { positif: "Peut soigner et buff", negatif: "Vulnérable en cas de perte d'invocations" }
    ]
  },
  Enutrof: {
    PVP: [
      { positif: "Capacité unique à désenvoûter", negatif: "Faible en survie" },
      { positif: "Peut voler des PM aux ennemis", negatif: "Dépend de la portée" },
      { positif: "Peut piéger et ralentir", negatif: "Faible contre les classes de mêlée" },
      { positif: "Accès aux sorts de retrait", negatif: "Mobilité limitée" }
    ],
    PVM: [
      { positif: "Parfait pour récupérer des trésors", negatif: "Faible puissance offensive" },
      { positif: "Peut ralentir des groupes d'ennemis", negatif: "Dépend des alliés pour le soutien" },
      { positif: "Polyvalent avec les sorts de retrait", negatif: "Fragile sans protection" },
      { positif: "Peut réduire les résistances ennemies", negatif: "Peu de capacité à infliger des dégâts directs" }
    ]
  },
  Sram: {
    PVP: [
      { positif: "Capacité à se rendre invisible", negatif: "Fragile une fois révélé" },
      { positif: "Dégâts explosifs en embuscade", negatif: "Prévisible après invisibilité" },
      { positif: "Peut poser des pièges stratégiques", negatif: "Dépend du placement" },
      { positif: "Excellent pour éliminer en un coup", negatif: "Vulnérable aux sorts de zone" }
    ],
    PVM: [
      { positif: "Idéal pour le contrôle de zone", negatif: "Moins efficace contre les boss" },
      { positif: "Capable d'embuscades furtives", negatif: "Fragile sans invisibilité" },
      { positif: "Peut neutraliser des groupes d'ennemis", negatif: "Doit s'exposer pour poser des pièges" },
      { positif: "Dégâts élevés en solo", negatif: "Faible en équipe" }
    ]
  },
  Xelor: {
    PVP: [
      { positif: "Contrôle du temps et des PM", negatif: "Complexe à maîtriser" },
      { positif: "Peut retirer des PA aux ennemis", negatif: "Vulnérable en mêlée" },
      { positif: "Capable de gros dégâts en un tour", negatif: "Dépend de la synchronisation" },
      { positif: "Mobilité unique avec téléportation", negatif: "Consommation élevée de PA" }
    ],
    PVM: [
      { positif: "Peut désorganiser les ennemis", negatif: "Faible contre les monstres résistants aux PA" },
      { positif: "Utile en soutien pour le contrôle des PA", negatif: "Complexité de placement" },
      { positif: "Dégâts explosifs avec synchronisation", negatif: "Moins efficace sans bonne préparation" },
      { positif: "Bonne capacité à se déplacer", negatif: "Vulnérable aux groupes d'ennemis" }
    ]
  },
  Pandawa: {
    PVP: [
      { positif: "Polyvalence avec placement et dégâts", negatif: "Faible en solo" },
      { positif: "Capacité à porter et déplacer", negatif: "Peu de sorts de protection" },
      { positif: "Dégâts modérés à distance", negatif: "Consommation élevée de PA" },
      { positif: "Accès à plusieurs états", negatif: "Vulnérable aux classes à dégâts massifs" }
    ],
    PVM: [
      { positif: "Idéal pour positionner les ennemis", negatif: "Faible puissance offensive" },
      { positif: "Soutien polyvalent pour les alliés", negatif: "Peu de capacité de survie" },
      { positif: "Bon en contrôle de zone", negatif: "Faible sans soutien" },
      { positif: "Capable de débuff et de protection", negatif: "Dépend du positionnement précis" }
    ]
  },
  Roublard: {
    PVP: [
      { positif: "Dégâts massifs avec bombes", negatif: "Prévisible dans son placement" },
      { positif: "Contrôle de zone efficace", negatif: "Doit attendre pour maximiser les dégâts" },
      { positif: "Peut poser des pièges stratégiques", negatif: "Vulnérable sans préparation" },
      { positif: "Bonne gestion des obstacles", negatif: "Dépend du placement des bombes" }
    ],
    PVM: [
      { positif: "Peut créer des zones de contrôle", negatif: "Moins efficace contre les boss" },
      { positif: "Dégâts massifs avec combinaison de bombes", negatif: "Nécessite une préparation" },
      { positif: "Bonne mobilité en combat", negatif: "Vulnérable sans bombes actives" },
      { positif: "Excellente en gestion de foule", negatif: "Peu de capacité défensive" }
    ]
  },
  Zobal: {
    PVP: [
      { positif: "Capacité de bouclier pour l'équipe", negatif: "Dépend des PA" },
      { positif: "Grande polyvalence avec les masques", negatif: "Difficile à maîtriser" },
      { positif: "Peut jouer agressif ou défensif", negatif: "Vulnérable aux classes à longue portée" },
      { positif: "Bonne résistance globale", negatif: "Moins de dégâts que les classes offensives" }
    ],
    PVM: [
      { positif: "Boucliers pour toute l'équipe", negatif: "Peu de dégâts bruts" },
      { positif: "Polyvalent grâce aux masques", negatif: "Complexité de gameplay" },
      { positif: "Capable de résister aux attaques", negatif: "Dépend des soins d'alliés" },
      { positif: "Excellente option en soutien", negatif: "Moins d'impact en solo" }
    ]
  },
  Steamer: {
    PVP: [
      { positif: "Capacité à invoquer des tourelles", negatif: "Dépendance aux invocations" },
      { positif: "Peut soigner et protéger", negatif: "Peu de mobilité" },
      { positif: "Contrôle de zone avec tourelles", negatif: "Vulnérable sans tourelles" },
      { positif: "Bon en soutien de dégâts", negatif: "Prévisible dans ses mouvements" }
    ],
    PVM: [
      { positif: "Tourelles pour soigner ou attaquer", negatif: "Dépend des placements des tourelles" },
      { positif: "Peut maintenir des soins constants", negatif: "Faible en solo sans tourelles" },
      { positif: "Polyvalent dans les rôles", negatif: "Complexité de gestion des tourelles" },
      { positif: "Excellente capacité de survie", negatif: "Peu de mobilité" }
    ]
  },
  Eliotrope: {
    PVP: [
      { positif: "Grande mobilité avec portails", negatif: "Dépend des placements de portails" },
      { positif: "Dégâts massifs avec placement", negatif: "Faible résistance" },
      { positif: "Peut se téléporter à distance", negatif: "Vulnérable aux classes avec contrôle" },
      { positif: "Polyvalent en attaque et soutien", negatif: "Difficile à maîtriser" }
    ],
    PVM: [
      { positif: "Idéal pour les déplacements rapides", negatif: "Fragile en mêlée" },
      { positif: "Peut soigner et attaquer", negatif: "Complexe en équipe" },
      { positif: "Bonne capacité d'adaptation", negatif: "Dépend fortement des portails" },
      { positif: "Excellente gestion des distances", negatif: "Faible résistance aux dégâts" }
    ]
  },
  Huppermage: {
    PVP: [
      { positif: "Polyvalent avec des éléments", negatif: "Consomme beaucoup de PA" },
      { positif: "Bon en contrôle et dégâts", negatif: "Complexe à jouer" },
      { positif: "Capable de combos puissants", negatif: "Vulnérable sans PA" },
      { positif: "Peut s'adapter aux ennemis", negatif: "Dépend de l'ordre des sorts" }
    ],
    PVM: [
      { positif: "Polyvalent en solo et groupe", negatif: "Dépend de la gestion des éléments" },
      { positif: "Bon en dégâts de zone", negatif: "Complexe à optimiser" },
      { positif: "Adaptable à différentes situations", negatif: "Difficile à jouer pour les débutants" },
      { positif: "Peut infliger plusieurs états", negatif: "Moins efficace sans combo" }
    ]
  },
  Ouginak: {
    PVP: [
      { positif: "Dégâts élevés au corps à corps", negatif: "Peu de sorts à distance" },
      { positif: "Excellente résistance", negatif: "Dépend des PM pour l'approche" },
      { positif: "Peut se soigner en combat", negatif: "Dépend des transformations" },
      { positif: "Bonne capacité à tank", negatif: "Faible face aux attaques magiques" }
    ],
    PVM: [
      { positif: "Polyvalent pour tanker et infliger des dégâts", negatif: "Peu de portée" },
      { positif: "Dégâts élevés contre les boss", negatif: "Doit être au corps à corps" },
      { positif: "Bonne capacité de survie", negatif: "Peu de support pour les alliés" },
      { positif: "Peut régénérer en combat", negatif: "Dépend des transformations" }
    ]
  },
  Forgelance: {
    PVP: [
      { positif: "Excellent en combat rapproché", negatif: "Peu de mobilité" },
      { positif: "Bonne capacité de tank", negatif: "Vulnérable aux classes magiques" },
      { positif: "Dégâts massifs en mêlée", negatif: "Prévisible dans ses combos" },
      { positif: "Peut infliger de lourds dégâts", negatif: "Consomme beaucoup de PA" }
    ],
    PVM: [
      { positif: "Idéal pour encaisser les attaques", negatif: "Peu de portée" },
      { positif: "Bonne option pour tanker en équipe", negatif: "Peu de support" },
      { positif: "Peut éliminer rapidement les ennemis", negatif: "Dépend de la position" },
      { positif: "Polyvalent en équipe", negatif: "Peu de mobilité" }
    ]
  }
  // Ajouter d'autres classes selon le même modèle
};

// Tableau dynamique pour afficher les points selon le mode (PVP/PVM) et la classe
const pointsTable = computed(() => {
  return pointsData[classRecommendation]?.[showPVPImage.value ? 'PVP' : 'PVM'] || [];
});

// Fonction pour gérer l'affichage des sections PVP et PVM
const toggleImage = (type) => {
  showPVPImage.value = type === 'PVP';
  showPVMImage.value = type === 'PVM';

  nextTick(() => {
    if (imageSection.value) {
      imageSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
};

// Retour au quiz
const goToQuiz = () => {
  router.push('/');
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
  gap: 0.5rem;
  font-size: 1.5em;
  margin-bottom: 1rem;
}

.normal-text {
  font-weight: normal;
}

.bold-text {
  font-weight: bold;
  margin-left: 0.5rem;
}

.logo {
  width: 40px;
  height: auto;
  margin-left: 0.5rem;
}

.responsive-video {
  position: relative;
  width: 640px; /* Largeur fixe */
  height: 360px; /* Hauteur fixe pour un ratio 16:9 */
  margin-top: 1rem;
}

.responsive-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.button-group {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.styled-button {
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  border: 2px solid transparent; /* Bordure transparente par défaut */
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.styled-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.active-button {
  border-color: white; /* Bordure blanche pour le bouton actif */
}

.build-link-container {
  margin-top: 1rem;
  text-align: center;
  font-style: italic;
}

.build-link {
  color: #a63a3a;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.build-link:hover {
  color: #ff6666;
}

.table-container {
  margin-top: 1rem;
  overflow: hidden;
  border-radius: 8px;
}

.points-table {
  width: 100%;
  border-collapse: collapse;
}

.points-table th,
.points-table td {
  padding: 12px;
}

.points-table th {
  background-color: #333333;
  color: #ffffff;
  font-weight: bold;
}

.points-table tr:nth-child(even) {
  background-color: #3a3a3a;
}

.points-table tr:nth-child(odd) {
  background-color: #2b2b2b;
}

.points-table .positive {
  color: #28a745; /* Vert pour les points positifs */
  text-align: left;
}

.points-table .negative {
  color: #dc3545; /* Rouge pour les points négatifs */
  text-align: left;
}

.back-to-quiz-button {
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  background: #800020;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
}

.back-to-quiz-button:hover {
  background: #a52a2a;
}
</style>
