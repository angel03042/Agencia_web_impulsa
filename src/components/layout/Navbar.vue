<script setup>
</script>

<template>
  <nav class="fixed top-0 z-50 w-full px-6 py-6 md:px-12 lg:px-24">
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
        <a href="#testimonios" class="nav-link">Testimonios</a>
      </div>

      <div class="flex items-center gap-6">
        <a href="#contacto" class="hidden text-xs font-bold uppercase tracking-[0.2em] hover:line-through md:block">
          Contacto
        </a>
        <button class="block lg:hidden">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
          </svg>
        </button>
      </div>

    </div>
  </nav>
</template>

<style>
/* Importamos la misma Serif para mantener consistencia */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>