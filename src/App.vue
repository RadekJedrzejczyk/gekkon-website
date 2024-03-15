<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import FooterPanel from '@/components/FooterPanel.vue'
import PartnersPanel from '@/components/PartnersPanel.vue'
</script>

<template>
  <header class="sticky top-0">
    <NavBar />
  </header>
  <main class="min-h-[50vh] w-2/3 mx-auto pb-32">
    <router-view />
  </main>
  <section id="sponsors" class="bg-marshland-100 text-marshland-950">
    <PartnersPanel />
  </section>
  <footer class="bg-marshland-800">
    <FooterPanel />
  </footer>
</template>
