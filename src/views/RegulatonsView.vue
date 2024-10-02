<script setup lang="ts">
import FilledButton from '@/components/styled/FilledButton.vue'
import CenteredHeader from '@/components/styled/CenteredHeader.vue'

const regulationsPDFLink = '/docs/konferencja-gekkon-regulamin.pdf'
</script>

<template>
  <CenteredHeader class="pb-8">Zapoznaj się z regulaminem konferencji</CenteredHeader>
  <div class="flex justify-center w-full">
    <a :href="regulationsPDFLink" target="_blank">
      <FilledButton
        bg-color="bg-accent-600"
        text-color="text-marshland-100"
        additional-class="w-96 hover:bg-accent-700 "
        >Wersja PDF</FilledButton
      ></a
    >
  </div>
</template>
