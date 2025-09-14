<script setup lang="ts">
import StyledHeader from '@/components/styled/StyledHeader.vue'
import StyledText from '@/components/styled/StyledText.vue'
import AccentedText from '@/components/styled/AccentedText.vue'
import LinkText from '@/components/styled/LinkText.vue'

const tdStyle = 'border-b border-marshland-600 p-4 pl-8 text-marshland-100'

enum itemType {
  organizational,
  lecture
}

const items: { time: String; name: String; type: itemType }[] = [
 { time: '14:00', name: 'Rozpoczęcie', type: itemType.organizational },
   { time: '14:15', name: 'Prezentacje wprowadzające', type: itemType.lecture },
  { time: '15:00', name: 'Przerwa i sesja posterowa', type: itemType.lecture },
 { time: '15:45', name: 'Panel dyskusyjny', type: itemType.lecture },
  { time: '17:00', name: 'Zakończenie', type: itemType.organizational }
]

</script>

<template>
  <StyledHeader class="pb-8">17 listopada 2025</StyledHeader>

  <StyledText class="pb-4">
   Całość wydarzenia odbywa się w Centrum Kultury Studenckiej "Mrowisko" w Gliwicach.
  </StyledText>

  <div class="py-8">
    <table class="table-auto w-full border-collapse">
      <tbody>
        <tr v-for="item in items" :key="items.indexOf(item)">
          <td :class="tdStyle">{{ item.time }}</td>
          <td
            v-if="item.name"
            :class="`${tdStyle} ${item.type == itemType.organizational ? 'text-marshland-300' : ''}`"
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
