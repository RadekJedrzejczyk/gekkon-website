<script setup lang="ts">
import { type GridItem } from '@/interfaces'
import GridPanel from '@/components/GridPanel.vue'
import AboutHeader from '@/components/cells/AboutHeader.vue'
import AboutText from '@/components/cells/AboutText.vue'
import PlaceTimeHeader from '@/components/cells/PlaceTimeHeader.vue'
import PlaceTimeText from '@/components/cells/PlaceTimeText.vue'
import SpeakerHeader from '@/components/cells/SpeakerHeader.vue'
import RegulationsHeader from '@/components/cells/RegulationsHeader.vue'
import RegulationsLink from '@/components/cells/RegulationsLink.vue'
import ContactHeader from '@/components/cells/ContactHeader.vue'
import ContactText from '@/components/cells/ContactText.vue'
import SpeakerLink from '@/components/cells/SpeakerLink.vue'

const items: Array<GridItem> = [
  { description: AboutHeader, object: AboutText },
  { description: PlaceTimeHeader, object: PlaceTimeText },
  { description: SpeakerHeader, object: SpeakerLink },
  { description: RegulationsHeader, object: RegulationsLink },
  { description: ContactHeader, object: ContactText }
]
</script>

<template>
  <GridPanel :items="items" />
</template>
