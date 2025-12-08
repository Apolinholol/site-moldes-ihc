<template>
    <nav class="border-2 border-black shadow-[4px_4px_0_0] h-[3rem] flex items-center justify-between px-4 w-[100%] mt-[6px]">
        <button 
            @click="$emit('toggle-menu');state.mudarBotao = !state.mudarBotao"
            class="min-[576px]:hidden w-8 h-8 
                   flex items-center justify-center border-2
                   border-black hover:bg-yellow-100 transition-colors
                   ms-[5px]">
            <svg v-if="!state.mudarBotao" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
        </button>
        <ul class="flex justify-end gap-[15px] me-[15px]">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/documentacao">Documentação</router-link>
            </li>
        </ul>
    </nav>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'; 

const state = reactive({
    mudarBotao:false,
});
    defineEmits(['toggle-menu']);
</script>
<style scoped>

ul {
    text-decoration: none;
    list-style-type: none;
}

a{
    text-decoration: none;
    color: black;
}

a:hover{
    text-decoration: underline 2px;

}
li{
    font-size: 12.5px;
}
</style>
