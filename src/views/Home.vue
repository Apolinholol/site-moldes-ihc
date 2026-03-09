<template>
  <div class="flex flex-col">
    <!-- HERO -->
    <section id="SectionHero" class="px-6 pt-14 pb-20 bg-black text-white">
      <div class="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <h1 class="text-5xl md:text-6xl text-yellow-300 font-black leading-tight fascinate-inline-regular uppercase">
          Seja bem-vindo ao mundo da IHC!
        </h1>
        <p class="merriweather-body text-2xl p-2 leading-relaxed">
          Explore os fundamentos da Interação Humano-Computador e descubra como criar interfaces que fazem a diferença.
        </p>
        <div class="flex items-center gap-3 mt-2">
          <span
            class="text-yellow-300 font-black text-2xl fascinate-inline-regular uppercase tracking-wider transition-all duration-500">
            {{ state.definicao }}
          </span>
          <span class="block w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></span>
        </div>
        <div class="flex gap-4 mt-4 flex-wrap justify-center">
          <router-link to="/documentacao"
            class="border-4 border-yellow-300 bg-transparent text-yellow-300 font-black px-8 py-3 uppercase tracking-wider hover:bg-yellow-300 hover:text-black transition-all duration-200">
            Explorar Documentação
          </router-link>
          <router-link to="/pratica/1"
            class="border-4 border-gray-100 bg-transparent text-gray-100 font-black px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200">
            Praticar
          </router-link>
        </div>
      </div>
    </section>

    <!-- PILARES -->
    <section id="SectionApresentacao" class="px-6 py-12">
      <div>
        <div class="flex items-center gap-4 mb-8">
          <div class="w-2 h-10 bg-yellow-300"></div>
          <h2 class="uppercase text-4xl font-black text-black leading-tight w-fit fascinate-inline-regular">Pilares da IHC</h2>
        </div>

        <div id="DivCardsApresentacao" class="grid md:grid-cols-2 gap-6 mb-12">
          <div class="transform hover:scale-103 transition">
            <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] h-full">
              <div class="bg-black px-6 py-4 border-b-4 border-black">
                <h2
                  class="flex justify-center text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                  Usabilidade
                </h2>
              </div>

              <div class="merriweather-body text-2xl bg-gray-100 p-6 border-t-4 border-black leading-relaxed">
                Responsável por definir o quanto uma interface é
                intuitiva e funcional para quem a utiliza.
                Ela mede a facilidade de aprendizado, a rapidez
                na execução de tarefas e o nível de satisfação do usuário.
              </div>
            </article>
          </div>

          <div class="transform hover:scale-103 transition">
            <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] h-full">
              <div class="bg-black px-6 py-4 border-b-4 border-black">
                <h2 class="flex justify-center text-2xl font-black text-yellow-300 uppercase tracking-wider">
                  Comunicabilidade
                </h2>
              </div>

              <div class="merriweather-body text-2xl bg-gray-100 p-6 border-t-4 border-black leading-relaxed">
                Refere-se à capacidade de o sistema transmitir ao usuário, de forma clara, o conceito de design, as
                funcionalidades e a intenção do projetista (ou seja, "conversar" com o usuário através da interface).
              </div>
            </article>
          </div>

          <div class="transform hover:scale-103 transition">
            <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] h-full">
              <div class="bg-black px-6 py-4 border-b-4 border-black">
                <h2
                  class="flex justify-center text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                  Acessibilidade
                </h2>
              </div>

              <div class="merriweather-body text-2xl bg-gray-100 p-6 border-t-4 border-black leading-relaxed">
                Garante que qualquer pessoa consiga usar o sistema,
                independentemente de suas capacidades físicas
                ou cognitivas. Ela busca eliminar
                barreiras para promover a inclusão e a autonomia de
                todos os usuários.
              </div>
            </article>
          </div>

          <div class="transform hover:scale-103 transition">
            <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] h-full">
              <div class="bg-black px-6 py-4 border-b-4 border-black">
                <h2
                  class="flex justify-center text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                  Experiência do Usuário (UX)
                </h2>
              </div>

              <div class="merriweather-body text-2xl bg-gray-100 p-6 border-t-4 border-black leading-relaxed">
                Refere-se a percepção subjetiva e emocional de uma pessoa ao interagir com um produto ou serviço. Ela
                foca em tornar essa jornada útil, fácil de usar e agradável, garantindo que o usuário sinta satisfação
                e valor real durante todo o contato com a marca.
              </div>
            </article>
          </div>
        </div>

      </div>

      <div id="DivJustificativaApresentacao" class="mt-16">
        <div>
          <div class="flex items-center gap-4 mb-8">
            <div class="w-2 h-10 bg-yellow-300"></div>
            <h2 class="uppercase text-4xl font-black text-black leading-tight w-fit fascinate-inline-regular">Por que IHC importa?</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div
              class="bg-gray-100 border-4 border-black p-6 transform hover:scale-103 transition shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
              <h4
                class="flex justify-center text-2xl mb-2 font-black text-black leading-tight w-fit fascinate-inline-regular tracking-wide">
                15% da população...</h4>
              <p class="merriweather-body text-2xl bg-gray-100 leading-relaxed">
                Tem algum tipo de deficiência que afeta a interação com tecnologia.
              </p>
            </div>
            <div
              class="bg-gray-100 border-4 border-black p-6 transform hover:scale-103 transition shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
              <h4
                class="flex justify-center text-2xl mb-2 font-black text-black leading-tight w-fit fascinate-inline-regular tracking-wide">
                40% de aumento...</h4>
              <p class="merriweather-body text-2xl bg-gray-100 leading-relaxed">
                Em engajamento quando interfaces são bem projetadas.
              </p>
            </div>
            <div
              class="bg-gray-100 border-4 border-black p-6 transform hover:scale-103 transition shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
              <h4
                class="flex justify-center text-2xl mb-2 font-black text-black leading-tight w-fit fascinate-inline-regular tracking-wide">
                75% dos usuários...</h4>
              <p class="merriweather-body text-2xl bg-gray-100 leading-relaxed">
                Abandonam sites se a experiência de usuário é ruim.
              </p>
            </div>
            <div
              class="bg-gray-100 border-4 border-black p-6 transform hover:scale-103 transition shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
              <h4
                class="flex justify-center text-2xl mb-2 font-black text-black leading-tight w-fit fascinate-inline-regular tracking-wide">
                3x mais confiança...</h4>
              <p class="merriweather-body text-2xl bg-gray-100 leading-relaxed">
                Em empresas com interfaces acessíveis e bem pensadas.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section id="SectionNorteadores" class="px-6 py-5">
      <div class="mb-6">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-2 h-10 bg-yellow-300"></div>
          <h2 class="uppercase text-4xl font-black text-black leading-tight w-fit fascinate-inline-regular">Norteadores do Projeto</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            class="bg-gray-100 border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] transform hover:scale-103 transition">
            <div class="bg-black px-4 py-3 border-b-4 border-black mb-4">
              <h3
                class="flex text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                W3C</h3>
            </div>
            <p class="merriweather-body text-2xl bg-gray-100 leading-relaxed">
              World Wide Web Consortium é a organização internacional responsável por estabelecer os padrões web,
              garantindo que a internet seja acessível e funcional para todos os usuários, independentemente de suas
              capacidades.
            </p>
          </div>

          <div
            class="bg-gray-100 border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] transform hover:scale-103 transition">
            <div class="bg-black px-4 py-3 border-b-4 border-black mb-4">
              <h3
                class="flex text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                WCAG</h3>
            </div>
            <p class="merriweather-body text-2xl bg-gray-100 leading-relaxed">
              Web Content Accessibility Guidelines são diretrizes técnicas criadas pela W3C que definem como tornar
              conteúdo web acessível a pessoas com deficiências, promovendo uma experiência inclusiva e igualitária para
              todos.
            </p>
          </div>

          <div
            class="bg-gray-100 border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] transform hover:scale-103 transition">
            <div class="bg-black px-4 py-3 border-b-4 border-black mb-4">
              <h3
                class="flex text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                Heurísticas de Nielsen</h3>
            </div>
            <p class="merriweather-body text-2xl bg-gray-100 leading-relaxed">
              As 10 Heurísticas de Nielsen são princípios de UI/UX criados
              por Jakob Nielsen e Rolf Molich para melhorar a usabilidade,
              garantindo sistemas intuitivos, eficientes e consistentes,
              focando na prevenção de erros e na melhoria da experiência do usuário.
            </p>
          </div>
          <div
            class="bg-gray-100 border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] transform hover:scale-103 transition">
            <div class="bg-black px-4 py-3 border-b-4 border-black mb-4">
              <h3
                class="flex text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                Affordance</h3>
            </div>
            <p class="merriweather-body text-2xl bg-gray-100 leading-relaxed">
              É a propriedade de um objeto ou ambiente que indica,
              intuitivamente, como ele pode ser usado, permitindo que
              o usuário compreenda sua funcionalidade sem instruções.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA - SOBRE NÓS -->
    <section class="px-6 pt-14 pb-20 bg-black text-white">
      <div class="border-4 border-black bg-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] text-center gap-y-4 flex flex-col items-center">
        <!-- text-3xl md:text-4xl font-black text-white uppercase mb-4 fascinate-inline-regular -->
        <h2 class="text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">Conheça quem está por trás deste projeto</h2>
        <p class="merriweather-body text-2xl text-gray-100 leading-relaxed">
          Explore os detalhes do projeto, seus integrantes e a história por trás desta iniciativa educacional.
        </p>
        <router-link to="/sobre-nos"
          class="border-4 border-yellow-300 bg-transparent text-yellow-300 font-black px-8 py-3 uppercase tracking-wider hover:bg-yellow-300 hover:text-black transition-all duration-200" style="margin-bottom: -3px">
          Sobre Nós
        </router-link>
      </div>
    </section>

    <!-- DETALHES DO PROJETO -->
    <!-- <section id="SectionDetalhes"
      class="mx-4 mb-8 px-6 pb-8 bg-[antiquewhite] rounded-xl shadow-[3em_1em_18px_9px_rgba(0,0,0,0.3)]">
      <div class="flex gap-3 py-4">
        <span class="ponto"></span>
        <span class="ponto"></span>
        <span class="ponto"></span>
      </div>

      <section id="SectionConteudoDetalhes" class="flex justify-between flex-wrap gap-8 mt-2">
        <div class="limelight-regular flex-1 min-w-[300px]">
          <div class="flex items-center gap-4 mb-6 pb-4 border-b-4 border-black">
            <div class="w-2 h-10 bg-yellow-300"></div>
            <p class="uppercase text-4xl md:text-5xl font-black text-black">
              Detalhes do Projeto
            </p>
          </div>
          <div class="max-w-2xl merriweather-body md:ps-8">
            <p class="text-lg leading-relaxed text-gray-900 mb-4">
              Este projeto foi desenvolvido como parte do curso de Interação Homem Máquina (IHC)
              ministrado pela professora <a
                href="https://integra.iff.edu.br/portfolio/pessoas/michelle-maria-freitas-neto/linux" target="_blank"
                rel="noopener noreferrer" class="hover:underline">Michelle Maria Freitas Neto</a> no Instituto Federal
              Fluminense
              - Campus Itaperuna. O objetivo principal é fornecer uma visão abrangente sobre os
              conceitos e práticas essenciais para o design e avaliação de interfaces centradas no
              usuário.
            </p>
            <p class="text-lg leading-relaxed text-gray-900 mb-4">
              Ao longo deste site, você encontrará uma variedade de recursos, incluindo definições,
              princípios de design, estudos de caso e diretrizes práticas que visam aprimorar a
              usabilidade e a experiência do usuário em sistemas interativos, baseando-se nos
              conhecimentos aprendidos ao longo da disciplina.
            </p>
            <p class="text-lg leading-relaxed text-gray-900">
              Esperamos que este material seja útil tanto para estudantes quanto para profissionais
              interessados em aprofundar seus conhecimentos em IHC e contribuir para a criação de
              interfaces mais eficazes e agradáveis.
            </p>
          </div>
        </div>
        <div class="transform hover:scale-103 transition me-5" style="width: 25rem">
          <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
            <div class="bg-black px-6 py-4 border-b-4 border-black">
              <h2
                class="limelight-regular flex justify-center text-2xl font-black text-yellow-300 uppercase tracking-wider">
                Integrantes
              </h2>
            </div>

            <div class="limelight-regular bg-gray-50 p-6 border-t-4 border-black">
              <div class="flex flex-col gap-4">
                <div class="border-l-4 border-black pl-4 py-2">
                  <p class="font-semibold text-gray-900">Matheus Lopes Couto Neves</p>
                </div>
                <div class="border-l-4 border-black pl-4 py-2">
                  <p class="font-semibold text-gray-900">Bruno Apolinário da Silva</p>
                </div>
                <div class="border-l-4 border-black pl-4 py-2">
                  <p class="font-semibold text-gray-900">
                    Luiz Phelippe Silva Aguiar de Mello e Souza
                  </p>
                </div>
                <div class="border-l-4 border-black pl-4 py-2">
                  <p class="font-semibold text-gray-900">Gabriel de Souza Almeida</p>
                </div>
                <div class="border-l-4 border-black pl-4 py-2">
                  <p class="font-semibold text-gray-900">Danilo Batista Reilly</p>
                </div>
                <div class="border-l-4 border-black pl-4 py-2">
                  <p class="font-semibold text-gray-900">Rafael Carvalho Pinheiro</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </section> -->
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, reactive } from 'vue'

const state = reactive({
  lstDefinicoes: ['Usabilidade', 'Comunicabilidade', 'Acessibilidade', 'Design', 'UX/UI'],
  indexDefinicao: 1,
  definicao: 'Usabilidade',
})

let intervalo: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  intervalo = setInterval(() => {
    state.definicao = state.lstDefinicoes[state.indexDefinicao % state.lstDefinicoes.length] ?? 'Usabilidade'
    state.indexDefinicao++
  }, 2000)
})

onUnmounted(() => {
  if (intervalo) clearInterval(intervalo)
})
</script>
<style scoped>
.ponto {
  width: 15px;
  height: 15px;
  background: black;
  display: block;
  border-radius: 100px;
}
</style>
