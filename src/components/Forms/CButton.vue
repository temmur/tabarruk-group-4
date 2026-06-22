<template>
  <button
    :class="[variants[variant], sizes[size], btnClass]"
    class="border border-gray-300 cursor-pointer flex items-center justify-center transition duration-200"
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

defineProps<{
    text: string
    variant: 'red' | 'dark' | 'green' | 'yellow' | 'danger'
    size: 'md' | 'lg' | 'xl'
    btnClass?: string
    disabled: boolean
}>()


const variants = {
    red: 'bg-[#e54545] border-transparent text-white  hover:bg-[#cc3b3b]',
    dark: 'bg-[#30363d] border-gray-700 text-white hover:bg-[#21262d]',
    green: 'bg-green-500 text-white rounded-md',
    yellow: 'bg-yellow-400 text-black rounded-md',
    danger: 'bg-red-600 text-white rounded-md'
}

const sizes = {
    md: 'px-2 py-2 rounded-lg',
    lg: 'px-4 py-2 rounded-lg',
    xl: 'px-6 py-2 rounded-lg'
}
</script>