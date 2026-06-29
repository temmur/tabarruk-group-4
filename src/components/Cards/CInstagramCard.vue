<template>  
<a :href="link">
<div class="hover-group w-full max-w-[220px] group cursor-pointer rounded-2xl!">
    <div class="mini-hover-group relative rounded-xl!">
        <img :src="image" alt="" class="rounded-xl!">
        <div class="absolute group-hover:opacity-[100%] flex transition-all rounded-xl flex-col opacity-0 top-0 right-0 w-full h-full bg-black/60 justify-center items-center text-white" >
            <i class="icon-external-link text-2xl"></i>
            Postni ko'rish</div>
    </div>
    <p class="font-sans text-sm">{{ like }} {{ t('like') }}</p>
    <p class="font-sans text-sm mt-1s">{{ date }} {{ t('days_ago') }}</p>
</div>
</a>
</template>
<script setup lang="ts">
import { DefineProps } from 'vue';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const props = defineProps<{
    image: string
    link: string
    like: number
    date: number
}>()
</script>
<style scoped>
.hover-group{
border: 2px solid rgba(255, 255, 255, 0.14);
    padding: 12px;
    background-color: #10112A;

}

.hover-group p{
    
    padding-top: 5px;
    border: 1px white;
    color: rgb(238, 239, 240);
}


</style>