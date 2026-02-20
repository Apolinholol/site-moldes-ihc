<template>
  <section id="SectionDocumentacao" class="flex sticky min-h-screen">
    <div v-if="props.menuAberto && eTelaMobile" class="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
      @click="$emit('toggle-menu')"></div>

    <section id="SectionItensDocumentacao"
      class="w-64 bg-white border-2 border-y-0 border-black p-4 overflow-y-auto fixed left-0 top-12 z-[9999] transition-transform duration-500 ease-out min-[800px]:static min-[800px]:translate-x-0 min-[800px]:h-auto"
      :class="{
        '-translate-x-full h-[calc(100vh-3rem)] ': !props.menuAberto && eTelaMobile,
        'translate-x-0 h-[100vh] sticky': props.menuAberto && eTelaMobile,
      }">
      <nav role="tablist" class="flex flex-col gap-3">
        <p class="text-xs font-bold uppercase tracking-wider text-gray-600 pl-2">Tópicos</p>

        <button @click="alterarPagina(0)" :class="{
          'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 0,
          'border-l-4 border-transparent': state.paginaAtiva !== 0,
        }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]">
          Heurísticas de Nielsen
        </button>

        <button @click="alterarPagina(1)" :class="{
          'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 1,
          'border-l-4 border-transparent': state.paginaAtiva !== 1,
        }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]">
          Teoria das cores
        </button>

        <button @click="alterarPagina(2)" :class="{
          'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 2,
          'border-l-4 border-transparent': state.paginaAtiva !== 2,
        }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]">
          Lei de Hick-Hyman
        </button>

        <button @click="alterarPagina(3)" :class="{
          'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 3,
          'border-l-4 border-transparent': state.paginaAtiva !== 3,
        }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]">
          Lei de Fitts
        </button>

        <button @click="alterarPagina(4)" :class="{
          'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 4,
          'border-l-4 border-transparent': state.paginaAtiva !== 4,
        }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]">
          Gestalt
        </button>

        <button @click="alterarPagina(5)" :class="{
          'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 5,
          'border-l-4 border-transparent': state.paginaAtiva !== 5,
        }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]">
          Tipografia
        </button>
      </nav>
    </section>

    <!-- Toasts globais (teleportados para o body, acima do header) -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="state.h1ToastVisivel"
          class="fixed top-15 right-4 bg-green-600 text-white text-base font-semibold px-4 py-2 rounded shadow-lg flex items-center gap-2 z-[99999]">
          ✓ Salvo com sucesso!
          <button @click="state.h1ToastVisivel = false"
            class="ml-2 text-white hover:text-gray-200 font-bold text-lg leading-none cursor-pointer"
            aria-label="Fechar">
            ✕
          </button>
        </div>
      </Transition>
      <Transition name="fade">
        <div v-if="state.h3ToastVisivel"
          class="fixed top-15 right-4 bg-green-600 text-white text-base font-semibold px-4 py-2 rounded shadow-lg flex items-center gap-2 z-[99999]">
          ✓ Relatório gerado com sucesso!
          <button @click="state.h3ToastVisivel = false"
            class="ml-2 text-white hover:text-gray-200 font-bold text-lg leading-none cursor-pointer"
            aria-label="Fechar">
            ✕
          </button>
        </div>
      </Transition>
    </Teleport>

    <!-- CONTEÚDO PRINCIPAL -->
    <section id="SectionConteudoDocumentacao" class="flex-1 p-6 min-[576px]:ml-0">
      <div v-if="state.paginaAtiva === 0" class="prose max-w-none">
        <section class="prose max-w-none">
          <h1 class="text-3xl font-black text-black leading-tight w-fit fascinate-inline-regular mb-4">
            10 Heurísticas de Nielsen
          </h1>
          <p class="text-lg text-gray-700">
            Criadas por Jakob Nielsen na década de 90, as heurísticas são
            <strong>"regras de polegar"</strong> (princípios gerais) para o design de interação.
            Elas não são diretrizes específicas de usabilidade, mas sim grandes balizadores para
            garantir que o sistema converse bem com o humano.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-600 p-4 my-6 rounded">
            <h3 class="text-blue-800 font-bold text-lg m-0">Por que são importantes?</h3>
            <p class="m-0 text-blue-700 mt-2">
              Aplicar essas heurísticas reduz a carga cognitiva do usuário (ele pensa menos para
              agir), previne erros frustrantes e torna o aprendizado do sistema muito mais rápido.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-6">Erros Comuns vs. Boas Práticas</h2>
          <p class="mb-6 text-gray-600">
            Abaixo, veja como a falta dessas heurísticas afeta a experiência e como corrigir.
          </p>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#1: Visibilidade do Status do Sistema</h3>
              <p class="text-sm text-gray-500 m-0">
                O sistema deve sempre informar o usuário sobre o que está acontecendo.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Sem Feedback)">
                <p class="text-sm text-gray-700 mb-2">
                  O usuário clica em "Salvar notas", o botão não muda de cor, nada aparece na tela.
                  Ele clica mais 5 vezes achando que travou.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded text-center text-gray-400 italic">
                  (Nenhuma mensagem aparece...)
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução">
                <p class="text-sm text-gray-700 mb-2">
                  Ao clicar, o botão mostra um "spinner" de carregamento e, ao finalizar, exibe uma
                  mensagem de sucesso.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded text-center flex justify-center">
                  <button @click="simularSalvar" :disabled="state.h1Salvando || state.h1Salvo"
                    class="bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-150" :class="{
                      'bg-blue-600 hover:bg-blue-700 cursor-pointer': !state.h1Salvando && !state.h1Salvo,
                      'bg-blue-400 cursor-not-allowed': state.h1Salvando,
                      'bg-green-600 cursor-default': state.h1Salvo,
                    }">
                    <span v-if="!state.h1Salvando && !state.h1Salvo">Salvar</span>
                    <span v-else-if="state.h1Salvando" class="flex items-center gap-2"><span
                        class="animate-spin">⟳</span> Salvando...</span>
                    <span v-else class="flex items-center gap-1">✓ Salvo!</span>
                  </button>
                </div>
                <p class="text-xs text-green-700 mt-2 text-center">
                  Clique no botão para simular o processo de salvamento e ver os feedbacks em ação.
                </p>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">
                #2: Correspondência entre o Sistema e o Mundo Real
              </h3>
              <p class="text-sm text-gray-500 m-0">
                O sistema deve falar a linguagem do usuário, não "tiopês" (linguagem técnica).
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Jargão Técnico)">
                <p class="text-sm text-gray-700 mb-2">
                  Uma mensagem de erro aparece para a secretária escolar:
                </p>
                <div class="bg-white p-4 border border-red-200 rounded font-mono text-xs text-red-600">
                  Error 404: Duplicate Entry 'Student_ID_55' on Index Primary. Exception
                  NullPointer.
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução">
                <p class="text-sm text-gray-700 mb-2">
                  Traduzir o erro para a linguagem da escola e do dia a dia.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded font-semibold text-red-600">
                  Não foi possível cadastrar: Já existe um aluno com esta matrícula no sistema.
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#3: Controle e Liberdade do Usuário</h3>
              <p class="text-sm text-gray-500 m-0">
                O usuário erra. Ele precisa de uma "saída de emergência" clara.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Beco sem saída)">
                <p class="text-sm text-gray-700 mb-2">
                  O usuário clica em "Gerar relatório completo" sem querer. O processo demora 5
                  minutos e não há botão de cancelar.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded text-center">
                  <button class="bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed" disabled>
                    Carregando... (Aguarde)
                  </button>
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução">
                <p class="text-sm text-gray-700 mb-2">
                  Antes de executar, confirmar a intenção do usuário com uma pergunta clara.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded text-center">
                  <!-- Estado inicial -->
                  <div v-if="state.h3EtapaModal === 0">
                    <button @click="h3GerarRelatorio"
                      class="bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-150 hover:bg-blue-700 cursor-pointer">Gerar
                      relatório completo</button>
                  </div>
                  <!-- Mini modal de confirmação -->
                  <div v-else-if="state.h3EtapaModal === 1" class="space-y-3">
                    <p class="text-sm text-gray-700 font-semibold m-0">Tem certeza que deseja gerar o relatório
                      completo?</p>
                    <p class="text-xs text-gray-500 m-0">Esse processo pode levar alguns minutos.</p>
                    <div class="flex justify-center gap-3 mt-2">
                      <button @click="h3Confirmar"
                        class="bg-green-600 text-white px-4 py-2 rounded text-sm transition-colors duration-150 hover:bg-green-700 cursor-pointer">Gerar</button>
                      <button @click="h3Cancelar"
                        class="bg-white text-red-600 border border-red-200 px-4 py-2 rounded text-sm font-semibold transition-colors duration-150 hover:bg-red-50 cursor-pointer">Cancelar</button>
                    </div>
                  </div>
                  <!-- Feedback pós-confirmação -->
                  <div v-else class="text-green-600 font-semibold flex items-center justify-center gap-2">
                    <span class="animate-spin">⟳</span> Gerando relatório...
                  </div>
                </div>
              </ExemploSolucao>
            </div>
          </div>
        </section>

        <section class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#4: Consistência e Padrões</h3>
              <p class="text-sm text-gray-500 m-0">
                Os usuários não devem ter que se perguntar se palavras, situações ou ações
                diferentes significam a mesma coisa.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro">
                <p class="text-sm text-gray-700 mb-2">
                  Na tela de Alunos, o botão de salvar é verde e diz "Salvar". Na tela de
                  Professores, o botão é azul e diz "Persistir Dados".
                </p>
                <div class="bg-white p-4 border border-red-200 rounded text-center gap-2 flex justify-center">
                  <button
                    class="bg-green-600 text-white text-xs px-2 py-1 rounded transition-colors duration-150 hover:bg-green-700 cursor-pointer">Salvar</button>
                  <button
                    class="bg-blue-600 text-white text-xs px-2 py-1 rounded transition-colors duration-150 hover:bg-blue-700 cursor-pointer">
                    Persistir
                  </button>
                </div>
              </ExemploErro>
              <ExemploSolucao titulo="A Solução">
                <p class="text-sm text-gray-700 mb-2">
                  Manter o mesmo design, cor e terminologia em todo o sistema. Se é "Salvar", é
                  "Salvar" sempre.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded text-center gap-2 flex justify-center">
                  <button
                    class="bg-green-600 text-white text-xs px-2 py-1 rounded transition-colors duration-150 hover:bg-green-700 cursor-pointer">
                    Salvar Aluno
                  </button>
                  <button
                    class="bg-green-600 text-white text-xs px-2 py-1 rounded transition-colors duration-150 hover:bg-green-700 cursor-pointer">
                    Salvar Prof.
                  </button>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#5: Prevenção de Erros</h3>
              <p class="text-sm text-gray-500 m-0">
                Melhor do que uma boa mensagem de erro é um design cuidadoso que evita que o
                problema ocorra.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro">
                <p class="text-sm text-gray-700 mb-2">
                  Permitir que a secretária digite data em qualquer formato num campo de texto
                  livre.
                </p>
                <div class="bg-white p-3 border border-red-200 rounded text-center text-sm">
                  <label class="block text-xs text-left text-gray-500">Data:</label>
                  <input type="text" value="Fevereiro/2025"
                    class="border border-red-300 w-full p-1 text-red-600 rounded" disabled />
                </div>
              </ExemploErro>
              <ExemploSolucao titulo="A Solução">
                <p class="text-sm text-gray-700 mb-2">
                  Usar máscaras de input para impedir formatos inválidos. Apenas números são
                  aceitos e a formatação é automática.
                </p>
                <div class="bg-white p-3 border border-green-200 rounded text-center text-sm">
                  <label class="block text-xs text-left text-gray-500">Data:</label>
                  <div class="relative">
                    <input type="text" :value="state.h5Data" @input="h5MascaraData" placeholder="dd/mm/aaaa"
                      maxlength="10"
                      class="border border-gray-300 w-full p-1 pr-7 text-gray-800 rounded focus:ring-2 focus:ring-green-300 focus:outline-none" />
                    <button v-if="state.h5Data.length > 0" @click="state.h5Data = ''"
                      class="absolute right-1.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-150 text-sm leading-none"
                      type="button">✕</button>
                  </div>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#6: Reconhecimento em vez de Memorização</h3>
              <p class="text-sm text-gray-500 m-0">
                Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro">
                <p class="text-sm text-gray-700 mb-2">
                  Pedir o "ID do Curso" para matricular um aluno, obrigando a pessoa a decorar
                  códigos.
                </p>
                <div class="bg-white p-3 border border-red-200 rounded text-center text-sm">
                  <input type="text" placeholder="Digite o ID (ex: 4092)"
                    class="border border-gray-300 w-full p-1 rounded" disabled />
                </div>
              </ExemploErro>
              <ExemploSolucao titulo="A Solução">
                <p class="text-sm text-gray-700 mb-2">
                  Oferecer uma lista suspensa com os nomes dos cursos. O sistema lembra os códigos,
                  não o humano.
                </p>
                <div class="bg-white p-3 border border-green-200 rounded text-center text-sm relative">
                  <select v-model="state.cursoSelecionado"
                    class="border border-gray-300 w-full p-1 text-left bg-gray-50 flex justify-between items-center rounded cursor-pointer focus:ring-2 focus:ring-green-300 focus:outline-none">
                    <option value="História - 1º Ano">História - 1º Ano</option>
                    <option value="Matemática - 2º Ano">Matemática - 2º Ano</option>
                    <option value="Geografia - 1º Ano">Geografia - 1º Ano</option>
                    <option value="Artes - 2º Ano">Artes - 2º Ano</option>
                  </select>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#7: Flexibilidade e Eficiência de Uso</h3>
              <p class="text-sm text-gray-500 m-0">
                Atalhos não vistos pelo usuário novato podem agilizar a interação para o usuário
                experiente.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro">
                <p class="text-sm text-gray-700 mb-2">
                  Para lançar notas, o professor precisa clicar em "Editar", clicar no campo,
                  digitar, clicar em "Salvar", repetir para 40 alunos.
                </p>
                <div class="bg-white p-3 border border-red-200 rounded text-sm space-y-2">
                  <div v-for="i in 3" :key="'h7err' + i" class="flex items-center gap-2">
                    <label class="text-xs text-gray-500 w-20 shrink-0">Aluno {{ i }}:</label>
                    <span class="border border-gray-300 w-full p-1 text-gray-300 rounded bg-gray-50 text-xs">Nome do
                      aluno</span>
                    <button
                      class="text-[10px] bg-gray-200 text-gray-500 px-2 py-0.5 rounded border border-gray-300 whitespace-nowrap cursor-default">Editar</button>
                    <button
                      class="text-[10px] bg-gray-200 text-gray-500 px-2 py-0.5 rounded border border-gray-300 whitespace-nowrap cursor-default">Salvar</button>
                  </div>
                </div>
                <p class="text-xs text-red-500 mt-2 text-center">3 cliques por aluno × 40 alunos = 120 cliques</p>
              </ExemploErro>
              <ExemploSolucao titulo="A Solução">
                <p class="text-sm text-gray-700 mb-2">
                  Permitir navegação com a tecla "TAB" entre os campos de nota e salvamento
                  automático ao sair do campo.
                </p>
                <div class="bg-white p-3 border border-green-200 rounded text-sm space-y-2">
                  <div v-for="(_, i) in 3" :key="i" class="flex items-center gap-2">
                    <label class="text-xs text-gray-500 w-20 shrink-0">Aluno {{ i + 1 }}:</label>
                    <input :ref="(el) => { h7Refs[i] = el as HTMLInputElement | null }" v-model="state.h7Notas[i]"
                      type="text"
                      :placeholder="i < 2 ? 'Digite a nota e pressione TAB' : 'Digite a nota e pressione TAB'"
                      @keydown="(e) => h7TabHandler(e, i)"
                      class="border border-gray-300 w-full p-1 text-gray-800 rounded focus:ring-2 focus:ring-green-300 focus:outline-none" />
                  </div>
                  <p class="text-[10px] text-gray-400 text-center m-0 pt-1 font-mono">[TAB] Navega entre alunos</p>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#8: Estética e Design Minimalista</h3>
              <p class="text-sm text-gray-500 m-0">
                Os diálogos não devem conter informações irrelevantes ou raramente necessárias.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro">
                <p class="text-sm text-gray-700 mb-2">
                  Um dashboard inicial cheio de gráficos que a secretária nunca usa (ex: "Uso de CPU
                  do Servidor").
                </p>
                <div class="bg-white p-3 border border-red-200 rounded text-sm space-y-2">
                  <div class="flex gap-2">
                    <div class="flex-1 border border-gray-200 rounded p-2 text-center">
                      <div class="text-[10px] text-gray-400">Uso de CPU</div>
                      <div class="h-6 bg-purple-200 rounded mt-1"></div>
                    </div>
                    <div class="flex-1 border border-gray-200 rounded p-2 text-center">
                      <div class="text-[10px] text-gray-400">RAM Livre</div>
                      <div class="h-6 bg-orange-200 rounded mt-1"></div>
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <div class="flex-1 border border-gray-200 rounded p-2 text-center">
                      <div class="text-[10px] text-gray-400">Disco I/O</div>
                      <div class="h-6 bg-blue-200 rounded mt-1"></div>
                    </div>
                    <div class="flex-1 border border-gray-200 rounded p-2 text-center">
                      <div class="text-[10px] text-gray-400">Logs do Servidor</div>
                      <div class="h-6 bg-gray-200 rounded mt-1"></div>
                    </div>
                  </div>
                </div>
              </ExemploErro>
              <ExemploSolucao titulo="A Solução">
                <p class="text-sm text-gray-700 mb-2">
                  Mostrar apenas o essencial: "3 Matrículas Pendentes", "2 Turmas sem Professor".
                </p>
                <div class="bg-white p-3 border border-green-200 rounded text-sm space-y-2">
                  <div class="flex items-center gap-2 p-2 bg-yellow-100 border border-yellow-200 rounded">
                    <span class="text-lg">⚠️</span>
                    <div>
                      <div class="font-bold text-xs text-gray-800">3 Matrículas Pendentes</div>
                      <div class="text-[10px] text-gray-500">Aguardando aprovação</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 p-2 bg-red-100 border border-red-200 rounded">
                    <span class="text-lg">🚨</span>
                    <div>
                      <div class="font-bold text-xs text-gray-800">2 Turmas sem Professor</div>
                      <div class="text-[10px] text-gray-500">Precisa de atenção</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 p-2 bg-emerald-100 border border-green-200 rounded">
                    <span class="text-lg">✅</span>
                    <div>
                      <div class="font-bold text-xs text-gray-800">128 Alunos Ativos</div>
                      <div class="text-[10px] text-gray-500">Tudo em dia</div>
                    </div>
                  </div>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#9: Ajudar usuários a reconhecer erros</h3>
              <p class="text-sm text-gray-500 m-0">
                Mensagens de erro devem ser expressas em linguagem clara (sem códigos), indicar o
                problema e sugerir uma solução.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro">
                <div class="bg-white p-4 border border-red-200 rounded text-red-600 font-bold">
                  Erro: Input Inválido!
                </div>
                <p class="text-xs text-red-500 mt-2 text-center">
                  (O usuário não sabe o que errou)
                </p>
              </ExemploErro>
              <ExemploSolucao titulo="A Solução">
                <div class="bg-white p-4 border border-green-200 rounded text-red-600 text-sm">
                  <strong>Não foi possível salvar:</strong> O campo "CPF" está incompleto.
                </div>
                <p class="text-xs text-green-700 mt-2 text-center">
                  O erro é específico e construtivo.
                </p>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#10: Ajuda e Documentação</h3>
              <p class="text-sm text-gray-500 m-0">
                Mesmo que o sistema seja intuitivo, pode ser necessário fornecer ajuda e
                documentação.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro">
                <p class="text-sm text-gray-700 mb-2">
                  Entregar um manual em PDF de 200 páginas que ninguém lê.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded text-center">
                  <div class="text-4xl mb-2">📄</div>
                  <div class="text-xs font-bold text-gray-700">Manual_Sistema_v3.pdf</div>
                  <div class="text-[10px] text-gray-400 mt-1">200 páginas • 12 MB</div>
                  <div class="mt-2 text-[10px] bg-gray-100 text-gray-500 px-3 py-1 rounded inline-block">Baixar PDF
                  </div>
                </div>
              </ExemploErro>
              <ExemploSolucao titulo="A Solução">
                <p class="text-sm text-gray-700 mb-2">
                  Tooltips (dicas de ferramenta) contextuais. Ao passar o mouse sobre um campo
                  complexo, uma pequena explicação aparece.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded text-center flex justify-center">
                  <span @mouseenter="state.h10TooltipVisivel = true" @mouseleave="state.h10TooltipVisivel = false"
                    class="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center font-bold text-gray-600 cursor-help transition-colors duration-150 hover:bg-gray-300">?</span>
                  <Transition name="fade">
                    <div v-if="state.h10TooltipVisivel"
                      class="absolute bottom-28 bg-gray-800 text-white text-xs rounded px-3 py-2 shadow-lg whitespace-nowrap">
                      A explicação pode aparecer aqui
                    </div>
                  </Transition>
                </div>
                <p class="text-xs text-green-700 mt-2 text-center">
                  Passe o mouse sobre o ícone de interrogação para ver a dica contextual.
                </p>
              </ExemploSolucao>
            </div>
          </div>
        </section>
      </div>

      <div v-if="state.paginaAtiva === 1" class="prose max-w-none">
        <h1 class="text-2xl font-bold mb-4">Teoria das cores</h1>
        <section class="prose max-w-none">
          <p class="text-lg text-gray-700">
            A cor não é apenas estética; é comunicação. Estudos indicam que entre
            <strong>62% e 90%</strong> da avaliação de um produto é baseada apenas nas cores. Em um
            sistema escolar por exemplo, a cor serve para guiar a atenção do usuário e indicar
            status (Aprovado, Reprovado, Alerta).
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-600 p-4 my-6 rounded">
            <h3 class="text-blue-800 font-bold text-lg m-0">A Regra de Ouro: 60-30-10</h3>
            <p class="m-0 text-blue-700 mt-2">
              Para garantir equilíbrio visual, utilize a proporção:
            </p>
            <ul class="list-disc pl-5 mt-2 text-blue-800">
              <li>
                <strong>60% Cor Dominante:</strong> Geralmente neutra (Fundo, espaços em branco).
              </li>
              <li><strong>30% Cor Secundária:</strong> Identidade da marca (Menus, Cabeçalhos).</li>
              <li>
                <strong>10% Cor de Destaque (Accent):</strong> Para chamadas para ação (Botões,
                Links).
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-6">Aplicação Prática no Sistema</h2>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#1: Equilíbrio Visual (60-30-10)</h3>
              <p class="text-sm text-gray-500 m-0">
                Quanto mais cores utilizadas, mais complicado é alcançar o equilíbrio.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Carnaval Visual)">
                <p class="text-sm text-gray-700 mb-4">
                  Usar uma cor diferente para cada botão ou seção sem hierarquia, cansando a vista
                  do professor.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded space-y-2">
                  <div class="h-8 bg-purple-500 w-full rounded"></div>
                  <div class="flex gap-2">
                    <div class="h-20 w-1/3 bg-orange-400 rounded"></div>
                    <div class="h-20 w-2/3 bg-green-400 rounded"></div>
                  </div>
                  <button
                    class="w-full bg-red-500 text-white py-1 rounded transition-colors duration-150 hover:bg-red-600 cursor-pointer">Botão
                    1</button>
                  <button
                    class="w-full bg-yellow-400 text-black py-1 rounded transition-colors duration-150 hover:bg-yellow-500 cursor-pointer">Botão
                    2</button>
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Hierarquia)">
                <p class="text-sm text-gray-700 mb-4">
                  Fundo neutro (60%), Azul para estrutura (30%) e Verde para o botão principal
                  (10%).
                </p>
                <div class="bg-gray-50 p-4 border border-green-200 rounded space-y-2">
                  <div class="h-8 bg-white w-full border border-gray-200 rounded"></div>
                  <div class="flex gap-2">
                    <div class="h-20 w-1/3 bg-blue-600 rounded opacity-90"></div>
                    <div class="h-20 w-2/3 bg-white border border-gray-200 rounded"></div>
                  </div>
                  <button
                    class="w-full bg-green-600 text-white py-1 rounded shadow-sm transition-colors duration-150 hover:bg-green-700 cursor-pointer">
                    Salvar notas
                  </button>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#2: Semântica das Cores</h3>
              <p class="text-sm text-gray-500 m-0">
                As cores têm significado universal. O Vermelho cria urgência ; o Azul passa
                confiança e segurança.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Sinais Trocados)">
                <p class="text-sm text-gray-700 mb-2">
                  Usar vermelho para um botão de "Sucesso" ou verde para "Deletar". Isso causa erros
                  graves por hábito.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded text-center gap-2 flex justify-center">
                  <button
                    class="bg-red-600 text-white px-4 py-2 rounded transition-colors duration-150 hover:bg-red-700 cursor-pointer">
                    Salvar com Sucesso
                  </button>
                  <button
                    class="bg-green-600 text-white px-4 py-2 rounded transition-colors duration-150 hover:bg-green-700 cursor-pointer">Apagar
                    Tudo</button>
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Convenção)">
                <p class="text-sm text-gray-700 mb-2">
                  <strong>Verde:</strong> Ações positivas, sucesso, saúde.<br />
                  <strong>Vermelho:</strong> Ações destrutivas, erros, paradas.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded text-center gap-2 flex justify-center">
                  <button
                    class="bg-green-600 text-white px-4 py-2 rounded shadow transition-colors duration-150 hover:bg-green-700 cursor-pointer">
                    Salvar Dados
                  </button>
                  <button
                    class="bg-red-600 text-white border border-red-200 px-4 py-2 rounded hover:bg-red-700 cursor-pointer">
                    Excluir
                  </button>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#3: Conforto Visual (O Mito do Preto)</h3>
              <p class="text-sm text-gray-500 m-0">
                "Evite usar o 100% Black. É uma cor que domina todo o redor."
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Contraste Duro)">
                <p class="text-sm text-gray-700 mb-2">
                  Texto preto puro (#000000) em fundo branco puro (#FFFFFF). O contraste extremo
                  cansa a vista em leituras longas.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded">
                  <p class="text-[black] font-serif">
                    "O excesso de contraste pode causar vibração visual..."
                  </p>
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Suavidade)">
                <p class="text-sm text-gray-700 mb-2">
                  Use cinza escuro (#333333 ou #1F2937) para textos. O azul é excelente para
                  corporativo pois é produtivo e não invasivo.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded">
                  <p class="text-gray-800 font-serif">
                    "Um contraste suavizado melhora a legibilidade por longos períodos."
                  </p>
                </div>
              </ExemploSolucao>
            </div>
          </div>
        </section>

        <section class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 class="font-bold text-xl mb-4">Paleta Sugerida para Escolas:</h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="text-center">
              <div class="h-12 w-full bg-blue-600 rounded mb-2"></div>
              <span class="font-bold text-sm block">Azul</span>
              <span class="text-xs text-gray-600">Confiança / Dados</span>
            </div>
            <div class="text-center">
              <div class="h-12 w-full bg-green-600 rounded mb-2"></div>
              <span class="font-bold text-sm block">Verde</span>
              <span class="text-xs text-gray-600">Aprovação / $</span>
            </div>
            <div class="text-center">
              <div class="h-12 w-full bg-yellow-400 rounded mb-2"></div>
              <span class="font-bold text-sm block">Amarelo</span>
              <span class="text-xs text-gray-600">Atenção / Otimismo</span>
            </div>
            <div class="text-center">
              <div class="h-12 w-full bg-red-600 rounded mb-2"></div>
              <span class="font-bold text-sm block">Vermelho</span>
              <span class="text-xs text-gray-600">Erro / Urgência</span>
            </div>
          </div>
        </section>
      </div>

      <div v-if="state.paginaAtiva === 2" class="prose max-w-none">
        <h1 class="text-2xl font-bold mb-4">Lei de Hick-Hyman</h1>
        <section>
          <p class="text-lg text-gray-700">
            "Quanto mais opções de escolha forem apresentadas aos usuários, mais tempo eles levarão
            para chegar a uma decisão" Basicamente, o tempo de tomada de decisão aumenta conforme o
            número de opções cresce.
          </p>

          <div class="bg-gray-800 text-white p-6 rounded-lg shadow-md my-6 font-mono text-center">
            <p class="text-sm text-gray-400 mb-2">A Fórmula Matemática:</p>
            <p class="text-2xl tracking-wider">RT = a + b log2(n)</p>
            <p class="text-sm text-gray-500 mt-2 italic">
              Onde <strong>RT</strong> é o Tempo de Reação, <strong>(n)</strong> é o número de
              estímulos e <strong>a</strong> e <strong>b</strong> são constantes mensuráveis que
              dependem da tarefa a ser realizada e das condições sob as quais serão tratadas.
            </p>
          </div>

          <p class="text-gray-600">
            Em um Sistema, isso significa que apresentar um menu com 50 opções para um usuário vai
            fazê-lo perder tempo procurando onde está a opção desejada ou mais utilizada.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-6">Aplicações Práticas</h2>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#1: Categorização (Hick's Law)</h3>
              <p class="text-sm text-gray-500 m-0">
                Usuários subdividem opções em categorias e eliminam metade das opções a cada passo.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Lista Plana)">
                <p class="text-sm text-gray-700 mb-4">
                  Um menu lateral com todas as funções misturadas. O usuário precisa ler uma a uma
                  (tempo linear).
                </p>
                <div class="bg-white p-4 border border-red-200 rounded text-sm space-y-2 h-40 overflow-y-auto">
                  <div class="text-gray-500 border-b">Cadastrar Aluno</div>
                  <div class="text-gray-500 border-b">Ver Boletim</div>
                  <div class="text-gray-500 border-b">Cadastrar Professor</div>
                  <div class="text-gray-500 border-b">Relatório Financeiro</div>
                  <div class="text-gray-500 border-b">Editar Turma</div>
                  <div class="text-gray-500 border-b">Imprimir Histórico</div>
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Categorias)">
                <p class="text-sm text-gray-700 mb-4">
                  Agrupar opções logicamente. O usuário decide primeiro "É Secretaria?", eliminando
                  tudo que é "Financeiro".
                </p>
                <div class="bg-white p-4 border border-green-200 rounded text-sm space-y-2">
                  <details class="group">
                    <summary class="font-bold cursor-pointer list-none flex justify-between">
                      📂 Secretaria <span>▼</span>
                    </summary>
                    <div class="pl-6 mt-2 text-gray-600 text-xs space-y-1">
                      <div>- Cadastrar Aluno</div>
                      <div>- Editar Turma</div>
                    </div>
                  </details>
                  <details class="group">
                    <summary class="font-bold cursor-pointer list-none flex justify-between">
                      💰 Financeiro <span>▼</span>
                    </summary>
                    <div class="pl-6 mt-2 text-gray-600 text-xs space-y-1">
                      <div>- Relatório Financeiro</div>
                      <div>- Mensalidades</div>
                    </div>
                  </details>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#2: Lei de Miller (O número mágico 7±2)</h3>
              <p class="text-sm text-gray-500 m-0">
                A memória de curto prazo armazena apenas de 5 a 9 itens de informação.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Sobrecarga)">
                <p class="text-sm text-gray-700 mb-2">
                  Um formulário de matrícula que pede 15 informações seguidas sem pausas ou
                  agrupamentos.
                </p>
                <div class="bg-white p-2 border border-red-200 rounded text-xs text-gray-400">
                  [Nome] [CPF] [RG] [Mãe] [Pai] [Endereço] [CEP] [Bairro] [Cidade] [Estado] [Tel]
                  [Cel] [Email]...
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Chunking)">
                <p class="text-sm text-gray-700 mb-2">
                  Dividir o formulário em etapas ou blocos visuais menores (ex: "Dados Pessoais",
                  "Endereço").
                </p>
                <div class="bg-white p-2 border border-green-200 rounded text-xs space-y-2 pt-3 pb-3">
                  <div class="bg-white p-2 border border-gray-300 rounded text-xs">
                    <strong>1. Dados Pessoais</strong> (3 campos)
                  </div>
                  <div class="bg-white p-2 border border-gray-300 rounded text-xs">
                    <strong>2. Endereço</strong> (4 campos)
                  </div>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#3: Thumb Zones (Zonas do Polegar)</h3>
              <p class="text-sm text-gray-500 m-0">
                49% dos usuários interagem com o celular usando apenas uma mão (o polegar).
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Topo da Tela)">
                <p class="text-sm text-gray-700 mb-2">
                  Colocar o botão principal de ação (ex: "Salvar Chamada") no canto superior
                  esquerdo.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded font-semibold text-red-600">
                  <div class="w-32 h-48 bg-gray-100 border-4 border-gray-800 rounded mx-auto relative">
                    <div
                      class="absolute top-2 left-2 w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs">
                      💾
                    </div>
                    <div class="mt-12 p-2 text-[8px] text-gray-400 text-center">
                      Área difícil para o polegar
                    </div>
                  </div>
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Botão Flutuante)">
                <p class="text-sm text-gray-700 mb-2">
                  Usar botões na parte inferior (Floating Action Button) ou barras de navegação
                  inferiores, onde é "Confortável".
                </p>
                <div class="bg-white p-4 border border-green-200 rounded font-semibold text-green-600">
                  <div class="w-32 h-48 bg-gray-100 border-4 border-gray-800 rounded mx-auto relative">
                    <div
                      class="absolute bottom-3 right-3 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      +
                    </div>
                    <div class="mt-12 p-2 text-[8px] text-gray-400 text-center">
                      Área confortável (Easy)
                    </div>
                  </div>
                </div>
              </ExemploSolucao>
            </div>
          </div>
        </section>
      </div>

      <div v-if="state.paginaAtiva === 3" class="prose max-w-none">
        <h1 class="text-2xl font-bold mb-4">Lei de Fitts</h1>
        <section>
          <p class="text-lg text-gray-700">
            "O tempo necessário para mover-se rapidamente até um alvo é função da distância até o
            alvo e do tamanho do alvo."
          </p>

          <div class="bg-gray-800 text-white p-6 rounded-lg shadow-md my-6 font-mono text-center">
            <p class="text-sm text-gray-400 mb-2">A Fórmula do Movimento:</p>
            <p class="text-2xl tracking-wider">T = a + b log2(D/W + 1)</p>
            <p class="text-sm text-gray-500 mt-2 italic">
              <strong>T</strong>: Tempo | <strong>D</strong>: Distância | <strong>W</strong>:
              Largura do Alvo
            </p>
          </div>
        </section>

        <section>
          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#1: Tamanho e Área de Clique</h3>
              <p class="text-sm text-gray-500 m-0">
                Botões maiores são mais rápidos de clicar e têm menos chance de erro.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Alvo Minúsculo)">
                <p class="text-sm text-gray-700 mb-4">
                  Usar apenas um ícone pequeno ou texto sem padding.
                </p>
                <div class="flex justify-center items-center h-20 border border-red-200 bg-white rounded">
                  <span class="text-xs cursor-pointer text-blue-600 hover:underline">Salvar</span>
                </div>
                <p class="text-xs text-red-500 mt-2 text-center">
                  Área de clique: 20x10px (Muito difícil)
                </p>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Área Expandida)">
                <p class="text-sm text-gray-700 mb-4">
                  Aumentar o padding (enchimento) do botão. O rótulo também ajuda a tornar o alvo
                  maior.
                </p>
                <div class="flex justify-center items-center h-20 border border-green-200 bg-white rounded">
                  <button class="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 cursor-pointer">
                    Salvar notas
                  </button>
                </div>
                <p class="text-xs text-green-700 mt-2 text-center">
                  Área de clique: 140x50px (Fácil)
                </p>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#2: Dificultando Ações Perigosas</h3>
              <p class="text-sm text-gray-500 m-0">
                Para dificultar uma ação, diminua o alvo e aumente a distância.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Proximidade Perigosa)">
                <p class="text-sm text-gray-700 mb-4">
                  Colocar "Salvar" e "Apagar Tudo" lado a lado com o mesmo tamanho. O risco de
                  clique acidental é enorme.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded flex gap-1 justify-center">
                  <button
                    class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer">Enviar</button>
                  <button
                    class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer">Resetar</button>
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Distanciamento)">
                <p class="text-sm text-gray-700 mb-4">
                  Colocar o botão de ação principal grande e destacado, e o "Resetar" pequeno,
                  distante ou como link textual.
                </p>
                <div
                  class="bg-white p-4 border border-green-200 rounded font-semibold text-red-600 flex gap-4 justify-center items-center">
                  <a href="#" class="text-red-400 text-xs hover:text-red-600 ml-2 center">Resetar formulário</a>
                  <button
                    class="bg-green-600 text-white px-6 py-2 rounded shadow-lg transform hover:bg-green-700 cursor-pointer">
                    Enviar dados
                  </button>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#3: Bordas da Tela (Otimização)</h3>
              <p class="text-sm text-gray-500 m-0">
                As bordas da tela têm "altura infinita", pois o mouse para lá automaticamente.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Menu Flutuante)">
                <p class="text-sm text-gray-700 mb-2">
                  Deixar um menu importante "boiando" no meio da tela. O usuário precisa desacelerar
                  o mouse para acertar o alvo.
                </p>
                <div class="bg-white h-32 w-full relative border border-red-200 rounded">
                  <div class="absolute top-10 left-10 bg-slate-100 p-2 shadow border rounded cursor-default group/menu">
                    <span class="text-xl text-gray-700 cursor-pointer">Menu</span>
                    <div class="hidden group-hover/menu:block mt-1 border-t border-gray-300 pt-1 space-y-1">
                      <div class="text-[10px] text-gray-500 hover:text-gray-800 cursor-pointer">Início</div>
                      <div class="text-[10px] text-gray-500 hover:text-gray-800 cursor-pointer">Alunos</div>
                      <div class="text-[10px] text-gray-500 hover:text-gray-800 cursor-pointer">Relatórios</div>
                    </div>
                  </div>
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Cantos e Bordas)">
                <p class="text-sm text-gray-700 mb-2">
                  Fixar menus no topo ou na lateral esquerda. O usuário pode "jogar" o mouse sem
                  medo de passar do ponto.
                </p>
                <div class="bg-gray-200 h-32 w-full relative border border-green-200 overflow-hidden rounded">
                  <!-- Barra de navegação no topo -->
                  <div class="absolute top-0 left-0 w-full bg-blue-800 h-8 shadow flex items-center px-2 gap-3">
                    <span class="text-[10px] text-white font-semibold">Início</span>
                    <span class="text-[10px] text-blue-200">Alunos</span>
                    <span class="text-[10px] text-blue-200">Turmas</span>
                    <span class="text-[10px] text-blue-200">Relatórios</span>
                  </div>
                  <!-- Sidebar lateral -->
                  <div class="absolute top-8 left-0 h-full w-16 bg-white border-r border-gray-300 pt-2 space-y-2 px-1">
                    <div class="text-[9px] text-gray-600 font-semibold px-1">Painel</div>
                    <div class="text-[9px] text-gray-400 px-1">Notas</div>
                    <div class="text-[9px] text-gray-400 px-1">Chamada</div>
                  </div>
                </div>
              </ExemploSolucao>
            </div>
          </div>
        </section>

        <section class="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
          <h3 class="font-bold text-xl mb-2 text-indigo-900">Regra de Bolso:</h3>
          <p class="text-indigo-800">
            Se você quer que o usuário clique (Salvar, Confirmar), faça o botão
            <strong>GRANDE</strong> e coloque-o onde o mouse/dedo já está (ou nas bordas). Se você
            NÃO quer que ele clique (Deletar, Cancelar), faça pequeno e coloque longe.
          </p>
        </section>
      </div>

      <div v-if="state.paginaAtiva === 4" class="prose max-w-none">
        <h1 class="text-2xl font-bold mb-4">Princípios de Gestalt</h1>
        <section class="prose max-w-none">
          <p class="text-lg text-gray-700 mb-4">
            Gestalt é uma palavra alemã que significa "forma". O princípio básico é que
            <strong>"o todo é interpretado de maneira diferente que a soma das partes"</strong>. Na
            interface, isso nos ajuda a entender como os usuários agrupam mentalmente as informações
            na tela.
          </p>
        </section>

        <section>
          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#1: Proximidade</h3>
              <p class="text-sm text-gray-500 m-0">
                Tendemos a agrupar elementos que estão próximos uns dos outros como uma unidade.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Espaçamento Igual)">
                <p class="text-sm text-gray-700 mb-4">
                  Quando o título, o campo e o botão têm o mesmo espaçamento, o usuário não sabe o
                  que pertence a quê.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded flex flex-col gap-4">
                  <label class="text-xs text-gray-500 block">Nome do aluno</label>
                  <input type="text" value="..." disabled
                    class="bg-gray-100 p-1 w-full border border-gray-300 rounded text-sm text-gray-700" />
                  <label class="text-xs text-gray-500 block">Nota final</label>
                  <input type="text" value="..." disabled
                    class="bg-gray-100 p-1 w-full border border-gray-300 rounded text-sm text-gray-700" />
                </div>
                <p class="text-xs text-red-500 mt-2 text-center">Tudo parece solto.</p>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Agrupamento)">
                <p class="text-sm text-gray-700 mb-4">
                  Aproximar o rótulo (Label) do seu campo (Input) e afastar dos outros grupos cria
                  blocos lógicos instantâneos.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded flex flex-col gap-6">
                  <div class="flex flex-col gap-1">
                    <label class="text-xs text-gray-500 block mb-0.5">Nome do aluno:</label>
                    <input type="text" value="João" disabled
                      class="bg-gray-100 p-1 w-full border border-gray-300 rounded text-sm text-gray-700" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <label class="text-xs text-gray-500 block mb-0.5">Nota final:</label>
                    <input type="text" value="8.5" disabled
                      class="bg-gray-100 p-1 w-full border border-gray-300 rounded text-sm text-gray-700" />
                  </div>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#2: Semelhança</h3>
              <p class="text-sm text-gray-500 m-0">
                Percebemos elementos como pertencentes ao mesmo grupo se eles se parecerem (cor,
                forma, tamanho).
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Inconsistência)">
                <p class="text-sm text-gray-700 mb-4">
                  Links de navegação com cores e estilos diferentes. O usuário acha que são funções
                  diferentes.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded flex gap-3 justify-center items-center">
                  <span class="text-blue-600 underline cursor-pointer hover:text-blue-800">Alunos</span>
                  <button class="bg-gray-200 px-2 rounded hover:bg-gray-300 cursor-pointer">Turmas</button>
                  <span class="text-red-600 font-bold cursor-pointer hover:text-red-800">Notas</span>
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Padrão)">
                <p class="text-sm text-gray-700 mb-4">
                  Se todos os itens do menu têm a mesma cor e fonte, o cérebro entende: "Isso tudo é
                  navegação".
                </p>
                <div class="bg-white p-4 border border-green-200 rounded flex gap-3 justify-center">
                  <span class="text-gray-700 font-bold hover:text-blue-600 cursor-pointer">Alunos</span>
                  <span class="text-gray-700 font-bold hover:text-blue-600 cursor-pointer">Turmas</span>
                  <span class="text-gray-700 font-bold hover:text-blue-600 cursor-pointer">Notas</span>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#3: Continuidade</h3>
              <p class="text-sm text-gray-500 m-0">
                Elementos alinhados dão a sensação de seguir uma direção. O olho prefere seguir um
                caminho suave.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Quebra de Fluxo)">
                <p class="text-sm text-gray-700 mb-2">
                  Alinhamento em zigue-zague. O olho do professor tem que pular pela tela para ler
                  os dados.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded space-y-3">
                  <div>
                    <label class="text-xs text-gray-500 block mb-0.5">Nome:</label>
                    <input type="text" value="João" disabled
                      class="bg-gray-100 p-1 w-1/2 border border-gray-300 rounded text-sm text-gray-700" />
                  </div>
                  <div class="text-right">
                    <label class="text-xs text-gray-500 block mb-0.5 text-right">Turma:</label>
                    <input type="text" value="3B" disabled
                      class="bg-gray-100 p-1 w-1/2 ml-auto block border border-gray-300 rounded text-sm text-gray-700 text-right" />
                  </div>
                  <div class="text-center">
                    <label class="text-xs text-gray-500 block mb-0.5">Status:</label>
                    <input type="text" value="Ativo" disabled
                      class="bg-gray-100 p-1 w-1/2 mx-auto block border border-gray-300 rounded text-sm text-gray-700 text-center" />
                  </div>
                </div>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Alinhamento)">
                <p class="text-sm text-gray-700 mb-2">
                  Alinhar tudo à esquerda (padrão ocidental de leitura) cria uma linha imaginária
                  que guia o olhar.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded space-y-3">
                  <div>
                    <label class="text-xs text-gray-500 block mb-0.5">Nome:</label>
                    <input type="text" value="João" disabled
                      class="bg-gray-100 p-1 w-full border border-gray-300 rounded text-sm text-gray-700" />
                  </div>
                  <div>
                    <label class="text-xs text-gray-500 block mb-0.5">Turma:</label>
                    <input type="text" value="3B" disabled
                      class="bg-gray-100 p-1 w-full border border-gray-300 rounded text-sm text-gray-700" />
                  </div>
                  <div>
                    <label class="text-xs text-gray-500 block mb-0.5">Status:</label>
                    <input type="text" value="Ativo" disabled
                      class="bg-gray-100 p-1 w-full border border-gray-300 rounded text-sm text-gray-700" />
                  </div>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#4: Fechamento & Pregnância</h3>
              <p class="text-sm text-gray-500 m-0">
                O cérebro completa informações faltando (Fechamento) e prefere formas simples e
                rápidas de ler (Pregnância).
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Complexidade)">
                <p class="text-sm text-gray-700 mb-2">
                  Usar ícones super detalhados ou fotos complexas para representar ações simples.
                  Demora para o cérebro processar.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded text-center text-gray-400">
                  <div class="bg-white h-40 w-full rounded overflow-hidden flex justify-center">
                    <img src="../assets/coleman-glover-ZF2_DnhI4t4-unsplash.jpg" alt="Foto realista de lixeira"
                      class="w-1/2 h-full object-cover opacity-90 cursor-pointer hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <p class="text-xs text-red-500 mt-2 text-center">
                  Muita informação visual desnecessária.
                </p>
              </ExemploErro>

              <ExemploSolucao titulo="A Solução (Simplicidade)">
                <p class="text-sm text-gray-700 mb-2">
                  Usar ícones minimalistas (ex: FontAwesome, Material Icons). Um simples traço de
                  lixeira é entendido instantaneamente.
                </p>
                <div class="bg-white h-16 flex items-center justify-center border border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-gray-700 cursor-pointer hover:text-gray-900" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
              </ExemploSolucao>
            </div>
          </div>
        </section>
      </div>

      <div v-if="state.paginaAtiva === 5" class="prose max-w-none">
        <section class="prose max-w-none">
          <h1 class="text-3xl font-bold border-b-4 border-yellow-300 inline-block mb-4">
            Tipografia em IHC
          </h1>
          <p class="text-lg text-gray-700">
            A tipografia não é apenas estética; é uma ferramenta de interface que dita a velocidade
            de processamento da informação. Em sistemas educacionais, ela deve ser
            <strong>funcional</strong> antes de ser decorativa.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-600 p-4 my-6 rounded">
            <h3 class="text-blue-800 font-bold text-lg m-0">Por que é importante?</h3>
            <p class="m-0 text-blue-700 mt-2">
              Uma boa escolha tipográfica reduz a carga cognitiva, melhora a acessibilidade para
              pessoas com dificuldades visuais e guia o olhar do usuário através da hierarquia
              visual.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-6">Erros Comuns vs. Boas Práticas</h2>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#1: Legibilidade e Família Tipográfica</h3>
              <p class="text-sm text-gray-500 m-0">
                A clareza dos caracteres é vital para evitar erros de interpretação.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Baixa Nitidez)">
                <p class="text-sm text-gray-700 mb-4">
                  Usar fontes decorativas ou com serifa muito fina para textos de instrução.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded">
                  <span class="italic text-gray-400 font-serif">Instruções complexas de IHC...</span>
                </div>
                <p class="text-xs text-red-500 mt-2 text-center">Difícil de ler.</p>
              </ExemploErro>
              <ExemploSolucao titulo="A Solução (Sans-serif)">
                <p class="text-sm text-gray-700 mb-4">
                  Fontes sem serifa (Inter, Roboto) mantêm a nitidez em qualquer resolução.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded">
                  <span class="font-bold text-gray-800">Instruções Claras de IHC</span>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#2: Contraste e Acessibilidade (WCAG)</h3>
              <p class="text-sm text-gray-500 m-0">
                O texto deve ser legível para todos, independentemente do fundo.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Baixo Contraste)">
                <p class="text-sm text-gray-700 mb-4">
                  Texto branco ou cinza claro sobre o fundo amarelo vibrante.
                </p>
                <div class="bg-yellow-400 p-4 border border-red-200 rounded text-center">
                  <span class="text-white font-bold text-xs">Informação importante aqui</span>
                </div>
              </ExemploErro>
              <ExemploSolucao titulo="A Solução (Contraste 4.5:1)">
                <p class="text-sm text-gray-700 mb-4">
                  Usar cores escuras sobre o amarelo garante a acessibilidade.
                </p>
                <div class="bg-yellow-400 p-4 border border-green-200 rounded text-center">
                  <span class="text-black font-bold">Informação Clara e Legível</span>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#3: Hierarquia Visual e Escaneabilidade</h3>
              <p class="text-sm text-gray-500 m-0">
                O uso de pesos e tamanhos diferentes ajuda o usuário a processar a informação por
                ordem de importância.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Monotonia Visual)">
                <p class="text-sm text-gray-700 mb-4">
                  Título e corpo de texto com o mesmo peso e tamanho. O usuário não sabe por onde
                  começar.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded">
                  <p class="text-base text-gray-800 m-0">Título do Módulo de Ensino</p>
                  <p class="text-base text-gray-800 m-0">
                    Este é um parágrafo explicativo sobre as métricas de usabilidade em sistemas
                    complexos.
                  </p>
                </div>
              </ExemploErro>
              <ExemploSolucao titulo="A Solução (Pesos e Contraste)">
                <p class="text-sm text-gray-700 mb-4">
                  Destacar o título com negrito e tamanho maior cria um caminho visual claro.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded">
                  <p class="text-xl font-bold text-black m-0 uppercase mb-1">
                    Título do Módulo
                  </p>
                  <p class="text-sm text-gray-600 m-0">
                    Este é um parágrafo explicativo sobre as métricas de usabilidade em sistemas
                    complexos.
                  </p>
                </div>
              </ExemploSolucao>
            </div>
          </div>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#4: Ritmo Vertical e Espaçamento</h3>
              <p class="text-sm text-gray-500 m-0">
                O espaço entre as linhas (entrelinha) influencia diretamente a velocidade de leitura
                e o conforto visual.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2">
              <ExemploErro titulo="O Erro (Texto Sufocado)">
                <p class="text-sm text-gray-700 mb-4">
                  Linhas muito próximas (line-height: 1.0) fazem com que as palavras se "atropelem"
                  durante a leitura.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded">
                  <p class="text-sm text-gray-800 m-0 leading-none">
                    A tipografia em IHC foca na experiência do usuário final. Quando as linhas estão
                    muito juntas, o olho humano tem dificuldade em encontrar o início da próxima
                    linha, causando fadiga rápida.
                  </p>
                </div>
              </ExemploErro>
              <ExemploSolucao titulo="A Solução (Respiro Visual)">
                <p class="text-sm text-gray-700 mb-4">
                  Um espaçamento entre 1.5 e 1.6 torna a leitura fluida e profissional.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded">
                  <p class="text-sm text-gray-800 m-0 leading-relaxed">
                    A tipografia em IHC foca na experiência do usuário final. Quando as linhas
                    possuem um espaçamento adequado, a leitura se torna natural e o aprendizado é
                    facilitado.
                  </p>
                </div>
              </ExemploSolucao>
            </div>
          </div>
        </section>
        <section class="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center mt-8">
          <h3 class="font-bold text-xl mb-2 text-purple-900">Conclusão do Módulo de IHC</h3>
          <p class="text-purple-800 max-w-2xl mx-auto">
            Ao combinar as <strong>Heurísticas de Nielsen</strong>, a
            <strong>Teoria das Cores</strong>, as Leis de <strong>Hick e Fitts</strong>, a
            <strong>Gestalt</strong> e a <strong>Tipografia</strong>, você cria uma interface
            cientificamente eficiente.
          </p>
        </section>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { reactive, watch, ref, onMounted, nextTick } from 'vue'
