<template>
  <div class="mb-10 border-3 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
    <div class="bg-yellow-300 p-3 border-b-3 border-black">
      <h3 class="font-black text-xl m-0 uppercase tracking-wide">{{ titulo }}</h3>
      <p v-if="descricao" class="text-sm text-gray-800 m-0 font-medium">{{ descricao }}</p>
      <p v-else-if="$slots.descricao" class="text-sm text-gray-800 m-0 font-medium">
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