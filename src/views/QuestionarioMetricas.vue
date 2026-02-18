<template>
  <div class="questionnaire-metrics">
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6">Métricas do Formulário</h1>

      <!-- Seção de Perguntas -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-semibold mb-4">Perguntas</h2>
        <div class="space-y-4">
          <div
            v-for="(pergunta, index) in perguntas"
            :key="index"
            class="border border-gray-300 rounded-lg p-4"
          >
            <div class="flex items-center gap-4">
              <input
                type="checkbox"
                :id="`pergunta-${index}`"
                v-model="pergunta.marcada"
                class="w-5 h-5 cursor-pointer"
                @change="calcularMetricas"
              />
              <div class="flex-1">
                <label :for="`pergunta-${index}`" class="font-medium cursor-pointer">
                  {{ pergunta.pergunta }}
                </label>
                <div class="mt-2 text-sm text-gray-600">
                  <p>
                    <span class="font-semibold">Status:</span>
                    <span v-if="pergunta.marcada" class="text-blue-600">Marcada</span>
                    <span v-else class="text-gray-500">Não marcada</span>
                  </p>
                  <p>
                    <span class="font-semibold">Resposta Correta:</span>
                    <span v-if="pergunta.ehCerta" class="text-green-600">Sim ✓</span>
                    <span v-else class="text-red-600">Não ✗</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Seção de Métricas -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-semibold mb-4">Resultados</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="text-gray-600">Perguntas Marcadas</p>
            <p class="text-3xl font-bold text-blue-600">{{ metricas.totalMarcadas }}</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <p class="text-gray-600">Respostas Corretas</p>
            <p class="text-3xl font-bold text-green-600">{{ metricas.respostasCorretas }}</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg col-span-2">
            <p class="text-gray-600">Porcentagem de Acerto</p>
            <p class="text-3xl font-bold text-purple-600">{{ metricas.porcentagemAcerto }}%</p>
          </div>
        </div>
      </div>

      <!-- Botões de Ação -->
      <div class="flex gap-4">
        <input
          v-model="state.usuario"
          style="background-color: red; color: white"
          placeholder="Nome do Usuário"
          class="border border-gray-300 w-full rounded-lg px-4 py-2"
        />
        <button
          @click="enviarParaSupabase"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar para Supabase
        </button>
        <button
          @click="resetarFormulario"
          class="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Resetar Formulário
        </button>
      </div>

      <!-- Mensagens de Status -->
      <div v-if="mensagem" :class="`mt-4 p-4 rounded-lg ${mensagem.tipo}`">
        {{ mensagem.texto }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { createClient } from '@supabase/supabase-js'

// ========================================
// CONFIGURAÇÃO DO SUPABASE
// ========================================
// IMPORTANTE: Substitua as strings abaixo pelas suas credenciais do Supabase
const SUPABASE_URL = 'https://lnzimmgifmhpoqeuhjss.supabase.co'
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuemltbWdpZm1ocG9xZXVoanNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzNjk3NzMsImV4cCI6MjA4Njk0NTc3M30.yMa2blMTa4pWKhuO0SNL1z8rSDihentFLNtxTWCRjCU'

// Criar cliente Supabase
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const state = reactive({
  usuario: '',
})
// ========================================
// TIPOS E INTERFACES
// ========================================
interface Pergunta {
  marcada: boolean
  pergunta: string
  ehCerta: boolean
}

interface Metricas {
  totalMarcadas: number
  respostasCorretas: number
  porcentagemAcerto: number
}

// ========================================
// DADOS MOCKADOS
// ========================================
const perguntas = ref<Pergunta[]>([
  {
    marcada: false,
    pergunta: 'O Vue 3 utiliza Composition API como padrão?',
    ehCerta: true,
  },
  {
    marcada: false,
    pergunta: 'Tailwind CSS é um framework de componentes pré-construídos?',
    ehCerta: false,
  },
  {
    marcada: false,
    pergunta: 'Supabase é um backend-as-a-service baseado em PostgreSQL?',
    ehCerta: true,
  },
  {
    marcada: false,
    pergunta: 'TypeScript é obrigatório para usar Vue 3?',
    ehCerta: false,
  },
  {
    marcada: false,
    pergunta: 'Vite é um bundler mais rápido que Webpack?',
    ehCerta: true,
  },
])

// ========================================
// MÉTRICAS
// ========================================
const metricas = reactive<Metricas>({
  totalMarcadas: 0,
  respostasCorretas: 0,
  porcentagemAcerto: 0,
})

const mensagem = ref<{ tipo: string; texto: string } | null>(null)

// ========================================
// FUNÇÕES
// ========================================

/**
 * Calcula as métricas com base nas respostas marcadas
 */
const calcularMetricas = () => {
  const marcadas = perguntas.value.filter((p) => p.marcada)
  const corretas = marcadas.filter((p) => p.ehCerta)

  metricas.totalMarcadas = marcadas.length
  metricas.respostasCorretas = corretas.length

  // Calcular porcentagem
  if (marcadas.length === 0) {
    metricas.porcentagemAcerto = 0
  } else {
    metricas.porcentagemAcerto = Math.round((corretas.length / marcadas.length) * 100)
  }
}

/**
 * Envia as métricas para Supabase
 */
const enviarParaSupabase = async () => {
  try {
    // Preparar dados para envio
    const dadosParaEnvio = {
      usuario: state.usuario,
      data: new Date().toISOString(),
      total_perguntas: perguntas.value.length,
      total_marcadas: metricas.totalMarcadas,
      respostas_corretas: metricas.respostasCorretas,
      porcentagem_acerto: metricas.porcentagemAcerto,
      detalhes_perguntas: perguntas.value,
    }

    // Inserir dados na tabela 'metricas_formulario' do Supabase
    const { data, error } = await supabase.from('metricas_formulario').insert([dadosParaEnvio])

    if (error) {
      mostrarMensagem(
        `Erro ao enviar para Supabase: ${error.message}`,
        'bg-red-100 text-red-800 border border-red-400',
      )
      console.error('Erro Supabase:', error)
    } else {
      mostrarMensagem(
        'Métricas enviadas com sucesso para Supabase!',
        'bg-green-100 text-green-800 border border-green-400',
      )
      console.log('Dados enviados:', data)
    }
  } catch (erro) {
    mostrarMensagem(
      `Erro ao conectar com Supabase: ${erro instanceof Error ? erro.message : 'Erro desconhecido'}`,
      'bg-red-100 text-red-800 border border-red-400',
    )
    console.error('Erro:', erro)
  }
}

/**
 * Reseta o formulário
 */
const resetarFormulario = () => {
  perguntas.value.forEach((p) => {
    p.marcada = false
  })
  calcularMetricas()
  state.usuario = ''
  mostrarMensagem(
    'Formulário resetado com sucesso!',
    'bg-blue-100 text-blue-800 border border-blue-400',
  )
}

/**
 * Exibe mensagem de status
 */
const mostrarMensagem = (texto: string, tipo: string) => {
  mensagem.value = { texto, tipo }
  setTimeout(() => {
    mensagem.value = null
  }, 4000)
}

// Calcular métricas ao montar o componente
calcularMetricas()
</script>

<style scoped>
.questionnaire-metrics {
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 2rem 0;
}
</style>
