<template>
<div class="container">

<h1 class="font-sans text-sm" style="font-size: 40px; color: white; text-align: center;">Instagram</h1>
<h1 class="" style=" text-align: center;color:  #ef4444;font-weight: 900;">____________________________</h1>
    <h6 style="padding-bottom: 20px; padding-top: 20px; color: white;text-align: center;">Turk dunyosidagi so‘nggi yangiliklar va o‘zgarishlardan xabardor bo‘ling.</h6>
    <div class="flex gap-4 justify-between">
        <CInstagramCard v-for="(el, idx) in instagramData"
        class="mt-10" 
:link="el.link"
:date="el.postDate"
:like="el.like"
:image="el.image"
/>
    </div>
</div>
</template>
<script setup lang="ts">
import CInstagramCard from '../Cards/CInstagramCard.vue';
import { instagramData } from '@/data/InstagramList.ts';
</script>
<style>
.h1{
    border-bottom: 1px solid red;
}
</style>