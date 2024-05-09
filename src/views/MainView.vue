<script setup lang="ts">
import SpacedColumn from '@/components/SpacedColumn.vue'
import SpacedPair from '@/components/SpacedPair.vue'
import CenteredHeader from '@/components/CenteredHeader.vue'
import TextParagraph from '@/components/TextParagraph.vue'
import FilledButton from '@/components/FilledButton.vue'
</script>

<template>
  <SpacedColumn>
    <SpacedPair>
      <template #firstElem>
        <CenteredHeader> Zapraszamy na GeKKoN! </CenteredHeader>
      </template>
      <template #secondElem>
        <TextParagraph>
          <span class="font-bold underline decoration-accent-600 decoration-4"
            >Górnośląska Kosmiczna Konferencja Naukowa</span
          >
          GeKKoN to wydarzenie organizowane przez studentów
          <span class="font-bold">Politechniki Śląskiej</span>. W tym roku już po raz drugi spotkamy
          się, aby podzielić się odkryciami i badaniami związanymi z przestrzenia kosmiczną!
        </TextParagraph>
      </template>
    </SpacedPair>
    <SpacedPair reversed>
      <template #firstElem>
        <CenteredHeader> Nie możemy się ciebie doczekać! </CenteredHeader>
      </template>
      <template #secondElem>
        <FilledButton><router-link :to="{ name: 'submissions' }">Zapisy</router-link></FilledButton>
      </template>
    </SpacedPair>
    <SpacedPair>
      <template #firstElem>
        <CenteredHeader> Gdzie i kiedy? </CenteredHeader>
      </template>
      <template #secondElem>
        <TextParagraph>
          Widzimy się już
          <span class="font-bold underline decoration-accent-600 decoration-4"
            >14 listopada 2024 roku</span
          >
          w <span class="font-bold">Centrum Kultury Studenckiej "Mrowisko"</span> przy
          <span class="font-bold underline decoration-accent-600 decoration-4"
            >ul. Pszczyńskiej 85 w Gliwicach</span
          >.
        </TextParagraph>
      </template>
    </SpacedPair>
    <SpacedPair reversed>
      <template #firstElem>
        <CenteredHeader> Plan wydarzenia pojawi się już wkrótce! </CenteredHeader>
      </template>
      <template #secondElem>
        <FilledButton
          ><router-link :to="{ name: 'schedule' }">Harmonogram</router-link></FilledButton
        >
      </template>
    </SpacedPair>
    <SpacedPair>
      <template #firstElem>
        <CenteredHeader> Zapoznaj się z regulaminem </CenteredHeader>
      </template>
      <template #secondElem>
        <FilledButton
          ><router-link :to="{ name: 'regulations' }"
            >Regulamin konferencji</router-link
          ></FilledButton
        >
      </template>
    </SpacedPair>
    <SpacedPair reversed>
      <template #firstElem>
        <CenteredHeader> Masz pytania? </CenteredHeader>
      </template>
      <template #secondElem>
        <FilledButton><router-link :to="{ name: 'contact' }">Skontaktuj się z nami!</router-link></FilledButton>
      </template>
    </SpacedPair>
  </SpacedColumn>
</template>
