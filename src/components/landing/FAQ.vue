<!--FAQ (Preguntas frecuentes)

Reduce dudas del cliente
Aumenta conversiones-->
<script setup>
</script>

<template>
  <section class="bg-[#FDFCF8] px-6 py-18 md:px-12 lg:px-24">
    <div class="mx-auto max-w-4xl">
      
      <div class="mb-16 text-center">
        <span class="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-900/60">Resolviendo dudas</span>
        <h2 class="mt-4 font-serif text-5xl tracking-tighter md:text-6xl">
          Preguntas <span class="italic">frecuentes</span>.
        </h2>
      </div>

      <div class="space-y-2 border-t border-black/10">
        
        <details class="group border-b border-black/10 py-6">
          <summary class="flex cursor-pointer items-center justify-between list-none">
            <h3 class="text-xl font-bold tracking-tight md:text-2xl">¿Cuánto tiempo tarda en estar lista mi web?</h3>
            <span class="text-2xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <div class="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Una landing page suele estar lista en 2 a 5 días. Si es una página más completa, puede tomar de 1 a 2 semanas.
          </div>
        </details>

        <details class="group border-b border-black/10 py-6">
          <summary class="flex cursor-pointer items-center justify-between list-none">
            <h3 class="text-xl font-bold tracking-tight md:text-2xl">¿La página será de mi propiedad?</h3>
            <span class="text-2xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <div class="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Sí, la página es completamente tuya. Una vez terminada, tendrás acceso total y podrás usarla como quieras.
          </div>
        </details>

        <details class="group border-b border-black/10 py-6">
          <summary class="flex cursor-pointer items-center justify-between list-none">
            <h3 class="text-xl font-bold tracking-tight md:text-2xl">¿Necesito proporcionar los textos e imágenes?</h3>
            <span class="text-2xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <div class="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Si ya tienes textos e imágenes, perfecto. Si no, te ayudamos a crearlos para que no tengas que preocuparte por eso.
          </div>
        </details>

        <details class="group border-b border-black/10 py-6">
          <summary class="flex cursor-pointer items-center justify-between list-none">
            <h3 class="text-xl font-bold tracking-tight md:text-2xl">¿Cómo garantizáis que la web genere ventas?</h3>
            <span class="text-2xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <div class="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Diseñamos la página para que sea clara, rápida y fácil de usar, guiando al visitante a contactarte o comprar.
          </div>
        </details>

        <details class="group border-b border-black/10 py-6">
          <summary class="flex cursor-pointer items-center justify-between list-none">
            <h3 class="text-xl font-bold tracking-tight md:text-2xl">
            ¿Cómo es el pago?
            </h3>
            <span class="text-2xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <div class="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Se trabaja con un anticipo para iniciar y el resto al finalizar el proyecto. 
            También podemos adaptarnos según el tipo de página.
          </div>
        </details>

        <details class="group border-b border-black/10 py-6">
          <summary class="flex cursor-pointer items-center justify-between list-none">
            <h3 class="text-xl font-bold tracking-tight md:text-2xl">
            ¿Puedo pedir cambios?
            </h3>
            <span class="text-2xl transition-transform group-open:rotate-45">+</span>
          </summary>
          <div class="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Sí, durante el proceso puedes pedir ajustes para asegurarnos de que la página quede como la necesitas.
          </div>
        </details>

      </div>

      <p class="mt-12 text-center text-sm text-gray-500">
        ¿Tienes otra pregunta? 
        <a href="#contacto" class="font-bold text-black underline decoration-emerald-900/30 underline-offset-4">Escríbenos directamente</a>.
      </p>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');

.font-serif {
  font-family: 'Playfair Display', serif;
}

/* Ocultar el marcador por defecto de <details> en Safari/Chrome */
summary::-webkit-details-marker {
  display: none;
}
</style>