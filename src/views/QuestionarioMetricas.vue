<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
    <div class="container mx-auto px-4">
      <!-- Header -->
      <div class="mb-12">
        <h1 class="text-4xl font-bold text-slate-900 mb-2">📊 Suas Métricas</h1>
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
            <span class="text-3xl">📝</span>
          </div>
        </div>

        <!-- Total de Perguntas -->
        <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-slate-600 font-medium">Total de Perguntas</p>
              <p class="text-3xl font-bold text-slate-900 mt-2">{{ totalPerguntas }}</p>
            </div>
            <span class="text-3xl">❓</span>
          </div>
        </div>

        <!-- Total de Acertos -->
        <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-slate-600 font-medium">Respostas Corretas</p>
              <p class="text-3xl font-bold text-slate-900 mt-2">{{ totalAcertos }}</p>
            </div>
            <span class="text-3xl">✅</span>
          </div>
        </div>

        <!-- Porcentagem Geral -->
        <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-sm text-slate-600 font-medium">Taxa de Acerto</p>
              <p class="text-3xl font-bold text-slate-900 mt-2">{{ porcentagemGeral }}%</p>
            </div>
            <span class="text-3xl">🎯</span>
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
        <h2 class="text-2xl font-bold text-slate-900 mb-6">📋 Histórico de Quizzes</h2>

        <div v-if="carregando" class="text-center py-8">
          <p class="text-slate-600">Carregando dados...</p>
        </div>

        <div v-else-if="quizzes.length === 0" class="bg-slate-50 rounded-lg p-8 text-center">
          <p class="text-slate-600 mb-4">Você ainda não respondeu nenhum quiz.</p>
          <router-link
            to="/gamificacao"
            class="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Começar um Quiz
          </router-link>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="(quiz, index) in quizzes"
            :key="index"
            class="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-lg font-semibold text-slate-900">Quiz {{ index + 1 }}</h3>
                <p class="text-sm text-slate-500">{{ formatarData(quiz.data) }}</p>
              </div>
              <span class="text-sm font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {{ quiz.respostas_corretas }}/{{ quiz.total_perguntas }} acertos
              </span>
            </div>

            <div class="grid grid-cols-3 gap-4">
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
                  class="text-lg font-bold"
                  :class="
                    quiz.respostas_corretas / quiz.total_perguntas >= 0.8
                      ? 'text-green-600'
                      : 'text-orange-600'
                  "
                >
                  {{ quiz.respostas_corretas / quiz.total_perguntas >= 0.8 ? '🌟 Bom' : '⚡ Pode melhorar' }}
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
        </div>
      </div>

      <!-- Botão para novo Quiz -->
      <div class="text-center">
        <router-link
          to="/gamificacao"
          class="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          🎮 Fazer Outro Quiz
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { supabase } from '@/utils/supabaseClient'

// ========================================
// TIPOS E INTERFACES
// ========================================
interface QuizResposta {
  data: string
  total_perguntas: number
  respostas_corretas: number
  pontos: number
  erros_identificados?: number
}

// ========================================
// ESTADO REATIVO
// ========================================
const quizzes = ref<QuizResposta[]>([])
const carregando = ref(true)

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
      .select('data, total_perguntas, respostas_corretas, pontos, erros_identificados')
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

// Carregar dados ao montar o componente
onMounted(() => {
  carregarQuizzes()
})
</script>

<style scoped></style>
