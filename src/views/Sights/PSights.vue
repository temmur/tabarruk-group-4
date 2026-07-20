<template>
  <section class="min-h-screen bg-[#070A1C] px-6 pt-32 pb-20">
    <div class="max-w-[1440px] mx-auto">
      <h2 class="font-serif text-4xl font-semibold text-white mb-1">
        Diqqatga sazovor joylar
      </h2>
      <p class="text-gray-400 text-sm mb-10">
        {{ country?.name }}ning barcha joylari va diqqatga sazovor joylari
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <RouterLink
          v-for="place in visiblePlaces"
          :key="place.name"
          :to="place.route ?? '#'"
          class="group relative rounded-xl overflow-hidden h-[240px] block"
        >
          <img
            :src="place.image"
            :alt="place.name"
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

          <div class="absolute bottom-4 left-4 right-4">
            <h3 class="text-white font-bold text-base leading-tight">
              {{ place.name }}
            </h3>
            <div v-if="place.location" class="text-gray-300 text-xs mt-1">
              {{ place.location }}
            </div>
          </div>
        </RouterLink>
      </div>

      <div v-if="visibleCount < allPlaces.length" class="flex justify-center mt-10">
        <button
          @click="loadMore"
          class="flex items-center gap-2 bg-[#1a1f2e] hover:bg-[#242b3d] transition-colors text-white px-6 py-3 rounded-xl text-sm font-medium"
        >
          Ko'proq yuklash
        <span class="icon-chevron-bottom"></span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { countries } from '@/data/countries'
import { sights1 } from '@/data/sightList'

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

const allPlaces = computed(() => {
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

const PAGE_SIZE = 12
const visibleCount = ref(PAGE_SIZE)

const visiblePlaces = computed(() => allPlaces.value.slice(0, visibleCount.value))

function loadMore() {
  visibleCount.value += PAGE_SIZE
}
</script>

<style scoped></style>