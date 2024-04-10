<script setup lang="ts">
import CellComponent from '@/components/CellComponent.vue'
const props = defineProps({
  text: String,
  link: String,
  isRouter: Boolean,
  tagClass: {
    type: String,
    default: ""
  }
})

const linkClass = props.tagClass ? props.tagClass :
  'bg-marshland-100 text-marshland-950 p-2 text-center w-4/5 border-solid rounded-lg font-bold'
</script>

<template>
  <CellComponent>
    <router-link v-if="isRouter" :class="linkClass" :to="{ name: link }">{{ text }}</router-link>
    <a v-else :class="linkClass" :href="link" target="_blank">{{ text }}</a>
  </CellComponent>
</template>
