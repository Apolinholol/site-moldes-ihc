<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
    <!-- HEADER COM ERROS SUTIS -->
    <header class="bg-white border-b border-slate-200 py-5 sticky top-0 z-40 shadow-sm">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <h1 class="text-2xl font-semibold text-slate-800">TaskFlow</h1>
        <!-- ERRO IHC #1: Ícones com tamanhos inconsistentes -->
        <nav class="flex gap-6">
          <button class="text-slate-600 text-sm font-medium hover:text-slate-700 transition-colors duration-300 flex items-center gap-2">
            <Clock :size="18" class="text-slate-600" /> Tarefas
          </button>
          <button class="text-slate-600 text-sm font-medium hover:text-slate-700 transition-colors duration-300 flex items-center gap-2">
            <Users :size="20" class="text-slate-500" /> Equipes
          </button>
          <button class="text-slate-600 text-sm font-medium hover:text-slate-700 transition-colors duration-300 flex items-center gap-2">
            <Settings :size="16" /> Configurações
          </button>
          <button class="px-5 py-2 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors duration-300">Sair</button>
        </nav>
      </div>
    </header>

    <!-- HERO SECTION COM ERROS SUTIS -->
    <section class="bg-white py-16 border-b border-slate-200">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl">
          <h2 class="text-5xl font-bold text-slate-900 mb-5">Gerencie Projetos com Eficiência</h2>
          <!-- ERRO IHC #2: Hierarquia visual incerta entre descrição -->
          <p class="text-lg text-slate-600 mb-4 leading-relaxed">
            TaskFlow é a solução para gerenciamento de tarefas da sua equipe.
          </p>
          <p class="text-base text-slate-600 mb-12">
            Com organização inteligente, colaboração em tempo real e acompanhamento visual de progresso.
          </p>
          <div class="flex gap-4">
            <button class="px-7 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Começar Agora</button>
            <button class="px-7 py-3 border-2 border-slate-400 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-colors">Ver Demo</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTEÚDO PRINCIPAL -->
    <div class="container mx-auto px-4 py-12">
      <!-- SEÇÃO DE TAREFAS COM ERROS SUTIS -->
      <section class="bg-white p-8 rounded-lg border border-slate-200 mb-12">
        <h3 class="text-2xl font-bold text-slate-900 mb-6">Projeto: Website Redesign</h3>
        <div class="space-y-4">
          <!-- ERRO SUTIL: Cards parecem ativos mas não têm feedbacks claros -->
          <div class="border border-slate-300 p-4 rounded-lg cursor-pointer hover:bg-slate-50">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-medium text-slate-800 text-base">Revisar protótipos de alta fidelidade</h4>
                <p class="text-slate-600 text-base mt-1">Checkpoints: Prototipagem, Validação de Design</p>
              </div>
              <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Em Progresso</span>
            </div>
          </div>

          <!-- ERRO SUTIL: Diferentes cores de background em cards similares -->
          <div class="border border-slate-300 p-4 rounded-lg cursor-pointer hover:bg-blue-50">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-semibold text-slate-900 text-base">Criar wireframes das telas principais</h4>
                <p class="text-slate-500 text-sm mt-1">Subtarefa: Fluxo de autenticação</p>
              </div>
              <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Concluído</span>
            </div>
          </div>

          <!-- ERRO SUTIL: Falta clareza nos estados visuais -->
          <div class="border-2 border-blue-300 p-4 rounded-lg cursor-pointer bg-blue-50">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="font-bold text-blue-900 text-base">Definir paleta de cores e tipografia</h4>
                <p class="text-blue-700 text-base mt-1">Padrões: Design System, Branding</p>
              </div>
              <span class="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Bloqueado</span>
            </div>
          </div>

          <!-- ERRO SUTIL: Tamanho de fonte inconsistente em títulos -->
          <div class="border border-slate-300 p-4 rounded-lg cursor-pointer hover:bg-slate-50">
            <div class="flex justify-between items-start">
              <div>
                <h4 class="text-sm font-medium text-slate-800">Realizar testes de usabilidade</h4>
                <p class="text-slate-600 text-sm mt-1">Sessão A/B, Análise de Métricas</p>
              </div>
              <span class="px-2 py-1 bg-slate-200 text-slate-800 text-xs rounded">Não Iniciado</span>
            </div>
          </div>
        </div>
      </section>

      <!-- SEÇÃO DE FILTROS COM ERROS SUTIS -->
      <section class="bg-white p-8 rounded-lg border border-slate-200 mb-12">
        <h3 class="text-2xl font-bold text-slate-900 mb-6">Filtrar por Status</h3>
        <div class="flex gap-3 flex-wrap">
          <!-- ERRO IHC #3: Estados visuais pouco claros para botões toggle -->
          <button class="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 text-sm hover:bg-slate-100">
            Em Progresso
          </button>
          <button class="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 text-sm hover:bg-slate-100 bg-slate-100">
            Concluído
          </button>
          <button class="px-4 py-2 border border-blue-400 rounded-lg text-blue-700 text-sm hover:bg-blue-50 bg-blue-50 font-medium">
            Bloqueado
          </button>
          <button class="px-4 py-2 border border-slate-200 rounded-lg text-slate-500 text-sm hover:bg-slate-50">
            Não Iniciado
          </button>
        </div>
      </section>

      <!-- SEÇÃO DE MEMBROS COM ERROS SUTIS -->
      <section class="bg-white p-8 rounded-lg border border-slate-200 mb-12">
        <h3 class="text-2xl font-bold text-slate-900 mb-6">Membros da Equipe</h3>
        <!-- ERRO IHC #4: Paleta de cores inconsistente (azuis diferentes sem propósito) -->
        <div class="grid grid-cols-4 gap-4">
          <div class="p-4 border border-slate-200 rounded-lg text-center hover:shadow-md cursor-pointer">
            <div class="w-12 h-12 bg-blue-400 rounded-full mx-auto mb-3"></div>
            <h4 class="font-medium text-slate-900">Ana Silva</h4>
            <p class="text-xs text-slate-600 mt-1">Designer</p>
          </div>
          <div class="p-4 border border-slate-200 rounded-lg text-center hover:shadow-md cursor-pointer">
            <div class="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3"></div>
            <h4 class="font-medium text-slate-900">Carlos Mendes</h4>
            <p class="text-xs text-slate-600 mt-1">Desenvolvedor</p>
          </div>
          <div class="p-4 border border-slate-200 rounded-lg text-center hover:shadow-md cursor-pointer">
            <div class="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-3"></div>
            <h4 class="font-medium text-slate-900">Marina Costa</h4>
            <p class="text-xs text-slate-600 mt-1">Product Owner</p>
          </div>
          <div class="p-4 border border-slate-200 rounded-lg text-center hover:shadow-md cursor-pointer">
            <div class="w-12 h-12 bg-indigo-500 rounded-full mx-auto mb-3"></div>
            <h4 class="font-medium text-slate-900">Lucas Oliveira</h4>
            <p class="text-xs text-slate-600 mt-1">QA Engineer</p>
          </div>
        </div>
      </section>

      <!-- SEÇÃO DE ESTATÍSTICAS COM ERROS SUTIS -->
      <section class="bg-white p-8 rounded-lg border border-slate-200 mb-12">
        <h3 class="text-2xl font-bold text-slate-900 mb-6">Progresso do Projeto</h3>
        <!-- ERRO IHC #5: Falta de feedback visual claro em elementos interativos -->
        <div class="grid grid-cols-3 gap-6">
          <div class="p-6 border border-slate-300 rounded-lg">
            <div class="text-sm text-slate-600 mb-2">Tarefas Concluídas</div>
            <div class="text-4xl font-bold text-slate-900">12</div>
            <div class="text-xs text-slate-500 mt-2">de 28 tarefas</div>
            <div class="w-full bg-slate-200 rounded-full h-2 mt-4"></div>
            <div class="w-5/12 bg-green-500 rounded-full h-2" style="margin-top: -8px;"></div>
          </div>

          <div class="p-6 border border-slate-300 rounded-lg cursor-pointer hover:border-slate-400">
            <div class="text-sm text-slate-700 mb-2">Tarefas em Progresso</div>
            <div class="text-4xl font-bold text-slate-800">8</div>
            <div class="text-xs text-slate-600 mt-2">desenvolvidas ativamente</div>
            <div class="w-full bg-slate-200 rounded-full h-2 mt-4"></div>
            <div class="w-4/12 bg-yellow-400 rounded-full h-2" style="margin-top: -8px;"></div>
          </div>

          <div class="p-6 border border-slate-300 rounded-lg">
            <div class="text-sm text-slate-600 mb-2">Tarefas Bloqueadas</div>
            <div class="text-4xl font-bold text-slate-900">8</div>
            <div class="text-xs text-slate-500 mt-2">aguardando decisão</div>
            <div class="w-full bg-slate-200 rounded-full h-2 mt-4"></div>
            <div class="w-4/12 bg-red-400 rounded-full h-2" style="margin-top: -8px;"></div>
          </div>
        </div>
      </section>

      <!-- INSTRUÇÕES PARA ANÁLISE -->
      <section class="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
        <h3 class="text-xl font-bold text-blue-900 mb-3 flex items-center gap-2">
          <Info :size="24" class="text-blue-600" />
          Desafio de Análise
        </h3>
        <p class="text-blue-800 mb-3">
          Você está visualizando uma interface de gerenciamento de tarefas (TaskFlow) que contém <strong>5 erros sutis de IHC</strong>.
        </p>
        <p class="text-blue-800 mb-6">
          <strong>Sua tarefa:</strong> Explorar a página, identificar os problemas visuais e responder as 5 questões. Seja objetivo e específico em suas análises!
        </p>
        <button
          @click="abrirModal"
          class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <AlertCircle :size="20" />
          Iniciar Análise
        </button>
      </section>
    </div>
  </div>

  <!-- MODAL DE QUESTÕES -->
  <transition name="fade">
    <div
      v-if="modalAberto"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      @click.self="fecharModal"
    >
      <!-- Card do Modal -->
      <div class="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <!-- Header -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-center sticky top-0 z-10">
          <div>
            <h2 class="text-2xl font-bold">Análise: TaskFlow</h2>
            <p class="text-sm mt-1 opacity-90">Pergunta {{ currentQuestion + 1 }} de {{ questions.length }}</p>
          </div>
          <button
            @click="fecharModal"
            class="w-10 h-10 flex items-center justify-center rounded-full text-white hover:bg-white hover:text-blue-700 transition-colors duration-200"
          >
            ✕
          </button>
        </div>

        <!-- Indicador de Progresso -->
        <div class="px-6 pt-4">
          <div class="bg-gray-200 rounded-full h-2">
            <div
              class="bg-blue-500 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }"
            />
          </div>
        </div>

        <!-- Conteúdo -->
        <div class="p-6">
          <!-- Pergunta Atual -->
          <div v-if="questions[currentQuestion]" class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              {{ questions[currentQuestion]?.pergunta }}
            </h3>

            <!-- Textarea para Resposta Aberta -->
            <textarea
              v-model="respostasModal[currentQuestion]"
              :disabled="enviandoResposta[currentQuestion] || !!resultadosModal[currentQuestion]"
              placeholder="Digite sua resposta detalhada..."
              class="w-full h-40 p-4 border-2 border-blue-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none resize-none transition-colors disabled:bg-slate-100 disabled:cursor-not-allowed text-sm"
            />

            <!-- Feedback -->
            <div
              v-if="resultadosModal[currentQuestion]"
              class="mt-6 p-4 rounded-lg border-l-4"
              :class="
                (resultadosModal[currentQuestion]?.pontuacao ?? 0) >= 70
                  ? 'bg-green-50 border-green-500'
                  : 'bg-yellow-50 border-yellow-500'
              "
            >
              <div class="flex items-start gap-3">
                <CheckCircle
                  v-if="(resultadosModal[currentQuestion]?.pontuacao ?? 0) >= 70"
                  :size="24"
                  class="text-green-600 shrink-0 mt-1"
                />
                <AlertCircle v-else :size="24" class="text-yellow-600 shrink-0 mt-1" />
                <div class="flex-1">
                  <div class="text-2xl font-bold" :class="(resultadosModal[currentQuestion]?.pontuacao ?? 0) >= 70 ? 'text-green-600' : 'text-yellow-600'">
                    {{ resultadosModal[currentQuestion]?.pontuacao }} pontos
                  </div>
                  <p :class="(resultadosModal[currentQuestion]?.pontuacao ?? 0) >= 70 ? 'text-green-800' : 'text-yellow-800'" class="font-semibold mt-2 mb-2">
                    {{ resultadosModal[currentQuestion]?.feedback }}
                  </p>
                  <details class="text-xs" :class="(resultadosModal[currentQuestion]?.pontuacao ?? 0) >= 70 ? 'text-green-700' : 'text-yellow-700'">
                    <summary class="cursor-pointer font-medium hover:underline">Ver explicação</summary>
                    <p class="mt-2 whitespace-pre-wrap">{{ resultadosModal[currentQuestion]?.explicacao }}</p>
                  </details>
                </div>
              </div>
            </div>

            <!-- Mensagem de Erro -->
            <div
              v-if="mostrarErroModal"
              class="bg-red-50 border border-red-300 text-red-700 px-4 py-2 rounded text-sm mt-4"
            >
              Campo obrigatório - Por favor, digite sua resposta
            </div>
          </div>
        </div>

        <!-- Footer com Botões -->
        <div class="flex gap-3 p-6 bg-gray-50 border-t border-gray-200">
          <button
            @click="perguntaAnterior"
            :disabled="currentQuestion === 0"
            class="flex-1 px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 transition-colors text-sm font-medium"
          >
            ← Anterior
          </button>

          <button
            v-if="currentQuestion < questions.length - 1 && resultadosModal[currentQuestion]"
            @click="proximaPergunta"
            class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Próximo →
          </button>

          <button
            v-if="currentQuestion < questions.length - 1 && !resultadosModal[currentQuestion]"
            @click="enviarResposta(questions[currentQuestion]?.id || '')"
            :disabled="!respostasModal[currentQuestion]?.trim() || enviandoResposta[currentQuestion]"
            class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            <Send v-if="!enviandoResposta[currentQuestion]" :size="18" />
            <Loader v-else :size="18" class="animate-spin" />
            {{ enviandoResposta[currentQuestion] ? 'Analisando...' : 'Enviar' }}
          </button>

          <button
            v-if="currentQuestion === questions.length - 1"
            @click="enviarResposta(questions[currentQuestion]?.id || '')"
            :disabled="!respostasModal[currentQuestion]?.trim() || enviandoResposta[currentQuestion] || salvandoDados"
            class="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            <Send v-if="!enviandoResposta[currentQuestion] && !salvandoDados" :size="18" />
            <Loader v-else :size="18" class="animate-spin" />
            {{ salvandoDados ? 'Salvando Resultados...' : enviandoResposta[currentQuestion] ? 'Analisando...' : resultadosModal[currentQuestion] ? 'Finalizar' : 'Enviar' }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Info,
  Send,
  Loader,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Settings,
} from 'lucide-vue-next'
import { getAllPratica2Questions, analyzePratica2Answer } from '@/utils/ihcQuestions'
import { supabase } from '@/utils/supabaseClient'
import type { GeminiAnalysisResult } from '@/types/gemini'

