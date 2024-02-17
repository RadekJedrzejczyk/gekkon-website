<script setup lang="ts">
import CellComponent from './CellComponent.vue'
defineProps<{
  text: string
  link: string
  isRouter: boolean
}>()

const linkClass = 'bg-black text-white p-2 text-center w-4/5 border-solid rounded-lg font-bold'
</script>

<template>
  <CellComponent>
    <router-link v-if="isRouter" :class="linkClass" :to="{ name: link }">{{ text }}</router-link>
    <a v-else :class="linkClass" :href="link">{{ text }}</a>
  </CellComponent>
</template>
