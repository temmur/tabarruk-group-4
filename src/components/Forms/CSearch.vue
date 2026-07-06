<template>
<div class="flex items-center w-full max-w-[700px] justify-between items-center gap-2">
    <div 

    

    v-show="openSearch"
    class="w-full flex items-center rounded-lg border border-[#4E535C]/30 bg-[#4E535C]/20 px-3 backdrop-blur-2xl">
        <slot name="prefix"></slot>
        <input :type="type"
        class="flex-1 py-4 outline-0 bg-transparent text-white" 
        v-bind="{placeholder}"
        v-model="modelValue"
        >
        <slot name="suffix">
            <button class="px-2 py-2 cursor-pointer border-none bg-gray-100/10 backdrop-blur-3xl rounded-lg text-white text-sm border-white"
            @click="clearInput"
            v-show="modelValue.length >= min"
            >Tozalash</button>
        </slot>
    </div>
    <i :class="[!openSearch ? 'icon-search' : 'icon-xmark']"
    class="text-white cursor-pointer text-2xl"
    @click="openSearch = !openSearch"
    ></i>
</div>
<p v-if="modelValue.length >= 4">{{ filteredResult }}</p>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'

const modelValue = defineModel<string>({ default: '' }) 
const openSearch = ref(false)

interface Props {
    placeholder?: string,
    max?: number,
    min?: number,
    type?: string,
    data: any[]
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: 'Search...',
    max: 20, 
    min: 4,
    type: 'text',
    data: () => []
})

const clearInput = () => {
    modelValue.value = ''
}

const filteredResult = computed(() => {
    if (!props.data) return []
    const searchTerm = modelValue.value.toLowerCase()
    return props.data.filter((element) => 
        element.title.toLowerCase().includes(searchTerm)
    )
})
</script>
