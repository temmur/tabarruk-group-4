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