<template>
    <section class="bg-white py-8 px-4 mt-8">
      <h2 class="text-2xl font-bold mb-6 text-center">FAQ - Plaque d'immatriculation</h2>
      <div class="max-w-3xl mx-auto divide-y divide-gray-200">
  
        <!-- Question 1 -->
        <div class="py-4">
          <button @click="toggleAnswer(1)" class="text-left w-full text-lg font-semibold flex justify-between items-center">
            Comment commander une plaque d'immatriculation personnalisée ?
            <span v-if="showAnswer === 1">-</span>
            <span v-else>+</span>
          </button>
          <p v-if="showAnswer === 1" class="mt-2">Il vous suffit de remplir notre formulaire en ligne avec les détails souhaités et de suivre les instructions pour le paiement. Après validation, votre plaque sera créée et envoyée.</p>
        </div>
  
        <!-- Question 2 -->
        <div class="py-4">
          <button @click="toggleAnswer(2)" class="text-left w-full text-lg font-semibold flex justify-between items-center">
            Que faire si ma plaque d'immatriculation est endommagée ?
            <span v-if="showAnswer === 2">-</span>
            <span v-else>+</span>
          </button>
          <p v-if="showAnswer === 2" class="mt-2">Si votre plaque est endommagée, il est essentiel de la faire remplacer dès que possible pour éviter toute infraction. Vous pouvez commander un duplicata via notre plateforme.</p>
        </div>
  
        <!-- Question 3 -->
        <div class="py-4">
          <button @click="toggleAnswer(3)" class="text-left w-full text-lg font-semibold flex justify-between items-center">
            Combien de temps faut-il pour recevoir ma nouvelle plaque ?
            <span v-if="showAnswer === 3">-</span>
            <span v-else>+</span>
          </button>
          <p v-if="showAnswer === 3" class="mt-2">La plupart des plaques sont expédiées sous 24 à 48 heures. Cependant, les plaques personnalisées peuvent nécessiter jusqu'à une semaine pour être produites.</p>
        </div>
  
        <!-- More questions can be added in a similar manner -->
  
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showAnswer: null
      };
    },
    methods: {
      toggleAnswer(id) {
        this.showAnswer = this.showAnswer === id ? null : id;
      }
    }
  };
  </script>
  