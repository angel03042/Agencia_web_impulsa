<!--Si no tienes clientes aún:

Usa proyectos propios
O testimonios de conocidos-->
<script setup>
</script>

<template>
  <section id="testimonios" class="bg-[#FDFCF8] px-6 py-24 md:px-12 lg:px-24 border-t border-black/5">
    <div class="mx-auto max-w-7xl">
      
      <div class="mb-20">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/60">Portafolio Seleccionado</span>
        <h2 class="mt-4 font-serif text-5xl leading-tight tracking-tighter md:text-6xl">
          Calidad sobre <span class="italic text-emerald-900">cantidad</span>.
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        
        <div class="group cursor-pointer">
          <div class="relative overflow-hidden bg-gray-100 aspect-video rounded-sm border border-black/5">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" 
              alt="Proyecto de E-commerce" 
              class="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black/10">
              Concepto 2026
            </div>
          </div>
          <div class="mt-6 flex justify-between items-baseline border-b border-black/10 pb-4">
            <h3 class="font-serif text-3xl">Estudio Áurea</h3>
            <span class="text-sm italic text-gray-500">Diseño & Estrategia SEO</span>
          </div>
          <p class="mt-4 text-gray-600 leading-relaxed">
            Un ejercicio de diseño enfocado en la conversión para marcas de lujo, logrando un tiempo de carga inferior a 0.8s.
          </p>
        </div>

        <div class="group cursor-pointer">
          <div class="relative overflow-hidden bg-gray-100 aspect-video rounded-sm border border-black/5">
            <img 
              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop" 
              alt="Proyecto Corporativo" 
              class="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black/10">
              Proyecto Real
            </div>
          </div>
          <div class="mt-6 flex justify-between items-baseline border-b border-black/10 pb-4">
            <h3 class="font-serif text-3xl">Nova Tech</h3>
            <span class="text-sm italic text-gray-500">Página Corporativa</span>
          </div>
          <p class="mt-4 text-gray-600 leading-relaxed">
            Rediseño completo de la presencia digital, enfocándonos en la arquitectura de información para captar leads B2B.
          </p>
        </div>
      </div>

      <div class="mt-32 grid grid-cols-1 gap-12 lg:grid-cols-3">
        
        <div class="relative p-8 border border-black/5 bg-white/50 italic">
          <svg class="absolute -top-4 -left-4 h-8 w-8 text-emerald-900/10" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/></svg>
          <p class="text-lg text-gray-700 leading-relaxed">
            "La atención al detalle en la tipografía y la rapidez de respuesta superaron nuestras expectativas. Se nota que hay una estrategia detrás de cada pixel."
          </p>
          <div class="mt-6 not-italic">
            <p class="font-bold text-sm tracking-widest uppercase">Carlos Méndez</p>
            <p class="text-xs text-gray-400 uppercase">Emprendedor Independiente</p>
          </div>
        </div>

        <div class="relative p-8 border border-black/5 bg-white/50 italic">
          <p class="text-lg text-gray-700 leading-relaxed">
            "Buscábamos algo que no pareciera una plantilla barata y lo conseguimos. Nuestra web ahora proyecta la seriedad que nuestro negocio necesitaba."
          </p>
          <div class="mt-6 not-italic">
            <p class="font-bold text-sm tracking-widest uppercase">Lucía Rivas</p>
            <p class="text-xs text-gray-400 uppercase">Consultora de Marca</p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center p-8 bg-emerald-900 text-white text-center">
          <div class="font-serif text-5xl mb-2">100%</div>
          <p class="text-xs uppercase tracking-[0.2em] opacity-80">Compromiso de entrega</p>
          <div class="h-[1px] w-12 bg-white/30 my-4"></div>
          <p class="text-sm italic">"Cada proyecto recibe nuestra total atención hasta que la conversión está asegurada."</p>
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