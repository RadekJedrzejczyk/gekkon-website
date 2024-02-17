<script setup lang="ts">
import { type LinkItem } from '@/interfaces'
import { inject } from 'vue'

const navItems: Array<LinkItem> = [
  { name: 'schedule', title: 'Harmonogram' },
  { name: 'regulations', title: 'Regulamin' },
  { name: 'contact', title: 'Kontakt' }
]

const isOpened = inject('isOpened')
</script>

<template>
  <router-link
    v-for="item in navItems"
    :key="item.name"
    :to="{ name: item.name }"
    @click="isOpened = !isOpened"
  >
    {{ item.title }}
  </router-link>
</template>
