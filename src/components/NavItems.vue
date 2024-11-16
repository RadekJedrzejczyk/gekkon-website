<script setup lang="ts">
import { type LinkItem } from '@/interfaces'
import { inject } from 'vue'

const navItems: Array<LinkItem> = [
  // { name: 'submissions', title: 'Zgłoszenia', accent: true },
  { name: 'posters', title: 'Postery', accent: true },
  { name: 'schedule', title: 'Harmonogram', accent: false },
  { name: 'regulations', title: 'Regulamin', accent: false },
  { name: 'q&a', title: 'Q&A', accent: false },
  { name: 'contact', title: 'Kontakt', accent: false }
]

const isOpened = inject('isOpened')

defineProps({
  eachClass: {
    type: String,
    default: ""
  },
  accentClass: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <router-link
    v-for="item in navItems"
    :key="item.name"
    :to="{ name: item.name }"
    @click="isOpened = !isOpened"
    :class="`${item.accent && accentClass ? accentClass : eachClass}`"
  >
    {{ item.title }}
  </router-link>
</template>
