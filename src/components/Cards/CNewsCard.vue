<template>
  <div class="w-full bg-[#0c0f1d] min-h-screen py-10">
    <div class="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      
      <div 
        v-for="(item, index) in newsList" 
        :key="index"
        class="group w-full bg-[#15192c] rounded-[16px] p-4 cursor-pointer select-none border border-white/[0.02] transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(239,68,68,0.08)]"
      >
        
        <div class="w-full aspect-[16/10] bg-[#1d233d] rounded-[12px] mb-4 overflow-hidden relative flex items-center justify-center">
          <img 
            v-if="item.image"
            :src="item.image" 
            :alt="item.title" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <span v-else class="text-white/10 text-[11px] tracking-wider font-medium">RASM JOYI</span>
        </div>

        <div class="flex flex-col gap-2">
          
          <h3 class="text-white text-[15px] font-semibold leading-snug tracking-wide line-clamp-2 transition-colors duration-300 group-hover:text-[#ef4444] group-active:text-[#ef4444]">
            {{ item.title }}
          </h3>
          
          <p class="text-[#9ca3af]/60 text-[12.5px] font-normal leading-relaxed tracking-normal line-clamp-2 mt-1">
            {{ item.description }}
          </p>
          
          <div class="flex justify-between items-center mt-4 pt-1">
            <span class="text-white text-[13.5px] font-medium tracking-wide">
              {{ item.date }}
            </span>
            
            <div class="text-[#3f1622] transition-all duration-300 transform group-hover:text-[#ef4444] group-hover:translate-x-1 group-active:text-[#ef4444]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4.5 h-4.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { newsList } from '@/data/newsList';
// const newsList = ref([
//   {
//     title: "2025-yil 18-fevral kuni O‘zbekistondagi Amirsoy tog‘-...",
//     description: "Түркі мемлекеттері ұйымы (ТМҰ) 2025 жылғы 18 ақпанда Түркі шаңғы кубог...",
//     date: "11.02.2025",
//     image: ""
//   },
//   {
//     title: "Elchi Kubanichbek Omuraliyev bilan suhbat bo'lib o'tdi",
//     description: "Turkiy davlatlar tashkiloti Bosh kotibi, Elchi, Kubanichbek O'muralievning...",
//     date: "03.02.2025",
//     image: ""
//   },
//   {
//     title: "“Tabarruk ziyorat” loyihasi doirasida faoliyat yuritayotgan...",
//     description: "O‘zbekiston Respublikasi Prezidentining 2022 yil 29 iyuldagi “Turkiy davlatl...",
//     date: "11.03.2024",
//     image: ""
//   },
//   {
//     title: "\"Turkiy adabiyot xazinasi\" asarlar majmuasi taqdimoti",
//     description: "Turkiy xalqlarning boy madaniy merosi va adabiyot namunalarini jamlagan yangi kitoblar...",
//     date: "07.12.2023",
//     image: ""
//   },
//   {
//     title: "Turkiy davlatlar tashkiloti Bosh kotibi Shavkat Mirziyoyevga...",
//     description: "Uchrashuv doirasida ziyorat turizmini rivojlantirish bo'yicha muhim kelishuvlarga erishildi...",
//     date: "10.07.2023",
//     image: ""
//   },
//   {
//     title: "Turkiy davlatlar tashkiloti Bosh kotibi Turkiya Respublikasi...",
//     description: "2023-yil 19-iyun kuni Toshkent shahrida Turkiy Davlatlar Tashkiloti Bosh kotibi...",
//     date: "19.06.2023",
//     image: ""
//   },
//   {
//     title: "Turkiy davlatlar tashkiloti Bosh kotibi O‘zbekiston Respublikasi...",
//     description: "Turkiy Davlatlar Tashkiloti Bosh kotibi, Elchi Kubanichbek Omuraliev Janobi...",
//     date: "19.06.2023",
//     image: ""
//   },
//   {
//     title: "\"Turk dunyosi\" I xalqaro talabalar teatr festivali o'tkaziladi",
//     description: "Barchani mazkur san'at bayramiga chorlab qolamiz! Talabalarning ijodiy chiqishlari...",
//     date: "19.05.2023",
//     image: ""
//   },
//   {
//     title: "\"O'zbekiston turk dunyosi fotograflari nigohida\"...",
//     description: "Toshkent fotosuratlar uyida \"O'zbekiston turk dunyosi fotograflari nigohida\"...",
//     date: "19.07.2023",
//     image: ""
//   }
// ])
</script>
