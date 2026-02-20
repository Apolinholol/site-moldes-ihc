<template>
  <div class="p-6 bg-green-50">
    <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
      <span class="text-xl">✓</span> {{ titulo }}
    </h4>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titulo: string
}>()
</script>
