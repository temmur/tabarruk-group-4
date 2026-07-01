<template>
  <div class="max-w-7xl mx-auto px-8 py-12">
    <h1 class="text-4xl text-white font-bold mb-4 border-b-2 border-red-500 pb-2 w-fit mx-auto">
      Yangiliklar
    </h1>
    <p class="text-white text-center mb-8 text-[20px]">Turkiy davlatlar haqida so'ngi yangiliklar</p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

      <!-- Chap — bitta katta karta -->
      <div
        v-if="firstNews"
        class="bg-[#0B0F24] rounded-xl overflow-hidden cursor-pointer"
      >
        <img :src="firstNews.image" :alt="firstNews.title" class="w-full h-64 object-cover">
        <div class="p-5">
          <h2 class="text-xl font-bold text-white mb-3 line-clamp-2">{{ firstNews.title }}</h2>
          <p class="text-gray-400 text-sm">{{ firstNews.date }}</p>
        </div>
      </div>

      <!-- O'ng — kichik kartalar vertikal -->
      <div class="flex flex-col gap-4">
        <div
          v-for="(news, index) in restNews"
          :key="index"
          class="bg-[#0B0F24] rounded-xl overflow-hidden cursor-pointer flex gap-4 items-start p-4"
        >
          <img :src="news.image" :alt="news.title" class="w-28 h-24 object-cover rounded-lg flex-shrink-0">
          <div class="flex flex-col">
            <h2 class="text-lg font-semibold text-white leading-snug line-clamp-2">{{ news.title }}</h2>
            <p class="text-gray-300 text-sm mt-2 line-clamp-2">{{ news.description }}</p>
            <p class="text-gray-500 text-sm mt-2">{{ news.date }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { newsList } from '@/data/newsList'

const firstNews = computed(() => newsList[0] ?? null)
const restNews = computed(() => newsList.slice(1, 3))
</script>