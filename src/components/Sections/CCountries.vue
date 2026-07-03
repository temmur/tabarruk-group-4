<template>
  <section class="bg-[#070A1C] py-12 px-4 sm:py-20 sm:px-6">
    <div class="max-w-[1440px] mx-auto">

      <div class="text-center mb-8 sm:mb-6">
        <h2 class="font-serif text-2xl sm:text-4xl font-semibold text-white mb-4 pt-4 sm:pt-6">
          Nechta mamlakatlar?
        </h2>
        <div class="w-100 h-1 bg-[#e63946] mx-auto mb-3"></div>
        <p class="text-white font-sans text-xl sm:text-2xl opacity-90">
          Mavjud bo'lgan barcha mamlakatlar
        </p>
      </div>

      
      <div class="flex flex-wrap justify-center gap-4 sm:gap-9 md:gap-15 mb-6 sm:mb-12 md:mb-22">
        <RouterLink
          v-for="country in countries.slice(0, 4)"
          :key="country.name"
          :to="country.route"
          class="group relative flex flex-col items-center text-center w-full max-w-[240px] sm:w-64 px-6 pt-6 pb-8 rounded-xl transition-all duration-200 hover:bg-[#1a1f2e] overflow-hidden"
        >
          <img 
            :src="country.flag" 
            :alt="country.name"
            class="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4 shadow-lg opacity-85 brightness-90 transition-all duration-300 group-hover:opacity-100 group-hover:brightness-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]" 
          />
          <span class="block font-bold text-white text-base sm:text-lg">{{ country.name }}</span>
          <span class="font-sans block text-sm text-gray-400 mt-1">{{ country.count }} Manzillar</span>
          
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full group-hover:bg-white"></div>
        </RouterLink>
      </div>


      <div class="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12">
        <RouterLink
          v-for="country in countries.slice(4)"
          :key="country.name"
          :to="country.route"
          class="group relative flex flex-col items-center text-center w-full max-w-[240px] sm:w-64 px-6 pt-6 pb-8 rounded-xl transition-all duration-200 hover:bg-[#1a1f2e] overflow-hidden"
        >
          <img 
            :src="country.flag"
            :alt="country.name"
            class="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-4 shadow-lg opacity-85 brightness-90 transition-all duration-300 group-hover:opacity-100 group-hover:brightness-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]" 
          />
          <span class="block font-bold text-white text-base sm:text-lg">{{ country.name }}</span>
          <span class="font-sans block text-sm text-gray-400 mt-1">{{ country.count }} Manzillar</span>
          
          <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full group-hover:bg-white"></div>
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  countries: {
    name: string
    flag: string
    count: number
    route: string
    active?: boolean
  }[]
}>()
</script>

<style scoped></style>