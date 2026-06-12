<template>
    <input type="text"
    class="border"
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