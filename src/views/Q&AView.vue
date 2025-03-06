<script setup lang="ts">
import StyledHeader from '@/components/styled/StyledHeader.vue'
import StyledText from '@/components/styled/StyledText.vue'
import AccentedText from '@/components/styled/AccentedText.vue'
import LinkText from '@/components/styled/LinkText.vue'

const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY
const discordServerAddress = 'https://discord.gg/xXTejbunjC'
</script>

<template>
  <!-- <StyledHeader>Jak dotrzeć na konferencję?</StyledHeader>
  <StyledText class="pb-4"
    >Konferencja odbędzie się w budynku Centrum Kultury Studenckiej "Mrowisko":</StyledText
  >
  <StyledText class="pb-4">
    Centrum Kultury Studenckiej "Mrowisko" <br />
    ul. Pszczyńska 85 <br />
    44-100 Gliwice <br />
  </StyledText>
  <div class="h-[32vh] md:h-[60vh]">
    <iframe
      width="100%"
      height="100%"
      load="lazy"
      allowfullscreen
      :src="`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJjZJvQAMxEUcRv6WcVkkl7t0&key=${MAPS_API_KEY}`"
    ></iframe>
  </div>
  <div class="mt-8 py-4">
    <StyledHeader size="2xl">Z dworca PKP Gliwice:</StyledHeader>
    <StyledText class="pb-2">
      <StyledHeader size="xl">Autobusami linii</StyledHeader>
      <ul class="list-disc">
        <li><AccentedText>M1</AccentedText> kierunek Katowice Mickiwicza</li>
        <li>
          <AccentedText>M16</AccentedText> kierunek Bytom Dworzec lub Osiedle Wieczorka Dworzec
        </li>
        <li><AccentedText>M18</AccentedText> kierunek Tychy Osidle "Z1"</li>
      </ul>
      Z przystanku Gliwice Dworzec do przystanku Gliwice Kujawska.
    </StyledText>
    <StyledText class="pb-2">
      <StyledHeader size="xl">Autobusami linii</StyledHeader>
      <AccentedText>8</AccentedText>, <AccentedText>41</AccentedText>,
      <AccentedText>58</AccentedText>, <AccentedText>669</AccentedText> z przystanku Gliwice Dworzec
      do przystanku Gliwice Komag.
    </StyledText>
    <StyledText class="pb-2">
      <StyledHeader size="xl">Autobusami linii</StyledHeader>
      <AccentedText>32</AccentedText>, <AccentedText>232</AccentedText>,
      <AccentedText>932</AccentedText> z przystanku Gliwice Plac Piastów do przystaku Gliwice
      Komag.</StyledText
    >
  </div>
  <StyledText class="pb-4">
    <StyledHeader size="2xl">Z dworca PKP Katowice:</StyledHeader>
    <ul class="list-disc">
      <li>
        <AccentedText>Autobusem linii M1</AccentedText> (kierunek Gliwice Centrum Przesiadkowe) z
        przystanku Mickiewicza 1 do przystanku Gliwice Kujawska.
      </li>
      <li><AccentedText>Pociągiem Kolei Śląskich linia S1</AccentedText> z Katowic do Gliwic.</li>
    </ul>
  </StyledText>
  <StyledText class="pb-4">
    <StyledHeader size="2xl">Samochodem:</StyledHeader>
    <ul class="list-disc">
      <li>
        Można zaparkować na <AccentedText>niewielkim parkingu pod Mrowiskiem</AccentedText>. Więcej
        miejsc parkingowych dostępnych jest na terenie kampusu Politechniki Śląskiej, szczególnie
        <AccentedText>pod budynkiem Centrum Nowych Technologii (ul. Konarskiego 22b)</AccentedText>.
      </li>
    </ul>
  </StyledText> -->
  <StyledHeader>Jak zorganizowana zostanie konferencja?</StyledHeader>
  <StyledText>Konferencja zostanie przeprowadzona za pośrednictwem platformy Discord.</StyledText>
  <StyledText
    >Adres serwera Discord konferencji:
    <AccentedText
      ><LinkText
        ><a :href="discordServerAddress">{{ discordServerAddress }}</a></LinkText
      ></AccentedText
    ></StyledText
  >
</template>
