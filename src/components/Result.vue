<template>
  <div class="page-container">
    <!-- Contenu principal de la page -->
    <div class="result">
      <button @click="goToQuiz" class="back-to-quiz-button">
        <span class="icon">←</span> Retour au quiz
      </button>

      <h2 class="class-result-heading">
        <span class="normal-text">Vous correspondez à la classe</span>
        <span class="bold-text"> {{ classRecommendation }} </span>
        <img :src="logoSource" alt="Logo Classe" class="logo" v-if="logoSource" />
      </h2>

      <div class="responsive-video">
        <iframe
          v-if="isYouTubeVideo"
          :src="videoSource"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

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

      <div ref="imageSection">
        <div v-if="showPVMImage" class="build-link-container">
          <a :href="pvmBuildUrl" target="_blank" class="build-link">Voir les builds</a>
        </div>

        <div v-if="showPVPImage" class="build-link-container">
          <a :href="pvpBuildUrl" target="_blank" class="build-link">Voir les builds</a>
        </div>

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
          <div class="info-container">
            <!-- Texte dynamique pour l'auteur en fonction du mode sélectionné -->
            <div class="joueur-info">
              {{ authorText }}
            </div>
            <!-- Affichage de la version actuelle de Dofus -->
            <div class="version-info">
              Patch : 2.73.3.12
            </div>
          </div>
        </div>
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
      { positif: "Très fort en 1 vs 1", negatif: "Gameplay répétitif en monoélément" },
      { positif: "Très fort en 3 vs 3", negatif: "Mauvais en 1 vs 1" },
      { positif: "Grosse capacité à soin", negatif: "Classe peu mobile" },
      { positif: "Beaucoup de mobilité", negatif: "" }
    ],
    PVM: [
      { positif: "Bonne polyvalence", negatif: "" },
      { positif: "Capacités de soin", negatif: "" },
      { positif: "Dégâts élevés", negatif: "" }
    ]
  },
  Eniripsa: {
    PVP: [
      { positif: "Très fort en 3 vs 3", negatif: "Mauvais en 1 vs 1" },
      { positif: "Teamplay boost", negatif: "Classe peu mobile" },
      { positif: "Grosse capacité à soin", negatif: "Peu de mobilité" },
      { positif: "Peut debuff", negatif: "" }
    ],
    PVM: [
      { positif: "Très bons soins", negatif: "Faibles dégâts" },
      { positif: "Utile dans la plupart des équipes PVM", negatif: "Dépendance aux alliés pour être efficace" }
    ]
  },
  Iop: {
    PVP: [
      { positif: "Très fort en 1 vs 1", negatif: "On s’attend à ce qu’il tape + fort" },
      { positif: "Très fort en 3 vs 3", negatif: "Limité à distance" },
      { positif: "Possibilité d'éroder l'ennemi", negatif: "" },
      { positif: "Grande survivabilité avec ses shields", negatif: "" }
    ],
    PVM: [
      { positif: "Beaucoup de dégâts en mêlée", negatif: "Faible portée" },
      { positif: "Combats rapides", negatif: "Manque de soin" },
      { positif: "Capacités à boost l'équipe", negatif: "Gameplay répétitif" }
    ]
  },
  Cra: {
    PVP: [
      { positif: "Fort en 1 vs 1", negatif: "Manque de protection" },
      { positif: "D’énormes dégâts", negatif: "Faible en mêlée" },
      { positif: "Grosse portée", negatif: "Dépendance à la distance" },
      { positif: "Capacité de retrait PM et de repousser", negatif: "" }
    ],
    PVM: [
      { positif: "Excellente portée", negatif: "Fragile en mêlée" },
      { positif: "Bon pour le contrôle de la carte", negatif: "Gameplay répétitif" },
      { positif: "Capacités de retrait de PM", negatif: "" }
    ]
  },
  Feca: {
    PVP: [
      { positif: "Très fort en 3 vs 3", negatif: "Très mauvais en 1 vs 1" },
      { positif: "Capacité à entraver", negatif: "Manque d'érosion" },
      { positif: "Beaucoup de sorts de protection", negatif: "Manque de dégâts" }
    ],
    PVM: [
      { positif: "Excellente protection", negatif: "Dépendant des buffs" },
      { positif: "Excellentes résistances", negatif: "Gameplay répétitif" },
      { positif: "Bon pour les combats prolongés", negatif: "Manque d'érosion" },
      { positif: "Utile dans toutes les équipes PVM", negatif: "" }
    ]
  },
  Sacrieur: {
    PVP: [
      { positif: "Très fort en 1 vs 1", negatif: "Attention aux dommages de poussée" },
      { positif: "Très fort en 3 vs 3", negatif: "Manque de portée" },
      { positif: "Le système de Berserk qui permet de tank en tapant fort", negatif: "Vulnérable à l'érosion" },
      { positif: "Grande survie", negatif: "" }
    ],
    PVM: [
      { positif: "Excellent tankiness", negatif: "Dépendant des soins extérieurs ou du vol de vie pour durer" },
      { positif: "Bon en positionnement", negatif: "Se met en danger en mêlée en PVM" },
      { positif: "Grande capacité de survie grâce au vol de vie", negatif: "" }
    ]
  },
  Sadida: {
    PVP: [
      { positif: "Très fort en 1 vs 1", negatif: "Difficile à jouer" },
      { positif: "Très fort en 3 vs 3", negatif: "Gameplay lent" },
      { positif: "Excellent retrait PM et PA", negatif: "Faibles dégâts directs" },
      { positif: "Invocation qui peuvent contrôler la map", negatif: "" }
    ],
    PVM: [
      { positif: "Invocations utiles", negatif: "Gameplay lent" },
      { positif: "Bon en retrait PM", negatif: "Dépendant de ses invocations" },
      { positif: "Capacités de soin", negatif: "Manque de flexibilité en jouant avec des alliés rapides" },
      { positif: "Capacités de poison", negatif: "" }
    ]
  },
  Osamodas: {
    PVP: [
      { positif: "Fort en 1 vs 1", negatif: "Difficile à jouer" },
      { positif: "Fort en 3 vs 3", negatif: "Gestion complexe des invocations" },
      { positif: "Grande variété de gameplay", negatif: "Vulnérable aux attaques de zone" }
    ],
    PVM: [
      { positif: "Invocations polyvalentes", negatif: "Gestion des invocations complexe" },
      { positif: "Très bon en soutien avec des soins et buffs", negatif: "Peut saturer la carte" },
      { positif: "Flexible", negatif: "Gameplay lent" }
    ]
  },
  Enutrof: {
    PVP: [
      { positif: "Fort en 1 vs 1", negatif: "Manque d'érosion" },
      { positif: "Fort en 3 vs 3", negatif: "Faible en mêlée" },
      { positif: "Bon pour le retrait PM", negatif: "" }
    ],
    PVM: [
      { positif: "Excellente portée", negatif: "Dépend de la distance" },
      { positif: "Capacités de retrait PM", negatif: "" }
    ]
  },
  Sram: {
    PVP: [
      { positif: "Très fort en 1 vs 1", negatif: "Mauvais en 3 vs 3" },
      { positif: "Capacité à éroder", negatif: "Manque de protection" },
      { positif: "Invisibilité", negatif: "Fragile une fois sorti de l'invisibilité" },
      { positif: "Possibilité de one shot avec les réseaux de pièges", negatif: "" }
    ],
    PVM: [
      { positif: "Bon pour le positionnement des ennemis", negatif: "Difficile à jouer pour les pièges" },
      { positif: "Possibilité de one shot avec les réseaux de pièges", negatif: "Dépendant de la tactique du combat et du placement" },
      { positif: "Dégâts élevés en furtivité", negatif: "" },
      { positif: "Efficace en solo", negatif: "" }
    ]
  },
  Xelor: {
    PVP: [
      { positif: "Très fort en 1 vs 1", negatif: "Difficile à jouer" },
      { positif: "Beaucoup de mobilité", negatif: "Manque de protection" },
      { positif: "Capacité de placement", negatif: "" },
      { positif: "Très bon dégâts", negatif: "" }
    ],
    PVM: [
      { positif: "Très bon en gestion du placement des ennemis", negatif: "Complexe à maîtriser" },
      { positif: "", negatif: "Dépendant de PA pour être efficace" },
      { positif: "", negatif: "Manque de vol de vie" }
    ]
  },
  Pandawa: {
    PVP: [
      { positif: "Fort en 1 vs 1", negatif: "Manque d'érosion" },
      { positif: "Correct en 3 vs 3", negatif: "Dégâts modérés" },
      { positif: "Beaucoup de mobilité", negatif: "" },
      { positif: "Capacité de placement", negatif: "" },
      { positif: "Bon tank", negatif: "" }
    ],
    PVM: [
      { positif: "Capacités de tanking", negatif: "Dépendant de la maîtrise des sorts de soutien" },
      { positif: "Capacités de placement", negatif: "Dégâts modérés" },
      { positif: "Très mobile", negatif: "Complexe à joeur efficacement" },
      { positif: "Excellent contrôle de carte", negatif: "Manque d'érosion" }
    ]
  },
  Roublard: {
    PVP: [
      { positif: "Très fort en 1 vs 1", negatif: "Difficile à jouer" },
      { positif: "D’énormes dégâts si setup", negatif: "Moyen en 3 vs 3" },
      { positif: "Dégâts en AoE", negatif: "" }
    ],
    PVM: [
      { positif: "Gros dégâts avec les bombes", negatif: "Dépendant de la planification et du positionnement" },
      { positif: "Excellent en placement stratégique", negatif: "Inefficace si les bombes sont détruites" }
    ]
  },
  Zobal: {
    PVP: [
      { positif: "Très fort en 3 vs 3", negatif: "Mauvais en 1 vs 1" },
      { positif: "Sorts de protection en AoE", negatif: "Dégâts modérés" },
      { positif: "Beaucoup de mobilité", negatif: "" },
      { positif: "Bon en mêlée", negatif: "" }
    ],
    PVM: [
      { positif: "Bon pour les boucliers et protections", negatif: "Complexe à jouer" },
      { positif: "Polyvalent en PVM", negatif: "Dépendant des masques pour le style de jeu" },
      { positif: "Bon potentiel en mêlée", negatif: "Dégâts modérés" }
    ]
  },
  Steamer: {
    PVP: [
      { positif: "Très fort en 1 vs 1", negatif: "Difficile à jouer" },
      { positif: "Très bon en 3 vs 3", negatif: "Dépendance aux tourelles" },
      { positif: "Beaucoup de sorts de protection", negatif: "" },
      { positif: "Grosse capacité à soin", negatif: "" },
      { positif: "Très polyvalent", negatif: "" }
    ],
    PVM: [
      { positif: "Polyvalent avec les tourelles", negatif: "Complexe à maîtriser" },
      { positif: "Bon en soutien de dégâts et de soin", negatif: "Dépendant des tourelles" },
      { positif: "Utile pour le contrôle de carte", negatif: "Gameplay statique" },
      { positif: "De bons dégâts à distance", negatif: "" }
    ]
  },
  Eliotrope: {
    PVP: [
      { positif: "Beaucoup de mobilité", negatif: "Difficile à jouer" },
      { positif: "Capacité de placement", negatif: "Moyen en PvP dans la meta actuelle" },
      { positif: "Dégâts élevés avec les portails", negatif: "" }
    ],
    PVM: [
      { positif: "Excellent pour la mobilité de l'équipe", negatif: "Complexe à jouer" },
      { positif: "Dégâts massifs pour lui et ses alliés grâce aux portails", negatif: "Les portails peuvent être utilisés par les ennemis si mal placés" }
    ]
  },
  Huppermage: {
    PVP: [
      { positif: "Beaucoup de mobilité", negatif: "Difficile à jouer" },
      { positif: "Très polyvalent", negatif: "" },
      { positif: "Bon mix dégâts à distance et mêlée", negatif: "" },
      { positif: "Gameplay toujours unique", negatif: "" }
    ],
    PVM: [
      { positif: "Très polyvalent avec des sorts de plusieurs éléments", negatif: "Complexe à jouer" },
      { positif: "Dégâts élevés", negatif: "" },
      { positif: "Bon contrôle de carte", negatif: "" },
      { positif: "Peut vulné", negatif: "" }
    ]
  },
  Ouginak: {
    PVP: [
      { positif: "Très fort en 1 vs 1", negatif: "Toujours dans la mêlée" },
      { positif: "Très fort en 3 vs 3", negatif: "Dépendant du vol de vie" },
      { positif: "Excellente capacité de survie", negatif: "Faible à distance" },
      { positif: "Bon en mêlée", negatif: "" }
    ],
    PVM: [
      { positif: "Excellente tankiness", negatif: "Manque de portée" },
      { positif: "Bon en dégâts de mêlée", negatif: "Vulnérabilité à distance" },
      { positif: "Survie grâce au vol de vie", negatif: "" }
    ]
  },
  Forgelance: {
    PVP: [
      { positif: "Très fort en 1 vs 1", negatif: "Manque de dégâts en monocible" },
      { positif: "Très fort en 3 vs 3", negatif: "" },
      { positif: "Bon tank", negatif: "" },
      { positif: "Polyvalent en mêlée et distance", negatif: "" },
      { positif: "Sorts en AOE permettant de clean des invocations", negatif: "" }
    ],
    PVM: [
      { positif: "Polyvalence entre mêlée et distance", negatif: "Pas assez de dégâts monocibles" },
      { positif: "Beaucoup de sorts en AoE", negatif: "" }
    ]
  }
  // Ajouter d'autres classes selon le même modèle
};

// Propriété calculée pour le texte d'auteur en fonction du mode sélectionné
const authorText = computed(() => (showPVPImage.value ? "Défini par Sapeuh" : "Défini par Laieon"));

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
/* Structure globale pour que le footer soit en bas */
.page-container {
  display: flex;
  flex-direction: column;
}

.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-bottom: 3rem;
  flex: 1; /* Prend toute la hauteur disponible, pousse le footer vers le bas */
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
  left: 35px;
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

.info-container {
  display: flex;
  justify-content: space-between; /* Espace entre les deux éléments */
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #ffffff;
  font-style: italic;
}
</style>
