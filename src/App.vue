<script setup lang="ts">
</script>

<template>
  <header>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
  </header>
  <main class="flex justify-center min-w-full">
    <section id="content">
      <router-view />
    </section>
    <section id="sponsors"></section>
  </main>
  <footer></footer>
</template>
