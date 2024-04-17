<script setup lang="ts">
import CellComponent from './CellComponent.vue'
</script>

<template>
  <CellComponent>
    <div class="w-full text-xl leading-relaxed">
      <slot></slot>
    </div>
  </CellComponent>
</template>
