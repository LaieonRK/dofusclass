<template>
  <div class="question">
    <h2>{{ questionText }}</h2><br>
    <div class="options-grid">
      <button v-for="(option, index) in options" :key="index" @click="selectAnswer(option)">
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questionText: String,
    options: Array,
  },
  methods: {
    selectAnswer(option) {
      this.$emit("answer-selected", option.value);
    },
  },
};
</script>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h2 {
  font-size: 1.5em;
  margin-bottom: 1rem;
}

.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 colonnes */
  gap: 1rem; /* Espace entre les options */
  width: 100%;
  max-width: 600px;
}

.option-button {
  padding: 1rem;
  font-size: 1.1em;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: background-color 0.3s;
}

.option-button:hover {
  background-color: #357abd;
}
</style>
