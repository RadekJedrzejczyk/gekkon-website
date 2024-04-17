<script setup lang="ts">
const headerStyle = 'font-medium text-3xl pb-4'
const textStyle = 'text-xl leading-relaxed pb-8'
const accentStyle = 'font-bold underline decoration-accent-600 decoration-4'
</script>

<template>
  <h2 :class="headerStyle">Masz pytania? Napisz do nas!</h2>
  <p :class="textStyle">
    Adres e-mail:
    <span :class="accentStyle">gekkon@aegee-gliwice.com</span>
  </p>
  <h2 :class="headerStyle">Gdzie nas znaleźć?</h2>
  <p :class="textStyle">
    Centrum Kultury Studenckiej "Mrowisko" <br />
    ul. Pszczyńska 85 <br />
    44-100 Gliwice <br />
  </p>
  <div class="h-[32vh] md:h-[60vh]">
    <iframe
      src="https://storage.googleapis.com/maps-solutions-56oeajahns/locator-plus/2sms/locator-plus.html"
      width="100%"
      height="100%"
      style="border: 0"
      loading="lazy"
    >
    </iframe>
  </div>
</template>
