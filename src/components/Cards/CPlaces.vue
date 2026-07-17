<template>
  <section class="px-6 py-16 bg-[#070A1C]">
    <div class="max-w-[1440px] mx-auto">
<h2 class="font-serif text-3xl font-semibold text-white mb-1">
        {{ title }}
</h2>
      <p class="text-gray-400 text-sm mb-6">
        {{ subtitle }}

     </p>

    <div
        ref="scrollContainer"
      class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
    >
       <RouterLink
           v-for="place in places"
          :key="place.name"
          :to="place.route ?? '#'"
          class="group relative rounded-xl overflow-hidden h-[280px] w-[240px] shrink-0 block"
        >
          <img
             :src="place.image"
            :alt="place.name"
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

          <div class="absolute bottom-4 left-4 right-4 transition-transform duration-300 ease-out group-hover:-translate-y-6">
            <h3 class="text-white font-bold text-lg leading-tight">
              {{ place.name }}
            </h3>

              <div
             v-if="place.location"
              class="flex items-center gap-1 text-gray-300 text-sm mt-1 opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0"
            >
              <span></span>
              {{ place.location }}
            </div>
          </div >
        </RouterLink>
      </div>

      <div class="flex justify-center mt-8">
        <RouterLink
          :to="viewAllRoute ?? '#'"
          class="flex items-center gap-2 bg-[#1a1f2e] hover:bg-[#242b3d] transition-colors text-white px-6 py-3 rounded-xl text-sm font-medium"
        >
          Hammasini ko'rish
          <span>
            <span class="icon-arrow-right"></span>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{
  title: string
  subtitle: string
  places: {
    name: string
    image: string
    location?: string
    route?: string
  }[]
  viewAllRoute?: string
}>()

const scrollContainer = ref<HTMLElement | null>(null)
let scrollInterval: ReturnType<typeof setInterval> | null = null

const CARD_WIDTH = 240
const GAP = 16
const STEP = CARD_WIDTH + GAP
const INTERVAL_MS = 3000

function startAutoScroll() {
  scrollInterval = setInterval(() => {
    const el = scrollContainer.value
    if (!el) return

    const maxScroll = el.scrollWidth - el.clientWidth

    if (el.scrollLeft >= maxScroll - 5) {
      el.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      el.scrollBy({ left: STEP, behavior: 'smooth' })
    }
  }, INTERVAL_MS)
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  if (scrollInterval) clearInterval(scrollInterval)
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>