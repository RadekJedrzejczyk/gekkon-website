<script setup lang="ts">
import { type GridItem } from '@/interfaces'
import GridPanel from '@/components/GridPanel.vue'
import AboutHeader from '@/components/cells/AboutHeader.vue'
import AboutText from '@/components/cells/AboutText.vue'
import PlaceTimeHeader from '@/components/cells/PlaceTimeHeader.vue'
import PlaceTimeText from '@/components/cells/PlaceTimeText.vue'
// import SpeakerHeader from '@/components/cells/SpeakerHeader.vue'
// import SpeakerLink from '@/components/cells/SpeakerLink.vue'
import ScheduleHeader from '@/components/cells/ScheduleHeader.vue'
import ScheduleLink from '@/components/cells/ScheduleLink.vue'
import RegulationsHeader from '@/components/cells/RegulationsHeader.vue'
import RegulationsLink from '@/components/cells/RegulationsLink.vue'
import ContactHeader from '@/components/cells/ContactHeader.vue'
import ContactLink from '@/components/cells/ContactLink.vue'


const items: Array<GridItem> = [
  { description: AboutHeader, object: AboutText },
  { description: PlaceTimeHeader, object: PlaceTimeText },
  // { description: SpeakerHeader, object: SpeakerLink },
  { description: ScheduleHeader, object: ScheduleLink },
  { description: RegulationsHeader, object: RegulationsLink },
  { description: ContactHeader, object: ContactLink }
]
</script>

<template>
  <GridPanel :items="items" />
</template>
