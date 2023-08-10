<template>
    <!-- Votre contenu existant... -->

    <!-- Alerte fixe en bas de la page -->
    <div v-if="showAlert" class="fixed bottom-0 inset-x-0 z-50 bg-indigo-600 text-white py-2 px-4 shadow-lg">
      <div class="max-w-screen-xl mx-auto flex justify-between items-center">
        <div class="flex-1">
          <p class="font-bold">Information :</p>
          <p>Les envois en ligne sont momentanément indisponibles. Nous nous excusons pour le désagrément.

Nous mettons tout en œuvre pour résoudre ce problème au plus vite.

Si vous souhaitez une plaque d'immatriculation, veuillez nous joindre : +32 494 11 57 49 ou info@mister-plaque.be</p>
        </div>
        <button @click="closeAlert" class="ml-4 bg-red-500 px-3 py-1 rounded-full text-xs font-semibold">Fermer</button>
      </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        showAlert: true  // changez à false si vous ne voulez pas montrer l'alerte au chargement
      }
    },
    methods: {
      closeAlert() {
        this.showAlert = false;
      }
    }
}
</script>
