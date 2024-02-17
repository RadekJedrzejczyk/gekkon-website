<script setup lang="ts">
import CellComponent from './CellComponent.vue'
defineProps<{
  text: string
  link: string
}>()
</script>

<template>
  <CellComponent>
    <a class="bg-black text-white p-2 text-center w-4/5 border-solid rounded-lg font-bold" :href="link">{{ text }}</a>
  </CellComponent>
</template>
