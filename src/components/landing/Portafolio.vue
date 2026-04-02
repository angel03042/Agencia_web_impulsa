<!--Muestra ejemplos:

Imágenes o mockups
Antes / después (si puedes)
Proyectos reales (aunque sean ficticios al inicio)

Esto genera confianza-->
<script setup>
</script>

<template>
  <section id="proyectos" class="bg-[#FDFCF8] px-6 py-24 md:px-12 lg:px-24 border-t border-black/5">
    <div class="mx-auto max-w-7xl">
      
      <div class="mb-20 flex flex-col items-baseline justify-between gap-6 md:flex-row">
        <div class="max-w-2xl">
          <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/60">Casos de Estudio</span>
          <h2 class="mt-4 font-serif text-5xl leading-tight tracking-tighter md:text-6xl">
            La <span class="italic text-emerald-900">anatomía</span> de un <br> sitio que vende.
          </h2>
        </div>
        <p class="text-sm font-medium uppercase tracking-widest opacity-40">Desliza para explorar —</p>
      </div>

      <div class="mb-32">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div class="relative">
            <span class="absolute top-4 left-4 z-10 bg-black px-3 py-1 text-[10px] font-bold uppercase text-white">Diseño Genérico (Antes)</span>
            <div class="aspect-video overflow-hidden border border-black/10 bg-gray-200 opacity-60">
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop" class="h-full w-full object-cover blur-[2px]" alt="Web antigua">
            </div>
            <p class="mt-4 text-xs font-bold uppercase tracking-widest text-gray-400">Problemas: Carga lenta, confusa, sin identidad.</p>
          </div>

          <div class="relative group">
            <span class="absolute top-4 left-4 z-10 bg-emerald-900 px-3 py-1 text-[10px] font-bold uppercase text-white">Estrategia Boutique (Después)</span>
            <div class="aspect-video overflow-hidden border border-emerald-900/20 shadow-2xl transition-all duration-700 group-hover:shadow-emerald-900/10">
              <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop" class="h-full w-full object-cover" alt="Web moderna">
            </div>
            <p class="mt-4 text-xs font-bold uppercase tracking-widest text-emerald-900">Resultado: +60% de retención de usuarios.</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        
        <div class="lg:col-span-4 space-y-6">
          <h3 class="font-serif text-3xl">Optimización <br> Multi-dispositivo</h3>
          <p class="text-gray-600 leading-relaxed">
            No adaptamos tu web al móvil; la diseñamos pensando en el pulgar del usuario. Interfaces fluidas que se sienten nativas en cualquier pantalla.
          </p>
          <ul class="space-y-3 text-sm font-bold uppercase tracking-tighter">
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 bg-emerald-900 rounded-full"></span> Velocidad de carga < 1.2s</li>
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 bg-emerald-900 rounded-full"></span> Navegación intuitiva</li>
            <li class="flex items-center gap-2"><span class="h-1.5 w-1.5 bg-emerald-900 rounded-full"></span> Checkout en 3 pasos</li>
          </ul>
        </div>

        <div class="lg:col-span-8 relative">
          <div class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-50 opacity-50"></div>
          
          <div class="flex items-end gap-4 md:gap-8">
            <div class="relative flex-1 overflow-hidden rounded-t-xl border-x-8 border-t-8 border-black shadow-2xl">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" class="w-full" alt="Desktop View">
            </div>
            <div class="relative w-1/3 overflow-hidden rounded-3xl border-8 border-black shadow-2xl transform translate-y-8">
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=400&auto=format&fit=crop" class="w-full" alt="Mobile View">
            </div>
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