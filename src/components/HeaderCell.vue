<script setup lang="ts">
import CellComponent from '@/components/CellComponent.vue'

defineProps<{
  text: string
}>()
</script>

<template>
  <CellComponent>
    <p class="font-medium text-4xl md:text-5xl md:text-center">{{ text }}</p>
  </CellComponent>
</template>
