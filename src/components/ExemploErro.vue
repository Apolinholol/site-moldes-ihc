<template>
  <div class="p-6 bg-red-200">
    <h4 class="text-red-800 font-black flex items-center gap-2 mb-2">
      <span class="text-xl bg-red-600 text-white w-7 h-7 flex items-center justify-center">✕</span> {{ titulo }}
    </h4>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  titulo: string
}>()
</script>
<!-- bg-blue-200 p-6 border-2 border-blue-900 mt-6 p-4 my-6 border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] -->