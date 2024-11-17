<script setup lang="ts">
import StyledHeader from '@/components/styled/StyledHeader.vue'
import StyledText from '@/components/styled/StyledText.vue'
import FilledButton from '@/components/styled/FilledButton.vue'

const posters: { path: string; title: string; authors: string }[] = [
  {
    path: '/posters/24Gekkon-SKN_BP - Łukasz Misztal.pdf',
    title: 'Analiza składu ziarnowego regolitu księżycowego z próbą jego odtworzenia',
    authors: 'Laura Jaśniak, Łukasz Misztal, Magdalena Mrozek, Dawid Mrozek, Mateusz Smolana'
  },
  {
    path: '/posters/ALO_Budowa_mikrosatelity_poster - Małgorzata Szymaszek.pdf',
    title: 'Budowa mikrosatelity z wykorzystaniem mikrokontrolera Arduino',
    authors: 'Magdalena Grabysz, Przemysław Brzeziński, Jakub Fraś, Eryk Kandzior, Mirosław Kowal'
  },
  {
    path: '/posters/Długoterminowe loty kosmiczne - wpływ na ośrodkowy układ nerwowy-2.pdf',
    title: 'Długoterminowe loty kosmiczne - wpływ na ośrodkowy układ nerwowy',
    authors: 'Zuzanna Szostok'
  },
  {
    path: '/posters/IKAR-poster.pdf',
    title: 'Analiza materiałów wykonania silników na paliwo stałe typu karmelek (R-Candy)',
    authors: 'Hanna Bujak'
  },
  {
    path: '/posters/KP Labs_poster_anomaly_detection.pdf',
    title:
      'Annotating large satelite telemetry dataset for ESA international AI anomaly detection benchmark',
    authors:
      'Krzysztof Kotowski, Christoph Haskamp, Bogdan Ruszczak, Jacek Andrzejewski, Jakub Nalepa'
  },
  {
    path: 'public/posters/Poster Wojciech SIkorski - Wojciech Sikorski.pdf',
    title:
      'Adaptacyjne technologie w przestrzeni kosmicznej: Nowe możliwości dla europejskich misji',
    authors: 'Wojciech Sikorski'
  },
  {
    path: '/posters/SAT.pdf',
    title:
      'A Space Odyssey - Cell culture version. A proposal for a system enabling the study of the impact of cosmic radiation on model cell lines',
    authors:
      'Daria Kałużyńska, Nikodem Bartnik, Tomasz Golonek, Stanisław Lisek, Jonasz Michalik, Jacek Pindel, Tomasz Błachowicz'
  }
]
</script>

<template>
  <div v-if="posters.length">
    <div v-for="poster in posters" :key="`poster-${posters.indexOf(poster)}`" class="py-4">
      <StyledHeader>{{ poster.title }}</StyledHeader>
      <StyledText>{{ poster.authors }}</StyledText>
      <div class="flex justify-center w-full">
        <a :href="poster.path" target="_blank">
          <FilledButton
            bg-color="bg-accent-600"
            text-color="text-marshland-100"
            additional-class="w-64 md:w-96 hover:bg-accent-700 "
            >Otwórz poster</FilledButton
          ></a
        >
      </div>
    </div>
  </div>
</template>
