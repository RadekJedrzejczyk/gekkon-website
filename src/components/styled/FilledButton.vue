<script setup lang="ts">
defineProps({
  additionalClass: {
    type: String,
    default: ''
  },
  bgColor: {
    type: String,
    default: 'marshland-100'
  },
  textColor: {
    type: String,
    default: 'marshland-950'
  }
})
</script>

<template>
  <button
    :class="`bg-${bgColor} text-${textColor} text-center border-solid rounded-lg font-bold p-2 ${additionalClass}`"
  >
    <slot></slot>
  </button>
</template>