// Perguntas
const questions = getAllPratica2Questions()

// Estado - Modal
const modalAberto = ref(false)
const currentQuestion = ref(0)
const respostasModal = ref<string[]>(Array(questions.length).fill(''))
const resultadosModal = ref<Record<number, GeminiAnalysisResult>>({})
const enviandoResposta = ref<Record<number, boolean>>({})
const mostrarErroModal = ref(false)
const salvandoDados = ref(false)

// Métodos - Modal
const abrirModal = () => {
  modalAberto.value = true
  currentQuestion.value = 0
}

const fecharModal = () => {
  modalAberto.value = false
}

const perguntaAnterior = () => {
  if (currentQuestion.value > 0) {
    currentQuestion.value--
    mostrarErroModal.value = false
  }
}

const proximaPergunta = () => {
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++
    mostrarErroModal.value = false
  }
}

const enviarResposta = async (questionId: string) => {
  const resposta = respostasModal.value[currentQuestion.value]?.trim()

  if (!resposta) {
    mostrarErroModal.value = true
    setTimeout(() => {
      mostrarErroModal.value = false
    }, 2500)
    return
  }

  enviandoResposta.value[currentQuestion.value] = true
  mostrarErroModal.value = false

  try {
    const analysis = await analyzePratica2Answer(questionId, resposta)
    resultadosModal.value[currentQuestion.value] = analysis

    // Se for a última pergunta, salvar tudo no Supabase
    if (currentQuestion.value === questions.length - 1) {
      // Aguardar um momento para garantir que a análise foi armazenada
      await new Promise((resolve) => setTimeout(resolve, 500))
      await salvarResultadosNoSupabase()
    }
  } catch (error) {
    console.error('Erro ao analisar resposta:', error)
    alert('Erro ao analisar resposta. Tente novamente.')
  } finally {
    enviandoResposta.value[currentQuestion.value] = false
  }
}

