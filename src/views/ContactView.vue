<script setup lang="ts">
const headerStyle = 'font-medium text-3xl pb-4'
const textStyle = 'text-xl leading-relaxed pb-8'
const accentStyle = 'font-bold underline decoration-accent-600 decoration-4'
</script>

<template>
  <h2 :class="headerStyle">Masz pytania? Napisz do nas!</h2>
  <p :class="textStyle">
    Adres e-mail:
    <span :class="accentStyle">gekkon@aegee-gliwice.org</span>
  </p>
  <h2 :class="headerStyle">Gdzie nas znaleźć?</h2>
  <p :class="textStyle">
    Centrum Kultury Studenckiej "Mrowisko" <br />
    ul. Pszczyńska 85 <br />
    44-100 Gliwice <br />
  </p>
  <div class="h-[32vh] md:h-[60vh]">
    <iframe
      width="600"
      height="450"
      style="edge: 0"
      load="lazy"
      allowfullscreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJjZJvQAMxEUcRv6WcVkkl7t0&key=AIzaSyC31ZVjuyXRvGLDAX_alFv8ldiVXlIArow"
    ></iframe>
  </div>
</template>
