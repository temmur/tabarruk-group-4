<!-- <template>
  <div 
    class="w-full max-w-[580px] text-left transition-all duration-300 p-4 rounded-[14px] border cursor-pointer select-none" 
    @click="isOpened = !isOpened"
    :class="isOpened 
      ? 'border-gray-700 bg-[#0F1322] shadow-[0_0_25px_rgba(239,68,68,0.05)]' 
      : 'border-slate-800/80 bg-[#0B0E17]/90 hover:border-slate-800 hover:bg-[#0F1322]'"
  >
    
    <div class="w-full flex items-center justify-between gap-4 rounded-[14px]">
      <div class="flex items-center gap-4 min-w-0 flex-1">
        
       
        <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/10 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a4.859 4.859 0 0 0 3.413-4.637V4.09A1.13 1.13 0 0 0 19.62 3l-1.08.24a9 9 0 0 1-6.208-.682l-.108-.054a9 9 0 0 0-6.086-.71L3 2.5V15Z" />
          </svg>
        </div>

      
        <p 
          class="text-white text-[18px] sm:text-[20px] font-medium leading-normal tracking-wide transition-all duration-300 pr-2 min-w-0"
          :class="isOpened ? 'line-clamp-none' : 'line-clamp-1'"
        >
          {{ title }}
        </p>
      </div>

      
      <button 
        class="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1A1E2E] text-gray-300 border border-slate-800 hover:text-white transition-all duration-300 flex-shrink-0"
        :class="{'rotate-180': isOpened}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 transition-transform duration-300">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>

    
    <div
      class="grid transition-[grid-template-rows,opacity,margin,padding] duration-300 ease-in-out"
      :class="isOpened ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-slate-800/40' : 'grid-rows-[0fr] opacity-0 pointer-events-none mt-0 pt-0 border-t-transparent'"
    >
      <div class="overflow-hidden min-h-0">
        <p class="text-slate-400 text-[14px] leading-relaxed pl-3 pb-0.5">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpened = ref(false);

const props = withDefaults(
  defineProps<{
    title?: string
    desc?: string
  }>(),
  {
    title: '"Tabarruk Ziyorat" platformasi orqali nimaga erishish maqsad qilingan?',
    desc: "Ushbu platformani joriy etish orqali turkiy davlatlarga tegishli bo'lgan ziyoratgohlar haqida ma'lumotlarni joylashtirgan holda o'zaro ziyorat turizm bo'yicha turistlar sonini oshirish maqsad qilingan.",
  }
);
</script> -->


<template>
  <div 
    class="w-full max-w-[580px] text-left transition-all duration-300 p-4 rounded-[14px] border cursor-pointer select-none" 
    @click="$emit('toggle')"
    :class="isOpened 
      ? 'border-gray-700 bg-[#0F1322] shadow-[0_0_25px_rgba(239,68,68,0.05)]' 
      : 'border-slate-800/80 bg-[#0B0E17]/90 hover:border-slate-800 hover:bg-[#0F1322]'"
  >
    <div class="w-full flex items-center justify-between gap-4 rounded-[14px]">
      <div class="flex items-center gap-4 min-w-0 flex-1">
        
        <div class="flex items-center justify-center w-11 h-11 rounded-xl bg-[#EF4444]/15 text-[#EF4444] border border-[#EF4444]/10 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a4.859 4.859 0 0 0 3.413-4.637V4.09A1.13 1.13 0 0 0 19.62 3l-1.08.24a9 9 0 0 1-6.208-.682l-.108-.054a9 9 0 0 0-6.086-.71L3 2.5V15Z" />
          </svg>
        </div>

        <p 
          class="text-[18px] sm:text-[20px] font-medium leading-normal tracking-wide transition-all duration-300 pr-2 min-w-0"
          :class="isOpened ? 'text-[#EF4444] line-clamp-none' : 'text-white line-clamp-1'"
        >
          {{ title }}
        </p>
      </div>

      <button 
        class="flex items-center justify-center w-9 h-9 rounded-lg bg-[#1A1E2E] text-gray-300 border border-slate-800 hover:text-white transition-all duration-300 flex-shrink-0"
        :class="{'rotate-180': isOpened}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 transition-transform duration-300">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>

    <!-- Collapsible Body -->
    <div
      class="grid transition-[grid-template-rows,opacity,margin,padding] duration-300 ease-in-out"
      :class="isOpened ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-slate-800/40' : 'grid-rows-[0fr] opacity-0 pointer-events-none mt-0 pt-0 border-t-transparent'"
    >
      <div class="overflow-hidden min-h-0">
        <p class="text-slate-400 text-[14px] leading-relaxed pl-3 pb-0.5">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  desc?: string
  isOpened?: boolean
}>()

defineEmits(['toggle'])
</script>