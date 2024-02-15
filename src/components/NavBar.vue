<script setup lang="ts">
import { provide, ref } from 'vue'
import NavItems from '@/components/NavItems.vue'

const isOpened = ref(false)
provide('isOpened', isOpened)
</script>

<template>
  <nav>
    <!-- Logo component -->
    <!-- Desktop menu -->
    <div class="hidden md:flex">
      <NavItems />
    </div>
    <div class="md:hidden">
      <!-- icon button with hamburger -->
      <button @click="isOpened = !isOpened">menu</button>
      <!-- Mobile menu -->
      <div v-if="isOpened" class="grid gap-4 grid-cols-1 my-4">
        <NavItems />
      </div>
    </div>
  </nav>
</template>
