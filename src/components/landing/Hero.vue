<!--Incluye:

Título claro (qué haces)
Subtítulo (beneficio)
Botón (CTA)

Ejemplo:

“Creamos páginas web que convierten visitantes en clientes”

“Diseño moderno, rápido y optimizado para ventas”

[Solicitar cotización]-->
<script setup></script>

<template>
  <header class="relative min-h-screen bg-[#FDFCF8] px-6 text-[#1A1A1A] md:px-12 lg:px-24">

    <div class="mx-auto max-w-7xl flex justify-center items-center h-screen">
      <div class="grid grid-cols-1 items-end gap-16 lg:grid-cols-12">
        
        <div class="lg:col-span-7">
          <h1 class="font-serif text-6xl leading-[0.9] tracking-tighter sm:text-8xl lg:text-8xl">
            Creamos <br />
            <span class="italic text-emerald-900">páginas</span> <br />
            que venden.
          </h1>
          
          <div class="mt-12 max-w-md space-y-6">
            <p class="text-lg leading-relaxed text-gray-700">
              Transformamos visitantes en clientes mediante diseño estratégico y psicología visual. No solo hacemos webs, creamos herramientas para tu negocio.
            </p>
            
            <div class="flex flex-wrap gap-4">
              <button class="group relative overflow-hidden border border-black bg-black px-8 py-4 text-white transition-all hover:bg-transparent hover:text-black">
                <span class="relative z-10 font-bold uppercase tracking-widest text-sm">Empezar ahora —</span>
              </button>
            </div>
          </div>
        </div>

        <div class="relative lg:col-span-5">
          <div class="aspect-[7/8] overflow-hidden rounded-t-full border border-black/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" 
              alt="Workplace" 
              class="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div class="absolute -bottom-6 -left-12 hidden md:block bg-emerald-900 p-8 text-white shadow-2xl rotate-[-3deg]">
            <p class="text-xs uppercase tracking-[0.2em] opacity-80">Resultado promedio</p>
            <p class="font-serif text-4xl">+45%</p>
            <p class="text-sm italic">en tasa de conversión</p>
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
</style>