<script setup lang="ts">
import { provide, ref } from 'vue'
import NavItems from '@/components/NavItems.vue'
import BarsIcon from './icons/BarsIcon.vue'

const isOpened = ref(false)
provide('isOpened', isOpened)
</script>

<template>
  <nav class="bg-marshland-100 text-marshland-900">
    <div class="mb-16 w-2/3 mx-auto py-4">
      <div class="flex justify-between">
        <!-- Logo component -->
        <router-link to="/" @click="isOpened = false"> GeKKoN </router-link>
        <!-- Desktop menu -->
        <div class="hidden text-xl md:flex">
          <NavItems classes="ml-4"/>
        </div>
        <div class="inline md:hidden">
          <button @click="isOpened = !isOpened">
            <BarsIcon />
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="isOpened" class="grid gap-4 grid-cols-1 my-4 justify-items-end text-lg md:hidden">
        <NavItems/>
      </div>
    </div>
  </nav>
</template>
