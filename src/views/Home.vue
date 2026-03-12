<template>
  <div class="flex flex-col">
    <section id="SectionHero" class="px-4 sm:px-6 pt-10 sm:pt-14 pb-14 sm:pb-20 bg-black text-white">
      <div class="max-w-4xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-6">
        <h1
          class="text-3xl sm:text-5xl md:text-6xl text-yellow-300 font-black leading-tight fascinate-inline-regular uppercase">
          Seja bem-vindo ao mundo da IHC!
        </h1>
        <p class="merriweather-body text-lg sm:text-2xl p-2 leading-relaxed">
          Explore os fundamentos da Interação Humano-Computador e descubra como criar interfaces que fazem a diferença.
        </p>
        <div class="flex items-center gap-3 mt-2">
          <span
            class="text-yellow-300 font-black text-lg sm:text-2xl fascinate-inline-regular uppercase tracking-wider transition-all duration-500">
            {{ state.definicao }}
          </span>
          <span class="block w-3 h-3 bg-yellow-300 rounded-full animate-pulse" aria-hidden="true"></span>
        </div>
        <nav aria-label="Ações principais" class="flex gap-4 mt-4 flex-wrap justify-center">
          <router-link to="/documentacao"
            class="border-4 border-yellow-300 bg-transparent text-yellow-300 font-black px-8 py-3 uppercase tracking-wider hover:bg-yellow-300 hover:text-black transition-all duration-200">
            Explorar Documentação
          </router-link>
          <router-link to="/pratica/1"
            class="border-4 border-gray-100 bg-transparent text-gray-100 font-black px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200">
            Praticar
          </router-link>
        </nav>
      </div>
    </section>

    <section id="SectionApresentacao" class="px-4 sm:px-6 py-8 sm:py-12">
      <div>
        <div class="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 class="uppercase text-2xl sm:text-4xl font-black text-black leading-tight w-fit fascinate-inline-regular">
            Pilares da IHC
          </h2>
        </div>

        <ul id="DivCardsApresentacao" class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <li class="transform hover:scale-103 transition">
            <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] h-full">
              <div class="bg-black px-6 py-4 border-b-4 border-black">
                <h3
                  class="flex justify-center text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                  Usabilidade
                </h3>
              </div>

              <div
                class="merriweather-body text-base sm:text-2xl bg-gray-50 p-4 sm:p-6 border-t-4 border-black leading-relaxed">
                Responsável por definir o quanto uma interface é
                intuitiva e funcional para quem a utiliza.
                Ela mede a facilidade de aprendizado, a rapidez
                na execução de tarefas e o nível de satisfação do usuário.
              </div>
            </article>
          </li>

          <li class="transform hover:scale-103 transition">
            <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] h-full">
              <div class="bg-black px-6 py-4 border-b-4 border-black">
                <h3 class="flex justify-center text-2xl font-black text-yellow-300 uppercase tracking-wider">
                  Comunicabilidade
                </h3>
              </div>

              <div
                class="merriweather-body text-base sm:text-2xl bg-gray-50 p-4 sm:p-6 border-t-4 border-black leading-relaxed">
                Refere-se à capacidade de o sistema transmitir ao usuário, de forma clara, o conceito de design, as
                funcionalidades e a intenção do projetista (ou seja, "conversar" com o usuário através da interface).
              </div>
            </article>
          </li>

          <li class="transform hover:scale-103 transition">
            <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] h-full">
              <div class="bg-black px-6 py-4 border-b-4 border-black">
                <h3
                  class="flex justify-center text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                  Acessibilidade
                </h3>
              </div>

              <div
                class="merriweather-body text-base sm:text-2xl bg-gray-50 p-4 sm:p-6 border-t-4 border-black leading-relaxed">
                Garante que qualquer pessoa consiga usar o sistema,
                independentemente de suas capacidades físicas
                ou cognitivas. Ela busca eliminar
                barreiras para promover a inclusão e a autonomia de
                todos os usuários.
              </div>
            </article>
          </li>

          <li class="transform hover:scale-103 transition">
            <article class="border-4 border-black bg-white shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] h-full">
              <div class="bg-black px-6 py-4 border-b-4 border-black">
                <h3
                  class="flex justify-center text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                  Experiência do Usuário (UX)
                </h3>
              </div>

              <div
                class="merriweather-body text-base sm:text-2xl bg-gray-50 p-4 sm:p-6 border-t-4 border-black leading-relaxed">
                Refere-se a percepção subjetiva e emocional de uma pessoa ao interagir com um produto ou serviço. Ela
                foca em tornar essa jornada útil, fácil de usar e agradável, garantindo que o usuário sinta satisfação
                e valor real durante todo o contato com a marca.
              </div>
            </article>
          </li>
        </ul>

      </div>

      <div id="DivJustificativaApresentacao" class="mt-16">
        <div>
          <div class="flex items-center gap-4 mb-6 sm:mb-8">
            <h2
              class="uppercase text-2xl sm:text-4xl font-black text-black leading-tight w-fit fascinate-inline-regular">
              Por que IHC importa?
            </h2>
          </div>

          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <li
              class="bg-gray-50 border-4 border-black p-4 sm:p-6 transform hover:scale-103 transition shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
              <h3
                class="flex justify-center text-xl sm:text-2xl mb-2 font-black text-black leading-tight w-fit fascinate-inline-regular tracking-wide">
                15% da população...
              </h3>
              <p class="merriweather-body text-base sm:text-2xl bg-gray-50 leading-relaxed">
                Tem algum tipo de deficiência que afeta a interação com tecnologia.
              </p>
            </li>
            <li
              class="bg-gray-50 border-4 border-black p-4 sm:p-6 transform hover:scale-103 transition shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
              <h3
                class="flex justify-center text-xl sm:text-2xl mb-2 font-black text-black leading-tight w-fit fascinate-inline-regular tracking-wide">
                40% de aumento...
              </h3>
              <p class="merriweather-body text-base sm:text-2xl bg-gray-50 leading-relaxed">
                Em engajamento quando interfaces são bem projetadas.
              </p>
            </li>
            <li
              class="bg-gray-50 border-4 border-black p-4 sm:p-6 transform hover:scale-103 transition shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
              <h3
                class="flex justify-center text-xl sm:text-2xl mb-2 font-black text-black leading-tight w-fit fascinate-inline-regular tracking-wide">
                75% dos usuários...
              </h3>
              <p class="merriweather-body text-base sm:text-2xl bg-gray-50 leading-relaxed">
                Abandonam sites se a experiência de usuário é ruim.
              </p>
            </li>
            <li
              class="bg-gray-50 border-4 border-black p-4 sm:p-6 transform hover:scale-103 transition shadow-[6px_6px_0_0_rgba(0,0,0,0.85)]">
              <h3
                class="flex justify-center text-xl sm:text-2xl mb-2 font-black text-black leading-tight w-fit fascinate-inline-regular tracking-wide">
                3x mais confiança...
              </h3>
              <p class="merriweather-body text-base sm:text-2xl bg-gray-50 leading-relaxed">
                Em empresas com interfaces acessíveis e bem pensadas.
              </p>
            </li>
          </ul>
        </div>
      </div>

    </section>

    <section id="SectionNorteadores" class="px-4 sm:px-6 py-5">
      <div class="mb-6">
        <div class="flex items-center gap-4 mb-6 sm:mb-8">
          <h2 class="uppercase text-2xl sm:text-4xl font-black text-black leading-tight w-fit fascinate-inline-regular">
            Norteadores do Projeto
          </h2>
        </div>

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <li
            class="bg-gray-50 border-4 border-black p-4 sm:p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] transform hover:scale-103 transition">
            <div class="bg-black px-4 py-3 border-b-4 border-black mb-4">
              <h3
                class="flex text-xl sm:text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                W3C
              </h3>
            </div>
            <p class="merriweather-body text-base sm:text-2xl bg-gray-50 leading-relaxed">
              World Wide Web Consortium é a organização internacional responsável por estabelecer os padrões web,
              garantindo que a internet seja acessível e funcional para todos os usuários, independentemente de suas
              capacidades.
            </p>
          </li>

          <li
            class="bg-gray-50 border-4 border-black p-4 sm:p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] transform hover:scale-103 transition">
            <div class="bg-black px-4 py-3 border-b-4 border-black mb-4">
              <h3
                class="flex text-xl sm:text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                WCAG
              </h3>
            </div>
            <p class="merriweather-body text-base sm:text-2xl bg-gray-50 leading-relaxed">
              Web Content Accessibility Guidelines são diretrizes técnicas criadas pela W3C que definem como tornar
              conteúdo web acessível a pessoas com deficiências, promovendo uma experiência inclusiva e igualitária para
              todos.
            </p>
          </li>

          <li
            class="bg-gray-50 border-4 border-black p-4 sm:p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] transform hover:scale-103 transition">
            <div class="bg-black px-4 py-3 border-b-4 border-black mb-4">
              <h3
                class="flex text-xl sm:text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                Heurísticas de Nielsen
              </h3>
            </div>
            <p class="merriweather-body text-base sm:text-2xl bg-gray-50 leading-relaxed">
              As 10 Heurísticas de Nielsen são princípios de UI/UX criados
              por Jakob Nielsen e Rolf Molich para melhorar a usabilidade,
              garantindo sistemas intuitivos, eficientes e consistentes,
              focando na prevenção de erros e na melhoria da experiência do usuário.
            </p>
          </li>

          <li
            class="bg-gray-50 border-4 border-black p-4 sm:p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] transform hover:scale-103 transition">
            <div class="bg-black px-4 py-3 border-b-4 border-black mb-4">
              <h3
                class="flex text-xl sm:text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
                Affordance
              </h3>
            </div>
            <p class="merriweather-body text-base sm:text-2xl bg-gray-50 leading-relaxed">
              É a propriedade de um objeto ou ambiente que indica,
              intuitivamente, como ele pode ser usado, permitindo que
              o usuário compreenda sua funcionalidade sem instruções.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section class="px-4 sm:px-6 pt-10 sm:pt-14 pb-14 sm:pb-20 bg-black text-white">
      <div
        class="border-4 border-black bg-black p-4 sm:p-6 shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] text-center gap-y-4 flex flex-col items-center">
        <h2
          class="text-xl sm:text-2xl font-black text-yellow-300 uppercase leading-tight w-full fascinate-inline-regular tracking-wide">
          Conheça quem está por trás deste projeto
        </h2>
        <p class="merriweather-body text-base sm:text-2xl text-gray-100 leading-relaxed">
          Explore os detalhes do projeto, seus integrantes e a história por trás desta iniciativa educacional.
        </p>
        <router-link to="/sobre-nos"
          class="border-4 border-yellow-300 bg-transparent text-yellow-300 font-black px-8 py-3 uppercase tracking-wider hover:bg-yellow-300 hover:text-black transition-all duration-200"
          style="margin-bottom: -3px">
          Sobre Nós
        </router-link>
      </div>
    </section>
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