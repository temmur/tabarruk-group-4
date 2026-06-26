<script setup lang="ts">
import { ref } from 'vue'

const stats = ref([
  { 
    id: 1, 
    count: '27', 
    text: 'Diqqatga sazovor joylar', 

    imgSrc: '/images/mosque/Mask group.svg',
    imgClass: '-right-2 -bottom-2 w-28 h-28' 
  },
  { 
    id: 2, 
    count: '402', 
    text: 'Manzillar', 

    imgSrc: '/images/mask-svg/Mask group (1).svg',
    imgClass: '-right-4 -bottom-4 w-28 h-28' 
  },
  { 
    id: 3, 
    count: '7', 
    text: 'Davlatlar', 
  
    imgSrc: '/images/mask-svg/Mask group (2).svg',
    imgClass: '-right-3 -bottom-3 w-28 h-28' 
  }
])
</script>

<template>
  <div class="pt-[50px] bg-[#080b11] min-h-[180px] w-full">
    <div class="flex flex-col sm:flex-row gap-4 p-6 pl-[43px]">
      <div 
        v-for="stat in stats" 
        :key="stat.id"
        class="relative overflow-hidden w-full sm:w-[260px] h-[100px] bg-[#1a1f2c] rounded-xl px-5 flex flex-col justify-center border border-gray-800 transition-all duration-300 hover:border-gray-700 group"
      >
   
        <div class="z-10 pointer-events-none">
          <h2 class="text-white text-3xl font-extrabold tracking-tight leading-none">
            {{ stat.count }}
          </h2>
          <p class="text-gray-400 text-sm font-semibold mt-2">
            {{ stat.text }}
          </p>
        </div>

        <img 
          :src="stat.imgSrc" 
          :class="[
            'absolute pointer-events-none select-none opacity-15 transition-transform duration-300 group-hover:scale-105', 
            stat.imgClass
          ]" 
          alt="background-icon"
        />
      </div>
    </div>
  </div>
</template>
