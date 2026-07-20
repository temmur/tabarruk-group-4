<template>
    <div class="mt-40 bg-[url('https://karibu-africa.ru/wp-content/uploads/2024/06/afr-6.webp')] py-30 px-20">
        <CSearch :data="searchResult"/>

    </div>
</template>
<script setup lang="ts">
import CSearch from '@/components/Forms/CSearch.vue';
import { ref } from 'vue';

const searchResult = ref([]); 

async function searchValue() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  
  searchResult.value = data.products; 
  
  console.log(searchResult.value);
}

searchValue();
</script>