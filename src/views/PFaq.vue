
<template>
  <div class="bg-[#0B0F19] pt-40 h-full min-h-[60vh]">
    <div class="w-full container p-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-start mt-40">
      <CFaqCard 
        v-for="item in faqs"
        :key="item.id"
        :title="item.question"
        :desc="item.answer"
        :is-opened="activeCardId === item.id"
        @toggle="handleToggle(item.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CFaqCard from '@/components/Cards/CFaqCard.vue'

const faqs = [
  {
    id: 1,
    question: '"Tabarruk Ziyorat" platformasi orqali nimaga erishish maqsad qilingan?',
    answer: "Ushbu platformani joriy etish orqali turkiy davlatlarga tegishli bo'lgan ziyoratgohlar haqida ma'lumotlarni joylashtirgan holda o'zaro ziyorat turizm bo'yicha turistlar sonini oshirish maqsad qilingan."
  },
  {
    id: 2,
    question: '"Tabarruk Ziyorat" platformasi qachon ishlab chiqilgan?',
    answer: "Платформа была разработана для объединения культурно-исторического наследия..."
  },
  {
    id: 3,
    question: 'Turkiy davlatlar tashkilotiga nechta davlat kiradi?',
    answer: 'В состав Организации тюркских государств входят 5 государств-членов...'
  }
]

const activeCardId = ref<number | null>(null)

const handleToggle = (id: number) => {
  activeCardId.value = activeCardId.value === id ? null : id
}
</script>