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
          text: "Vous êtes encerclé par des ennemis. Quelle est votre première réaction ?",
          options: [
            { text: "Je frappe immédiatement pour en éliminer le plus possible", value: "damage" },
            { text: "Je place des protections pour moi et mes alliés", value: "protection" },
            { text: "J'invoque des créatures pour détourner l'attention", value: "summoning" },
            { text: "Je recule et affaiblis leurs défenses", value: "debuff" },
          ],
        },
        {
          text: "Un de vos alliés est grièvement blessé et l'ennemi approche. Que faites-vous ?",
          options: [
            { text: "Je soigne immédiatement mon allié", value: "healing" },
            { text: "J'attire les ennemis pour les éloigner de lui", value: "tank" },
            { text: "Je le buff pour augmenter sa résistance", value: "buff" },
            { text: "Je tente de ralentir les ennemis pour gagner du temps", value: "control" },
          ],
        },
        {
          text: "Vous avez l’opportunité de surprendre un groupe d’ennemis. Comment commencez-vous ?",
          options: [
            { text: "Je prépare un sort puissant pour infliger des dégâts massifs", value: "damage" },
            { text: "J'invoque des alliés pour prendre l'avantage", value: "summoning" },
            { text: "J'affaiblis leurs capacités pour limiter leur riposte", value: "debuff" },
            { text: "Je me renforce pour résister aux premières attaques", value: "tank" },
          ],
        },
        {
          text: "Lors d'un combat, un allié a besoin de support. Comment intervenez-vous ?",
          options: [
            { text: "Je le soigne pour qu'il puisse continuer à combattre", value: "healing" },
            { text: "Je lui donne un buff pour augmenter son efficacité", value: "buff" },
            { text: "Je protège l'allié avec un bouclier magique", value: "protection" },
            { text: "Je prends sa place pour encaisser les coups", value: "tank" },
          ],
        },
        {
          text: "Comment gérez-vous un ennemi qui tente de fuir ?",
          options: [
            { text: "Je l'immobilise avec un sort de contrôle", value: "control" },
            { text: "Je l’affaiblis pour qu’il ne soit plus une menace", value: "debuff" },
            { text: "J'utilise une invocation pour le poursuivre", value: "summoning" },
            { text: "Je lance une attaque puissante pour le stopper", value: "damage" },
          ],
        },
        {
          text: "Face à une armée ennemie, quel rôle préférez-vous jouer ?",
          options: [
            { text: "J'attaque sans relâche pour réduire leur nombre", value: "damage" },
            { text: "Je crée des défenses pour protéger mes alliés", value: "protection" },
            { text: "J'affaiblis l'armée adverse pour limiter leur force", value: "debuff" },
            { text: "Je buff mes alliés pour qu'ils puissent tenir plus longtemps", value: "buff" },
          ],
        },
        // Ajoute d'autres questions ici
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
