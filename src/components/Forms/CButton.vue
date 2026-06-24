<template>
  <button
    :class="[variants[variant], sizes[size], btnClass]"
    class="border border-gray-300 cursor-pointer flex items-center"
    :disabled="disabled"
  >
    <slot name="prefix"></slot>

    <span class="mx-2">
      {{ text }}
    </span>

    <slot name="suffix"></slot>
  </button>
</template>
<script setup lang="ts">
import { DefineProps } from 'vue';

const props = defineProps<{
    text: string
    variant: 'green' | 'yellow' | 'danger'
    size: 'md' | 'lg' | 'xl'
    btnClass?: string
    disabled: boolean
}>()

const variants = {
    green: 'bg-green-500 text-white',
    yellow: 'bg-yellow-400 text-black',
    danger: 'bg-red-600 text-white'
}

const sizes = {
    md: 'px-2 py-2',
    lg: 'px-4 py-2',
    xl: 'px-6 py-2'
}

</script> 
<template>
        <button 
        :class="[
  variants[variant  'primary'],
  sizes[size  'md'],
  btnClass
]"
class="rounded-lg cursor-pointer"
        :disabled="props.disabled" 
        >
            <slot name="prefix"></slot>
            {{ text }}
            <slot name="suffix"></slot>
        </button>
    </template>
    <script setup lang="ts">
import {defineProps} from 'vue';
    const props = defineProps<{
        variant?: 'primary' | 'secondary' | 'tertiary',
        text: string 
        btnClass?: string
        size?: 'md' | 'lg' | 'xl'
        disabled?: boolean
    }>()

    const variants = {
        primary: 'bg-[#E64545] text-white hover:bg-[#b22323]',
        secondary: 'bg-gray-600  text-white hover:bg-[#2C2E3E]',
        tertiary: 'bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100'
    }
    const sizes = {
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-10 py-3 text-xl'
    }
    </script> 

    <template>

    </template>
    <script setup lang="ts">
    <template>
        <button 
        :class="[
  variants[variant  'primary'],
  sizes[size  'md'],
  btnClass
]" 
class="rounded-lg cursor-pointer"
        :disabled="props.disabled" 
        >
            <slot name="prefix"></slot>
            {{ text }}
            <slot name="suffix"></slot>
        </button>
    </template>
    <script setup lang="ts">
import {defineProps} from 'vue';
    const props = defineProps<{
        variant?: 'primary' | 'secondary' | 'tertiary',
        text: string 
        btnClass?: string
        size?: 'md' | 'lg' | 'xl'
        disabled?: boolean
    }>()

    const variants = {
        primary: 'bg-[#E64545] text-white hover:bg-[#b22323]',
        secondary: 'bg-gray-600  text-white hover:bg-[#2C2E3E]',
        tertiary: 'bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100'
    }
    const sizes = {
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-lg',
        xl: 'px-10 py-3 text-xl'
    }
    </script>