import ExemploErro from '@/components/ExemploErro.vue'
import ExemploSolucao from '@/components/ExemploSolucao.vue'

const props = defineProps<{
  menuAberto: boolean
}>()

const emit = defineEmits(['toggle-menu'])
const eTelaMobile = ref(false)

const state = reactive({
  paginaAtiva: 0,
  cursoSelecionado: 'História - 1º Ano',
  // #1
  h1Salvando: false,
  h1Salvo: false,
  h1ToastVisivel: false,
  // #3
  h3EtapaModal: 0 as 0 | 1 | 2,
  h3ToastVisivel: false,
  // #5
  h5Data: '',
  // #7
  h7Notas: ['', '', ''],
  // #10
  h10TooltipVisivel: false,
})

// #1: Simular salvamento
function simularSalvar() {
  if (state.h1Salvando || state.h1Salvo) return
  state.h1Salvando = true
  setTimeout(() => {
    state.h1Salvando = false
    state.h1Salvo = true
    state.h1ToastVisivel = true
    setTimeout(() => {
      state.h1ToastVisivel = false
    }, 2000)
    setTimeout(() => {
      state.h1Salvo = false
    }, 2500)
  }, 1200)
}

// #3: Controle do mini modal
function h3GerarRelatorio() {
  state.h3EtapaModal = 1
}
function h3Confirmar() {
  state.h3EtapaModal = 2
  setTimeout(() => {
    state.h3EtapaModal = 0
    state.h3ToastVisivel = true
    setTimeout(() => {
      state.h3ToastVisivel = false
    }, 2000)
  }, 1500)
}
function h3Cancelar() {
  state.h3EtapaModal = 0
}

