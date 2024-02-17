<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope)
</script>

<template>
  <font-awesome-icon :icon="['fas', 'envelope']" />
</template>
