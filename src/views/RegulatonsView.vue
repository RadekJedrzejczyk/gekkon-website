<script setup lang="ts">
import FilledButton from '@/components/styled/FilledButton.vue'
import CenteredHeader from '@/components/styled/CenteredHeader.vue'

const regulationsPDFLink = '/docs/konferencja-gekkon-regulamin.pdf'
</script>

<template>
  <CenteredHeader class="pb-8">Zapoznaj się z regulaminem konferencji</CenteredHeader>
  <div class="flex justify-center w-full">
    <FilledButton bg-color="bg-accent-600" additional-class="w-96"
      ><a :href="regulationsPDFLink" target="_blank">Wersja PDF</a></FilledButton
    >
  </div>
</template>
