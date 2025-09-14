<script setup lang="ts">
import StyledHeader from '@/components/styled/StyledHeader.vue'
import StyledText from '@/components/styled/StyledText.vue'
import FilledButton from '@/components/styled/FilledButton.vue'
import AccentedText from '@/components/styled/AccentedText.vue'
import LinkText from '@/components/styled/LinkText.vue'

const posterSubmissionAdress = 'https://docs.google.com/forms/d/e/1FAIpQLSfgESGc8B6FYzjkEAvCxFnDUvpwUzlC5_f5CAsWWCFFIERXvA/viewform?usp=dialog'
const conferenceSubmissionAddress = 'https://forms.gle/4qvyzPfrkasWDWHL9'
const abstractTemplateAddress =
  'https://docs.google.com/document/d/1cfRBO8wYR4Whmd6ByNdwgnwk6u36hLSs'

const buttonClass = 'w-64 md:w-96 hover:bg-accent-700'
</script>

<template>
   <!-- <section class="py-4">
   <StyledHeader>Złoszenia prelegentów</StyledHeader>
    <StyledText class="pb-4">
      <ul class="list-disc">
        <li>Prezentacja referatu może trwać maksymalnie <AccentedText>20 minut</AccentedText>.</li>
        <li>
          Refereat może być wygłoszony przez maksymalnie <AccentedText>1 osobę</AccentedText>.
        </li>
        <li>
          Do zgłoszenia należy dołączyć <AccentedText>streszczenie referatu</AccentedText> napisane
          zgodnie ze
          <AccentedText
            ><LinkText
              ><a :href="abstractTemplateAddress">wzorem dostępnym pod tym linkiem</a></LinkText
            ></AccentedText
          >
          .
        </li>
        <li>
          Szczegóły uczestnictwa w konferencji i informacje na temat wygłaszania referatu można
          znaleźć w
          <AccentedText
            ><LinkText
              ><router-link :to="{ name: 'regulations' }">regulaminie</router-link></LinkText
            ></AccentedText
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
  </section>-->
  <section class="py-4">
    <StyledHeader>Zapisy na sesję posterową</StyledHeader>
    <StyledText class="pb-4">
      <ul class="list-disc">
        <li>
          Poster może być prezentowany przez maksymalnie <AccentedText>1 osobę</AccentedText>.
        </li>
        <li>Poster powinien być przesłany w pliku w formacie <AccentedText>pdf</AccentedText>.</li>
        <li>
          Szczegóły dotyczące sesji posterowej można znaleźć w
          <AccentedText
            ><LinkText
              ><router-link :to="{ name: 'regulations' }">regulaminie</router-link></LinkText
            ></AccentedText
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
