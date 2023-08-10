<template>
    <footer class="bg-white text-gray-700 border-t py-10">
        <div class="container mx-auto px-4">
            <!-- Grille du footer -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">

                <!-- Section About -->
                <div>
                    <h4 class="text-lg font-semibold mb-3">À propos de Mister Plaque</h4>
                    <p>Leader en Belgique pour la commande de plaques d'immatriculation en ligne. Rapide, fiable, et sécurisé.</p>
                </div>

                <!-- Liens rapides -->
                <div>
                    <h4 class="text-lg font-semibold mb-3">Liens rapides</h4>
                    <ul>
                        <li><a href="#" class="text-gray-600 hover:text-gray-900">Accueil</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-gray-900">Commander</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-gray-900">FAQ</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
                    </ul>
                </div>

                <!-- Contact -->
                <div>
                    <h4 class="text-lg font-semibold mb-3">Contactez-nous</h4>
                    <p class="text-gray-600">Email: support@misterplaque.be</p>
                    <p class="text-gray-600">Tél: +32 123 456 789</p>
                    <p class="text-gray-600">Adresse: Rue de la Plaque, Bruxelles</p>
                </div>

                <!-- Modes de paiement -->
                <div>
                    <h4 class="text-lg font-semibold mb-3">Modes de paiement</h4>
                    <img src="/path/to/visa.png" alt="Visa" class="w-10 inline-block mr-2">
                    <img src="/path/to/mastercard.png" alt="MasterCard" class="w-10 inline-block mr-2">
                    <img src="/path/to/paypal.png" alt="PayPal" class="w-10 inline-block">
                    <!-- Ajoutez autant d'icônes que nécessaire -->
                </div>

            </div>

            <!-- Droits d'auteur et crédits -->
            <div class="text-center text-sm text-gray-600">
                © 2023 Mister Plaque. Tous droits réservés.
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
    /* Styles supplémentaires pour votre footer si nécessaire */
</style>
