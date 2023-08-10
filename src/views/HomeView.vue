<template>
      <header class="bg-gradient-to-r from-blue-500 to-indigo-700 text-white relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all">
        <div class="container mx-auto px-6 py-10 md:py-16 flex flex-wrap">

            <div class="w-full md:w-1/2 flex flex-col justify-center">
                <h1 class="text-3xl md:text-5xl font-bold mb-4 leading-tight animate__animated animate__fadeInLeft">
                    Plaques d'Immatriculation Belges
                </h1>
                <p class="mb-4 text-lg animate__animated animate__fadeInLeft animate__delay-1s">
                    Obtenez vos plaques d'immatriculation belges en toute simplicité avec Mister Plaque. 
                </p>
                <p class="mb-4 text-sm italic font-medium animate__animated animate__fadeInLeft animate__delay-2s">
                    Service Click & Collect : Récupérez votre plaque d'immatriculation belge gratuitement à Bruxelles !
                </p>
                <div class="mt-4">
                    <a href="#" class="inline-block bg-green-500 hover:bg-green-600 py-2 px-6 rounded-full text-lg font-semibold transform transition hover:scale-105 animate__animated animate__fadeInUp animate__delay-3s">
                        Commande dès maintenant
                    </a>
                    <a href="#" class="ml-4 text-yellow-300 hover:underline animate__animated animate__fadeInUp animate__delay-4s">
                        Contactez-nous !
                    </a>
                </div>
            </div>

            <div class="hidden md:block md:w-1/2 animate__animated animate__fadeInRight">
                <img src="./ss.png" alt="Illustration plaque d'immatriculation" class="rounded-xl shadow-md">
            </div>

        </div>
    </header>
   <div class="container mx-auto px-6 py-10"><!-- Titre et introduction -->
    <div class="text-center mb-10"><h1 class="text-3xl md:text-4xl font-bold mb-4">Commandez vos plaques d'immatriculation belges en ligne avec facilité.</h1>
        <p class="text-lg md:text-xl">Mister Plaque est le moyen le plus simple et le plus rapide de commander des plaques d'immatriculation en ligne en Belgique. Avec notre processus de commande en ligne facile et sécurisé, vous pouvez personnaliser vos plaques et passer votre commande en quelques minutes seulement.</p>
    </div><!-- Avantages en grille -->
    <div class="grid md:grid-cols-3 gap-10"><!-- Commande en ligne --><div class="p-6 rounded-xl bg-gray-100 transition-transform transform hover:scale-105"><h3 class="text-2xl font-semibold mb-3">Commande en ligne</h3><p>Personnalisez et commandez vos plaques en toute simplicité. Notre plateforme vous guide étape par étape.</p>
    </div><!-- Retrait en boutique -->
    <div class="p-6 rounded-xl bg-gray-100 transition-transform transform hover:scale-105">
        <h3 class="text-2xl font-semibold mb-3">Retrait en boutique</h3>
        <p>Retirez votre plaque directement dans notre boutique à Bruxelles pour un service encore plus rapide.</p>
    </div><!-- Support client -->
    <div class="p-6 rounded-xl bg-gray-100 transition-transform transform hover:scale-105">
        <h3 class="text-2xl font-semibold mb-3">Support client 7/7</h3><p>Notre équipe dédiée est à votre disposition 7 jours sur 7 pour répondre à toutes vos questions.</p>
    </div>
</div>
</div>

    <!-- Section Duplicatas en 3 étapes -->
    <div class="mt-20">

        <h2 class="text-center text-3xl md:text-4xl font-bold mb-10">Obtenez vos duplicatas de plaques en trois étapes simples</h2>

        <div class="grid md:grid-cols-3 gap-12 text-center">

            <!-- Étape 1 : Demande en ligne -->
            <div class="flex flex-col items-center">
    <div class="w-16 h-16 mb-5 bg-gray-200 rounded-full flex items-center justify-center">
        <i class="fas fa-car fa-2x"></i>  <!-- L'icône Font Awesome ici -->
    </div>
    <h3 class="text-2xl font-semibold mb-3">1. Demande en ligne</h3>
    <p>Remplissez le formulaire en ligne en fournissant toutes les informations nécessaires concernant votre véhicule et la plaque perdue ou endommagée.</p>
</div>


            <!-- Étape 2 : Validation -->
            <div class="flex flex-col items-center">
    <div class="w-16 h-16 mb-5 bg-gray-200 rounded-full flex items-center justify-center">
        <i class="fas fa-check-circle fa-2x"></i>  <!-- L'icône Font Awesome pour la validation -->
    </div>
    <h3 class="text-2xl font-semibold mb-3">2. Validation</h3>
    <p>Nous vérifions rapidement vos informations et validons votre demande. Une fois approuvé, nous commençons le processus de création de votre duplicata.</p>
</div>


            <!-- Étape 3 : Livraison -->
            <div class="flex flex-col items-center">
    <div class="w-16 h-16 mb-5 bg-gray-200 rounded-full flex items-center justify-center">
        <i class="fas fa-truck fa-2x"></i>  <!-- L'icône Font Awesome pour la livraison -->
    </div>
    <h3 class="text-2xl font-semibold mb-3">3. Livraison</h3>
    <p>Recevez votre duplicata directement chez vous ou retirez-le dans notre boutique. Votre nouvelle plaque est prête à l'emploi !</p>
</div>


        </div>
    </div>

    <div class="container mx-auto px-4 py-10">
        <!-- Content container with fade-in-up animation -->
        <div class="rounded-lg overflow-hidden shadow-xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-fade-in-up">
            <!-- Content -->
            <div class="p-10">
                <h2 class="text-3xl md:text-4xl text-white font-bold mb-4">
                    Faites vos plaques en 5min
                </h2>
                <p class="text-xl text-white mb-5">
                    Commander vos plaques n'a jamais été aussi simple et rapide. Découvrez la simplicité avec Mister Plaque.
                </p>
                <a href="#" class="text-white bg-blue-500 hover:bg-blue-700 rounded-lg px-6 py-2 transition duration-300 ease-in-out transform animate-pulse">
                    Commander plaques
                </a>
            </div>
        </div>
    </div>

     <!-- Fenêtre modale -->

 
</template>

<style scoped>
/* ... (les styles précédents) ... */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

header {
    font-family: 'Poppins', sans-serif;
}

.container {
    max-width: 1200px;
}
.step-icon {
    width: 48px;
    height: 48px;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.container {
    max-width: 1200px;
}

</style>

<script>
export default {
    // Métadonnées SEO pour la page (peut être intégrée avec vue-meta ou un autre plugin)
    metaInfo: {
        title: "Mister Plaque - Duplicatas de plaques d'immatriculation en Belgique",
        meta: [
            { vmid: 'description', name: 'description', content: 'Obtenez facilement vos duplicatas de plaques d’immatriculation en Belgique en trois étapes simples avec Mister Plaque. Faites confiance à notre processus rapide et fiable.' }
        ]
      

    },

    data() {
    return {
      showModal: true  // changez à false si vous ne voulez pas montrer le modal au chargement
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
    }
  }
}



</script>

