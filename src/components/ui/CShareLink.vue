<template>
      <div class="flex items-center flex-1 bg-[#111723] border border-gray-800/50 rounded-lg pl-4 pr-1 py-1 overflow-hidden">
          <div class="flex items-center justify-center pl-3 pr-4 border-r border-gray-800/60 h-7">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-200">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  </div>

  <div class="flex items-center gap-2 shrink-0">

    <a href="#" class="flex items-center justify-center w-9 h-9 rounded-full bg-[#121824] hover:bg-gray-800 text-white transition-colors duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0C5.344 0 0 5.344 0 11.944c0 5.621 3.874 10.334 9.106 11.622.128.024.226-.004.288-.064.062-.061.084-.153.064-.268l-.836-3.143 6.945-4.21c.64-.388.344-1.077-.442-.62l-5.617 3.268-3.04-.95c-.662-.207-.674-.662.138-.98l11.88-4.58c.55-.224 1.03.111.854.856l-2.023 9.537c-.152.686-.558.854-1.13.534l-3.265-2.406-1.576 1.516c-.174.174-.32.32-.656.32l.235-3.333 6.066-5.48c.264-.235-.057-.365-.41-.13l-7.5 4.723-3.232-1.01c-.703-.22-.717-.704.147-1.042L22.613 2.1c.55-.22.984.147.81 1.04l-3.87 18.23c-.29 1.34-1.082 1.674-2.206.938l-5.914-4.36-2.85 2.74c-.316.316-.582.582-1.192.582l.423-6.002 10.924-9.87c.475-.42-.104-.655-.74-.233L6.727 12.87 1.54 11.25c-1.127-.353-1.15-.113-.24.243l20.48 7.89c.92.35 1.714-.19 1.432-1.37L24 2.4C24 1.08 22.92 0 11.944 0z"/>
      </svg>
    </a>

    
    <a href="#" class="flex items-center justify-center w-9 h-9 rounded-full bg-[#121824] hover:bg-gray-800 text-white transition-colors duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.055-4.425 5.055H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
      </svg>
    </a>
   
  </div>
    <span
    @click="handleCopy"
    class="text-gray-300 cursor-pointer text-sm font-light truncate flex-1 tracking-wide bg-gray-700  rounded-lg flex items-center justify-between px-3">
      {{ textCopy }}
       <button class="bg-[#db3d3d] hover:bg-red-700 text-white p-2 rounded-lg transition-colors duration-200 flex items-center justify-center shrink-0 shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
      </svg>
    </button>
    </span>
    
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from 'vue';
const props = defineProps<{
     routerLink: string
}>()

const textCopy = ref(` tabarrukziyorat.uz/news/${props.routerLink}`)
const isCopied = ref(false)

const handleCopy=async()=> {
    try{
        await navigator.clipboard.writeText(textCopy.value)

        isCopied.value = true

        setTimeout(()=> {
            isCopied.value = false
        }, 2000)
    }catch(error){
        console.error('Failed to copy text: ', error)
    }
}
    
</script>