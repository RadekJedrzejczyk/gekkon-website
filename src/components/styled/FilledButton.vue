<script setup lang="ts">
defineProps({
  bgColor: {
    type: String,
    default: 'bg-marshland-100'
  },
  textColor: {
    type: String,
    default: 'text-marshland-950'
  },
  additionalClass: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button
    :class="`${bgColor} ${textColor} text-center border-solid rounded-lg font-bold p-2 ${additionalClass}`"
  >
    <slot></slot>
  </button>
</template>
