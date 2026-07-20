<template>
  <section
    v-if="place"
    class="relative min-h-[500px] bg-cover bg-center flex items-end overflow-hidden"
    :style="{ backgroundImage: `url(${place.image})` }"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-[#030712]/70 via-[#030712]/30 to-[#030712]/80"></div>

    <div class="relative z-10 max-w-[1440px] mx-auto w-full px-6 pt-32 pb-12">
        <nav class="flex items-center gap-2 text-white text-sm font-medium mb-26 [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
  <RouterLink to="/" class="hover:text-[#d62839] transition-colors">Asosiy</RouterLink>
  <span class="text-gray-400">
                <span class="icon-chevron-right"></span>
            </span>
  <RouterLink :to="`/country/${route.params.country}`" class="hover:text-[#d62839] transition-colors">
    {{ place.country }}
  </RouterLink>
  <span class="text-gray-400">
                <span class="icon-chevron-right"></span>
  </span>
  <span class="text-gray-400">{{ place.name }}</span>
</nav>
      <div class="flex flex-col items-center text-center">
        <div
          v-if="place.city"
          class="flex items-center gap-2 text-gray-300 text-base mb-4"
        >
          <span></span>
          
                <span class="icon-location-pin"></span>{{ place.city }}<span v-if="place.country">, {{ place.country }}</span>
        </div>

        <h1 class="font-serif text-4xl md:text-6xl text-white mb-2 [text-shadow:0_4px_12px_rgba(0,0,0,0.8)]"
        
          style="font-family: 'Playfair Bold', serif; font-weight: 600; font-size: 85px;">
          {{ place.name }}
        </h1>
      </div>
    </div> 
  </section>

  <section v-if="place" class="bg-[#070A1C] px-6 py-16">
    <div class="max-w-[900px] mx-auto text-center">
      <p class="text-gray-200 text-lg leading-relaxed whitespace-pre-line">
        {{ place.info }}
      </p>
    </div>
  </section>

  <div v-else class="text-white text-center py-32">
    Joy topilmadi
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { sights1 } from '@/data/sightList'

const route = useRoute()

const routeToSightsKey: Record<string, keyof typeof sights1> = {
  uzbekistan: 'uzbekistan',
  turkey: 'turkiya',
  turkmenistan: 'Turkmanistaon',
  kazakhstan: 'Qozogiston',
  kyrgyzstan: 'Qirgiston',
  hungary: 'Vengriya',
}

const place = computed(() => {
  const countryParam = route.params.country as string
  const idParam = route.params.id as string
  const key = routeToSightsKey[countryParam]
  if (!key) return null

  const list = sights1[key] ?? []
  return list.find((p: any) => String(p.id) === idParam) ?? null
})
</script>

<style scoped></style>