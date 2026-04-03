<!--Repite el llamado a la acción:

“Solicita tu página web hoy”
Botón: WhatsApp / formulario-->
<script setup>
</script>

<template>
  <section id="contacto" class="bg-[#1A1A1A] px-6 py-24 text-[#FDFCF8] md:px-12 lg:px-24">
    <div class="mx-auto max-w-7xl">
      
      <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        
        <div>
          <span class="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-400/60">Próximo paso</span>
          <h2 class="mt-6 font-serif text-6xl leading-[0.9] tracking-tighter sm:text-7xl">
            Hablemos <br> de tu <br> <span class="italic text-emerald-400">proyecto</span>.
          </h2>
          <p class="mt-10 max-w-sm text-lg leading-relaxed text-gray-400">
            Estamos listos para transformar tu presencia digital. Elige el canal que prefieras y empecemos a construir algo excepcional hoy mismo.
          </p>
        </div>

        <div class="flex flex-col gap-6">
          
          <a href="https://wa.me/9331244508" target="_blank" 
             class="group flex items-center justify-between border border-[#FDFCF8]/20 bg-[#FDFCF8]/5 p-8 transition-all hover:border-emerald-400">
            <div>
              <p class="text-[10px] font-bold uppercase tracking-widest opacity-60">Respuesta inmediata</p>
              <h3 class="mt-1 text-3xl font-bold tracking-tight">Vía WhatsApp</h3>
            </div>
            <div class="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 text-black transition-transform group-hover:scale-110">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
          </a>

          <a href="#formulario" 
             class="group flex items-center justify-between border border-[#FDFCF8]/20 bg-transparent p-8 transition-all hover:bg-[#FDFCF8] hover:text-[#1A1A1A]">
            <div>
              <p class="text-[10px] font-bold uppercase tracking-widest opacity-60">Planificación a medida</p>
              <h3 class="mt-1 text-3xl font-bold tracking-tight">Enviar Formulario</h3>
            </div>
            <div class="flex h-12 w-12 items-center justify-center rounded-full border border-current transition-transform group-hover:rotate-45">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
          </a>

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