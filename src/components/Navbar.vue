<template>
  <!-- Adicionar alguma logo ou nome do site aqui -->
  <nav
    class="limelight-regular bg-yellow-300 h-[3rem] flex items-center justify-end px-4 w-[100%] sticky top-0 z-50 border-b-3 border-black">
    <button v-show="pathAtual === '/documentacao'" @click="$emit('toggle-menu')"
      class="mr-auto shadow-[2px_2px_0_0_#FFDF20] hover:border-2 hover:border-black hover:shadow-[2px_2px_0_0_#000] border-2 border-transparent cursor-pointer transition-200">
      <svg v-if="!state.mudarBotao" xmlns="http://www.w3.org/2000/svg" width="28" height="auto" fill="currentColor"
        class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="28" height="auto" fill="currentColor" class="bi bi-x"
        viewBox="0 0 16 16">
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
      </svg>
    </button>
    <ul class="flex justify-end gap-4 me-[15px]">
      <li>
        <router-link to="/"
          class="nav-link border-2 border-transparent shadow-[2px_2px_0_0_#FFDF20]">Início</router-link>
      </li>
      <li>
        <router-link to="/documentacao"
          class="nav-link border-2 border-transparent shadow-[2px_2px_0_0_#FFDF20]">Documentação</router-link>
      </li>
      <li>
        <router-link to="/sobre-nos"
          class="nav-link border-2 border-transparent shadow-[2px_2px_0_0_#FFDF20]">Sobre
          Nós</router-link>
      </li>
      <li>
        <router-link to="/pratica/1"
          class="nav-link border-2 border-transparent shadow-[2px_2px_0_0_#FFDF20]">Prática</router-link>
      </li>
    </ul>
  </nav>

</template>
<script lang="ts" setup>
import { computed, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const pathAtual = computed(() => route.path)

const state = reactive({
  mudarBotao: false,
})

const props = defineProps<{
  menuAberto: boolean
}>()

watch(
  () => props.menuAberto,
  () => {
    state.mudarBotao = !state.mudarBotao
  }
)

defineEmits(['toggle-menu'])
</script>

<style scoped>
ul {
  text-decoration: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 2px;
  transition: all 0.2s ease;
}

a.nav-link.router-link-exact-active {
  border-color: black;
  box-shadow: 2px 2px 0 0 #000;
  background-color: #F9FAFB;
}

a.nav-link.router-link-exact-active:hover {
  background-color: #F9FAFB;
}

a.nav-link:not(.router-link-exact-active):hover {
  border-color: black;
  box-shadow: 2px 2px 0 0 #000;
  background-color: #F9FAFB;
}

li {
  font-size: 14px;
  font-weight: 600;
}
</style>
