<script setup lang="ts">
defineProps({
  reversed: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="w-full grid gap-16 md:grid-cols-2">
    <div class="w-full h-full flex items-center md:justify-center">
      <slot name="firstElem"></slot>
    </div>
    <div
      :class="`w-full h-full flex items-center md:justify-center ${reversed ? 'md:order-first' : ''}`"
    >
      <slot name="secondElem"></slot>
    </div>
  </div>
</template>
