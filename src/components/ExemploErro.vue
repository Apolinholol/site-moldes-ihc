<template>
  <div class="p-6 bg-red-50 border-r border-gray-200">
    <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
      <span class="text-xl">✕</span> {{ titulo }}
    </h4>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titulo: string
}>()
</script>
