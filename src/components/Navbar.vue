<template>
    <nav class=" bg-black  h-[3rem] flex items-center justify-between px-4 w-[100%] sticky">
        <button 
            @click="$emit('toggle-menu');"
            class="min-[800px]:hidden w-10 h-10 
                   flex items-center justify-center border-2 border-black
                   bg-yellow-300 hover:bg-yellow-400 hover:shadow-[2px_2px_0_0] transition-all
                   font-bold">

            <svg v-if="!state.mudarBotao" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
        </button>
        <ul class="flex justify-end gap-6 me-[15px]">
            <li>
                <router-link to="/" class="text-yellow-300 font-bold hover:text-white transition-colors">Home</router-link>
            </li>
            <li>
                <router-link to="/documentacao" class="text-yellow-300 font-bold hover:text-white transition-colors">Documentação</router-link>
            </li>
        </ul>
    </nav>
</template>
<script lang="ts" setup>
import { reactive, watch } from 'vue'; 

const state = reactive({
    mudarBotao:false,
});


const props = defineProps<{
  menuAberto: boolean
}>();

watch(() => props.menuAberto, (novoValor) => {
      state.mudarBotao = !state.mudarBotao;
});

    defineEmits(['toggle-menu']);
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

li {
    font-size: 14px;
    font-weight: 600;
}
</style>