const salvarResultadosNoSupabase = async () => {
  try {
    salvandoDados.value = true

    // Calcular métricas
    const totalPerguntas = questions.length
    const respostasCorretas = Object.values(resultadosModal.value).filter((resultado) => resultado.pontuacao >= 70).length
    const pontuacaoMedia = Math.round(
      Object.values(resultadosModal.value).reduce((sum, resultado) => sum + resultado.pontuacao, 0) / totalPerguntas
    )

    // Preparar detalhes das respostas
    const detalhesRespostas = questions.map((question, index) => ({
      id: question.id,
      pergunta: question.pergunta,
      resposta: respostasModal.value[index],
      pontuacao: resultadosModal.value[index]?.pontuacao || 0,
      feedback: resultadosModal.value[index]?.feedback || '',
    }))

    // Inserir no Supabase
    const { error } = await supabase.from('gamificacao_respostas').insert({
      total_perguntas: totalPerguntas,
      respostas_corretas: respostasCorretas,
      pontos: pontuacaoMedia,
      detalhes_respostas: detalhesRespostas,
      data: new Date().toISOString(),
    })

    if (error) {
      console.error('Erro ao salvar resultados:', error)
      alert('Erro ao salvar resultados. Os dados não foram registrados.')
    } else {
      console.log('Resultados salvos com sucesso!')
    }
  } catch (err) {
    console.error('Erro ao processar salvamento:', err)
  } finally {
    salvandoDados.value = false
  }
}
</script>

<style scoped></style>
