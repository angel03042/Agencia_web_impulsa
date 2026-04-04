<script setup>
import { ref } from 'vue'
import { catagolo, paquetes } from '../../data/servicios'
import { WHATSAPP_LINK } from '../../config/contact'

const open = ref(false)
const selected = ref(null)

const openModal = (type) => {
  if (!paquetes[type]) return
  selected.value = paquetes[type]
  open.value = true
}

const closeModal = () => {
  open.value = false
}
</script>
<template>
  <section>
    <!-- Modal -->
    <div v-if="open" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white p-8 max-w-md w-full rounded-xl shadow-xl relative">
        <button @click="closeModal" class="absolute top-4 right-4">✕</button>

        <h3 class="text-2xl font-bold">{{ selected.title }}</h3>
        <p class="text-3xl font-serif mt-2">{{ selected.price }}</p>

        <ul class="mt-6 space-y-3 text-gray-600">
          <li v-for="(item, i) in selected.features" :key="i" class="flex items-start gap-3">
            <svg class="w-5 h-5 text-emerald-900 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            <span>{{ item }}</span>
          </li>
        </ul>

        <a :href="`${WHATSAPP_LINK}?text=Hola,%20me%20interesa%20obtener%20más%20información%20sobre%20el%20servicio%20${selected.title}.%20¿Podrían%20brindarme%20detalles%20y%20una%20cotización?`" target="_blank" class="mt-6 block text-center bg-black text-white py-3 rounded-lg">
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  </section>
  <section id="servicios" class="bg-[#FDFCF8] px-6 py-18 md:px-12 lg:px-24">
    <div class="mx-auto max-w-7xl">
      
      <div class="mb-16">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/60">Catálogo de Servicios</span>
        <h2 class="mt-4 font-serif text-5xl leading-tight tracking-tighter md:text-6xl" data-aos="fade-right">
          Páginas web según lo que <br>
          <span class="italic text-emerald-900">tu negocio necesita</span>.
        </h2>
      </div>

      <div class="border-t border-black/10">
        
        <div v-for="(lista, key) in catagolo" :key="key" class="group flex flex-col justify-between border-b border-black/10 py-10 transition-all hover:bg-emerald-50/50 md:flex-row md:items-center md:px-6" data-aos="flip-left">
          <div class="flex-1">
            <h3 class="font-serif text-3xl transition-all group-hover:translate-x-2 md:text-4xl">{{ lista.title }}</h3>
            <p class="mt-2 max-w-md text-sm text-gray-500 uppercase tracking-widest font-bold">
              {{ lista.subtitle }}
            </p>
          </div>
          <div class="mt-6 flex-1 md:mt-0">
            <p class="max-w-sm text-lg leading-relaxed text-gray-600">
              {{ lista.texto }}
            </p>
          </div>
          <div class="mt-6 flex justify-end md:mt-0">
            <button @click="openModal(key)" class="inline-block rounded-full border border-black/20 px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors group-hover:bg-black group-hover:text-white">
              {{ lista.btn }}
            </button>
          </div>
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