<template>
  <section id="SectionApresentacao" class="px-4 py-8">
    <div>
      <div class="mb-6 flex gap-4 flex-wrap flex-col">
        <h1 class="text-4xl font-black text-black leading-tight w-fit">
          Seja bem-vindo ao mundo da IHC !
        </h1>
        <h1 class="text-4xl font-black text-black leading-tight w-fit">
          Interface Homem Máquina é
        </h1>
        <div
          class="inline-block bg-white px-6 py-3 shadow-[4px_4px_0_0] h-[fit-content] w-fit"
          style="
            border: 2px solid black;
            padding: 8px;
            background-color: rgba(255, 255, 255, 0.589);
            box-shadow: #000 4px 4px 0 0;
          "
        >
          <span
            class="text-4xl leading-tight font-black texto-sombra-padrao text-yellow-400 uppercase tracking-wider"
          >
            #{{ state.definicao }}
          </span>
        </div>
      </div>
      <!-- <p class="text-lg leading-relaxed text-gray-900">
                    Seja bem-vindo! Este espaço foi criado para aproximar você do fascinante universo da Interface Homem-Máquina.<br class="hidden sm:block">
                    Juntos exploraremos os conceitos, princípios e melhores práticas que tornam a interação mais intuitiva, eficiente e agradável.
                </p> -->
    </div>
  </section>

  <section
    id="SectionDetalhes"
    class="px-4 pb-8"
    style="
      background-color: antiquewhite;
      margin: 15px;
      border-radius: 10px;
      box-shadow: 3em 1em 18px 9px rgba(0, 0, 0, 0.3);
    "
  >
    <section class="flex gap-3">
      <span class="ponto"></span>
      <span class="ponto"></span>
      <span class="ponto"></span>
    </section>

    <section id="SectionConteudoDetalhes" class="flex justify-between flex-wrap gap-8 mt-6">
      <div>
        <p class="text-3xl font-black text-black mb-6 border-b-4 border-black pb-4">
          Detalhes do Projeto
        </p>
      </div>
      <div style="max-width: 22rem">
        <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
          <div class="bg-black px-6 py-4 border-b-4 border-black">
            <h2 class="text-2xl font-black text-yellow-300 uppercase tracking-wider">
              Integrantes
            </h2>
          </div>

          <div class="bg-white-100 p-6 border-t-4 border-black">
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
  </section>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue'

const state = reactive({
  lstDefinicoes: ['Usabilidade', 'Acessibilidade', 'Design'],
  indexDefinicao: 1,
  definicao: 'Usabilidade',
})

onMounted(() => {
  retornaDefinicao()
})
function retornaDefinicao() {
  setInterval(() => {
    state.definicao = state.lstDefinicoes[state.indexDefinicao % state.lstDefinicoes.length]
    state.indexDefinicao++
  }, 2000)
}
</script>
<style scoped>
h1 {
  color: rgb(255, 255, 255) !important;
  text-shadow:
    -2px 0 #000,
    0 -2px #000,
    2px 0 #000,
    0 2px #000,
    2px 2px #000,
    -2px -2px #000,
    -2px 2px #000,
    2px -2px #000,
    calc(-1 * var(--mouse-shadow)) var(--mouse-shadow) #000;
  text-transform: uppercase;
  border: 2px solid black;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.589);
  box-shadow: #000 4px 4px 0 0;
}

.ponto {
  width: 15px;
  height: 15px;
  background: black;
  display: block;
  border-radius: 100px;
  margin-top: 15px;
  margin-bottom: 25px;
}
</style>
