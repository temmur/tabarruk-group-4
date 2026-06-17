<!-- <template>
     <div class="m-10 flex items-center gap-4 rounded-xl border border-white/20 bg-white/20 backdrop-blur-lg p-4" >
    <img
      src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=500"
      alt="O'trar shahri"
      class="w-full max-w-[140px] rounded-lg"
    />

    <div>
      <span>Turkiston viloyati, Qozog'iston</span>
      <h2 class="text-xl font-semibold">O'trar shahri</h2>
    </div>
    </div>
</template>  -->
<template>
  <div
    class="relative overflow-hidden rounded-xl p-4
           bg-white/10 !backdrop-blur-2xl 
           
           card-box
           border border-white/10
           shadow-2xl"
  >
    
    <div
      class="absolute inset-0 bg-gradient-to-br
             from-slate-700/70
             via-slate-800/60
             to-blue-950/70"
    ></div>

  
    <div class="relative z-10 flex items-center gap-5">
     
   <img
      src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=500"
      alt="O'trar shahri"
      class="w-full max-w-[140px] rounded-lg"
    />
      <div class="flex flex-col h-24 justify-between">
        <p class="text-white/60 text-lg">
          Toshkent viloyati, O'zbekiston
        </p>

        <h2 class="mt-2 text-xl font-bold text-white leading-tight">
          Axtam Sahoba
         (Adhamsahoba)
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
<style scoped>
.card-box{
     -webkit-backdrop-filter: blur(5px) !important;
    backdrop-filter: blur(5px) !important;
    opacity: 1;
    /* -webkit-filter: blur(3px); */
  /* -moz-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px); */
  backdrop-filter:blur(20px) brightness(110%);
}
</style>






<template>
  <div
    class="relative overflow-hidden rounded-[20px] p-5
           bg-gradient-to-b from-white/12 to-white/5 
           backdrop-blur-xl border border-white/15
           shadow-2xl max-w-[650px] w-full"
  >

    <div
      class="absolute inset-0 bg-gradient-to-br
             from-slate-900/40
             via-slate-800/30
             to-blue-950/40 -z-10"
    ></div>

    <div class="relative z-10 flex flex-col sm:flex-row items-center sm:items-stretch gap-6">
      
      <div class="w-full sm:w-[180px] h-[120px] shrink-0 rounded-xl overflow-hidden shadow-md">
        <img
          :src="props.image"
          :alt="props.title"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Dinamik matnlar (subtitle va title props) -->
      <div class="flex flex-col justify-center gap-2 w-full text-left">
        <p class="text-white/45 text-base font-normal tracking-wide">
          {{ props.subtitle }}
        </p>

        <h2 class="text-white text-2xl sm:text-3xl font-semibold leading-tight m-0">
          {{ props.title }}
        </h2>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Tashqaridan keladigan ma'lumotlar turlari (Types)
const props = defineProps<{
    image: string
    title: string
    subtitle: string
}>()
</script>

<style scoped>
/* 
  Barcha blur va oyna effektlari Tailwind'ning o'zida (backdrop-blur-xl va oq shaffofliklar bilan) 
  hal qilingani sababli, eski bir-biriga zid <style> kodlari olib tashlandi.
*/
</style>