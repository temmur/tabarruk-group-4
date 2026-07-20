<template>
  <section
    v-if="country"
    class="relative min-h-[700px] bg-cover bg-center flex items-end overflow-hidden"
    :style="{ backgroundImage: `url(${country.backImage})` }"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-[#030712]/70 via-[#030712]/30 to-[#030712]/50"></div>

    <img
      src="/images/vectors/Vector(7).svg"
      class="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      alt=""
    />

    <div class="relative z-10 max-w-[1440px] mx-auto w-full px-6 pt-32 pb-20">

      <nav class="flex items-center pb-20 gap-2 text-white text-sm font-medium mb-10 [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
        <RouterLink to="/" class="flex items-center gap-1 hover:text-[#d62839] transition-colors ease">
          <span></span>
          <div class="clearfix bshadow0 pbs">
            <span class="icon-house-medical"></span>
          </div>
          Asosiy
        </RouterLink>
        <span class="text-gray-400">
          <span class="icon-chevron-right"></span>
        </span>
        <RouterLink to="/countries" class="hover:text-[#d62839] transition-colors">Davlat</RouterLink>
        <span class="text-gray-400">
          <span class="icon-chevron-right"></span>
        </span>
        <span class="text-gray-400">{{ country.name }}</span>
      </nav>

      <div class="flex flex-col items-center text-center">
        <h1
          style="font-family: 'Playfair Black Italic', serif; font-weight: 900;"
          class="text-6xl md:text-8xl text-white mb-8 [text-shadow:0_4px_12px_rgba(0,0,0,0.8)]"
        >
          {{ country.name }}
        </h1>

        <p class="text-white text-lg md:text-xl max-w-3xl mb-8 opacity-90 [text-shadow:0_2px_6px_rgba(0,0,0,0.7)]">
          {{ country.text }}
        </p>

        <button class="flex items-center font-semibold gap-3 bg-[#e63946] hover:bg-[#d62839] transition-colors ease-in text-white px-6 py-4 rounded-xl">
          Videoni tomosha qilish
          <div class="glyph fs1">
            <div>
              <span class="icon-play-stroke"></span>
            </div>
          </div>
          <span></span>
        </button>
      </div>
    </div>
  </section>

  <CPlaces
    v-if="countryPlaces.length > 0"
    title="Diqqatga sazovor joylar"
    subtitle="Eng so'nggi yangiliklardan xabardor bo'ling"
    :places="countryPlaces"
    :view-all-route="`/sightList/${route.params.route}`"
  />

</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { countries } from '@/data/countries'
import { sights1 } from '@/data/sightList'
import CPlaces from '@/components/Cards/CPlaces.vue'

const route = useRoute()

const country = computed(() =>
  countries.find((el) => el.route === route.params.route)
)

const routeToSightsKey: Record<string, keyof typeof sights1> = {
  uzbekistan: 'uzbekistan',
  turkey: 'turkiya',
  turkmenistan: 'Turkmanistaon',
  kazakhstan: 'Qozogiston',
  kyrgyzstan: 'Qirgiston',
  hungary: 'Vengriya',
}

const countryPlaces = computed(() => {
  const currentRoute = route.params.route as string
  const key = routeToSightsKey[currentRoute]
  if (!key) return []

  const raw = sights1[key] ?? []

  return raw.map((place: any) => ({
    name: place.name,
    image: place.image ?? place.img,
    location: place.city ?? place.country,
    route: `/sight/${currentRoute}/${place.id}`,
  }))
})
</script>

<style scoped></style>