<script setup lang="ts">
const sponsors: { path: string; alt: string; src: string; bg?: string }[] = [

  {
    path: '/partners/SKN_Silesian_Aerospace_Technologies_LOGO.png',
    alt: 'SKN SAT',
    src: 'https://www.facebook.com/silesianaerospacetechnologiespolsl/'
  },
  {
      path: '/partners/iceye_logo.png',
    alt: 'ICEYE',
    src: 'https://www.iceye.com'
  },
  {
    path: '/partners/WNMS_logo.png',
    alt: 'We Need More Space',
    src: 'https://weneedmore.space/'
  },
  {
    path: '/partners/POLSL_logo.png',
    alt: 'Politechnika Śląska',
    src: 'https://www.polsl.pl/'
  },
  {
    path: '/partners/Nauka_z_Kulturą_LOGO.jpg',
    alt: 'Nauka z Kulturą',
    src: 'https://www.facebook.com/Naukazkultura/'
  },
    {
    path: '/partners/POLSAlogotypBLACK.png',
    alt: 'Polska Agencja Kosmiczna POLSA',
    src: 'https://polsa.gov.pl/'
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
