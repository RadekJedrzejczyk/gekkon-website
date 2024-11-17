<script setup lang="ts">
import * as pdfjs from 'pdfjs-dist';
import StyledHeader from '@/components/styled/StyledHeader.vue';
import StyledText from '@/components/styled/StyledText.vue';
import FilledButton from '@/components/styled/FilledButton.vue';

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.8.69/build/pdf.worker.mjs';

const posters: { path: string; title: string; authors: string[] }[] = [
  {
    path: '/posters/poster01.pdf',
    title: 'Analiza składu ziarnowego regolitu księżycowego z próbą jego odtworzenia',
    authors: [
      'Laura Jaśniak',
      'Łukasz Misztal',
      'Magdalena Mrozek',
      'Dawid Mrozek',
      'Mateusz Smolana'
    ]
  },
  {
    path: '/posters/poster02.pdf',
    title: 'Budowa mikrosatelity z wykorzystaniem mikrokontrolera Arduino',
    authors: [
      'Magdalena Grabysz',
      'Przemysław Brzeziński',
      'Jakub Fraś',
      'Eryk Kandzior',
      'Mirosław Kowal'
    ]
  },
  {
    path: '/posters/poster03.pdf',
    title: 'Długoterminowe loty kosmiczne - wpływ na ośrodkowy układ nerwowy',
    authors: ['Zuzanna Szostok']
  },
  {
    path: '/posters/poster04.pdf',
    title: 'Analiza materiałów wykonania silników na paliwo stałe typu karmelek (R-Candy)',
    authors: ['Hanna Bujak']
  },
  {
    path: '/posters/poster05.pdf',
    title:
      'Annotating large satelite telemetry dataset for ESA international AI anomaly detection benchmark',
    authors: [
      'Krzysztof Kotowski',
      'Christoph Haskamp',
      'Bogdan Ruszczak',
      'Jacek Andrzejewski',
      'Jakub Nalepa'
    ]
  },
  {
    path: '/posters/poster06.pdf',
    title:
      'Adaptacyjne technologie w przestrzeni kosmicznej: Nowe możliwości dla europejskich misji',
    authors: ['Wojciech Sikorski']
  },
  {
    path: '/posters/poster07.pdf',
    title:
      'A Space Odyssey - Cell culture version. A proposal for a system enabling the study of the impact of cosmic radiation on model cell lines',
    authors: [
      'Daria Kałużyńska',
      'Nikodem Bartnik',
      'Tomasz Golonek',
      'Stanisław Lisek',
      'Jonasz Michalik',
      'Jacek Pindel',
      'Tomasz Błachowicz'
    ]
  }
]

function renderThumbnail(src: string, id: string) {
  var loadingTask = pdfjs.getDocument(src)
  loadingTask.promise.then((pdf) => {
    pdf
      .getPage(1)
      .then((page) => {
        var scale = 0.5
        var viewport = page.getViewport({ scale: scale })
        var outputScale = window.devicePixelRatio || 1

        var canvas = document.getElementById(id) as HTMLCanvasElement
        if (!canvas) return

        var context = canvas.getContext('2d') as CanvasRenderingContext2D

        canvas.width = Math.floor(viewport.width * outputScale)
        canvas.height = Math.floor(viewport.height * outputScale)
        canvas.style.width = Math.floor(viewport.width) + 'px'
        canvas.style.height = Math.floor(viewport.height) + 'px'

        var transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null

        var renderContext = {
          canvasContext: context,
          transform: transform ? transform : undefined,
          viewport: viewport
        }
        page.render(renderContext)
      })
      .catch((error) => {
        console.error(`Error loading PDF: ${error.message}`);
      });
  });
}

const renderThumbnails = window.innerWidth > 1024

if (renderThumbnails) {
  posters.forEach((poster, index) => {
    const id = `poster-${index}`;
    renderThumbnail(poster.path, id);
  });
};
</script>

<template>
  <div v-if="posters.length">
    <StyledHeader>Prace zaprezentowane w czasie sesji posterowej</StyledHeader>
    <div v-for="poster in posters" :key="`poster-${posters.indexOf(poster)}`" class="py-8">
      <StyledHeader size="2xl">{{ poster.title }}</StyledHeader>
      <div class="flex flex-row gap-4 justify-around">
        <div v-if="renderThumbnails">
          <canvas :id="`poster-${posters.indexOf(poster)}`" />
        </div>
        <div class="flex flex-col justify-around">
          <StyledText>
            <p
              v-for="author in poster.authors"
              :key="`poster-${posters.indexOf(poster)}-author-${poster.authors.indexOf(author)}`"
            >
              {{ author }}
            </p>
          </StyledText>
          <div class="flex justify-center w-full py-8">
            <a :href="poster.path" target="_blank">
              <FilledButton
                bg-color="bg-accent-600"
                text-color="text-marshland-100"
                additional-class="w-64 md:w-96 hover:bg-accent-700 "
                >Otwórz poster</FilledButton
              ></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
