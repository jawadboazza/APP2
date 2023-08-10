<template>
  <form 
    action='/create-checkout-session' 
    method='POST' 
    id="registrationForm" 
    class="bg-white shadow-xl rounded-xl p-8 animate__animated animate__fadeInLeft transition-all"
    @submit.prevent="submitForm"
  >
    <h2 class="text-2xl mb-6 font-semibold text-center">Commandez votre plaque d'immatriculation</h2>

    <!-- Section pour le numéro d'immatriculation -->
    <div class="mb-4">
      <label class="block mb-2 text-sm font-medium">Indiquez le numéro d'immatriculation (Obligatoire)</label>
      <input 
        v-model="registrationNumber" 
        type="text" 
        placeholder="1ABC325" 
        maxlength="7"
        class="p-2 w-full rounded border"
        required 
        @input="validatePlate"
      >
      <p v-if="!isValidPlate && registrationNumber.length > 0" class="text-red-500 text-xs mt-1">L'entrée doit ressembler à 1ABC325.</p>
      <p v-if="registrationNumber.length === 0" class="text-gray-500 text-xs mt-1">Exemple : 1ABC325</p>
    </div>

    <!-- Section pour le type de véhicule -->
    <div class="mb-4">
      <label class="block mb-2 text-sm font-medium">Choisissez le type de véhicule (Obligatoire)</label>
      <select v-model="vehicleType" class="p-2 w-full rounded border" required>
        <option value="">-- Sélectionnez --</option>
        <option value="car">Voiture</option>
        <option value="motorcycle">Moto</option>
      </select>
    </div>

    <!-- Section pour le type de plaque -->
    <div class="mb-6">
      <label class="block mb-2 text-sm font-medium">Choisissez le type de plaque (Obligatoire)</label>
      <select v-model="plateType" class="p-2 w-full rounded border" required>
        <option value="">-- Sélectionnez --</option>
        <option value="standard">Standard</option>
        <option value="custom">Personnalisée</option>
      </select>
    </div>

    <!-- Section de résumé -->
    <div v-if="registrationNumber && vehicleType && plateType" class="bg-gray-100 p-4 rounded mb-6">
      <h3 class="text-xl mb-4 font-semibold">Résumé de la commande</h3>
      <p><strong>Immatriculation :</strong> {{ registrationNumber }}</p>
      <p><strong>Type de véhicule :</strong> {{ vehicleType }}</p>
      <p><strong>Type de plaque :</strong> {{ plateType }}</p>
      <p><strong>Total :</strong> TBD</p>
    </div>

    <!-- Bouton de soumission -->
    <button type="submit" class="submit-button">Commander</button>  </form>
</template>

<script>
export default {
  data() {
    return {
      registrationNumber: '',
      vehicleType: '',
      plateType: '',
      isValidPlate: false,
    }
  },
  methods: {
    submitForm() {
      if (!this.registrationNumber || !this.vehicleType || !this.plateType || !this.isValidPlate) {
        alert("Veuillez remplir correctement tous les champs obligatoires.");
      } else {
        this.$refs.registrationForm.submit();
      }
    },
    validatePlate() {
      const pattern = /^[1-9][A-Z]{3}[0-9]{3}$/;
      this.isValidPlate = pattern.test(this.registrationNumber);
    }
  }
}
</script>

<style scoped>
@media (max-width: 640px) {
  form {
    padding: 4rem 2rem;
  }
}
/* ... Votre autre CSS ... */

.submit-button {
  background-color: #4C51BF; /* Couleur initiale du bouton (indigo-600) */
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  border: none;
  outline: none;
  display: inline-block;
  margin: 0;
  vertical-align: middle;
  text-align: center;
  user-select: none;
  overflow: visible;
  font-family: inherit;
  font-weight: 500;
}

.submit-button:hover {
  background-color: #434190; /* Couleur de survol du bouton (un peu plus foncée que indigo-600) */
  transform: translateY(-2px); /* Légère élévation lors du survol pour un effet "3D" */
}

.submit-button:active {
  transform: translateY(0); /* Réinitialisation de l'élévation lors du clic */
}

</style>
