<script setup>
import { preguntas } from '../../data/faq'
</script>

<template>
  <section class="bg-[#FDFCF8] px-6 py-18 md:px-12 lg:px-24">
    <div class="mx-auto max-w-4xl">
      
      <div class="mb-16 text-center">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/60">Resolviendo dudas</span>
        <h2 class="mt-4 font-serif text-5xl tracking-tighter md:text-6xl">
          Preguntas <span class="italic">frecuentes</span>.
        </h2>
      </div>

      <div class="space-y-2 border-t border-black/10">
        
        <details v-for="(pregunta, i) in preguntas" :key="i" class="group border-b border-black/10 py-6">
          <summary class="flex cursor-pointer items-center justify-between list-none">
            <h3 class="text-xl font-bold tracking-tight md:text-2xl">{{ pregunta.name }}</h3>
            <span class="text-2xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <div class="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            {{ pregunta.respuesta }}
          </div>
        </details>

      </div>

      <p class="mt-12 text-center text-sm text-gray-500">
        ¿Tienes otra pregunta? 
        <a href="#contacto" class="font-bold text-black underline decoration-emerald-900/30 underline-offset-4">Escríbenos directamente</a>.
      </p>

    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}

/* Ocultar el marcador por defecto de <details> en Safari/Chrome */
summary::-webkit-details-marker {
  display: none;
}
</style>