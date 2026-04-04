<script setup>
import { soluciones } from "../../data/solucion"
</script>

<template>
  <section id="solucion" class="bg-[#FDFCF8] px-6 py-18 md:px-12 lg:px-24">
    <div class="mx-auto max-w-7xl">
      
      <div class="flex flex-col items-end justify-between gap-8 border-b border-black/10 pb-12 lg:flex-row">
        <div class="max-w-4xl">
          <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/60">Nuestra Solución</span>
          <h2 class="mt-4 font-serif text-5xl leading-[1.1] tracking-tighter md:text-6xl" data-aos="fade-right">
            Nosotros creamos tu página web <br>
            <span class="italic text-emerald-900">lista para empezar</span>.
          </h2>
        </div>
        <p class="max-w-xs text-sm font-medium leading-relaxed text-gray-500 italic" data-aos="fade-left">
          “Sin complicaciones, sin conocimientos técnicos, sin perder tiempo.”
        </p>
      </div>

      <div class="mt-20 grid grid-cols-1 gap-px bg-black/10 lg:grid-cols-2">
        
        <div v-for="solucion in soluciones" :key="solucion.id" class="group bg-[#FDFCF8] p-12 transition-colors hover:bg-emerald-900 hover:text-white" data-aos="flip-up">
          <div class="mb-8 flex justify-between">
            <span class="font-serif text-4xl italic opacity-20 group-hover:opacity-100">{{ solucion.id }}</span>
            <svg class="h-8 w-8 -rotate-45 transition-transform group-hover:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </div>
          <h3 class="text-3xl font-bold tracking-tight">{{ solucion.name }}</h3>
          <p class="mt-4 text-lg leading-relaxed opacity-70">
            {{ solucion.description }}
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>