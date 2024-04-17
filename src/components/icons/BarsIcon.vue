<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faBars)
</script>

<template>
  <font-awesome-icon :icon="['fas', 'bars']" />
</template>
