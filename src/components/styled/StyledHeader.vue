<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: '3xl'
  }
})
</script>

<template>
  <p :class="`font-medium text-${size} pb-4`">
    <slot></slot>
  </p>
</template>