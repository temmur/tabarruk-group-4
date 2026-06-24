<template>
  <header class="w-full bg-[#0b0e1a] text-white fixed top-0 left-0 z-50">
    <div class="h-1 bg-[#e63946] w-full"></div>
    <div class="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">

      <RouterLink to="/">
        <img src="/images/uz.svg" alt="Logo" class="w-89 h-16 object-contain" />
      </RouterLink>

      <div class="hidden lg:flex items-center gap-7">
        <nav class="text-sm font-semibold text-gray-300">
          <ul class="flex items-center gap-6">
            <li v-for="(el, idx) in navList" :key="idx" class="relative">

              <button v-if="el.name === 'Davlatlar'" @click="toggleCountries" class="hover:text-gray-300">
                {{ el.name }}
              </button>
              <button v-else-if="el.name==='Dinlar'" @click="toggleReligions" class="hover:text-gray-300">
                {{ el.name }}
              </button>
              <RouterLink v-else :to="el.route" class="hover:text-gray-300">
                {{ el.name }}
              </RouterLink>

              <Transition name="dropdown">
                <div
                  v-if="el.name === 'Davlatlar' && showCountries"
                  ref="dropdownRef"
                  class="absolute top-full left-0 mt-4 w-[460px] bg-[#1c2333]/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-800"
                >
                  <div class="grid grid-cols-2 gap-x-8 gap-y-5">
                    <RouterLink
                      v-for="country in countries" :key="country.name" :to="country.route"
                      class="country-item flex items-center gap-3 -m-2 p-2 rounded-xl transition-colors duration-200"
                      @click="closeCountries"
                    >
                      <img :src="country.flag" alt="" class="w-8 h-8 rounded-full object-cover">
                      <span>
                        <span class="block font-semibold text-white country-name">{{ country.name }}</span>
                        <span class="block text-xs text-gray-400">{{ country.count }} Manzillar</span>
                      </span>
                    </RouterLink>
                  </div>
                </div>
              </Transition>

              <Transition name="dropdown">
                <div
                  v-if="el.name==='Dinlar' && ShowReligions"
                  ref="religionsRef"
                  class="absolute top-full left-0 mt-4 w-[260px] bg-[#1c2333]/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-gray-800"
                >
                  <RouterLink
                    v-for="religion in religions" :key="religion.name" :to="religion.route"
                    class="country-item flex items-center gap-3 p-2 rounded-xl transition-colors duration-200"
                    @click="closeReligions"
                  >
                    <img :src="religion.flag" alt="" class="w-10 h-10 rounded-lg object-cover">
                    <span>
                      <span class="block font-semibold text-white country-name">{{ religion.name }}</span>
                      <span class="block text-xs text-gray-400">{{ religion.count }} Manzillar</span>
                    </span>
                  </RouterLink>
                </div>
              </Transition>

            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-4 border-l border-gray-700 pl-6">
          <div class="relative" ref="langRef">
            <button @click="toggleLang" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img :src="currectLang.flag" alt="" class="w-8 h-8 rounded-full object-cover" />
            </button>
            <Transition name="dropdown">
              <div
                v-if="showLang"
                class="absolute top-full right-0 mt-4 w-[420px] bg-[#1c2333]/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-gray-800/60"
              >
                <div class="grid grid-cols-3 gap-x-4 gap-y-3">
                  <button
                    v-for="lang in languages" :key="lang.code"
                    @click="selectLanguage(lang)"
                    class="country-item flex items-center gap-2 p-1.5 rounded-xl transition-colors duration-200 text-left min-w-0"
                  >
                    <img :src="lang.flag" alt="" class="w-6 h-6 rounded-full object-cover flex-shrink-0" />
                    <span class="flex items-center justify-between flex-1 min-w-0 gap-1">
                      <span class="country-name text-xs font-medium text-white whitespace-nowrap">{{ lang.name }}</span>
                      <span v-if="lang.code === currectLang.code" class="text-white text-sm flex-shrink-0 font-bold ml-auto">✓</span>
                    </span>
                  </button>
                </div>
              </div>
            </Transition>
          </div>
          <button>
            <img src="./images/search.png" alt="Search" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <div class="flex lg:hidden items-center">
        <button @click="toggleMobileMenu" class="flex flex-col justify-center items-center gap-1.5 w-8 h-8">
          <span class="block w-6 h-0.5 bg-white"></span>
          <span class="block w-6 h-0.5 bg-white"></span>
          <span class="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

    </div>

    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden fixed inset-0 bg-[#0b0e1a] z-40 flex flex-col px-6 pb-10 overflow-y-auto"
      >
        <div class="flex items-center justify-between py-4">
          <RouterLink to="/" @click="mobileMenuOpen = false">
            <img src="/images/uz.svg" alt="Logo" class="h-16 object-contain" />
          </RouterLink>
          <button @click="mobileMenuOpen = false" class="text-white text-4xl leading-none font-light">X</button>
        </div>

        <div class="h-px bg-gray-800 mb-6"></div>

        <nav class="flex flex-col">
          <a
            v-for="(el, idx) in navList"
            :key="idx"
            :href="el.hash"
            @click="mobileMenuOpen = false"
            class="text-3xl font-bold text-white py-4 border-b border-gray-800/50 block text-left w-full"
          >
            {{ el.name }}
          </a>
        </nav>

        <div class="mt-auto pt-8 relative">
          
          <Transition name="dropdown">
            <div 
              v-if="showMobileLang" 
              class="absolute bottom-full left-0 mb-4 w-[340px] bg-[#1c2333]/95 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 shadow-2xl z-50"
            >
              <div class="grid grid-cols-2 gap-x-4 gap-y-4">
                <button
                  v-for="lang in languages" :key="lang.code"
                  @click="selectMobileLanguage(lang)"
                  class="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors text-left"
                >
                  <img :src="lang.flag" alt="" class="w-6 h-6 rounded-full object-cover flex-shrink-0" />
                  <span class="text-sm font-medium text-white flex-1 min-w-0 truncate">{{ lang.name }}</span>
                  <span v-if="lang.code === currectLang.code" class="text-white text-xs font-bold flex-shrink-0"></span>
                </button>
              </div>
            </div>
          </Transition>

          <button 
            @click="toggleMobileLang" 
            class="flex items-center justify-between w-full max-w-[180px] px-3 py-4 rounded-xl bg-[#1c2333] border border-gray-800 transition-all "
          >
            <div class="flex items-center gap-2.5">
              <img :src="currectLang.flag" alt="" class="w-6 h-6 rounded-full object-cover">
              <span class="text-base font-semibold text-white">{{ currectLang.name }}</span>
            </div>
            <span class="text-xs text-gray-400" ></span>
          </button>

        </div>

      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = ref([
    { 
        code: 'ru', 
        name: 'Русский', 
        flag: './images/ru.svg',
        route: '/languages/ru'
    },
    { 
        code: 'kk', 
        name: 'Қазақша', 
        flag: './images/flags-svg/Flag (5).svg',
        route: '/languages/kk'
    },
    { 
        code: 'tk', 
        name: 'Türkmen', 
        flag: './images/flags-svg/Flag (2).svg',
        route: '/languages/tk'
    },
    { 
        code: 'en', 
        name: 'English', 
        flag: './images/TheUK.svg',
        route: '/languages/en'
    },
    { 
        code: 'ky', 
        name: 'Қырғызча', 
        flag: './images/flags-svg/Flag (6).svg',
        route: '/languages/ky'
    },
    { 
        code: 'az', 
        name: 'Azərbaycan', 
        flag: './images/flags-svg/Flag (3).svg',
        route: '/languages/az'
    },
    { 
        code: 'uz', 
        name: "O'zbekcha", 
        flag: './images/flags-svg/Uzbekistan.svg',
        route: '/languages/uz'
    },
    { 
        code: 'tr', 
        name: 'Türk', 
        flag: './images/flags-svg/Flag (1).svg',
        route: '/languages/tr'
    },
    { 
        code: 'hu', 
        name: 'Magyar', 
        flag: './images/flags-svg/Flag (4).svg',
        route: '/languages/hu'
    }
])

const activeLanguage = ref(languages.value.find(l => l.code === 'uz'))
const currectLang = computed(() => languages.value.find(i => i.code === locale.value) ?? languages.value[6])

const changeLanguage = (lang: string) => {
    locale.value = lang
    localStorage.setItem('lang', lang)
}

const showCountries = ref(false)
const ShowReligions = ref(false)
const showLang = ref(false)
const showMobileLang = ref(false) 
const mobileMenuOpen = ref(false)

const dropdownRef = ref(null)
const religionsRef = ref(null)
const langRef = ref(null)

function toggleCountries() {
    showCountries.value = !showCountries.value
    ShowReligions.value = false
    showLang.value = false
}
function closeCountries() { showCountries.value = false }

function toggleReligions() {
    ShowReligions.value = !ShowReligions.value
    showCountries.value = false
    showLang.value = false
}
function closeReligions() { ShowReligions.value = false }

function toggleLang() {
    showLang.value = !showLang.value
    showCountries.value = false
    ShowReligions.value = false
}

function toggleMobileLang() {
    showMobileLang.value = !showMobileLang.value
}

function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
    showMobileLang.value = false
}

