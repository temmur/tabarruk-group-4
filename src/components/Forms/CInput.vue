<template>
    <input type="text"
    class="w-full px-6 py-4 pr-14 text-white text-lg 
             bg-white/5 border border-white/30 
             rounded-2xl outline-none 
             placeholder-white/40 backdrop-blur-md"
     @input="emit('update:modelValue', 
         $event.target.value
     )" 
     :value="modelValue">
</template>
<script setup lang="ts">
import { DefineProps, defineEmits } from 'vue';

const props = defineProps<{
    type: string,
    disabled: boolean, 
    error: boolean,
    modelValue: string
}>()

const emit = defineEmits(['change', 'update:modelValue'])

function handleInput(input: any){
    emit('change', 
        input.target.value
    )
}
</script>