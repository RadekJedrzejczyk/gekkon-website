<script setup lang="ts">
import { provide, ref } from 'vue'
import NavItems from '@/components/NavItems.vue'
import BarsIcon from './icons/BarsIcon.vue'

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
      <button @click="isOpened = !isOpened">
        <BarsIcon />
      </button>
      <!-- Mobile menu -->
      <div v-if="isOpened" class="grid gap-4 grid-cols-1 my-4">
        <NavItems />
      </div>
    </div>
  </nav>
</template>
