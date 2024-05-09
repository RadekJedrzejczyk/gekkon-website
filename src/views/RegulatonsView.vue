<script setup lang="ts">
// import LowerHeader from '@/components/LowerHeader.vue'
import FilledButton from '@/components/FilledButton.vue'
import CenteredHeader from '@/components/CenteredHeader.vue'

const regulationsPDFLink = '/docs/konferencja-gekkon-regulamin.pdf'
</script>

<template>
  <CenteredHeader class="pb-8">Zapoznaj się z regulaminem konferencji</CenteredHeader>
  <div class="flex justify-center">
    <FilledButton class="w-3/5"
      ><a :href="regulationsPDFLink" target="_blank">Pobierz wersję PDF</a></FilledButton
    >
  </div>
</template>
