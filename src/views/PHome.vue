<template>
   
 <div class="search-container">
  <input type="text" placeholder="search" />
  <span class="close-btn">✕</span>
</div>


<div class="min-h-screen bg-gradient-to-br from-[#000dff] to-[#1eff00] flex justify-center pt-10">
  
  <div class="relative w-4/5 max-w-4xl">
    
 <CInput v-model="inputVal"/>
 {{ inputVal }}

  </div>

</div>
    


<CButton text="Hello" variant="dark" size="xl"/>

{{ inputVal }}
</template>
<script setup lang="ts"> 
import {ref} from 'vue'
import CBanner from '@/components/Sections/CBanner.vue'
import CButton from '@/components/Forms/CButton.vue';
import CInput from '@/components/Forms/CInput.vue';

const inputVal = ref('')
</script>