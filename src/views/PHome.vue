<template>
  <div class="bg-[#0b0e1a]">
    <CBanner />
    <CCountries :countries="countries" />
  </div>
</template>

<script setup lang="ts">
import CBanner from '@/components/Sections/CBanner.vue'
import CCountries from '@/components/Sections/CCountries.vue'
import { countries } from '@/data/countries'
</script>