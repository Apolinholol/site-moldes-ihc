<template>
  <section id="SectionDocumentacao" class="flex relative min-h-screen">
    <div
      v-if="props.menuAberto && eTelaMobile"
      class="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
      @click="$emit('toggle-menu')"
    ></div>

    <section
      id="SectionItensDocumentacao"
      class="w-64 bg-white border-2 border-y-0 border-black p-4 overflow-y-auto fixed left-0 top-12 z-[9999] transition-transform duration-500 ease-out min-[800px]:static min-[800px]:translate-x-0 min-[800px]:h-auto"
      :class="{
        '-translate-x-full h-[calc(100vh-3rem)] ': !props.menuAberto && eTelaMobile,
        'translate-x-0 h-[100vh] sticky': props.menuAberto && eTelaMobile,
      }"
    >
      <nav role="tablist" class="flex flex-col gap-3">
        <p class="text-xs font-bold uppercase tracking-wider text-gray-600 pl-2">Tópicos</p>

        <button
          @click="alterarPagina(0)"
          :class="{
            'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 0,
            'border-l-4 border-transparent': state.paginaAtiva !== 0,
          }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]"
        >
          Heurísticas de Nielsen
        </button>

        <button
          @click="alterarPagina(1)"
          :class="{
            'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 1,
            'border-l-4 border-transparent': state.paginaAtiva !== 1,
          }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]"
        >
          Teoria das cores
        </button>

        <button
          @click="alterarPagina(2)"
          :class="{
            'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 2,
            'border-l-4 border-transparent': state.paginaAtiva !== 2,
          }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]"
        >
          Lei de Hick-Hyman
        </button>

        <button
          @click="alterarPagina(3)"
          :class="{
            'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 3,
            'border-l-4 border-transparent': state.paginaAtiva !== 3,
          }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]"
        >
          Lei de Fitts
        </button>

        <button
          @click="alterarPagina(4)"
          :class="{
            'bg-yellow-300 border-l-4 border-black font-black': state.paginaAtiva === 4,
            'border-l-4 border-transparent': state.paginaAtiva !== 4,
          }"
          class="tab-item border-2 border-black px-4 py-3 font-bold text-left transition-all duration-200 hover:shadow-[2px_2px_0_0] active:shadow-[1px_1px_0_0]"
        >
          Gestalt
        </button>
      </nav>
    </section>

    <!-- CONTEÚDO PRINCIPAL -->
    <section id="SectionConteudoDocumentacao" class="flex-1 p-6 min-[576px]:ml-0">
      <div v-if="state.paginaAtiva === 0" class="prose max-w-none">
        <section class="prose max-w-none">
          <h1 class="text-3xl font-bold border-b-4 border-yellow-300 inline-block mb-4">
            10 Heurísticas de Nielsen
          </h1>
          <p class="text-lg text-gray-700">
            Criadas por Jakob Nielsen na década de 90, as heurísticas são
            <strong>"regras de polegar"</strong> (princípios gerais) para o design de interação.
            Elas não são diretrizes específicas de usabilidade, mas sim grandes balizadores para
            garantir que o sistema converse bem com o humano.
          </p>

          <div class="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Sem Feedback)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  O usuário clica em "Salvar Notas", o botão não muda de cor, nada aparece na tela.
                  Ele clica mais 5 vezes achando que travou.
                </p>
                <div
                  class="bg-white p-4 border border-red-200 rounded text-center text-gray-400 italic"
                >
                  (Nenhuma mensagem aparece...)
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Ao clicar, o botão mostra um "spinner" de carregamento e, ao finalizar, exibe uma
                  mensagem de sucesso.
                </p>
                <div
                  class="bg-white p-3 border border-green-200 rounded flex items-center justify-center gap-2 text-green-600 font-semibold shadow-sm"
                >
                  <span class="animate-spin">⟳</span> Salvando... -> Salvo!
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Jargão Técnico)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Uma mensagem de erro aparece para a secretária escolar:
                </p>
                <div
                  class="bg-white p-4 border border-red-200 rounded font-mono text-xs text-red-600"
                >
                  Error 404: Duplicate Entry 'Student_ID_55' on Index Primary. Exception
                  NullPointer.
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Traduzir o erro para a linguagem da escola e do dia a dia.
                </p>
                <div
                  class="bg-white p-4 border border-green-200 rounded font-semibold text-gray-800"
                >
                  Não foi possível cadastrar: Já existe um aluno com esta matrícula no sistema.
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Beco sem saída)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  O usuário clica em "Gerar Relatório Completo" sem querer. O processo demora 5
                  minutos e não há botão de cancelar.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded text-center">
                  <button class="bg-gray-300 text-gray-500 px-4 py-2 rounded cursor-not-allowed">
                    Carregando... (Aguarde)
                  </button>
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Oferecer formas de desfazer ações ou cancelar processos.
                </p>
                <div
                  class="bg-white p-4 border border-green-200 rounded text-center flex justify-center gap-4"
                >
                  <button class="bg-blue-600 text-white px-4 py-2 rounded">Carregando...</button>
                  <button class="text-red-600 font-bold underline hover:text-red-800">
                    Cancelar
                  </button>
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Na tela de Alunos, o botão de salvar é verde e diz "Salvar". Na tela de
                  Professores, o botão é azul e diz "Persistir Dados".
                </p>
                <div class="flex gap-2 justify-center mt-4">
                  <button class="bg-green-500 text-white text-xs px-2 py-1 rounded">Salvar</button>
                  <button class="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    Persistir
                  </button>
                </div>
              </div>
              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Manter o mesmo design, cor e terminologia em todo o sistema. Se é "Salvar", é
                  "Salvar" sempre.
                </p>
                <div class="flex gap-2 justify-center mt-4">
                  <button class="bg-green-600 text-white text-xs px-2 py-1 rounded">
                    Salvar Aluno
                  </button>
                  <button class="bg-green-600 text-white text-xs px-2 py-1 rounded">
                    Salvar Prof.
                  </button>
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Permitir que a secretária digite data em qualquer formato num campo de texto
                  livre.
                </p>
                <div class="bg-white p-3 border border-red-200 rounded text-center text-sm">
                  <label class="block text-xs text-left text-gray-500">Data:</label>
                  <input
                    type="text"
                    value="Fevereiro/2025"
                    class="border border-red-300 w-full p-1 text-red-600"
                    disabled
                  />
                </div>
              </div>
              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Usar máscaras de input ou seletores de data (calendário) para impedir formatos
                  inválidos.
                </p>
                <div class="bg-white p-3 border border-green-200 rounded text-center text-sm">
                  <label class="block text-xs text-left text-gray-500">Data:</label>
                  <input
                    type="date"
                    class="border border-gray-300 w-full p-1 text-gray-800 rounded"
                    disabled
                  />
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Pedir o "ID do Curso" para matricular um aluno, obrigando a pessoa a decorar
                  códigos.
                </p>
                <div class="bg-white p-3 border border-red-200 rounded text-center text-sm">
                  <input
                    type="text"
                    placeholder="Digite o ID (ex: 4092)"
                    class="border border-gray-300 w-full p-1"
                    disabled
                  />
                </div>
              </div>
              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Oferecer uma lista suspensa com os nomes dos cursos. O sistema lembra os códigos,
                  não o humano.
                </p>
                <div
                  class="bg-white p-3 border border-green-200 rounded text-center text-sm relative"
                >
                  <div
                    class="border border-gray-300 w-full p-1 text-left bg-gray-50 flex justify-between items-center"
                  >
                    <span>História - 1º Ano</span>
                    <span>▼</span>
                  </div>
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Para lançar notas, o professor precisa clicar em "Editar", clicar no campo,
                  digitar, clicar em "Salvar", repetir para 40 alunos.
                </p>
              </div>
              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Permitir navegação com a tecla "TAB" entre os campos de nota e salvamento
                  automático ao sair do campo.
                </p>
                <div
                  class="bg-white p-2 border border-green-200 rounded text-center text-xs font-mono text-gray-500"
                >
                  [TAB] Próximo Aluno
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Um dashboard inicial cheio de gráficos que a secretária nunca usa (ex: "Uso de CPU
                  do Servidor").
                </p>
              </div>
              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Mostrar apenas o essencial: "3 Matrículas Pendentes", "2 Turmas sem Professor".
                </p>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro
                </h4>
                <div
                  class="bg-white p-4 border border-red-200 rounded text-red-600 font-bold text-center"
                >
                  Erro: Input Inválido!
                </div>
                <p class="text-xs text-gray-500 mt-2 text-center">
                  (O usuário não sabe o que errou)
                </p>
              </div>
              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução
                </h4>
                <div class="bg-white p-4 border border-green-200 rounded text-red-600 text-sm">
                  <strong>Não foi possível salvar:</strong> O campo "CPF" está incompleto.
                </div>
                <p class="text-xs text-green-700 mt-2 text-center">
                  O erro é específico e construtivo.
                </p>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Entregar um manual em PDF de 200 páginas que ninguém lê.
                </p>
              </div>
              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Tooltips (dicas de ferramenta) contextuais. Ao passar o mouse sobre um campo
                  complexo, uma pequena explicação aparece.
                </p>
                <div class="flex justify-center mt-4">
                  <span
                    class="bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center font-bold text-gray-600 cursor-help"
                    >?</span
                  >
                </div>
              </div>
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

          <div class="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Carnaval Visual)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Usar uma cor diferente para cada botão ou seção sem hierarquia, cansando a vista
                  do professor.
                </p>
                <div class="bg-white p-4 border border-gray-300 rounded space-y-2">
                  <div class="h-8 bg-purple-500 w-full rounded"></div>
                  <div class="flex gap-2">
                    <div class="h-20 w-1/3 bg-orange-400 rounded"></div>
                    <div class="h-20 w-2/3 bg-green-400 rounded"></div>
                  </div>
                  <button class="w-full bg-red-500 text-white py-1 rounded">Botão 1</button>
                  <button class="w-full bg-yellow-400 text-black py-1 rounded">Botão 2</button>
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Hierarquia)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Fundo neutro (60%), Azul para estrutura (30%) e Verde para o botão principal
                  (10%).
                </p>
                <div class="bg-gray-50 p-4 border border-gray-300 rounded space-y-2">
                  <div class="h-8 bg-white w-full border border-gray-200 rounded"></div>
                  <div class="flex gap-2">
                    <div class="h-20 w-1/3 bg-blue-700 rounded opacity-90"></div>
                    <div class="h-20 w-2/3 bg-white border border-gray-200 rounded"></div>
                  </div>
                  <button class="w-full bg-green-600 text-white py-1 rounded font-bold shadow-sm">
                    Salvar Notas
                  </button>
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Sinais Trocados)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Usar vermelho para um botão de "Sucesso" ou verde para "Deletar". Isso causa erros
                  graves por hábito.
                </p>
                <div class="flex justify-around mt-6">
                  <button class="bg-red-600 text-white px-4 py-2 rounded">
                    Salvar com Sucesso
                  </button>
                  <button class="bg-green-600 text-white px-4 py-2 rounded">Apagar Tudo</button>
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Convenção)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  <strong>Verde:</strong> Ações positivas, sucesso, saúde.<br />
                  <strong>Vermelho:</strong> Ações destrutivas, erros, paradas.
                </p>
                <div class="flex justify-around mt-6">
                  <button class="bg-green-600 text-white px-4 py-2 rounded shadow">
                    Salvar Dados
                  </button>
                  <button
                    class="bg-red-100 text-red-700 border border-red-200 px-4 py-2 rounded hover:bg-red-200"
                  >
                    Excluir
                  </button>
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Contraste Duro)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Texto preto puro (#000000) em fundo branco puro (#FFFFFF). O contraste extremo
                  cansa a vista em leituras longas.
                </p>
                <div class="bg-white p-4 border border-gray-300">
                  <p class="text-[black] font-serif">
                    "O excesso de contraste pode causar vibração visual..."
                  </p>
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Suavidade)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Use cinza escuro (#333333 ou #1F2937) para textos. O azul é excelente para
                  corporativo pois é produtivo e não invasivo.
                </p>
                <div class="bg-white p-4 border border-gray-300">
                  <p class="text-gray-800 font-serif">
                    "Um contraste suavizado melhora a legibilidade por longos períodos."
                  </p>
                </div>
              </div>
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
              <div class="h-12 w-full bg-green-500 rounded mb-2"></div>
              <span class="font-bold text-sm block">Verde</span>
              <span class="text-xs text-gray-600">Aprovação / $</span>
            </div>
            <div class="text-center">
              <div class="h-12 w-full bg-yellow-400 rounded mb-2"></div>
              <span class="font-bold text-sm block">Amarelo</span>
              <span class="text-xs text-gray-600">Atenção / Otimismo</span>
            </div>
            <div class="text-center">
              <div class="h-12 w-full bg-red-500 rounded mb-2"></div>
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
            <p class="text-xs text-gray-500 mt-2">
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Lista Plana)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Um menu lateral com todas as funções misturadas. O usuário precisa ler uma a uma
                  (tempo linear).
                </p>
                <div
                  class="bg-white p-4 border border-red-200 rounded text-sm space-y-2 h-40 overflow-y-auto"
                >
                  <div class="text-gray-500 border-b">Cadastrar Aluno</div>
                  <div class="text-gray-500 border-b">Ver Boletim</div>
                  <div class="text-gray-500 border-b">Cadastrar Professor</div>
                  <div class="text-gray-500 border-b">Relatório Financeiro</div>
                  <div class="text-gray-500 border-b">Editar Turma</div>
                  <div class="text-gray-500 border-b">Imprimir Histórico</div>
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Categorias)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Agrupar opções logicamente. O usuário decide primeiro "É Secretaria?", eliminando
                  tudo que é "Financeiro".
                </p>
                <div class="bg-white p-4 border border-green-200 rounded text-sm space-y-2">
                  <details class="group">
                    <summary class="font-bold cursor-pointer list-none flex justify-between">
                      📂 Secretaria <span>▼</span>
                    </summary>
                    <div class="pl-4 mt-2 text-gray-600 text-xs space-y-1">
                      <div>- Cadastrar Aluno</div>
                      <div>- Editar Turma</div>
                    </div>
                  </details>
                  <details class="group">
                    <summary class="font-bold cursor-pointer list-none flex justify-between">
                      💰 Financeiro <span>▼</span>
                    </summary>
                  </details>
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Sobrecarga)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Um formulário de matrícula que pede 15 informações seguidas sem pausas ou
                  agrupamentos.
                </p>
                <div class="bg-white p-2 border border-red-200 rounded text-xs text-gray-400">
                  [Nome] [CPF] [RG] [Mãe] [Pai] [Endereço] [CEP] [Bairro] [Cidade] [Estado] [Tel]
                  [Cel] [Email]...
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Chunking)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Dividir o formulário em etapas ou blocos visuais menores (ex: "Dados Pessoais",
                  "Endereço").
                </p>
                <div class="space-y-2">
                  <div class="bg-white p-2 border border-green-200 rounded text-xs">
                    <strong>1. Dados Pessoais</strong> (3 campos)
                  </div>
                  <div class="bg-white p-2 border border-green-200 rounded text-xs">
                    <strong>2. Endereço</strong> (4 campos)
                  </div>
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Topo da Tela)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Colocar o botão principal de ação (ex: "Salvar Chamada") no canto superior
                  esquerdo.
                </p>
                <div
                  class="w-32 h-48 bg-gray-100 border-4 border-gray-800 rounded mx-auto relative"
                >
                  <div
                    class="absolute top-2 left-2 w-8 h-8 bg-red-500 rounded flex items-center justify-center text-white text-xs"
                  >
                    💾
                  </div>
                  <div class="mt-12 p-2 text-[8px] text-gray-400 text-center">
                    Área difícil para o polegar
                  </div>
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Botão Flutuante)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Usar botões na parte inferior (Floating Action Button) ou barras de navegação
                  inferiores, onde é "Confortável".
                </p>
                <div
                  class="w-32 h-48 bg-gray-100 border-4 border-gray-800 rounded mx-auto relative"
                >
                  <div
                    class="absolute bottom-4 right-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  >
                    +
                  </div>
                  <div class="mt-12 p-2 text-[8px] text-gray-400 text-center">
                    Área confortável (Easy)
                  </div>
                </div>
              </div>
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
            <p class="text-xs text-gray-500 mt-2">
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Alvo Minúsculo)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Usar apenas um ícone pequeno ou texto sem padding.
                </p>
                <div class="flex justify-center items-center h-20 border border-red-200 bg-white">
                  <span class="text-xs cursor-pointer text-blue-600 hover:underline">salvar</span>
                </div>
                <p class="text-xs text-red-500 mt-2 text-center">
                  Área de clique: 20x10px (Muito difícil)
                </p>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Área Expandida)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Aumentar o padding (enchimento) do botão. O rótulo também ajuda a tornar o alvo
                  maior.
                </p>
                <div class="flex justify-center items-center h-20 border border-green-200 bg-white">
                  <button
                    class="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 font-bold"
                  >
                    SALVAR NOTAS
                  </button>
                </div>
                <p class="text-xs text-green-700 mt-2 text-center">
                  Área de clique: 140x50px (Fácil)
                </p>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Proximidade Perigosa)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Colocar "Salvar" e "Apagar Tudo" lado a lado com o mesmo tamanho. O risco de
                  clique acidental é enorme.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded flex gap-2 justify-center">
                  <button class="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>
                  <button class="bg-red-500 text-white px-4 py-2 rounded">Resetar</button>
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Distanciamento)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Colocar o botão de ação principal grande e destacado, e o "Resetar" pequeno,
                  distante ou como link textual.
                </p>
                <div
                  class="bg-white p-4 border border-green-200 rounded flex justify-between items-center"
                >
                  <a href="#" class="text-red-400 text-xs hover:text-red-600 ml-2"
                    >Resetar formulário</a
                  >
                  <button
                    class="bg-green-600 text-white px-6 py-2 rounded shadow-lg font-bold transform hover:scale-105 transition"
                  >
                    ENVIAR DADOS
                  </button>
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Menu Flutuante)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Deixar um menu importante "boiando" no meio da tela. O usuário precisa desacelerar
                  o mouse para acertar o alvo.
                </p>
                <div class="bg-gray-200 h-32 w-full relative border border-gray-400">
                  <div class="absolute top-10 left-10 bg-white p-2 shadow border">Menu</div>
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Cantos e Bordas)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Fixar menus no topo ou na lateral esquerda. O usuário pode "jogar" o mouse sem
                  medo de passar do ponto.
                </p>
                <div class="bg-gray-200 h-32 w-full relative border border-gray-400">
                  <div class="absolute top-0 left-0 w-full bg-blue-800 h-8 shadow"></div>
                  <div class="absolute top-0 left-0 h-full w-8 bg-white border-r"></div>
                </div>
              </div>
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
        <h1 class="text-2xl font-bold mb-4">Gestalt</h1>
        <section class="prose max-w-none">
          <p class="text-lg text-gray-700">
            Gestalt é uma palavra alemã que significa "forma". O princípio básico é que
            <strong>"o todo é interpretado de maneira diferente que a soma das partes"</strong>. Na
            interface, isso nos ajuda a entender como os usuários agrupam mentalmente as informações
            na tela.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold mb-6">Princípios Aplicados</h2>

          <div class="mb-10 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div class="bg-gray-100 p-3 border-b border-gray-300">
              <h3 class="font-bold text-xl m-0">#1: Proximidade</h3>
              <p class="text-sm text-gray-500 m-0">
                Tendemos a agrupar elementos que estão próximos uns dos outros como uma unidade.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Espaçamento Igual)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Quando o título, o campo e o botão têm o mesmo espaçamento, o usuário não sabe o
                  que pertence a quê.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded flex flex-col gap-4">
                  <span class="font-bold">Nome do Aluno</span>
                  <input type="text" class="border p-1" placeholder="..." />
                  <span class="font-bold">Nota Final</span>
                  <input type="text" class="border p-1" placeholder="..." />
                </div>
                <p class="text-xs text-red-500 mt-2 text-center">Tudo parece solto.</p>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Agrupamento)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Aproximar o rótulo (Label) do seu campo (Input) e afastar dos outros grupos cria
                  blocos lógicos instantâneos.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded flex flex-col gap-6">
                  <div class="flex flex-col gap-1">
                    <span class="font-bold text-sm">Nome do Aluno</span>
                    <input type="text" class="border p-1 rounded" placeholder="Ex: João Silva" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <span class="font-bold text-sm">Nota Final</span>
                    <input type="text" class="border p-1 rounded" placeholder="Ex: 8.5" />
                  </div>
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Inconsistência)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Links de navegação com cores e estilos diferentes. O usuário acha que são funções
                  diferentes.
                </p>
                <div
                  class="bg-white p-4 border border-red-200 rounded flex gap-2 justify-center items-center"
                >
                  <span class="text-blue-600 underline">Alunos</span>
                  <button class="bg-gray-200 px-2 rounded">Turmas</button>
                  <span class="text-red-600 font-bold">Notas</span>
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Padrão)
                </h4>
                <p class="text-sm text-gray-700 mb-4">
                  Se todos os itens do menu têm a mesma cor e fonte, o cérebro entende: "Isso tudo é
                  navegação".
                </p>
                <div class="bg-white p-4 border border-green-200 rounded flex gap-4 justify-center">
                  <span class="text-gray-700 font-bold hover:text-blue-600 cursor-pointer"
                    >Alunos</span
                  >
                  <span class="text-gray-700 font-bold hover:text-blue-600 cursor-pointer"
                    >Turmas</span
                  >
                  <span class="text-gray-700 font-bold hover:text-blue-600 cursor-pointer"
                    >Notas</span
                  >
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Quebra de Fluxo)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Alinhamento em zigue-zague. O olho do professor tem que pular pela tela para ler
                  os dados.
                </p>
                <div class="bg-white p-4 border border-red-200 rounded space-y-2">
                  <div class="text-left bg-gray-100 p-1 w-1/2">Nome</div>
                  <div class="text-right bg-gray-100 p-1 w-1/2 ml-auto">Turma</div>
                  <div class="text-center bg-gray-100 p-1 w-1/2 mx-auto">Status</div>
                </div>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Alinhamento)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Alinhar tudo à esquerda (padrão ocidental de leitura) cria uma linha imaginária
                  que guia o olhar.
                </p>
                <div class="bg-white p-4 border border-green-200 rounded space-y-2">
                  <div class="text-left bg-gray-100 p-1 w-full border-l-4 border-blue-500 pl-2">
                    Nome: João
                  </div>
                  <div class="text-left bg-gray-100 p-1 w-full border-l-4 border-blue-500 pl-2">
                    Turma: 3B
                  </div>
                  <div class="text-left bg-gray-100 p-1 w-full border-l-4 border-blue-500 pl-2">
                    Status: Ativo
                  </div>
                </div>
              </div>
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
              <div class="p-6 bg-red-50 border-r border-gray-200">
                <h4 class="text-red-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✕</span> O Erro (Complexidade)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Usar ícones super detalhados ou fotos complexas para representar ações simples.
                  Demora para o cérebro processar.
                </p>
                <div class="bg-white h-40 w-full border border-gray-200 rounded overflow-hidden">
                  <img
                    src="../assets/coleman-glover-ZF2_DnhI4t4-unsplash.jpg"
                    alt="Foto realista de lixeira"
                    class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
                <p class="text-xs text-red-500 mt-2 text-center">Muita informação visual desnecessária.</p>
              </div>

              <div class="p-6 bg-green-50">
                <h4 class="text-green-700 font-bold flex items-center gap-2 mb-2">
                  <span class="text-xl">✓</span> A Solução (Simplicidade)
                </h4>
                <p class="text-sm text-gray-700 mb-2">
                  Usar ícones minimalistas (ex: FontAwesome, Material Icons). Um simples traço de
                  lixeira é entendido instantaneamente.
                </p>
                <div class="bg-white h-16 flex items-center justify-center border border-gray-200">
                  <span class="text-2xl text-gray-700">🗑️</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
          <h3 class="font-bold text-xl mb-2 text-purple-900">Conclusão do Módulo de IHC</h3>
          <p class="text-purple-800 max-w-2xl mx-auto">
            Ao combinar as <strong>Heurísticas de Nielsen</strong> (regras gerais), a
            <strong>Teoria das Cores</strong> (emoção e hierarquia), as Leis de
            <strong>Hick e Fitts</strong> (tempo e movimento) e a
            <strong>Gestalt</strong> (percepção visual), você cria uma interface que não é apenas
            "bonita", mas cientificamente eficiente.
          </p>
        </section>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>
import { reactive, watch, ref, onMounted } from 'vue'

const props = defineProps<{
  menuAberto: boolean
}>()

const emit = defineEmits(['toggle-menu'])
const eTelaMobile = ref(false)

const state = reactive({
  paginaAtiva: 0,
})

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
</style>
