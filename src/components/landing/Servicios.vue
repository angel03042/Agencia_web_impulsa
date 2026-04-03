<!--Divide lo que ofreces:

Landing pages
Páginas corporativas
E-commerce
Mantenimiento web-->
<script setup>
import { ref } from 'vue'

const open = ref(false)
const selected = ref(null)

const paquetes = {
  landing: {
    title: 'Página básica',
    price: 'Desde $2,500',
    features: [
      'Página informativa',
      'Diseño profesional',
      'Adaptada a celular',
      'Botón de WhatsApp'
    ]
  },
  negocio: {
    title: 'Página para negocio',
    price: 'Desde $4,500',
    features: [
      'Todo lo del plan básico',
      'Varias secciones',
      'Optimizada para Google',
      'Estructura para clientes'
    ]
  },
  tienda: {
    title: 'Tienda en línea',
    price: 'Desde $8,000',
    features: [
      'Venta de productos',
      'Carrito de compra',
      'Pagos integrados',
      'Configuración inicial'
    ]
  }
}

const openModal = (type) => {
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

        <a :href="`https://wa.me/9331244508?text=Hola,%20quiero%20cotizar%20${selected.title}`" target="_blank" class="mt-6 block text-center bg-black text-white py-3 rounded-lg">
          Cotizar por WhatsApp
        </a>
      </div>
    </div>
  </section>
  <section id="servicios" class="bg-[#FDFCF8] px-6 py-18 md:px-12 lg:px-24">
    <div class="mx-auto max-w-7xl">
      
      <div class="mb-16">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/60">Catálogo de Servicios</span>
        <h2 class="mt-4 font-serif text-5xl leading-tight tracking-tighter md:text-6xl">
          Páginas web según lo que <br>
          <span class="italic text-emerald-900">tu negocio necesita</span>.
        </h2>
      </div>

      <div class="border-t border-black/10">
        
        <div class="group flex flex-col justify-between border-b border-black/10 py-10 transition-all hover:bg-emerald-50/50 md:flex-row md:items-center md:px-6">
          <div class="flex-1">
            <h3 class="font-serif text-3xl transition-all group-hover:translate-x-2 md:text-4xl">Landing Pages</h3>
            <p class="mt-2 max-w-md text-sm text-gray-500 uppercase tracking-widest font-bold">
              Para empezar a vender rápido
            </p>
          </div>
          <div class="mt-6 flex-1 md:mt-0">
            <p class="max-w-sm text-lg leading-relaxed text-gray-600">
              Una página simple y clara para mostrar tu servicio y conseguir clientes sin complicaciones.
            </p>
          </div>
          <div class="mt-6 flex justify-end md:mt-0">
            <button @click="openModal('landing')" class="inline-block rounded-full border border-black/20 px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors group-hover:bg-black group-hover:text-white">
              Quiero esta página
            </button>
          </div>
        </div>

        <div class="group flex flex-col justify-between border-b border-black/10 py-10 transition-all hover:bg-emerald-50/50 md:flex-row md:items-center md:px-6">
          <div class="flex-1">
            <h3 class="font-serif text-3xl transition-all group-hover:translate-x-2 md:text-4xl">Página para tu negocio</h3>
            <p class="mt-2 max-w-md text-sm text-gray-500 uppercase tracking-widest font-bold">
              Presencia profesional en internet
            </p>
          </div>
          <div class="mt-6 flex-1 md:mt-0">
            <p class="max-w-sm text-lg leading-relaxed text-gray-600">
              Ideal si quieres mostrar tus servicios, generar confianza y que tus clientes te encuentren fácilmente.
            </p>
          </div>
          <div class="mt-6 flex justify-end md:mt-0">
            <button @click="openModal('negocio')" class="inline-block rounded-full border border-black/20 px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors group-hover:bg-black group-hover:text-white">
              Quiero esta página
            </button>
          </div>
        </div>

        <div class="group flex flex-col justify-between border-b border-black/10 py-10 transition-all hover:bg-emerald-50/50 md:flex-row md:items-center md:px-6">
          <div class="flex-1">
            <h3 class="font-serif text-3xl transition-all group-hover:translate-x-2 md:text-4xl">E-commerce</h3>
            <p class="mt-2 max-w-md text-sm text-gray-500 uppercase tracking-widest font-bold">
              Vende tus productos en línea
            </p>
          </div>
          <div class="mt-6 flex-1 md:mt-0">
            <p class="max-w-sm text-lg leading-relaxed text-gray-600">
              Tu propia tienda online para vender sin depender de redes sociales ni intermediarios.
            </p>
          </div>
          <div class="mt-6 flex justify-end md:mt-0">
            <button @click="openModal('tienda')" class="inline-block rounded-full border border-black/20 px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors group-hover:bg-black group-hover:text-white">
              Quiero esta página
            </button>
          </div>
        </div>

        <div class="group flex flex-col justify-between border-b border-black/10 py-10 transition-all hover:bg-emerald-50/50 md:flex-row md:items-center md:px-6">
          <div class="flex-1">
            <h3 class="font-serif text-3xl transition-all group-hover:translate-x-2 md:text-4xl">Mantenimiento web</h3>
            <p class="mt-2 max-w-md text-sm text-gray-500 uppercase tracking-widest font-bold">
              Nos encargamos por ti
            </p>
          </div>
          <div class="mt-6 flex-1 md:mt-0">
            <p class="max-w-sm text-lg leading-relaxed text-gray-600">
              Actualizamos, cuidamos y mantenemos tu página funcionando para que tú no tengas que preocuparte por nada.
            </p>
          </div>
          <div class="mt-6 flex justify-end md:mt-0">
            <button class="inline-block rounded-full border border-black/20 px-6 py-2 text-xs font-bold uppercase tracking-widest transition-colors group-hover:bg-black group-hover:text-white">
              Ver detalles
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>