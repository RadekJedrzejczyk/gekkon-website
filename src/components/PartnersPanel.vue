<script setup lang="ts">
const sponsors: { path: string; alt: string; bg?: string }[] = [
  { path: '/partners/POLSAlogotypBLACK.png', alt: 'Logotyp POLSA' },
  { path: '/partners/KP_LABS_LOGO.png', alt: 'Logo KP LABS' },
  { path: '/partners/Nauka_z_Kulturą_LOGO.jpg', alt: 'Logo Nauka z Kulturą' },
  { path: '/partners/SKN_Silesian_Aerospace_Technologies_LOGO.png', alt: 'Logo SKN SAT' },
  { path: '/partners/LogoIFn_v2.png', alt: 'Logo Instytutu Fizyki' },
  { path: '/partners/Logo_astrohunters.png', alt: 'Logo Astrohunters', bg: 'bg-marshland-950' }
]
</script>

<template>
  <div v-if="sponsors.length" class="py-24 w-2/3 mx-auto">
    <p class="font-bold text-center text-5xl">Partnerzy wydarzenia</p>
    <div class="pt-16 flex flex-wrap justify-center">
      <div v-for="sponsor in sponsors" :key="`sponsor-${sponsors.indexOf(sponsor)}`">
        <img
          :class="`${sponsor.bg ? sponsor.bg : ''} my-8 max-h-40 md:h-40 md:mx-8`"
          :src="sponsor.path"
          :alt="sponsor.alt"
        />
      </div>
    </div>
  </div>
</template>
