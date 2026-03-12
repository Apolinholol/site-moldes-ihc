<template>
  <div class="p-6 bg-emerald-200">
    <h4 class="text-emerald-900 font-black flex items-center gap-2 mb-3 leading-tight w-fit fascinate-inline-regular">
      <span class="text-xl bg-emerald-600 text-white w-7 h-7 flex items-center justify-center">✓</span> {{ titulo }}
    </h4>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titulo: string
}>()
</script>
