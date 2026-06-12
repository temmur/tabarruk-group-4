<template>
    <div class="flex gap-2 bg-[#12192E] text-white p-4 rounded-lg items-start ">
        <div class="bg-blue-600/50 px-2 py-2 rounded-md">
            <i :class="icon"></i>
        </div>
        <div>
            <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
            <p class="text-gray-300">{{ subtitle }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    icon: string
    title: string
    subtitle: string
}>()
</script>