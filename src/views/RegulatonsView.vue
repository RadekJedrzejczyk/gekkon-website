<script setup lang="ts">
import LinkCell from '@/components/LinkCell.vue'

const regulationsPDFLink = '/docs/konferencja-gekkon-regulamin.pdf'
const headerStyle = 'font-medium text-3xl pb-4'
const linkClass =
  'bg-accent-600 text-marshland-950 p-2 text-center mx-auto border-solid rounded-lg font-bold hover:bg-accent-700'
</script>

<template>
  <h1 :class="`${headerStyle} text-center`">Zapoznaj się z regulaminem konferencji</h1>
  <LinkCell
    text="Pobierz wersję PDF"
    :link="regulationsPDFLink"
    :is-router="false"
    :tag-class="linkClass"
  />
</template>
