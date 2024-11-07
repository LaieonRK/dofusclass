<template>
  <button @click="goBack" class="back-button">
    <span class="icon">←</span> <!-- Icône de flèche -->
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goBack = () => {
  router.go(-1); // Revenir en arrière dans l'historique de navigation
};
</script>

<style scoped>
.back-button {
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #333;
}

.icon {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}
</style>
