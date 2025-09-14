<script setup lang="ts">
import FilledButton from '@/components/styled/FilledButton.vue'
import CenteredHeader from '@/components/styled/CenteredHeader.vue'

const regulationsPDFLink = '/docs/GeKKoN_Mowi_Regulamin.pdf'
</script>

<template>
  <CenteredHeader class="pb-8">Zapoznaj się z regulaminem wydarzenia</CenteredHeader>
  <div class="flex justify-center w-full">
    <a :href="regulationsPDFLink" target="_blank">
      <FilledButton
        bg-color="bg-accent-600"
        text-color="text-marshland-100"
        additional-class="w-64 md:w-96 hover:bg-accent-700 "
        >Wersja PDF</FilledButton
      ></a
    >
  </div>
</template>
