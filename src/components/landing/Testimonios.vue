<!--Si no tienes clientes aún:

Usa proyectos propios
O testimonios de conocidos-->
<script setup>
</script>

<template>
  <section id="testimonios" class="bg-[#FDFCF8] px-6 py-18 md:px-12 lg:px-24 border-t border-black/5">
    <div class="mx-auto max-w-7xl">
      
      <div class="mb-20">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/60">Portafolio Seleccionado</span>
        <h2 class="mt-4 font-serif text-5xl leading-tight tracking-tighter md:text-6xl">
          Así puede verse <span class="italic text-emerald-900">tu negocio</span> en internet.
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
        
        <a href="https://bibliotecaudea.netlify.app/" target="_black" rel="noopener noreferrer" class="group cursor-pointer">
          <div class="relative overflow-hidden bg-gray-100 aspect-video rounded-sm border border-black/5">
            <img 
              src="/src/assets/biblioteca_udea.webp" 
              alt="Proyecto de E-commerce" 
              class="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black/10">
              Visitir sitio
            </div>
          </div>
          <div class="mt-6 flex justify-between items-baseline border-b border-black/10 pb-4">
            <h3 class="font-serif text-3xl">Sitio web educativo</h3>
            <span class="text-sm italic text-gray-500">Información institucional</span>
          </div>
          <p class="mt-4 text-gray-600 leading-relaxed">
            Diseño claro y fácil de entender, pensado para que los visitantes encuentren la información sin esfuerzo.
          </p>
        </a>

        <a href="https://resena-historica.netlify.app/" target="_black" rel="noopener noreferrer" class="group cursor-pointer">
          <div class="relative overflow-hidden bg-gray-100 aspect-video rounded-sm border border-black/5">
            <img 
              src="/src/assets/reseña_historica.webp" 
              alt="Proyecto Corporativo" 
              class="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black/10">
              Visitir sitio
            </div>
          </div>
          <div class="mt-6 flex justify-between items-baseline border-b border-black/10 pb-4">
            <h3 class="font-serif text-3xl">Página informativa escolar</h3>
            <span class="text-sm italic text-gray-500">Contenido y navegación clara</span>
          </div>
          <p class="mt-4 text-gray-600 leading-relaxed">
            Estructura simple que genera confianza y facilita que los visitantes tomen acción.
          </p>
        </a>
      </div>

      <div class="mt-12 text-center">
        <a href="#contacto" class="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition">
        Quiero una página así
        </a>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
        
        <div class="relative p-8 border border-black/5 bg-white/50 italic">
          <svg class="absolute -top-4 -left-4 h-8 w-8 text-emerald-900/10" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/></svg>
          <p class="text-lg text-gray-700 leading-relaxed">
            "Me ayudó a tener mi primera página web. Ahora mis clientes pueden encontrarme más fácil y se ve mucho más profesional."
          </p>
          <div class="mt-6 not-italic">
            <p class="font-bold text-sm tracking-widest uppercase">Carlos Méndez</p>
            <p class="text-xs text-gray-400 uppercase">Emprendedor Independiente</p>
          </div>
        </div>

        <div class="relative p-8 border border-black/5 bg-white/50 italic">
          <p class="text-lg text-gray-700 leading-relaxed">
            "No sabía nada de páginas web y se encargaron de todo. Fue más fácil de lo que esperaba."
          </p>
          <div class="mt-6 not-italic">
            <p class="font-bold text-sm tracking-widest uppercase">Lucía Rivas</p>
            <p class="text-xs text-gray-400 uppercase">Cliente</p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center p-8 bg-emerald-900 text-white text-center">
          <div class="font-serif text-5xl mb-2">100%</div>
          <p class="text-xs uppercase tracking-[0.2em] opacity-80">Compromiso de entrega</p>
          <div class="h-[1px] w-12 bg-white/30 my-4"></div>
          <p class="text-sm italic">"Te guiamos paso a paso para que tengas tu página web sin complicaciones."</p>
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