<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <BarChart3 :size="40" class="text-blue-600" />
          Suas Métricas
        </h1>
        <p class="text-lg text-slate-600">Acompanhe seu desempenho nos quizzes de IHC</p>
      </div>

      <!-- Cards de Resumo -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <!-- Total de Quizzes -->
        <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-slate-600 font-medium">Total de Quizzes</p>
              <p class="text-3xl font-bold text-slate-900 mt-2">{{ totalQuizzes }}</p>
            </div>
            <FileText :size="32" class="text-blue-600" />
          </div>
        </div>

        <!-- Total de Perguntas -->
        <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-slate-600 font-medium">Total de Perguntas Respondidas</p>
              <p class="text-3xl font-bold text-slate-900 mt-2">{{ totalPerguntas }}</p>
            </div>
            <HelpCircle :size="32" class="text-purple-600" />
          </div>
        </div>

        <!-- Total de Acertos -->
        <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-slate-600 font-medium">Respostas Corretas Respondidas</p>
              <p class="text-3xl font-bold text-slate-900 mt-2">{{ totalAcertos }}</p>
            </div>
            <CheckCircle2 :size="32" class="text-green-600" />
          </div>
        </div>

        <!-- Porcentagem Geral -->
        <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-slate-600 font-medium">Taxa de Acerto</p>
              <p class="text-3xl font-bold text-slate-900 mt-2">{{ porcentagemGeral }}%</p>
            </div>
            <Target :size="32" class="text-orange-600" />
          </div>
          <!-- Barra de progresso -->
          <div class="mt-4 bg-gray-200 rounded-full h-2">
            <div
              class="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all"
              :style="{ width: `${porcentagemGeral}%` }"
            />
          </div>
        </div>
      </div>

      <!-- Seção de Quizzes Respondidos -->
      <div class="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <ListChecks :size="28" class="text-slate-700" />
          Histórico de Quizzes
        </h2>

        <div v-if="carregando" class="text-center py-8">
          <p class="text-slate-600">Carregando dados...</p>
        </div>

        <div v-else-if="quizzes.length === 0" class="bg-slate-50 rounded-lg p-8 text-center">
          <p class="text-slate-600 mb-4">Você ainda não respondeu nenhum quiz.</p>
          <router-link
            to="/pratica/1"
            class="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Começar um Quiz
          </router-link>
        </div>

        <div v-else class="space-y-6">
          <div
            v-for="(quiz, index) in quizzes"
            :key="index"
            class="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
          >
            <!-- Header do Quiz -->
            <div
              @click="toggleDetalhes(index)"
              class="p-6 bg-gradient-to-r from-slate-50 to-slate-100 cursor-pointer hover:from-slate-100 hover:to-slate-150 transition-colors"
            >
              <div class="flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-2">
                    <h3 class="text-lg font-semibold text-slate-900">Quiz {{ quizzes.length - index }}</h3>
                    <span
                      class="text-xs font-bold px-3 py-1 rounded-full"
                      :class="quiz.pratica === 1
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                      "
                    >
                      Prática {{ quiz.pratica || 1 }}
                    </span>
                  </div>
                  <p class="text-sm text-slate-500">{{ formatarData(quiz.data) }}</p>
                </div>
                <div class="text-right">
                  <span class="text-sm font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {{ quiz.respostas_corretas }}/{{ quiz.total_perguntas }} acertos
                  </span>
                  <div class="mt-2">
                    <ChevronDown v-if="expandidos.includes(index)" :size="24" class="text-slate-600" />
                    <ChevronRight v-else :size="24" class="text-slate-600" />
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                <div>
                  <p class="text-xs text-slate-600 font-medium">Desempenho</p>
                  <p class="text-2xl font-bold text-slate-900">
                    {{ Math.round((quiz.respostas_corretas / quiz.total_perguntas) * 100) }}%
                  </p>
                </div>
                <div>
                  <p class="text-xs text-slate-600 font-medium">Pontuação</p>
                  <p class="text-2xl font-bold text-slate-900">{{ quiz.pontos }}</p>
                </div>
                <div>
                  <p class="text-xs text-slate-600 font-medium">Status</p>
                  <p
                    class="text-lg font-bold flex items-center gap-2"
                    :class="
                      quiz.respostas_corretas / quiz.total_perguntas >= 0.8
                        ? 'text-green-600'
                        : 'text-orange-600'
                    "
                  >
                    <Star :size="20" v-if="quiz.respostas_corretas / quiz.total_perguntas >= 0.8" />
                    <AlertCircle :size="20" v-else />
                    {{ quiz.respostas_corretas / quiz.total_perguntas >= 0.8 ? 'Bom' : 'Pode melhorar' }}
                  </p>
                </div>
              </div>

              <!-- Barra de progresso individual -->
              <div class="mt-4 bg-gray-200 rounded-full h-2">
                <div
                  class="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all"
                  :style="{ width: `${(quiz.respostas_corretas / quiz.total_perguntas) * 100}%` }"
                />
              </div>
            </div>

            <!-- Detalhes Expandíveis -->
            <transition name="expand">
              <div v-if="expandidos.includes(index)" class="bg-white border-t border-slate-200 p-6">
                <h4 class="font-semibold text-slate-900 mb-4">Detalhes das Respostas</h4>

                <div v-if="quiz.detalhes_respostas && quiz.detalhes_respostas.length > 0" class="space-y-4">
                  <div
                    v-for="(detalhe, detalheIndex) in quiz.detalhes_respostas"
                    :key="detalheIndex"
                    class="border border-slate-200 rounded-lg p-4"
                    :class="detalhe.resposta_usuario === detalhe.resposta_correta
                      ? 'bg-green-50 border-green-200'
                      : 'bg-red-50 border-red-200'
                    "
                  >
                    <div class="flex items-start gap-3 mb-3">
                      <div
                      class="flex-shrink-0"
                      :class="detalhe.resposta_usuario === detalhe.resposta_correta
                        ? 'text-green-600'
                        : 'text-red-600'
                      "
                    >
                      <Check :size="28" v-if="detalhe.resposta_usuario === detalhe.resposta_correta" />
                      <X :size="28" v-else />
                    </div>
                      <div class="flex-1">
                        <p class="text-xs font-semibold text-slate-600 mb-1">Pergunta {{ detalheIndex + 1 }}</p>
                        <p class="font-semibold text-slate-900 mb-3">{{ detalhe.pergunta }}</p>

                        <div class="space-y-2 text-sm">
                          <div>
                            <p class="font-medium text-slate-700 mb-1">
                              Sua resposta:
                              <span
                                class="font-bold"
                                :class="detalhe.resposta_usuario === detalhe.resposta_correta
                                  ? 'text-green-700'
                                  : 'text-red-700'
                                "
                              >
                                {{ detalhe.resposta_usuario || '(não respondida)' }}
                              </span>
                            </p>
                          </div>
                          <div v-if="detalhe.resposta_usuario !== detalhe.resposta_correta">
                            <p class="font-medium text-slate-700 mb-1">
                              Resposta correta:
                              <span class="font-bold text-green-700">{{ detalhe.resposta_correta }}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="text-slate-600 text-sm">
                  Detalhes das respostas não disponíveis
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Botão para novo Quiz -->
      <div class="text-center">
        <router-link
          to="/pratica/1"
          class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          <Gamepad2 :size="24" />
          Fazer Outro Quiz
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { BarChart3, FileText, HelpCircle, CheckCircle2, Target, ListChecks, Star, AlertCircle, Check, X, Gamepad2, ChevronDown, ChevronRight } from 'lucide-vue-next'
import { supabase } from '@/utils/supabaseClient'

