<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import FooterPanel from './components/FooterPanel.vue';
</script>

<template>
  <header class="sticky top-0">
    <NavBar />
  </header>
  <main class="min-h-[100vh] w-2/3 mx-auto">
    <section id="content">
      <router-view />
    </section>
    <section id="sponsors"></section>
  </main>
  <footer>
    <FooterPanel />
  </footer>
</template>
