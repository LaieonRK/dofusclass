
<template>
    <div class="quiz">
      <div class="progress-indicator">
        Question {{ currentQuestionIndex + 1 }} sur {{ questions.length }}
      </div>
      <Question
        v-if="currentQuestion && currentQuestionIndex < questions.length"
        :questionText="currentQuestion.text"
        :options="currentQuestion.options"
        @answer-selected="handleAnswer"
      />
    </div>
</template>

<script>
import Question from "../components/Question.vue";

export default {
  components: { Question },
  data() {
    return {
      currentQuestionIndex: 0,
      answers: [],
      questions: [
        {
          text: "Un groupe d'ennemis s'approche rapidement. Quelle est votre priorité ?",
          options: [
            { text: "Infliger des dégâts pour les éliminer rapidement.", value: "damage" },
            { text: "Poser des protections pour réduire les dégâts subis.", value: "protection" },
            { text: "Utiliser des invocations pour gagner du temps.", value: "summoning" },
            { text: "Les repousser/immobiliser pour empêcher leur progression.", value: "control" }
          ]
        },
        {
          text: "Votre allié est encerclé et sur le point de mourir. Comment réagissez-vous ?",
          options: [
            { text: "Le soigner pour qu'il puisse continuer à se battre.", value: "healing" },
            { text: "Attirer les ennemis pour qu'ils se concentrent sur moi.", value: "tank" },
            { text: "Buff mon allié pour augmenter sa défense et sa force.", value: "buff" },
            { text: "Affaiblir les ennemis pour réduire leurs dégâts.", value: "debuff" }
          ]
        },
        {
          text: "Vous êtes dans un donjon et un boss commence à invoquer des ennemies. Quelle est votre stratégie ?",
          options: [
            { text: "Focaliser mes attaques sur les invocations ennemies.", value: "damage" },
            { text: "Utiliser des sorts de contrôle pour limiter leurs déplacements.", value: "control" },
            { text: "Protéger mon équipe pendant qu'elle combat les invocations.", value: "protection" },
            { text: "Invoquer des alliés supplémentaires pour équilibrer les troupes.", value: "summoning" }
          ]
        },
        {
          text: "Un ennemi tente de s’échapper avec un butin précieux. Comment réagissez-vous ?",
          options: [
            { text: "Utiliser un sort de contrôle pour l’immobiliser.", value: "control" },
            { text: "Infliger une attaque puissante pour le tuer.", value: "damage" },
            { text: "Lancer des sorts d'affaiblissement pour préparer une attaque.", value: "debuff" },
            { text: "Lui barrer son chemin avec une invocation.", value: "summoning" }
          ]
        },
        {
          text: "Un combat s’engage dans une zone étroite où le placement est crucial. Quel rôle jouez-vous ?",
          options: [
            { text: "Contrôler les positions des ennemis pour prendre l’avantage.", value: "control" },
            { text: "Infliger des dégâts constants pour éliminer les menaces rapidement.", value: "damage" },
            { text: "Protéger mes alliés vulnérables dans cet espace limité.", value: "protection" },
            { text: "Utiliser des invocations pour bloquer les déplacements ennemis.", value: "summoning" }
          ]
        },
        {
          text: "Votre équipe affronte un boss complexe avec plusieurs mécaniques à gérer. Quelle est votre spécialité ?",
          options: [
            { text: "Infliger des dégâts constants et suivre la stratégie établie.", value: "damage" },
            { text: "M’assurer que les mécaniques soient respectées en contrôlant les monstres.", value: "control" },
            { text: "Temporiser en protégeant son équipe pour ne pas louper la mécanique.", value: "protection" },
            { text: "Utiliser des buffs pour augmenter l’efficacité de l’équipe.", value: "buff" }
          ]
        },
        {
          text: "Vous affrontez un Eniripsa qui soigne constamment son équipe. Comment réagissez-vous ?",
          options: [
            { text: "Concentrer mes attaques sur lui pour l’éliminer rapidement.", value: "damage" },
            { text: "Utiliser des sorts pour réduire son efficacité de soin.", value: "debuff" },
            { text: "Utiliser des sorts de contrôles/de déplacements pour l'éloigner de ses alliés.", value: "control" },
            { text: "Soigner mon équipe pour mieux résister à ses soins prolongés.", value: "healing" }
          ]
        },
        {
          text: "Vous êtes face à un Sram qui pose des pièges partout. Quelle est votre stratégie ?",
          options: [
            { text: "Essayer de trouver et neutraliser ses pièges.", value: "control" },
            { text: "Rusher pour le forcer à se révéler avant qu’il ne prépare davantage de piège.", value: "damage" },
            { text: "Poser des boucliers pour protéger mon équipe contre ses pièges.", value: "protection" },
            { text: "Invoquer des créatures pour déclencher ses pièges à ma place.", value: "summoning" }
          ]
        },
        {
          text: "Un Cra vous harcèle à distance avec des attaques puissantes. Que faites-vous ?",
          options: [
            { text: "Utiliser des sorts pour limiter sa portée ou sa vision.", value: "control" },
            { text: "Poser des boucliers pour réduire les dégâts de ses attaques.", value: "protection" },
            { text: "L’approcher rapidement pour le forcer à combattre au corps à corps.", value: "damage" },
            { text: "Buff mon équipe pour résister à ses tirs de flèches.", value: "buff" }
          ]
        },
        {
          text: "Vous affrontez un Sacrieur qui devient de plus en plus dangereux à mesure qu’il perd de la vie. Quelle est votre stratégie ?",
          options: [
            { text: "Lui retirer ses capacités d'action pour éviter qu'il ne tape trop fort.", value: "control" },
            { text: "L’affaiblir rapidement avant qu’il ne devienne ingérable.", value: "damage" },
            { text: "Renforcer mes alliés pour lui faire le + de dégâts possibles d'un coup.", value: "buff" },
            { text: "Poser des boucliers pour limiter son impact quand il devient plus fort.", value: "protection" }
          ]
        },
        {
          text: "En PvP, vous êtes dans une équipe où tout le monde joue de manière offensive. Quel rôle adoptez-vous ?",
          options: [
            { text: "Je reste en retrait pour soigner et assurer la survie de mes alliés.", value: "healing" },
            { text: "J’utilise des buffs pour amplifier les dégâts de mes coéquipiers.", value: "buff" },
            { text: "J’attaque avec eux pour maximiser notre impact offensif.", value: "damage" },
            { text: "J’applique des contrôles pour maintenir l’ennemi en désavantage.", value: "control" }
          ]
        }
      ],
      classScores: {
        Ecaflip: 0, Eniripsa: 0, Iop: 0, Cra: 0, Feca: 0, Sacrieur: 0, Sadida: 0,
        Osamodas: 0, Enutrof: 0, Sram: 0, Xelor: 0, Pandawa: 0, Roublard: 0,
        Zobal: 0, Steamer: 0, Eliotrope: 0, Huppermage: 0, Ouginak: 0, Forgelance: 0,
      }
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex] || null;
    },
  },
  methods: {
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
    handleAnswer(answer) {
      this.answers.push(answer);

      const classScoreMapping = {
        damage: {
          Iop: 10, Cra: 9, Roublard: 8, Sram: 8, Zobal: 6, Ecaflip: 7, Osamodas: 5,
          Huppermage: 8, Eliotrope: 6, Forgelance: 7, Sacrieur: 4, Pandawa: 1,
          Steamer: 6, Enutrof: 2, Sadida: 2, Xelor: 2, Eniripsa: 3, Ouginak: 5, Feca: 4
        },
        healing: {
          Eniripsa: 10, Ecaflip: 8, Osamodas: 6, Steamer: 8, Sadida: 6, Zobal: 6,
          Eliotrope: 7, Pandawa: 4, Huppermage: 3, Feca: 3, Sacrieur: 2, Iop: 2,
          Enutrof: 2, Cra: 1, Sram: 1, Xelor: 1, Roublard: 1, Ouginak: 4, Forgelance: 2
        },
        protection: {
          Feca: 10, Zobal: 8, Sacrieur: 7, Steamer: 6, Pandawa: 5, Eniripsa: 4,
          Osamodas: 3, Sadida: 3, Huppermage: 4, Forgelance: 5, Xelor: 2, Roublard: 2,
          Iop: 2, Ecaflip: 1, Sram: 1, Cra: 1, Ouginak: 4, Enutrof: 2, Eliotrope: 1
        },
        summoning: {
          Osamodas: 10, Sadida: 9, Xelor: 5, Roublard: 4, Steamer: 6, Eniripsa: 3,
          Cra: 2, Huppermage: 4, Forgelance: 3, Sacrieur: 1, Feca: 1, Eliotrope: 4,
          Pandawa: 1, Ecaflip: 3, Sram: 3, Enutrof: 3, Ouginak: 2, Zobal: 1, Iop: 1
        },
        control: {
          Xelor: 10, Pandawa: 8, Sadida: 7, Feca: 6, Sram: 9, Roublard: 6, Zobal: 4,
          Steamer: 3, Huppermage: 5, Eliotrope: 7, Forgelance: 4, Ecaflip: 3, Cra: 3,
          Eniripsa: 2, Osamodas: 2, Iop: 1, Sacrieur: 1, Enutrof: 1, Ouginak: 2
        },
        tank: {
          Sacrieur: 8, Pandawa: 10, Feca: 7, Zobal: 6, Steamer: 5, Forgelance: 6,
          Sadida: 4, Enutrof: 3, Iop: 2, Osamodas: 3, Eliotrope: 4, Ouginak: 7,
          Huppermage: 2, Ecaflip: 2, Cra: 1, Sram: 2, Eniripsa: 1, Xelor: 1, Roublard: 1
        },
        debuff: {
          Sram: 3, Sadida: 9, Roublard: 8, Xelor: 7, Feca: 6, Cra: 4, Eniripsa: 8,
          Enutrof: 5, Pandawa: 4, Eliotrope: 4, Huppermage: 8, Zobal: 3, Osamodas: 2,
          Steamer: 3, Sacrieur: 2, Ecaflip: 1, Forgelance: 1, Iop: 1, Ouginak: 2
        },
        buff: {
          Osamodas: 10, Eniripsa: 9, Zobal: 7, Ecaflip: 8, Pandawa: 6, Steamer: 5,
          Iop: 6, Sadida: 4, Feca: 3, Forgelance: 4, Huppermage: 6, Xelor: 3, Sram: 3,
          Eliotrope: 6, Cra: 2, Roublard: 2, Enutrof: 1, Sacrieur: 1, Ouginak: 4
        }
      };


      const classImpact = classScoreMapping[answer] || {};
      for (const [className, score] of Object.entries(classImpact)) {
        this.classScores[className] += score;
      }

      this.currentQuestionIndex++;
      if (this.currentQuestionIndex >= this.questions.length) {
        this.calculateClassRecommendation();
      }
    },
    calculateClassRecommendation() {
      const recommendedClass = Object.keys(this.classScores).reduce((a, b) =>
        this.classScores[a] > this.classScores[b] ? a : b
      );
      this.$router.push({
        path: '/result',
        query: { classRecommendation: recommendedClass }
      });
    },
  },
  created() {
    // Mélange les options de chaque question lors du montage du composant
    this.questions.forEach(question => {
      this.shuffle(question.options);
    });
  }
};
</script>

<style scoped>
.progress-indicator {
  font-size: 1.2em;
  font-weight: bold;
  color: #4a90e2;
  margin-bottom: 1rem;
}
</style>
