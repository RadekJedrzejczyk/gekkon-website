<script setup lang="ts">
import NavItems from '@/components/NavItems.vue'
</script>

<template>
  <div class="mt-16 pt-8 w-2/3 mx-auto">
    <div class="grid md:grid-cols-3 justify-items-center pb-16">
      <div>
        <p class="font-bold text-lg pb-4">Europejskie Forum Studentów AEGEE-Gliwice</p>
        <p class="pb-4">
          Centrum Kultury Studenckiej "Mrowisko" <br>
          ul. Pszczyńska 85 <br>
          44-100 Gliwice <br>
        </p>
        <p>email: gekkon@aegee-gliwice.com</p>
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
