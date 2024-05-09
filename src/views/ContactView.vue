<script setup lang="ts">
import LowerHeader from '@/components/LowerHeader.vue';
import TextParagraph from '@/components/TextParagraph.vue';

// const headerStyle = 'font-medium text-3xl pb-4'
// const textStyle = 'text-xl leading-relaxed pb-8'
const accentStyle = 'font-bold underline decoration-accent-600 decoration-4'

const MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;
</script>

<template>
  <LowerHeader>Masz pytania? Napisz do nas!</LowerHeader>
  <TextParagraph class="pb-4">
    Adres e-mail:
    <span :class="accentStyle">gekkon@aegee-gliwice.org</span>
  </TextParagraph>
  <LowerHeader>Gdzie nas znaleźć?</LowerHeader>
  <TextParagraph class="pb-4">
    Centrum Kultury Studenckiej "Mrowisko" <br />
    ul. Pszczyńska 85 <br />
    44-100 Gliwice <br />
  </TextParagraph>
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
