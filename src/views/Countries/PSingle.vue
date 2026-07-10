<template>
<div class="bg-red-500 mt-40">
    <h1 class="text-white">Hello</h1>
   <p class="text-white"> {{ country }}</p>
</div>
</template>
<script setup lang="ts">
import {ref, computed} from 'vue'
import { useRoute } from 'vue-router';
import { countries } from '@/data/countries';

const route = useRoute()

const country = computed(()=> {
    return countries.find((element)=> element.route === route.params.route)
})
</script>