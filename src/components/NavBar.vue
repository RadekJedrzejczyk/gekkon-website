<script setup lang="ts">
import { provide, ref } from 'vue'
import NavItems from '@/components/NavItems.vue'
import BarsIcon from '@/components/icons/BarsIcon.vue'
// import SpeakerLink from '@/components/cells/SpeakerLink.vue'
import LogoComponent from '@/components/LogoComponent.vue'

const isOpened = ref(false)
const navItemClass = "hover:bg-marshland-200 p-2 rounded-lg"

provide('isOpened', isOpened)
</script>

<template>
  <header>
    <router-link to="/" @click="isOpened = false">
      <object type="image/svg+xml" data="/src/assets/baner.svg">
        <img src="@/assets/baner.svg" />
      </object>
    </router-link>
  </header>
  <nav class="bg-marshland-100 text-marshland-900 sticky top-0">
    <div class="mb-16 w-2/3 mx-auto py-4">
      <div class="flex justify-between items-center">
        <!-- Logo component -->
        <router-link to="/" @click="isOpened = false"><LogoComponent /></router-link>
        <!-- Desktop menu -->
        <div class="hidden text-xl lg:flex lg:items-center">
          <!-- <SpeakerLink :cell="false" /> -->
          <NavItems :eachClass="`ml-4 ${navItemClass}`" />
        </div>
        <!-- Burger button -->
        <div class="inline lg:hidden">
          <button @click="isOpened = !isOpened">
            <BarsIcon />
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div
        v-if="isOpened"
        class="grid gap-4 grid-cols-1 my-4 justify-items-end text-lg pt-8 lg:hidden"
      >
        <!-- <SpeakerLink :cell="false" /> -->
        <NavItems :eachClass=navItemClass />
      </div>
    </div>
  </nav>
</template>
