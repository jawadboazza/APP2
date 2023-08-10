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
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

header {
    font-family: 'Poppins', sans-serif;
}

.container {
    max-width: 1200px;
}
</style>
