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
        fixed left-0 top-12 h-[calc(100vh-3rem)] z-50 transition-transform duration-500 ease-out
        min-[576px]:relative min-[576px]:top-0 min-[576px]:h-auto min-[576px]:translate-x-0
      "
      :class="{
        '-translate-x-[200px]': !props.menuAberto && eTelaMobile,
        'translate-x-0': props.menuAberto || !eTelaMobile
      }">

      <div role="tablist" class="flex flex-col gap-2">

        <button 
          @click="alterarPagina(0)" 
          :class="{ 'bg-yellow-300': state.paginaAtiva === 0 }"
          class="tab-item border-2 border-black px-4 py-2 font-semibold hover:bg-yellow-200 transition-colors">
          Heurísticas de Nielsen
        </button>

        <button 
          @click="alterarPagina(1)"
          :class="{ 'bg-yellow-300': state.paginaAtiva === 1 }"
          class="tab-item border-2 border-black px-4 py-2 font-semibold hover:bg-yellow-200 transition-colors">
          Teoria das cores
        </button>

        <button 
          @click="alterarPagina(2)"
          :class="{ 'bg-yellow-300': state.paginaAtiva === 2 }"
          class="tab-item border-2 border-black px-4 py-2 font-semibold hover:bg-yellow-200 transition-colors">
          Lei de Hick-Hyman
        </button>

        <button 
          @click="alterarPagina(3)"
          :class="{ 'bg-yellow-300': state.paginaAtiva === 3 }"
          class="tab-item border-2 border-black px-4 py-2 font-semibold hover:bg-yellow-200 transition-colors">
          Lei de Fitts
        </button>

        <button 
          @click="alterarPagina(4)"
          :class="{ 'bg-yellow-300': state.paginaAtiva === 4 }"
          class="tab-item border-2 border-black px-4 py-2 font-semibold hover:bg-yellow-200 transition-colors">
          Gestalt
        </button>

      </div>
    </section>

    <section 
      id="SectionConteudoDocumentacao" 
      class="flex-1 p-6 min-[576px]:ml-0">

      <div v-if="state.paginaAtiva === 0" class="prose max-w-none">
        <h1 class="text-2xl font-bold mb-4">Heurísticas de Nielsen</h1>
        <p>Conteúdo sobre Heurísticas de Nielsen...</p>
      </div>
      
      <div v-if="state.paginaAtiva === 1" class="prose max-w-none">
        <h1 class="text-2xl font-bold mb-4">Teoria das cores</h1>
        <p>Conteúdo sobre Teoria das cores...</p>
      </div>
      
      <div v-if="state.paginaAtiva === 2" class="prose max-w-none">
        <h1 class="text-2xl font-bold mb-4">Lei de Hick-Hyman</h1>
        <p>Conteúdo sobre Lei de Hick-Hyman...</p>
      </div>
      
      <div v-if="state.paginaAtiva === 3" class="prose max-w-none">
        <h1 class="text-2xl font-bold mb-4">Lei de Fitts</h1>
        <p>Conteúdo sobre Lei de Fitts...</p>
      </div>
      
      <div v-if="state.paginaAtiva === 4" class="prose max-w-none">
        <h1 class="text-2xl font-bold mb-4">Gestalt</h1>
        <p>Conteúdo sobre Gestalt...</p>
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
    if (novoValor >= 576 && !props.menuAberto) {
        emit('toggle-menu');
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