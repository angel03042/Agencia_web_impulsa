<script setup></script>

<template>
  <footer class="bg-[#1A1A1A] px-6 pt-24 pb-12 text-[#FDFCF8] md:px-12 lg:px-24">
    <div class="mx-auto max-w-7xl">
      
      <div class="grid grid-cols-1 gap-16 border-b border-[#FDFCF8]/10 pb-20 lg:grid-cols-12">
        
        <div class="lg:col-span-5 space-y-8">
          <span class="font-serif text-4xl tracking-tighter md:text-5xl">
            WEB<span class="italic text-emerald-400">.</span>IMPULSA
          </span>
          <p class="max-w-xs text-sm leading-relaxed text-gray-400">
            Combinamos estética atemporal con ingeniería moderna para crear sitios que no solo se ven bien, sino que impulsan resultados reales.
          </p>
          <div class="flex gap-4">
            <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full border border-[#FDFCF8]/20 hover:border-emerald-400 transition-colors">
              <span class="text-[10px] font-bold">IG</span>
            </a>
            <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full border border-[#FDFCF8]/20 hover:border-emerald-400 transition-colors">
              <span class="text-[10px] font-bold">LN</span>
            </a>
            <a href="#" class="h-10 w-10 flex items-center justify-center rounded-full border border-[#FDFCF8]/20 hover:border-emerald-400 transition-colors">
              <span class="text-[10px] font-bold">TW</span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-3 lg:col-start-7">
          <h4 class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-8">Navegación</h4>
          <ul class="space-y-4 text-sm font-medium">
            <li><a href="#inicio" class="hover:text-emerald-400 transition-colors">Inicio</a></li>
            <li><a href="#problema" class="hover:text-emerald-400 transition-colors">Diagnóstico</a></li>
            <li><a href="#servicios" class="hover:text-emerald-400 transition-colors">Servicios</a></li>
            <li><a href="#proyectos" class="hover:text-emerald-400 transition-colors">Portafolio</a></li>
            <li><a href="#contacto" class="hover:text-emerald-400 transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h4 class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-8">Hablemos</h4>
          <ul class="space-y-4 text-sm font-medium">
            <li><a href="mailto:hola@webimpulsa.com" class="hover:underline underline-offset-4">hola@webimpulsa.com</a></li>
            <li class="text-gray-400">Ciudad de México, MX</li>
            <li class="pt-4">
              <a href="#" class="text-[10px] font-bold uppercase tracking-widest hover:text-emerald-400">Política de Privacidad</a>
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 md:flex-row">
        <p>© 2026 WebImpulsa Studio. Todos los derechos reservados.</p>
        <div class="flex items-center gap-2">
          <span>Diseño con propósito</span>
          <span class="h-1 w-1 bg-emerald-400 rounded-full"></span>
          <span>Hecho en 2026</span>
        </div>
        <button @click="window.scrollTo({top: 0, behavior: 'smooth'})" class="hover:text-[#FDFCF8] transition-colors">
          Volver arriba ↑
        </button>
      </div>

    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>