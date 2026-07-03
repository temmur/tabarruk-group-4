<template>
  <div class="bg-[#070A1C] text-white bg-[url('/images/vectors/Vector(6).svg')] bg-cover bg-center mt-20">
    <div class="max-w-7xl mx-auto px-8 py-12">
      <div class="flex items-center gap-8">

        <!-- Chap: matn -->
        <div class="flex-1">
          <h1 class="text-4xl font-bold mb-4 border-b-2 border-red-500 pb-2 inline-block">
            Biz haqimizda
          </h1>
          <p class="text-lg leading-relaxed mt-4 text-gray-300">
            Maqolalar, fotosuratlar va videolar tanlovi orqali turkiy <br>
            mamlakatlarning qimmatli, tarixiy va merosi joylarini o'rganing. <br>
            Qadimgi xarobalar, hayratlanarli masjidlar, o'rta asr qal'alari va <br>
            murakkab koshinlar go'zalligini kashf eting.
          </p>
          <h4 class="text-2xl font-bold mb-4 mt-6">Bizning qo'llab-quvvatlovchilar</h4>
          <div class="flex items-center gap-4">
            <img src="/images/partners/logo.svg" alt="Supporter 1" class="w-24 h-auto cursor-pointer">
            <img src="/images/vectors/lg_3.png" alt="Supporter 2" class="w-24 h-auto cursor-pointer">
          </div>
        </div>

        <!-- O'ng: slider -->
        <div class="flex-1 flex flex-col justify-center max-w-[50%]">
          <div class="overflow-hidden">
            <div
              class="flex gap-2 transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${offset}px)` }"
            >
              <div
                v-for="(slide, index) in slides"
                :key="index"
                class="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out h-[340px]"
                :style="{ width: hoveredIndex === index ? '220px' : '110px' }"
                @mouseenter="hoveredIndex = index"
                @mouseleave="hoveredIndex = null"
              >
                <img
                  :src="slide.image"
                  :alt="slide.title"
                  class="w-full h-full object-cover transition-transform duration-500"
                  :class="hoveredIndex === index ? 'scale-110' : 'scale-100'"
                >
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"
                  :class="hoveredIndex === index ? 'opacity-100' : 'opacity-0'"
                ></div>
                <div class="absolute bottom-0 left-0 right-0 p-3 overflow-hidden">
                  <span
                    class="block text-white text-sm font-medium whitespace-nowrap"
                    :style="{
                      transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-200%)',
                      transition: 'transform 0.5s ease-in-out'
                    }"
                  >
                    {{ slide.title }}
                  </span>
                  <span
                    class="block text-white/70 text-xs whitespace-nowrap mt-1"
                    :style="{
                      transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(-200%)',
                      transition: 'transform 0.55s ease-in-out'
                    }"
                  >
                    {{ slide.description }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex gap-3 mt-4 justify-end">
            <button
              class="w-9 h-9 rounded-full border border-white/30 bg-white/10 text-white text-lg hover:bg-white/25 transition"
              @click="prev"
            >‹</button>
            <button
              class="w-9 h-9 rounded-full border border-white/30 bg-white/10 text-white text-lg hover:bg-white/25 transition"
              @click="next"
            >›</button>
          </div>
        </div>

      </div>

      <!-- CStatistics slider dan tashqarida, container ichida -->
      <CStatistics />

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CStatistics from '@/components/Cards/CStatisticCard.vue'

const hoveredIndex = ref<number | null>(null)
const offset = ref(0)

const slides = [
  { title: 'Registon, Samarqand', description: 'UNESCO merosi, XV asr',  image: '/images/Sections/CAbout/country1.webp' },
  { title: 'Kalon minorasi',      description: 'Buxoro, XII asr',         image: '/images/Sections/CAbout/country2.webp' },
  { title: 'Bibi-Xonim masjidi',  description: 'Samarqand, XV asr',       image: '/images/Sections/CAbout/country3.webp' },
  { title: "Chimgan tog'lari",    description: 'Toshkent viloyati',        image: '/images/Sections/CAbout/country4.webp' },
  { title: "Xiva qal'asi",        description: "Ichon-qal'a, XVIII asr",  image: '/images/Sections/CAbout/country5.webp' },
]

const STEP = 120
const VISIBLE = 3

function next() {
  offset.value = Math.min(offset.value + STEP, STEP * Math.max(slides.length - VISIBLE, 0))
}
function prev() {
  offset.value = Math.max(offset.value - STEP, 0)
}
</script>