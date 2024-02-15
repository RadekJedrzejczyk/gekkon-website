<script setup lang="ts">
import { type GridItem } from '@/interfaces'
import GridPanel from '@/components/GridPanel.vue'
import DescriptionItem from '@/components/DescriptionItem.vue'
import ObjectItem from '@/components/ObjectItem.vue'
const items: Array<GridItem> = [
  { id: 1, description: DescriptionItem, object: ObjectItem },
  { id: 2, description: DescriptionItem, object: ObjectItem },
  { id: 3, description: DescriptionItem, object: ObjectItem },
  { id: 4, description: DescriptionItem, object: ObjectItem }
]
</script>

<template>
  <GridPanel :items="items" />
</template>
