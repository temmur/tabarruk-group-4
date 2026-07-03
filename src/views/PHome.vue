<template>
  <div class="bg-[#0b0e1a]">
    <CBanner />
     <CAbout/>
     <CNewslist/>
          <CCountries :countries="countries" />
     <CInstagram/>
   </div>
</template>
<script setup lang="ts">
import {countries} from '@/data/countries'  
import CBanner from '@/components/Sections/CBanner.vue'
import CAbout from '@/components/Sections/CAbout.vue'
import CNewslist from '@/components/Sections/CNewslist.vue'
import CCountries from '@/components/Sections/CCountries.vue'
import CInstagram from '@/components/Sections/CInstagram.vue';
</script>