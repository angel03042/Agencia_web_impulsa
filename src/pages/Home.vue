<script setup>
import Hero from "../components/landing/Hero.vue";
import Problema from "../components/landing/Problema.vue";
import Solucion from "../components/landing/Solucion.vue";
import Servicios from "../components/landing/Servicios.vue";
import Testimonios from "../components/landing/Testimonios.vue";
import FAQ from "../components/landing/FAQ.vue";
import CTA from "../components/landing/CTA.vue";

import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";
</script>

<template>
  <Navbar />
  <Hero />
  <Problema />
  <Solucion />
  <Servicios />
  <Testimonios />
  <FAQ />
  <CTA />
  <Footer />
</template>
