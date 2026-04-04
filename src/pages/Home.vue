<script setup>
import { onMounted } from 'vue'
import Hero from "../components/landing/Hero.vue";
import Problema from "../components/landing/Problema.vue";
import Solucion from "../components/landing/Solucion.vue";
import Servicios from "../components/landing/Servicios.vue";
import Testimonios from "../components/landing/Testimonios.vue";
import FAQ from "../components/landing/FAQ.vue";
import CTA from "../components/landing/CTA.vue";

import Navbar from "../components/layout/Navbar.vue";
import Footer from "../components/layout/Footer.vue";

import AOS from 'aos';
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: false
  })
})
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
