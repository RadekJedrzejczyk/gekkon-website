<script setup lang="ts">
import type { GridItem } from '@/interfaces'
import GridRow from '@/components/GridRow.vue'

defineProps<{
  items: Array<GridItem>
}>()
</script>

<template>
  <div class="grid grid-cols-1 gap-4">
    <GridRow v-for="item in items" :key="item.id" :reversed="item.id % 2 == 0">
      <template v-slot:description>
        <component :is="item.description" />
      </template>
      <template v-slot:object>
        <component :is="item.object" />
      </template>
    </GridRow>
  </div>
</template>