function selectLanguage(lang) {
    activeLanguage.value = lang
    showLang.value = false
    changeLanguage(lang?.code)
}

function selectMobileLanguage(lang) {
    activeLanguage.value = lang
    showMobileLang.value = false
    changeLanguage(lang?.code)
    mobileMenuOpen.value = false 
}

function handleClick(event) {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        showCountries.value = false
    }
    if (religionsRef.value && !religionsRef.value.contains(event.target)) {
        ShowReligions.value = false
    }
    if (langRef.value && !langRef.value.contains(event.target)) {
        if (!event.target.closest('button') || event.target.closest('button').parentElement !== langRef.value) {
            showLang.value = false
        }
    }
}

onMounted(() => document.addEventListener('click', handleClick))
onUnmounted(() => document.removeEventListener('click', handleClick))

const navList = ref([
    { 
        name: 'Biz haqimizda', 
        route: '/about', 
        hash: '#about' 
    },
    { 
        name: 'Davlatlar', 
        route: '/countries', 
        hash: '#countries' 
    },
    { 
        name: 'Umumiy xarita', 
        route: '/map', 
        hash: '#map' 
    },
    { 
        name: 'Dinlar', 
        route: '/religions', 
        hash: '#religions' 
    },
    { 
        name: 'Yordam', 
        route: '/help', 
        hash: '#help' 
    },
    { 
        name: 'FAQ', 
        route: '/faq', 
        hash: '#faq' 
    }
])

