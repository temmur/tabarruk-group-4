<template>
  <div
    class="relative overflow-hidden rounded-xl p-4
           bg-gray-500/30 !backdrop-blur-2xl 
           hover:border-gray-300
           cursor-pointer
           border border-white/10
           shadow-2xl transition-all"
  >
    
    <div
      class="absolute inset-0 bg-gradient-to-br
             from-slate-700/70
             via-slate-800/60
             to-blue-950/70"
    ></div>

  
    <div class="relative z-10 flex items-center gap-5">
     
   <img
      :src="image"
      alt="O'trar shahri"
      class="w-full max-w-[140px] rounded-lg h-[100px] object-cover"
    />
      <div class="flex flex-col h-24 justify-between">
        <p class="text-white/60 text-lg">
          {{ title }}
        </p>

        <h2 class="mt-2 text-xl font-bold text-white leading-tight">
          {{ subtitle }}
        </h2>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    image: string
    title: string
    subtitle: string
}>()
</script>
