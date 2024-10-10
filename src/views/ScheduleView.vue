<script setup lang="ts">
import StyledHeader from '@/components/styled/StyledHeader.vue'
import StyledText from '@/components/styled/StyledText.vue'
import AccentedText from '@/components/styled/AccentedText.vue'

const tdStyle = 'border-b border-marshland-600 p-4 pl-8 text-marshland-100'

const items: { time: String; name: String }[] = [
  { time: '9:00', name: 'Rozpoczęcie' },
  { time: '9:10', name: 'Bogusław Ziębowicz i kosmiczna muzyka' },
  { time: '9:35', name: 'KP Labs o Intuition-1' },
  { time: '10:00', name: '' },
  { time: '10:25', name: 'Przerwa kawowa' },
  { time: '10:40', name: '' },
  { time: '11:05', name: '' },
  { time: '11:30', name: '' },
  { time: '11:55', name: 'Przerwa główna' },
  { time: '13:00', name: '' },
  { time: '13:25', name: '' },
  { time: '13:50', name: '' },
  { time: '14:15', name: '' },
  { time: '14:40', name: 'Przerwa kawowa' },
  { time: '15:00', name: '' },
  { time: '15:25', name: '' },
  { time: '15:50', name: '' },
  { time: '16:15', name: 'Zakończenie' },
  { time: '16:30', name: 'Afterparty' }
]
</script>

<template>
  <StyledHeader class="pb-8">14 listopada 2024</StyledHeader>

  <StyledText class="pb-4">
    <AccentedText>Sesja posterowa</AccentedText> trwa przez całość Konferencji. W trakcie przerwy
    głównej odbędzie się czas na prezentacje. Po zakończeniu Konferencji prace wystawione będą do
    grudnia w
    <AccentedText>Instytucie Fizyki Centrum Naukowo-Dydaktycznym Politechniki Śląskiej</AccentedText
    >.
  </StyledText>

  <div class="py-8">
    <table class="table-auto w-full border-collapse">
      <tbody>
        <tr v-for="item in items" :key="items.indexOf(item)">
          <td :class="tdStyle">{{ item.time }}</td>
          <td v-if="item.name" :class="tdStyle">{{ item.name }}</td>
          <td class="border-b border-marshland-600 p-4 pl-8 text-marshland-400 italic" v-else>Szczegóły wkrótce</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
