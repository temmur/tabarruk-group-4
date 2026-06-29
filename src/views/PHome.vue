<template>
  <div class="bg-[#0b0e1a]">
    <CBanner />
     <CAbout/>
         <CCountries :countries="countries" />
     <CInstagram/>
   </div>
</template>

<script setup lang="ts">
import { countries } from '@/data/countries'
import CBanner from '@/components/Sections/CBanner.vue'
import CCountries from '@/components/Sections/CCountries.vue'
import CAbout from '@/components/Sections/CAbout.vue'
import CInstagram from '@/components/Sections/CInstagram.vue';
</script>