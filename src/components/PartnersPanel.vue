<script setup lang="ts">
const sponsors: { path: string; alt: string; src: string; bg?: string }[] = [
  { path: '/partners/POLSAlogotypBLACK.png', alt: 'Logotyp POLSA', src: 'https://polsa.gov.pl/' },
  { path: '/partners/KP_LABS_LOGO.png', alt: 'Logo KP LABS', src: 'https://kplabs.space/' },
  {
    path: '/partners/Nauka_z_Kulturą_LOGO.jpg',
    alt: 'Logo Nauka z Kulturą',
    src: 'https://mrowisko.polsl.pl/blok-kulturalny/nauka-z-kultura/'
  },
  {
    path: '/partners/SKN_Silesian_Aerospace_Technologies_LOGO.png',
    alt: 'Logo SKN SAT',
    src: 'https://www.facebook.com/silesianaerospacetechnologiespolsl/'
  },
  {
    path: '/partners/LogoIFn_v2.png',
    alt: 'Logo Instytutu Fizyki',
    src: 'https://www.polsl.pl/rif/'
  },
  {
    path: '/partners/Logo_astrohunters.png',
    alt: 'Logo Astrohunters',
    src: 'https://www.astrohunters.pl/',
    bg: 'bg-marshland-950'
  }
]
</script>

<template>
  <div v-if="sponsors.length" class="py-24 w-2/3 mx-auto">
    <p class="font-bold text-center text-5xl">Partnerzy wydarzenia</p>
    <div class="pt-16 flex flex-wrap justify-center">
      <div v-for="sponsor in sponsors" :key="`sponsor-${sponsors.indexOf(sponsor)}`">
        <a :href="sponsor.src" target="_blank">
          <img
            :class="`${sponsor.bg ? sponsor.bg : ''} my-8 max-h-40 md:h-40 md:mx-8`"
            :src="sponsor.path"
            :alt="sponsor.alt"
          />
        </a>
      </div>
    </div>
  </div>
</template>
