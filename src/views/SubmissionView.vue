<script setup lang="ts">
import StyledHeader from '@/components/styled/StyledHeader.vue'
import StyledText from '@/components/styled/StyledText.vue'
import FilledButton from '@/components/styled/FilledButton.vue'
import AccentedText from '@/components/styled/AccentedText.vue'

const posterSubmissionAdress = 'https://forms.gle/FxJvh3Y36zXTNAhr5'
const conferenceSubmissionAddress = 'https://forms.gle/aivRiBTdmm7ZPgKeA'

const buttonClass = 'w-64 md:w-96 hover:bg-accent-700'
</script>

<template>
  <section class="py-4">
    <StyledHeader>Złoszenia prelegentów</StyledHeader>
    <StyledText class="pb-4">
      <ul class="list-disc">
        <li>Zapisy trwają do <AccentedText>31.10.2024 roku</AccentedText>.</li>
        <li>Prezentacja referatu może trwać maksymalnie <AccentedText>20 minut</AccentedText>.</li>
        <li>
          Refereat może być wygłoszony przez maksymalnie <AccentedText>2 osoby</AccentedText>.
        </li>
        <li>Do zgłoszenia należy dołączyć <AccentedText>abstrakt referatu</AccentedText>.</li>
        <li>
          Szczegóły uczestnictwa w konferencji i informacje na temat wygłaszania referatu można
          znaleźć w
          <AccentedText
            ><router-link :to="{ name: 'regulations' }">regulaminie</router-link></AccentedText
          >.
        </li>
      </ul>
    </StyledText>
    <div class="flex justify-center">
      <a :href="conferenceSubmissionAddress" target="_blank">
        <FilledButton
          bg-color="bg-accent-600"
          text-color="text-marshland-100"
          :additional-class="buttonClass"
        >
          Zapisz się jako prelegent
        </FilledButton>
      </a>
    </div>
  </section>
  <section class="py-4">
    <StyledHeader>Zapisy na sesję posterową</StyledHeader>
    <StyledText class="pb-4">
      <ul class="list-disc">
        <li>Zapisy trwają do <AccentedText>31.10.2024 roku</AccentedText>.</li>
        <li>
          Obecnośc na konferencji nie jest wymagana, a plakat może być prezentowany przez
          maksymalnie <AccentedText>1 osobę</AccentedText>.
        </li>
        <li>
          Poster powinien być przesłany w pliku w formacie <AccentedText>pdf</AccentedText>. Plakaty
          będą wystawiane w formacie <AccentedText>A2</AccentedText>.
        </li>
        <li>
          Szczegóły dotyczące sesji posterowej można znaleźć w
          <AccentedText
            ><router-link :to="{ name: 'regulations' }">regulaminie</router-link></AccentedText
          >.
        </li>
      </ul>
    </StyledText>
    <div class="flex justify-center">
      <a :href="posterSubmissionAdress" target="_blank">
        <FilledButton
          bg-color="bg-accent-600"
          text-color="text-marshland-100"
          :additional-class="buttonClass"
        >
          Zapisz się na sesję posterową
        </FilledButton></a
      >
    </div>
  </section>
</template>
