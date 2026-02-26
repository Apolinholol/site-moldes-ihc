<template>
  <div :class="['bg-white rounded border', borderClass]">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    tipo?: 'erro' | 'solucao'
  }>(),
  {
    tipo: 'erro',
  },
)

const borderClass = computed(() =>
  props.tipo === 'erro' ? 'border-red-200' : 'border-green-200',
)
</script>
