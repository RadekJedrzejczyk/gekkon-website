<script setup lang="ts">
import LinkCell from '@/components/LinkCell.vue';

const posterSubmissionAdress = '/';
const linkText = 'Zgłoszenia do sesji posterowej';

defineProps({
  cell: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <LinkCell v-if="cell" :text="linkText" :link="posterSubmissionAdress" :is-router="false" />
  <a
    class="bg-accent-600 text-marshland-100 p-2 text-center border-solid rounded-lg font-bold hover:bg-accent-600"
    v-else
    :href="posterSubmissionAdress"
    >{{ linkText }}</a
  >
</template>
