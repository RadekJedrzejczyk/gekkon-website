<script setup lang="ts">
import NavItems from '@/components/NavItems.vue'
</script>

<template>
  <div class="mt-16 w-2/3 mx-auto">
    <div class="grid md:grid-cols-3 justify-items-center">
      <div>
        <p>Dane adresowe</p>
      </div>
      <div>
        <NavItems classes="block"/>
      </div>
      <div>Sociale</div>
    </div>
    <p class="text-center mt-8 pb-8">
      Created with ♥ by <a href="https://github.com/karo-fox">Karolina Kozubik</a>, 2024
    </p>
  </div>
</template>
