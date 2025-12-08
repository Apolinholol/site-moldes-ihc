<template>

    <section id="SectionApresentacao" class="h-[33vh]">
        <div class="mt-[4rem]">
            <div class="ms-[5px] text-[3rem] inline-block border-b-[5px] border-black">
                <b class="flex gap-[8px] " style="flex-wrap: wrap;">
                    Interface Homem Máquina é
                    <span class="my-0 mb-[4px] bg-[oklch(90.5%_.182_98.111)] p-[4px] pb-[0px] h-fit ">
                        {{ state.definicao }}
                    </span>
                </b>
            </div>
        </div>
        <p class="ms-[5px]" style="font-size: 1.2em;">
            Seja bem-vindo! Este espaço foi criado para aproximar você do fascinante universo da Interface Homem-Máquina.<br>
            Juntos exploraremos os conceitos, princípios e melhores práticas que tornam a interação mais intuitiva, eficiente e agradável.
        </p>
    </section>

    <section id="SectionDetalhes" class="mt-[4rem] me-[6px]">
        <article class="border-2 border-black bg-white shadow-[4px_4px_0_0,8px_8px_0_0]">
                <div style="background-color: yellow;padding: 3px;">
                    <div class="flex items-center justify-between">
                    <strong class="text-xs/none font-bold uppercase">Detalhes</strong>

                    <div class="flex gap-1 me-[5px]">
                        <div class="size-3 border-2 border-black bg-white"></div>
                        <div class="size-3 border-2 border-black bg-white"></div>
                    </div>
                    </div>
                </div>

                <div style="background-color: white;padding: 3px;">
                    <h3 class="text-lg font-semibold text-black">Retro Window</h3>

                    <p class="mt-2 text-sm text-pretty">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil, sit quod quos
                    quibusdam quam ducimus dolore necessitatibus delectus perspiciatis.
                    </p>
                </div>
        </article>
    </section>

    <section id="SectionIntegrantes" class="mt-[4rem] me-[6px]">

        <article class="border-2 border-black bg-white shadow-[4px_4px_0_0,8px_8px_0_0]">
                <div style="background-color: yellow;padding: 3px;">
                    <div class="flex items-center justify-between">
                    <strong class="text-xs/none font-bold uppercase">Integrantes</strong>

                    <div class="flex gap-1 me-[5px]">
                        <div class="size-3 border-2 border-black bg-white"></div>
                        <div class="size-3 border-2 border-black bg-white"></div>
                    </div>
                    </div>
                </div>

                <div style="background-color:azure;padding: 3px;">
                    <h3 class="text-lg font-semibold text-black">Segue abaixo o integrantes desse projeto:</h3>

                    <p class="mt-2 text-sm text-pretty">
                     -Matheus Lopes Couto Neves <br>
                     -Bruno Apolinário <br>
        
                    </p>
                </div>
        </article>
    </section>

</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue';

const state = reactive({
    lstDefinicoes:['Usabilidade','Acessibilidade','Design'],
    indexDefinicao:1,
    definicao:'Usabilidade',
}); 

onMounted(() => {
    retornaDefinicao();
});
function retornaDefinicao(){

    setInterval(() => {
            state.definicao = state.lstDefinicoes[state.indexDefinicao % state.lstDefinicoes.length];
            state.indexDefinicao++;
    }, 2000);
}
</script>
<style scoped>  
</style>