<script setup lang="ts">
const sponsors: { path: string; alt: string }[] = [
  { path: "/partners/POLSAlogotypBLACK.png", alt: "Logotyp POLSA" },
]
</script>

<template>
  <div v-if="sponsors.length" class="py-24 w-2/3 mx-auto">
    <p class="font-bold text-center text-5xl">Partnerzy wydarzenia</p>
    <div class="pt-16 flex flex-wrap justify-center">
      <div v-for="sponsor in sponsors" :key="sponsors.indexOf(sponsor)">
        <img class="h-40 my-8 md:mx-8" :src="sponsor.path" :alt="sponsor.alt" />
      </div>
    </div>
  </div>
</template>
