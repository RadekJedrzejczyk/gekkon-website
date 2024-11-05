<script setup lang="ts">
import StyledHeader from '@/components/styled/StyledHeader.vue'
import StyledText from '@/components/styled/StyledText.vue'
import AccentedText from '@/components/styled/AccentedText.vue'
import LinkText from '@/components/styled/LinkText.vue'

const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY
</script>

<template>
  <StyledHeader>Masz pytania? Napisz do nas!</StyledHeader>
  <StyledText class="pb-4">
    Adres e-mail:
    <AccentedText
      ><LinkText
        ><a href="mailto: gekkon@aegee-gliwice.org">gekkon@aegee-gliwice.org</a></LinkText
      ></AccentedText
    >
  </StyledText>
  <StyledHeader>Gdzie nas znaleźć?</StyledHeader>
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
</template>
