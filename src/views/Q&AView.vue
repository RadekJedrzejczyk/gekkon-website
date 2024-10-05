<script setup lang="ts">
import StyledHeader from '@/components/styled/StyledHeader.vue'
import StyledText from '@/components/styled/StyledText.vue'
</script>

<template>
  <StyledHeader>Jak dotrzeć na konferencję?</StyledHeader>
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
  <StyledText class="pb-4">
    Z dworca PKP Gliwice:
    <ul class="list-disc">
      <li>
        Autobusem linii M1 (kierunek Katowice Mickiewicza) i M16 (kierunek Bytom Dworzec) z
        przystanku Gliwice Dworzec do przystanku Gliwice Kujawska.
      </li>
      <li>
        Autobusami linii 41, 8 i M18 z przystanku Gliwice Dworzec do przystanku Gliwice Komag.
      </li>
      <li>Piechotą - ok 20-25 minut spaceru.</li>
    </ul>
  </StyledText>
  <StyledText class="pb-4">
    Z dworca PKP Katowice:
    <ul class="list-disc">
      <li>
        Autobusem linii M1 (kierunek Gliwice Centrum Przesiadkowe) z przystanku Mickiewicza 1 do
        przystanku Gliwice Kujawska.
      </li>
      <li>Pociągiem Kolei Śląskich linia S1 z Katowic do Gliwic.</li>
    </ul>
  </StyledText>
  <StyledText class="pb-4">
    Samochodem:
    <ul class="list-disc">
      <li>
        Można zaparkować na niewielkim parkingu pod Mrowiskiem. Więcej miejsc parkingowych
        dostępnych jest na terenie kampusu Politechniki Śląskiej, szczególnie pod budynkiem Centrum
        Nowych Technologii (ul. Konarskiego 22b).
      </li>
    </ul>
  </StyledText>
</template>
