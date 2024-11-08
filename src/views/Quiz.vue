<template>
  <div class="quiz">
    <!-- Affichage de l'annotation de progression -->
    <div class="progress-indicator">
      Question {{ currentQuestionIndex + 1 }} sur {{ questions.length }}
    </div>

    <!-- Affichage de la question avec le composant Question.vue -->
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
          text: "Lors d'un combat, quelle est votre priorité ?",
          options: [
            { text: "Infliger le maximum de dégâts rapidement", value: "damage" },
            { text: "Protéger mes alliés coûte que coûte", value: "protection" },
            { text: "Soigner les membres de mon équipe", value: "healing" },
            { text: "Contrôler la position de mes ennemis", value: "control" }
          ],
        },
        {
          text: "Quel rôle aimeriez-vous jouer lors d'une bataille stratégique ?",
          options: [
            { text: "Être en première ligne, absorbant les coups", value: "tank" },
            { text: "Lancer des sorts pour affaiblir les ennemis", value: "debuff" },
            { text: "Rester en retrait et donner des buffs à mes alliés", value: "buff" },
            { text: "Utiliser des invocations pour submerger l'ennemi", value: "summoning" }
          ],
        },
        {
          text: "Quelle serait votre arme de prédilection ?",
          options: [
            { text: "Une épée puissante pour des attaques directes", value: "damage" },
            { text: "Un bouclier pour protéger moi et mes alliés", value: "protection" },
            { text: "Un bâton pour lancer des sorts de soins", value: "healing" },
            { text: "Des artefacts pour invoquer des créatures", value: "summoning" }
          ],
        },
        {
          text: "Quel type de magie préférez-vous maîtriser ?",
          options: [
            { text: "Magie de feu et de destruction", value: "damage" },
            { text: "Magie de soin et de protection", value: "healing" },
            { text: "Magie de contrôle des éléments", value: "control" },
            { text: "Magie de manipulation des esprits et invocations", value: "summoning" }
          ],
        },
        {
          text: "Comment réagissez-vous face à un ennemi puissant ?",
          options: [
            { text: "L'attaquer directement avec force", value: "damage" },
            { text: "Utiliser mes pouvoirs pour le ralentir", value: "control" },
            { text: "Protéger mes alliés contre ses attaques", value: "protection" },
            { text: "Soigner mes alliés pendant qu’ils le combattent", value: "healing" }
          ],
        },
        {
          text: "Quel type de soutien offrez-vous à vos alliés ?",
          options: [
            { text: "Des buffs pour augmenter leur force", value: "buff" },
            { text: "Des soins pour les garder en vie", value: "healing" },
            { text: "Des invocations pour les assister", value: "summoning" },
            { text: "Des protections pour bloquer les dégâts", value: "protection" }
          ],
        },
        {
          text: "Si vous deviez affronter un groupe d'ennemis seul, que feriez-vous ?",
          options: [
            { text: "Les éliminer un par un avec de puissantes attaques", value: "damage" },
            { text: "Créer des barrières pour réduire leurs attaques", value: "protection" },
            { text: "Les affaiblir avec des sorts d'entrave", value: "debuff" },
            { text: "Utiliser des créatures invoquées pour m'aider", value: "summoning" }
          ],
        },
        {
          text: "Quelle qualité vous définit le mieux en tant que guerrier ?",
          options: [
            { text: "La puissance brute", value: "damage" },
            { text: "La résilience", value: "tank" },
            { text: "L'altruisme", value: "healing" },
            { text: "La capacité à contrôler le champ de bataille", value: "control" }
          ],
        },
        {
          text: "En pleine bataille, que privilégiez-vous ?",
          options: [
            { text: "Détruire mes ennemis le plus rapidement possible", value: "damage" },
            { text: "Maintenir mes alliés en bonne santé", value: "healing" },
            { text: "Gérer la position de l'ennemi", value: "control" },
            { text: "Déployer des créatures pour prendre l'avantage", value: "summoning" }
          ],
        },
        {
          text: "Quel est votre style de combat favori ?",
          options: [
            { text: "Attaquer de manière agressive", value: "damage" },
            { text: "Jouer de manière défensive et stratégique", value: "tank" },
            { text: "Soutenir et protéger mes alliés", value: "protection" },
            { text: "Avoir un rôle flexible en fonction des besoins", value: "support" }
          ],
        },
        // Ajoute d'autres questions ici
      ],
      classScores: {
        Ecaflip: 0,
        Eniripsa: 0,
        Iop: 0,
        Cra: 0,
        Feca: 0,
        Sacrieur: 0,
        Sadida: 0,
        Osamodas: 0,
        Enutrof: 0,
        Sram: 0,
        Xelor: 0,
        Pandawa: 0,
        Roublard: 0,
        Zobal: 0,
        Steamer: 0,
        Eliotrope: 0,
        Huppermage: 0,
        Ouginak: 0,
        Forgelance: 0,
        // Ajoute toutes les autres classes ici
    }
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex] || null;
    },
  },
  methods: {
    handleAnswer(answer) {
      this.answers.push(answer);

      // Ajuster les scores de classe en fonction de la réponse
      switch (answer) {
        case "damage":
          this.classScores.Iop += 10;
          this.classScores.Cra += 9;
          this.classScores.Roublard += 8;
          this.classScores.Sram += 8;
          this.classScores.Zobal += 6;
          this.classScores.Ecaflip += 7;
          this.classScores.Osamodas += 5;
          this.classScores.Huppermage += 8;
          this.classScores.Eliotrope += 6;
          this.classScores.Forgelance += 7;
          this.classScores.Sacrieur += 4;
          this.classScores.Pandawa += 3;
          this.classScores.Steamer += 3;
          break;

        case "healing":
          this.classScores.Eniripsa += 10;
          this.classScores.Ecaflip += 8;
          this.classScores.Osamodas += 6;
          this.classScores.Steamer += 7;
          this.classScores.Sadida += 6;
          this.classScores.Zobal += 6;
          this.classScores.Eliotrope += 7;
          this.classScores.Pandawa += 4;
          this.classScores.Huppermage += 3;
          this.classScores.Feca += 3;
          this.classScores.Sacrieur += 2;
          break;

        case "protection":
          this.classScores.Feca += 10;
          this.classScores.Zobal += 8;
          this.classScores.Sacrieur += 7;
          this.classScores.Steamer += 6;
          this.classScores.Pandawa += 5;
          this.classScores.Eniripsa += 4;
          this.classScores.Osamodas += 3;
          this.classScores.Sadida += 3;
          this.classScores.Huppermage += 4;
          this.classScores.Forgelance += 5;
          break;

        case "summoning":
          this.classScores.Osamodas += 10;
          this.classScores.Sadida += 9;
          this.classScores.Xelor += 5;
          this.classScores.Roublard += 4;
          this.classScores.Steamer += 6;
          this.classScores.Eniripsa += 3;
          this.classScores.Cra += 2;
          this.classScores.Huppermage += 4;
          this.classScores.Forgelance += 3;
          this.classScores.Sacrieur += 1;
          break;

        case "control":
          this.classScores.Xelor += 10;
          this.classScores.Pandawa += 8;
          this.classScores.Sadida += 7;
          this.classScores.Feca += 6;
          this.classScores.Sram += 9;
          this.classScores.Roublard += 6;
          this.classScores.Zobal += 4;
          this.classScores.Steamer += 3;
          this.classScores.Huppermage += 5;
          this.classScores.Eliotrope += 7;
          this.classScores.Forgelance += 4;
          break;

        case "tank":
          this.classScores.Sacrieur += 10;
          this.classScores.Pandawa += 8;
          this.classScores.Feca += 7;
          this.classScores.Zobal += 6;
          this.classScores.Steamer += 5;
          this.classScores.Forgelance += 6;
          this.classScores.Sadida += 4;
          this.classScores.Enutrof += 3;
          this.classScores.Iop += 2;
          this.classScores.Osamodas += 3;
          this.classScores.Eliotrope += 4;
          break;

        case "debuff":
          this.classScores.Sram += 10;
          this.classScores.Sadida += 9;
          this.classScores.Roublard += 8;
          this.classScores.Xelor += 7;
          this.classScores.Feca += 6;
          this.classScores.Cra += 4;
          this.classScores.Eniripsa += 5;
          this.classScores.Enutrof += 5;
          this.classScores.Pandawa += 4;
          this.classScores.Eliotrope += 4;
          this.classScores.Huppermage += 5;
          break;

        case "buff":
          this.classScores.Osamodas += 10;
          this.classScores.Eniripsa += 9;
          this.classScores.Zobal += 7;
          this.classScores.Ecaflip += 8;
          this.classScores.Pandawa += 6;
          this.classScores.Steamer += 5;
          this.classScores.Iop += 5;
          this.classScores.Sadida += 4;
          this.classScores.Feca += 3;
          this.classScores.Forgelance += 4;
          this.classScores.Huppermage += 6;
          break;

        default:
          break;
      }

      this.currentQuestionIndex++;
      if (this.currentQuestionIndex >= this.questions.length) {
        this.calculateClassRecommendation();
      }
    },
    calculateClassRecommendation() {
      // Trouver la classe avec le score le plus élevé
      const recommendedClass = Object.keys(this.classScores).reduce((a, b) =>
        this.classScores[a] > this.classScores[b] ? a : b
      );

      // Rediriger vers la page de résultats avec la classe recommandée
      this.$router.push({
        path: '/dofusclass/result',
        query: { classRecommendation: recommendedClass }
      });
    },
  },
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