<template>
  <div class="mx-auto w-[254px]">
    <label :for="id" class="block mb-2 text-sm font-medium text-gray-900">
      {{ label }}
      <a v-if="hint" href="#" class="text-blue-600 float-right">{{ hint }}</a>
    </label>
    <input :id="id" :type="type" :placeholder="placeholder" v-model="model"
      class="w-full h-[32px] bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
      required />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  label: string
  type: string
  hint?: string
  placeholder?: string
}>()

const model = defineModel<string>()
</script>