const countries = ref([
    { 
        name: "O'zbekiston", 
        flag: './images/dropdown-flag-icons/Uzbekistan.svg', 
        count: 175, 
        route: '/countries/uzbekistan' 
    },
    { 
        name: 'Turkiya', 
        flag: './images/dropdown-flag-icons/Turkiye.svg', 
        count: 150, 
        route: '/countries/turkey' 
    },
    { 
        name: 'Turkmaniston', 
        flag: './images/dropdown-flag-icons/Turkmenistan.svg', 
        count: 20, 
        route: '/countries/turkmenistan' 
    },
    { 
        name: 'Ozarbayjon', 
        flag: './images/dropdown-flag-icons/Azerbaijan.svg', 
        count: 0, 
        route: '/countries/azerbaijan' 
    },
    { 
        name: "Qozog'iston", 
        flag: './images/dropdown-flag-icons/Kazakhstan.svg', 
        count: 51, 
        route: '/countries/kazakhstan' 
    },
    { 
        name: "Qirg'iziston", 
        flag: './images/dropdown-flag-icons/Kyrgyzstan.svg', 
        count: 19, 
        route: '/countries/kyrgyzstan' 
    },
    { 
        name: 'Vengriya', 
        flag: './images/dropdown-flag-icons/Hungary.svg', 
        count: 14, 
        route: '/countries/hungary' 
    }
])

const religions = ref([
    { 
        name: 'Islam', 
        flag: './images/MSI.png', 
        count: 6, 
        route: '/religions/islam' 
    }
])
</script>

<style scoped>
:deep(html) {
  scroll-behavior: smooth !important;
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
    transform: translateY(8px); 
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: opacity 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
}

.country-item:hover {
    background-color: rgba(255, 255, 255, 0.06);
}
.country-item:hover .country-name {
    color: #e63946;
}
</style>