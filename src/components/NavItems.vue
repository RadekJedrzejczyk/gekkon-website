<script setup lang="ts">
import { type LinkItem } from '@/interfaces'
import { inject } from 'vue'

const navItems: Array<LinkItem> = [{ name: 'home' }, { name: 'about' }]

const toTitle = (name: String) =>
  (name.charAt(0).toUpperCase() + name.slice(1)).trim().replace('/[-_]/gm', ' ')

const isOpened = inject('isOpened')
</script>

<template>
  <router-link
    v-for="item in navItems"
    :key="item.name"
    :to="{ name: item.name }"
    @click="isOpened = !isOpened"
  >
    {{ toTitle(item.name) }}
  </router-link>
</template>
