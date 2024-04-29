<script setup lang="ts">
import NavItems from '@/components/NavItems.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'

const socialIconClass = 'size-8 mr-4'
</script>

<template>
  <div class="pt-16 w-2/3 mx-auto">
    <div class="grid pb-16 md:grid-cols-3 md:justify-items-stretch">
      <div class="pb-8 md:pb-0">
        <p class="font-bold text-lg pb-4">Europejskie Forum Studentów AEGEE-Gliwice</p>
        <p class="pb-4">
          Centrum Kultury Studenckiej "Mrowisko" <br />
          ul. Pszczyńska 85 <br />
          44-100 Gliwice <br />
        </p>
        <p>email: gekkon@aegee-gliwice.org</p>
      </div>
      <div class="pb-8 md:pb-0 md:justify-self-center">
        <NavItems eachClass="block" />
      </div>
      <div class="md:justify-self-end">
        <p class="font-bold text-lg pb-4">Odwiedź nasze sociale</p>
        <div class="flex">
          <a
            href="https://www.facebook.com/profile.php?id=61556661431893"
            target="_blank"
            ><FacebookIcon :class="socialIconClass"
          /></a>
        </div>
      </div>
    </div>
    <p class="text-center mt-8 pb-8">
      Created with ♥ by <a href="https://github.com/karo-fox" class="text-marshland-200" target="_blank">Karolina Kozubik</a>, 2024
    </p>
  </div>
</template>
