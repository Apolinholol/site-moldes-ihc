<template>
  <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
    <div class="bg-gray-100 p-3 border-b border-gray-300">
      <h3 class="font-bold text-xl m-0">{{ titulo }}</h3>
      <p v-if="descricao" class="text-sm text-gray-500 m-0">{{ descricao }}</p>
      <p v-else-if="$slots.descricao" class="text-sm text-gray-500 m-0">
        <slot name="descricao" />
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titulo: string
  descricao?: string
}>()
</script>