// ========================================
// TIPOS E INTERFACES
// ========================================
interface DetalheResposta {
  pergunta: string
  resposta_usuario: string
  resposta_correta: string
}

interface QuizResposta {
  data: string
  pratica: number
  total_perguntas: number
  respostas_corretas: number
  pontos: number
  detalhes_respostas?: DetalheResposta[]
}

// ========================================
// ESTADO REATIVO
// ========================================
const quizzes = ref<QuizResposta[]>([])
const carregando = ref(true)
const expandidos = ref<number[]>([])

// ========================================
// COMPUTED
// ========================================
const totalQuizzes = computed(() => quizzes.value.length)

const totalPerguntas = computed(() => {
  return quizzes.value.reduce((sum, quiz) => sum + quiz.total_perguntas, 0)
})

const totalAcertos = computed(() => {
  return quizzes.value.reduce((sum, quiz) => sum + quiz.respostas_corretas, 0)
})

const porcentagemGeral = computed(() => {
  if (totalPerguntas.value === 0) return 0
  return Math.round((totalAcertos.value / totalPerguntas.value) * 100)
})

// ========================================
// FUNÇÕES
// ========================================
const carregarQuizzes = async () => {
  try {
    carregando.value = true
    const { data, error } = await supabase
      .from('gamificacao_respostas')
      .select('data, pratica, total_perguntas, respostas_corretas, pontos, detalhes_respostas')
      .order('data', { ascending: false })

    if (error) {
      console.error('Erro ao carregar quizzes:', error)
    } else if (data) {
      quizzes.value = data
    }
  } catch (err) {
    console.error('Erro:', err)
  } finally {
    carregando.value = false
  }
}

const formatarData = (dataISO: string) => {
  try {
    const data = new Date(dataISO)
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return dataISO
  }
}

const toggleDetalhes = (index: number) => {
  const posicao = expandidos.value.indexOf(index)
  if (posicao > -1) {
    expandidos.value.splice(posicao, 1)
  } else {
    expandidos.value.push(index)
  }
}

// Carregar dados ao montar o componente
onMounted(() => {
  carregarQuizzes()
})
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from {
  opacity: 0;
  max-height: 0;
}

.expand-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
