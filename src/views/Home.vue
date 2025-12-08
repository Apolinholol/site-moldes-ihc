<template>

    <section id="SectionApresentacao" class="px-4 py-8 border-b-4 border-black bg-gradient-to-b from-yellow-300 to-yellow-100">
        <div>
            <div class="mb-6 flex gap-4 flex-wrap">
                <h1 class="text-4xl font-black text-black leading-tight">
                    Interface Homem Máquina é
                </h1>
                <div class="inline-block bg-black px-6 py-3 shadow-[4px_4px_0_0] h-[fit-content]">
                    <span class="text-3xl font-bold text-yellow-300">
                        {{ state.definicao }}
                    </span>
                </div>
            </div>
            <p class="text-lg leading-relaxed text-gray-900">
                Seja bem-vindo! Este espaço foi criado para aproximar você do fascinante universo da Interface Homem-Máquina.<br class="hidden sm:block">
                Juntos exploraremos os conceitos, princípios e melhores práticas que tornam a interação mais intuitiva, eficiente e agradável.
            </p>
        </div>
    </section>

    <section id="SectionDetalhes" class="px-4 py-8">
        <div>
            <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                <div class="bg-black px-6 py-4 border-b-4 border-black">
                    <h2 class="text-2xl font-black text-yellow-300 uppercase tracking-wider">Detalhes</h2>
                </div>

                <div class="p-6">
                    <h3 class="text-2xl font-bold text-black mb-4">Retro Window</h3>
                    <p class="text-base leading-relaxed text-gray-800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nihil, sit quod quos
                        quibusdam quam ducimus dolore necessitatibus delectus perspiciatis.
                    </p>
                </div>
            </article>
        </div>
    </section>

    <section id="SectionIntegrantes" class="px-4 py-8">
        <div>
            <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
                <div class="bg-black px-6 py-4 border-b-4 border-black">
                    <h2 class="text-2xl font-black text-yellow-300 uppercase tracking-wider">Integrantes</h2>
                </div>

                <div class="bg-cyan-100 p-6 border-t-4 border-black">
                    <h3 class="text-xl font-bold text-black mb-6">Segue abaixo os integrantes desse projeto:</h3>
                    
                    <div class="flex flex-col gap-4">
                        <div class="border-l-4 border-black pl-4 py-2">
                            <p class="font-semibold text-gray-900">Matheus Lopes Couto Neves</p>
                        </div>
                        <div class="border-l-4 border-black pl-4 py-2">
                            <p class="font-semibold text-gray-900">Bruno Apolinário</p>
                        </div>
                    </div>
                </div>
            </article>
        </div>
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