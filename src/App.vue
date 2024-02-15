<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <section id="content">
      <router-view />
    </section>
    <section id="sponsors"></section>
  </main>
  <footer></footer>
</template>
