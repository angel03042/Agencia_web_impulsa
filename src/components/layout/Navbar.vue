<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Estado para el fondo al hacer scroll
const isScrolled = ref(false)
// Estado para el menú móvil
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 z-50 w-full transition-all duration-500 px-6 py-4 md:px-12 lg:px-24',
      isScrolled ? 'bg-[#FDFCF8]/90 backdrop-blur-md border-b border-black/10 py-4' : 'bg-transparent'
    ]"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      
      <div class="flex items-center">
        <span class="font-serif text-2xl tracking-tighter">
          WEB<span class="italic text-emerald-900">.</span>IMPULSA
        </span>
      </div>

      <div class="hidden space-x-10 lg:flex">
        <a href="#inicio" class="nav-link">Inicio</a>
        <a href="#problema" class="nav-link">Problema</a>
        <a href="#solucion" class="nav-link">Solución</a>
        <a href="#servicios" class="nav-link">Servicios</a>
        <a href="#testimonios" class="nav-link">Proyectos</a>
      </div>

      <div class="flex items-center gap-6">
        <a href="#contacto" class="hidden text-[10px] font-bold uppercase tracking-[0.2em] hover:line-through md:block">
          Contacto
        </a>
        
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="block lg:hidden p-2 text-black"
          aria-label="Abrir menú"
        >
          <svg v-if="!isMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isMenuOpen" class="absolute left-0 top-full w-full bg-[#FDFCF8] border-b border-black/5 px-6 py-10 lg:hidden shadow-xl">
        <div class="flex flex-col space-y-6 text-center">
          <a @click="isMenuOpen = false" href="#inicio" class="mobile-nav-link">Inicio</a>
          <a @click="isMenuOpen = false" href="#problema" class="mobile-nav-link">Problema</a>
          <a @click="isMenuOpen = false" href="#solucion" class="mobile-nav-link">Solución</a>
          <a @click="isMenuOpen = false" href="#servicios" class="mobile-nav-link">Servicios</a>
          <a @click="isMenuOpen = false" href="#testimonios" class="mobile-nav-link">Testimonios</a>
          <a @click="isMenuOpen = false" href="#contacto" class="inline-block bg-black text-[#FDFCF8] py-4 font-bold uppercase tracking-widest text-[10px]">Escríbenos</a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}


</style>