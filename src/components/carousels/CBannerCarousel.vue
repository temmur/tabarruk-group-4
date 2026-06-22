<template>
  <swiper
  :modules="modules"
    :slides-per-view="3.1"
    :looped-slides="4"
    :space-between="20"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="(el, idx) in bannerList"
    :key="idx"
    >
     <CBannerCard 
     :title="el.title.uz"
     :subtitle="el.desc.uz"
     :image="el.image"
     />
   </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
import {ref} from 'vue'
import { bannerList } from '@/data/bannerList';
import CBannerCard from '@/components/Cards/CBannerCard.vue';


const modules = [Autoplay];
</script>