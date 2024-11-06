<script setup lang="ts">
import StyledHeader from '@/components/styled/StyledHeader.vue'
import StyledText from '@/components/styled/StyledText.vue'
import AccentedText from '@/components/styled/AccentedText.vue'

const tdStyle = 'border-b border-marshland-600 p-4 pl-8 text-marshland-100'

enum itemType {
  organizational,
  lecture
}

const items: { time: String; name: String; type: itemType }[] = [
  { time: '9:00', name: 'Rozpoczęcie', type: itemType.organizational },
  { time: '9:10', name: 'Bogusław Ziębowicz i kosmiczna muzyka', type: itemType.lecture },
  { time: '9:35', name: 'KP Labs o Intuition-1', type: itemType.lecture },
  { time: '10:00', name: 'Astrohunters', type: itemType.lecture },
  { time: '10:25', name: 'Przerwa kawowa', type: itemType.organizational },
  {
    time: '10:40',
    name: 'Jonasz Michalik: SERNIC - z rodzynkami czy bez?',
    type: itemType.lecture
  },
  {
    time: '11:05',
    name: 'Daniel Marek:  Łaziki Planetarne na Przestrzeni Dekad: Jak AI Zmienia Eksplorację Kosmiczną',
    type: itemType.lecture
  },
  {
    time: '11:30',
    name: 'Błażej Błatoń, Mateusz Warzecha: Lunamer jako materiał konstrukcyjny bazy księżycowej',
    type: itemType.lecture
  },
  { time: '11:55', name: 'Przerwa główna', type: itemType.organizational },
  {
    time: '13:00',
    name: 'Michał Wróblewski: Projekt rakietowego silnika hybrydowego do wyznaczenia parametrów spalania paliw w podtlenku azotu',
    type: itemType.lecture
  },
  {
    time: '13:25',
    name: 'Tobiasz Dąbrowski, Krzysztof Ślubowski: IKAR, czyli jak stworzyć koło rakietowe w szkole średniej',
    type: itemType.lecture
  },
  {
    time: '13:50',
    name: 'Ignacy Woźniak: Za Plutona - o podróżach poza Układ Słoneczny',
    type: itemType.lecture
  },
  { time: '14:15', name: '', type: itemType.lecture },
  { time: '14:40', name: 'Przerwa kawowa', type: itemType.organizational },
  { time: '15:00', name: '', type: itemType.lecture },
  { time: '15:25', name: '', type: itemType.lecture },
  { time: '15:50', name: '', type: itemType.lecture },
  { time: '16:15', name: 'Zakończenie', type: itemType.organizational },
  { time: '16:30', name: 'Afterparty', type: itemType.organizational }
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
          <td
            v-if="item.name"
            :class="`${tdStyle} ${item.type == itemType.organizational ? 'italic text-marshland-300' : ''}`"
          >
            {{ item.name }}
          </td>
          <td class="border-b border-marshland-600 p-4 pl-8 text-marshland-400 italic" v-else>
            Szczegóły wkrótce
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
