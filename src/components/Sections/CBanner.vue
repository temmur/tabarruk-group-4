<template>
  <div class="relative w-full h-screen overflow-hidden">
    <div
      v-for="(banner, index) in bannerList"
      :key="banner.title"
      :style="{ backgroundImage: `url(${banner.image})` }"
      class="slide-fade absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center text-white gap-4"
      :class="{ 'slide-active': activeBanner === index }"
    >
      <div class="text-center max-w-2xl z-20">
        <p class="text-xl font-[Gliroy] flex items-center justify-center"> <img src="/images/Sections/CAbout/location.svg" alt="Location icon" class="inline-block w-6 h-6 mr-1"> {{ banner.subtitle }}</p>
        <h1 class="text-7xl my-6 font-bold font-sans">{{ banner.title }}</h1>
        <p class="text-lg text-center">{{ banner.description }}</p>
      </div>

      <div class="absolute bottom-0 left-0 w-full h-full bg-[#07091C]/50"></div>

      <img
        src="/images/vectors/Vector(7).svg"
        alt="Vector graphic description"
        class="absolute top-0 left-0 w-full max-w-[700px]"
      />

      <div class="absolute right-50 top-1/2 transform -translate-y-1/2 flex flex-col items-center justify-center gap-1 z-20">
        <span>0{{ activeBanner + 1 }}</span>
        <div class="w-[4px] rounded-lg h-30 bg-white/30 relative overflow-hidden">
          <div
            class="absolute top-0 left-0 w-full bg-white rounded-lg"
            :style="{ height: fillPercent + '%', transition: 'height 4s linear' }"
          ></div>
        </div>
        <span>0{{ bannerList.length }}</span>
      </div>
    </div>
  
  </div>
   <div  class="z-40 absolute -bottom-20 left-0 w-full">
    <CBannerCarousel/>
   </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import CBannerCarousel from '@/components/carousels/CBannerCarousel.vue'
const activeBanner = ref(0)
const fillPercent = ref(0)
let timer: ReturnType<typeof setInterval>
let fillTimer: ReturnType<typeof setTimeout>

const bannerList = [
  { image: '/images/Hero/Samarkand.webp', title: 'Registon', subtitle: "Samarqand viloyati , O'zbekiston", description: "Mirzo Ulug'bek zamonasidan buyon bu maydon  Samarqand ahli uchun Bosh maydon hisoblanadi." },
  { image: '/images/Hero/Bukhara.jpeg', title: 'Bukhara', subtitle: "Bukhara viloyati , O'zbekiston", description: "Bukhara - bu O'zbekistonning qadimiy shaharlari orasida joylashgan shahar." },
  { image: '/images/Hero/Tashkent.jpeg', title: 'Tashkent', subtitle: "Tashkent viloyati , O'zbekiston", description: "Tashkent - bu O'zbekistonning aksarlik qismi, tarixiy va madaniy ahamiyatga ega bo'lgan shahar." }
]

function resetTimer() {
  clearInterval(timer)
  clearTimeout(fillTimer)
  fillPercent.value = 0
  fillTimer = setTimeout(() => { fillPercent.value = 100 }, 50)
  timer = setInterval(() => {
    activeBanner.value = (activeBanner.value + 1) % bannerList.length
    fillPercent.value = 0
    setTimeout(() => { fillPercent.value = 100 }, 50)
  }, 4000)
}

onMounted(() => resetTimer())
onUnmounted(() => { clearInterval(timer); clearTimeout(fillTimer) })
</script>

<style scoped>
.slide-fade {
  opacity: 0;
  z-index: 0;
  transition: opacity 0.9s ease;
}

.slide-active {
  opacity: 1;
  z-index: 2;
}
</style>