<template>
  <div class="max-w-md w-full mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100">
    <div class="mb-6">
     <slot name="header">
         <h2 class="text-xl font-bold text-gray-800">Account Information</h2>
      <p class="text-sm text-gray-500">Please fill in your details below.</p>
     </slot>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
   <slot>
       <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input 
          v-model="formData.name" 
          type="text" 
          placeholder="John Doe"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          v-model="formData.email" 
          type="email" 
          placeholder="john@example.com"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>
   </slot>

      <div class="pt-4 mt-6 border-t border-gray-100 flex items-center justify-end gap-3">
        <slot name="footer">
     <CButton text="Send" variant="green" size="lg"/>
       <CButton text="Go back" variant="danger" size="lg"/>
        </slot>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import CButton from './CButton.vue'
const emit = defineEmits(['submitForm'])

const formData = reactive({
  name: '',
  email: ''
})

const handleSubmit = () => {
  // Emit the data to the parent component
  emit('submitForm', { ...formData })
}
</script>