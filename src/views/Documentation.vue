<template>
  <section id="SectionDocumentacao" class="flex relative min-h-screen">


    <div 
      v-if="props.menuAberto && eTelaMobile"
      class="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
      @click="$emit('toggle-menu')">
  </div>

<section 
  id="SectionItensDocumentacao"
  class="
    w-64 bg-white border-2 border-y-0 border-black p-4 overflow-y-auto
    fixed left-0 top-12 z-[9999] transition-transform duration-500 ease-out
    min-[576px]:static min-[576px]:translate-x-0 min-[576px]:h-auto
  "
  :class="{
    '-translate-x-full h-[calc(100vh-3rem)]': !props.menuAberto && eTelaMobile,
    'translate-x-0 h-[100vh] sticky': props.menuAberto && eTelaMobile
  }"
>



      <nav role="tablist" class="flex flex-col gap-3">
        <p class="text-xs font-bold uppercase tracking-wider text-gray-600 pl-2">Tópicos</p>

        <button 
          @click="alterarPagina(0)" 
          :class="{ 'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 0, 'border-l-4 border-transparent': state.paginaAtiva !== 0 }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]">
          Heurísticas de Nielsen
        </button>

        <button 
          @click="alterarPagina(1)"
          :class="{ 'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 1, 'border-l-4 border-transparent': state.paginaAtiva !== 1 }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]">
          Teoria das cores
        </button>

        <button 
          @click="alterarPagina(2)"
          :class="{ 'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 2, 'border-l-4 border-transparent': state.paginaAtiva !== 2 }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]">
          Lei de Hick-Hyman
        </button>

        <button 
          @click="alterarPagina(3)"
          :class="{ 'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 3, 'border-l-4 border-transparent': state.paginaAtiva !== 3 }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]">
          Lei de Fitts
        </button>

        <button 
          @click="alterarPagina(4)"
          :class="{ 'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 4, 'border-l-4 border-transparent': state.paginaAtiva !== 4 }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]">
          Gestalt
        </button>

      </nav>
    </section>

    <section 
      id="SectionConteudoDocumentacao" 
      class="flex-1 p-4 sm:p-8 bg-yellow absolute">

      <div v-if="state.paginaAtiva === 0" class="max-w-3xl">
        <h1 class="text-4xl font-black text-black mb-6 border-b-4 border-black pb-4">Heurísticas de Nielsen</h1>
        <p class="text-lg leading-relaxed text-gray-800">Conteúdo sobre Heurísticas de Nielsen...</p>
      </div>
      
      <div v-if="state.paginaAtiva === 1" class="max-w-3xl">
        <h1 class="text-4xl font-black text-black mb-6 border-b-4 border-black pb-4">Teoria das cores</h1>
        <p class="text-lg leading-relaxed text-gray-800">Conteúdo sobre Teoria das cores...</p>
      </div>
      
      <div v-if="state.paginaAtiva === 2" class="max-w-3xl">
        <h1 class="text-4xl font-black text-black mb-6 border-b-4 border-black pb-4">Lei de Hick-Hyman</h1>
        <p class="text-lg leading-relaxed text-gray-800">Conteúdo sobre Lei de Hick-Hyman...</p>
      </div>
      
      <div v-if="state.paginaAtiva === 3" class="max-w-3xl">
        <h1 class="text-4xl font-black text-black mb-6 border-b-4 border-black pb-4">Lei de Fitts</h1>
        <p class="text-lg leading-relaxed text-gray-800">Conteúdo sobre Lei de Fitts...</p>
      </div>
      
      <div v-if="state.paginaAtiva === 4" class="max-w-3xl">
        <h1 class="text-4xl font-black text-black mb-6 border-b-4 border-black pb-4">Gestalt</h1>
        <p class="text-lg leading-relaxed text-gray-800">Conteúdo sobre Gestalt...</p>
      </div>

    </section>

  </section>
</template>

<script lang="ts" setup>
import { reactive, watch, ref, onMounted } from 'vue';

const props = defineProps<{
  menuAberto: boolean
}>();

const emit = defineEmits(['toggle-menu']);
const eTelaMobile = ref(false);

const state = reactive({
  paginaAtiva: 0
});

const checarTelaMobile = () => {
  eTelaMobile.value = window.innerWidth < 576;
};

onMounted(() => {
  checarTelaMobile();
  window.addEventListener('resize', checarTelaMobile);
});

watch(() => window.innerWidth, (novoValor) => {
      if (window.innerWidth >= 576) {
        eTelaMobile.value = false;
      } else {
        eTelaMobile.value = true;
      }
});

function alterarPagina(index: number) {
  state.paginaAtiva = index;
  if (eTelaMobile.value && props.menuAberto) {
    emit('toggle-menu');
  }
}
</script>

<style scoped>
</style>