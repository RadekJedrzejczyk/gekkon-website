<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faSquareFacebook)
</script>

<template>
  <font-awesome-icon :icon="['fab', 'square-facebook']" />
</template>
