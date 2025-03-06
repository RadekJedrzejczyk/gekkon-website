<script setup lang="ts">
import { provide, ref } from 'vue'
import NavItems from '@/components/NavItems.vue'
import BarsIcon from '@/components/icons/BarsIcon.vue'
// import SpeakerLink from '@/components/cells/SpeakerLink.vue'
import LogoComponent from '@/components/LogoComponent.vue'

import banerUrl from "@/assets/baner.svg"

const isOpened = ref(false)
const navItemClass = "hover:bg-marshland-200 p-2 rounded-lg"
const navAccentClass = "text-marshland-100 bg-accent-600 hover:bg-accent-700 p-2 rounded-lg font-bold"

provide('isOpened', isOpened)
</script>

<template>
  <header>
    <router-link to="/" @click="isOpened = false">
      <object type="image/svg+xml" :data="banerUrl">
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
          <NavItems :eachClass="`ml-4 ${navItemClass}`" :accentClass="navAccentClass" />
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
        <NavItems :eachClass="navItemClass" :accentClass="navAccentClass" />
      </div>
    </div>
  </nav>
</template>
