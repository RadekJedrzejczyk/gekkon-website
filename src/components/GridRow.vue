<script setup lang="ts">
defineProps<{
  reversed: boolean
}>()
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2">
    <div>
      <slot name="description"></slot>
    </div>
    <div :class="reversed ? 'md:order-first' : ''">
      <slot name="object"></slot>
    </div>
  </div>
</template>
