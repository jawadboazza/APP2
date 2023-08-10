<template>
    <div class="min-h-screen py-10 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-extrabold text-gray-900 mb-6">Nos produits</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div v-for="product in products" :key="product.id" class="bg-white p-6 rounded-lg shadow">
            <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover mb-6 rounded">
            <h2 class="text-xl font-bold text-gray-800 mb-4">{{ product.name }}</h2>
            <p class="text-gray-600">{{ product.description }}</p>
            <a :href="`/product/${product.id}`" class="block mt-6 text-indigo-600 hover:text-indigo-700 font-semibold">En savoir plus</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: [
          {
            id: 'alu',
            name: 'Plaque Alu',
            image: '/path/to/plaque-alu.jpg',
            description: "La plaque en aluminium est robuste, légère et résistante aux intempéries. Parfaite pour une utilisation quotidienne."
          },
          {
            id: 'plexi',
            name: 'Plaque Plexi',
            image: '/path/to/plaque-plexi.jpg',
            description: "La plaque en plexiglass offre une finition brillante et est résistante aux rayures. Idéale pour une touche d'élégance."
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter des styles spécifiques ici si nécessaire */
  </style>
  