<script setup lang="ts">
import LinkCell from '@/components/LinkCell.vue'

const speakerSubmissionAdress = '/'
const linkText = "Zgłoszenia prelegentów"

defineProps({
  cell: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <LinkCell
    v-if="cell"
    :text="linkText" 
    :link="speakerSubmissionAdress"
    :is-router="false"
  />
  <a
    class="bg-pink-500 text-marshland-100 p-2 text-center border-solid rounded-lg font-bold"
    v-else
    :href="speakerSubmissionAdress"
    >{{ linkText }}</a
  >
</template>
