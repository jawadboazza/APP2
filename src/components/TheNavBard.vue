<template>
    <div>
        <header :class="{ 'bg-gray-100': scrolled }" class="sticky top-0 z-50 shadow-md transition-colors duration-300">
            <div class="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
                <!-- Logo Section -->
  

                <!-- Mobile Menu Toggle Button -->
                <div @click="toggleMenu" class="md:hidden cursor-pointer">
                    <i class="fas fa-bars text-gray-600"></i>
                </div>

                <!-- Navigation Links for Desktop -->
                <nav :class="{ 'hidden': !menuOpen, 'block': menuOpen }" class="md:flex md:space-x-10 absolute top-full left-0 w-full bg-white md:static md:w-auto">
                    <a href="/" class="block py-2 px-4 text-gray-500 hover:bg-gray-100 rounded hover:text-black transition-transform transform hover:scale-105 duration-300">Accueil</a>
                    <a href="TheApp" class="block py-2 px-4 text-gray-500 hover:bg-gray-100 rounded hover:text-black transition-transform transform hover:scale-105 duration-300">Commande ta plaque</a>
                    <a href="product" class="block py-2 px-4 text-gray-500 hover:bg-gray-100 rounded hover:text-black transition-transform transform hover:scale-105 duration-300">Nos produits</a>
                    <a href="TheFAQ" class="block py-2 px-4 text-gray-500 hover:bg-gray-100 rounded hover:text-black transition-transform transform hover:scale-105 duration-300">FAQ</a>
                    <a href="TheBlog" class="block py-2 px-4 text-gray-500 hover:bg-gray-100 rounded hover:text-black transition-transform transform hover:scale-105 duration-300">Blog</a>
                    <a href="AboutView" class="block py-2 px-4 text-gray-500 hover:bg-gray-100 rounded hover:text-black transition-transform transform hover:scale-105 duration-300">A propos</a>


                    <a href="TheContact" class="block py-2 px-4 text-gray-500 hover:bg-gray-100 rounded hover:text-black transition-transform transform hover:scale-105 duration-300">Contact</a>
                    <div class="relative group py-2 px-4">
                     


                        <button class="text-gray-500 hover:text-black transition duration-300">
                            FR <i class="fas fa-angle-down ml-1"></i>
                        </button>
                        <div class="absolute mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="#" class="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">EN</a>
                            <a href="#" class="block px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-black">NL</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </div>
    <br>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            menuOpen: false,
            scrolled: false
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        handleScroll() {
            if (window.scrollY > 10) {
                this.scrolled = true;
            } else {
                this.scrolled = false;
            }
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

header {
    font-family: 'Inter', sans-serif;
}

a:hover {
    border-radius: 5px;
}

div.group:hover div {
    z-index: 1001; 
}
</style>
