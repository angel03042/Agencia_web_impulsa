<script setup>
import { problemas } from '../../data/problema'
</script>

<template>
  <section id="problema" class="bg-[#FDFCF8] px-6 py-18 md:px-12 lg:px-24 border-t border-black/5">
    <div class="mx-auto max-w-7xl">
      
      <div class="mb-12 max-w-3xl">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/60">Diagnóstico actual</span>
        <h2 class="mt-4 font-serif text-5xl leading-tight tracking-tighter md:text-6xl" data-aos="fade-right">
          No tener presencia en internet te está costando <span class="italic font-normal">clientes</span>.
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-12 border-t border-black/10 pt-16 lg:grid-cols-3" data-aos="fade-down">
        
        <div v-for="problema in problemas" :key="problema.id" class="group space-y-6">
          <div class="flex items-baseline gap-4">
            <span class="font-serif text-2xl italic text-emerald-900/40">{{ problema.id + '.' }}</span>
            <h3 class="text-2xl font-bold tracking-tight">{{ problema.name }}</h3>
          </div>
          <p class="text-gray-600 leading-relaxed pl-10">
            {{ problema.description }}
          </p>
          <div class="h-[1px] w-0 bg-emerald-900 transition-all duration-700 group-hover:w-full pl-10"></div>
        </div>

      </div>

      <div class="mt-18 flex flex-col items-center justify-between gap-8 border border-black/10 p-12 md:flex-row" data-aos="fade-up">
        <p class="max-w-xl text-xl font-medium leading-relaxed">
          Si te identificas con esto, no necesitas algo complicado… necesitas empezar a <span class="underline decoration-emerald-900/30 underline-offset-8">tener presencia en internet</span>.
        </p>
        <a href="#solucion" class="text-sm font-bold uppercase tracking-widest hover:line-through">
          Ver cómo empezar →
        </a>
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