// #5: Máscara dd/mm/aaaa
function h5MascaraData(e: Event) {
  const input = e.target as HTMLInputElement
  let v = input.value.replace(/\D/g, '')
  if (v.length > 8) v = v.slice(0, 8)
  if (v.length > 4) {
    v = v.slice(0, 2) + '/' + v.slice(2, 4) + '/' + v.slice(4)
  } else if (v.length > 2) {
    v = v.slice(0, 2) + '/' + v.slice(2)
  }
  state.h5Data = v
  input.value = v
}

// #7: TAB cíclico entre 3 inputs
const h7Refs = ref<(HTMLInputElement | null)[]>([])
function h7TabHandler(e: KeyboardEvent, index: number) {
  if (e.key === 'Tab') {
    e.preventDefault()
    const next = (index + 1) % 3
    h7Refs.value[next]?.focus()
  }
}

const checarTelaMobile = () => {
  eTelaMobile.value = window.innerWidth < 800
}

onMounted(() => {
  checarTelaMobile()
  window.addEventListener('resize', checarTelaMobile)
})

watch(
  () => window.innerWidth,
  (novoValor) => {
    if (window.innerWidth >= 800) {
      eTelaMobile.value = false
    } else {
      eTelaMobile.value = true
    }
  },
)

function alterarPagina(index: number) {
  state.paginaAtiva = index
  if (eTelaMobile.value && props.menuAberto) {
    emit('toggle-menu')
  }
}
</script>

<style scoped>
@media screen and (max-width: 800px) {
  .md-absolute {
    position: absolute;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
