<script setup>
import video from '@/assets/video.mp4'
import { ref, onMounted } from 'vue'

const palabras = ['venden', 'conectan', 'convencen', 'impactan']
const palabraActual = ref(palabras[0])
let index = 0

onMounted(() => {
  setInterval(() => {
    index = (index + 1) % palabras.length
    palabraActual.value = palabras[index]
  }, 2500) // cada 2.5s
})
</script>

<template>
  <header id="inicio" class="relative min-h-screen bg-[#F8F5EF] px-6 py-24 text-[#1A1A1A] md:py-52  md:px-12 lg:px-24 lg:py-0">

    <div class="mx-auto max-w-7xl flex justify-center items-center h-screen">
      <div class="grid grid-cols-1 items-end gap-16 lg:grid-cols-12">
        
        <div class="lg:col-span-7">
          <h1 class="font-serif text-5xl leading-[0.9] tracking-tighter sm:text-7xl xl:text-8xl" data-aos="fade-up">
            Creamos <br /><span class="italic text-emerald-900">páginas</span> <br />que
            <span class="relative inline-block ml-2 overflow-hidden align-bottom">
              <transition name="fade" mode="out-in">
                <span :key="palabraActual" class="inline-block">
                {{ palabraActual }}.
                </span>
              </transition>
            </span>
          </h1>
          
          <div class="mt-12 max-w-md space-y-6" data-aos="fade-up" data-aos-duration="2000">
            <p class="text-lg leading-relaxed text-gray-700">
              Creamos páginas web para negocios y profesionales que aún no tienen presencia digital. Haz que tus clientes te encuentren, confíen en ti y te contacten fácilmente.
            </p>
            
            <div class="flex flex-wrap gap-4">
              <a href="#diagnostico" class="group relative overflow-hidden border border-black bg-black px-8 py-4 text-white transition-all hover:bg-transparent hover:text-black">
                <span class="relative z-10 font-bold uppercase tracking-widest text-sm">Empezar ahora —</span>
              </a>
            </div>
          </div>
        </div>

        <div class="relative lg:col-span-5">
          <div class="aspect-[7/8] overflow-hidden rounded-t-full border border-black/10 shadow-2xl" data-aos="flip-up">
            <video class="h-full w-full object-cover xl:grayscale hover:grayscale-0 transition-all duration-700" :src="video" autoplay="" loop muted="" playsinline=""></video>
          </div>

          <div class="animation absolute -bottom-6 -left-12 hidden md:block bg-emerald-900 p-8 text-white shadow-2xl rotate-[-3deg]">
            <p class="text-xs uppercase tracking-[0.2em] opacity-80">Más clientes</p>
            <p class="font-serif text-4xl">24/7</p>
            <p class="text-sm italic">en línea para ti</p>
          </div>
        </div>

      </div>
    </div>
  </header>
</template>

<style>
/* Importamos una fuente Serif elegante si no la tienes en tu proyecto */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}

.animation {
  animation: cartel 2s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@keyframes cartel {
  0%{
    opacity: 0;
    scale: .5;
  }
  40%{
    opacity: 0;
  }
  100%{
    opacity: 1;
    scale: 1;
  }
}
</style>