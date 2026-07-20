<template>
    <div class="mt-40 bg-[url('https://karibu-africa.ru/wp-content/uploads/2024/06/afr-6.webp')] py-30 px-20">
        <CSearch :data="searchResult"/>
  {{ count }}
  <button @click="count++">Increment</button>
    </div>
    <div>
     <input type="text" v-model="search">
     {{ search }}
    </div>
</template>
<script setup lang="ts">
import CSearch from '@/components/Forms/CSearch.vue';
import { ref, computed, watch } from 'vue';

const searchResult = ref([]); 
const count = ref(0)
const search = ref('')
watch(search, (newVal, oldVal)=> {
 console.log('Oldingi qidiruv:', oldVal)
  console.log('Yangi qidiruv:', newVal)
  searchValue()
})
async function searchValue() {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  
  searchResult.value = data.products; 
  
  console.log(searchResult.value);
}



</script>