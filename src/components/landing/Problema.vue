<!--Objetivo: que el cliente diga “eso me pasa a mí”

Ejemplo:

¿Tu negocio no aparece en internet?
¿Tu página no genera ventas?
¿Se ve mal en celular?-->
<script setup>
</script>

<template>
  <section id="problema" class="bg-[#FDFCF8] px-6 py-24 md:px-12 lg:px-24 border-t border-black/5">
    <div class="mx-auto max-w-7xl">
      
      <div class="mb-12 max-w-3xl">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/60">Diagnóstico actual</span>
        <h2 class="mt-4 font-serif text-5xl leading-tight tracking-tighter md:text-6xl">
          Tener una web no es suficiente si nadie la <span class="italic font-normal">encuentra</span>.
        </h2>
      </div>

      <div class="grid grid-cols-1 gap-12 border-t border-black/10 pt-16 lg:grid-cols-3">
        
        <div class="group space-y-6">
          <div class="flex items-baseline gap-4">
            <span class="font-serif text-2xl italic text-emerald-900/40">01.</span>
            <h3 class="text-2xl font-bold tracking-tight">¿Tu negocio es invisible en Google?</h3>
          </div>
          <p class="text-gray-600 leading-relaxed pl-10">
            Puedes tener el mejor producto del mundo, pero si no apareces en las búsquedas, tu competencia se queda con tus clientes cada mañana.
          </p>
          <div class="h-[1px] w-0 bg-emerald-900 transition-all duration-700 group-hover:w-full pl-10"></div>
        </div>

        <div class="group space-y-6">
          <div class="flex items-baseline gap-4">
            <span class="font-serif text-2xl italic text-emerald-900/40">02.</span>
            <h3 class="text-2xl font-bold tracking-tight">¿Recibes visitas pero ninguna venta?</h3>
          </div>
          <p class="text-gray-600 leading-relaxed pl-10">
            Tu página actual es un laberinto. Si los usuarios no entienden qué vendes en los primeros 3 segundos, se van para no volver jamás.
          </p>
          <div class="h-[1px] w-0 bg-emerald-900 transition-all duration-700 group-hover:w-full"></div>
        </div>

        <div class="group space-y-6">
          <div class="flex items-baseline gap-4">
            <span class="font-serif text-2xl italic text-emerald-900/40">03.</span>
            <h3 class="text-2xl font-bold tracking-tight">¿Se ve antigua o mal en móviles?</h3>
          </div>
          <p class="text-gray-600 leading-relaxed pl-10">
            El 80% de tus clientes te ven desde un celular. Una web que no carga o se desconfigura proyecta una imagen de abandono y poca confianza.
          </p>
          <div class="h-[1px] w-0 bg-emerald-900 transition-all duration-700 group-hover:w-full"></div>
        </div>

      </div>

      <div class="mt-18 flex flex-col items-center justify-between gap-8 border border-black/10 p-12 md:flex-row">
        <p class="max-w-xl text-xl font-medium leading-relaxed">
          Si te identificas con al menos uno de estos puntos, no tienes un problema de diseño, tienes un problema de <span class="underline decoration-emerald-900/30 underline-offset-8">estrategia digital</span>.
        </p>
        <a href="#solucion" class="text-sm font-bold uppercase tracking-widest hover:line-through">
          Ver cómo lo arreglamos →
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