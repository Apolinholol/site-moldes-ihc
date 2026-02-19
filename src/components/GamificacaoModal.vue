<template>
  <!-- Modal com overlay escuro -->
  <transition name="fade">
    <div
      v-if="props.aberto"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      @click.self="fecharModal"
    >
      <!-- Card do Modal -->
      <div class="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-96 overflow-y-auto">
        <!-- Header -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-center sticky top-0 z-10">
          <div>
            <h2 class="text-2xl font-bold">Quiz: Identifique os Erros</h2>
            <p class="text-sm mt-1 opacity-90">Pergunta {{ currentStep }} de {{ totalSteps }}</p>
          </div>
          <button
            @click="fecharModal"
            class="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
          >
            ✕
          </button>
        </div>

        <!-- Indicador de Progresso -->
        <div class="px-6 pt-4">
          <div class="bg-gray-200 rounded-full h-2">
            <div
              class="bg-green-500 h-2 rounded-full transition-all duration-300"
              :style="{ width: `${(currentStep / totalSteps) * 100}%` }"
            />
          </div>
        </div>

        <!-- Conteúdo -->
        <div class="p-6">
          <!-- Pergunta Atual -->
          <div v-if="currentQuestion" class="mb-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              {{ currentQuestion.pergunta }}
            </h3>

            <!-- Múltipla Escolha -->
            <div v-if="currentQuestion.tipo === 'multipla'" class="space-y-3">
              <label
                v-for="(opcao, index) in currentQuestion.opcoes"
                :key="index"
                class="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors"
              >
                <input
                  type="radio"
                  :name="`pergunta-${currentStep}`"
                  :value="opcao"
                  v-model="respostas[currentStep - 1]"
                  class="w-4 h-4 text-blue-600"
                />
                <span class="ml-3 text-gray-700 text-sm">{{ opcao }}</span>
              </label>
            </div>

            <!-- Verdadeiro/Falso -->
            <div v-else-if="currentQuestion.tipo === 'verdadeiro-falso'" class="space-y-3">
              <label class="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  :name="`pergunta-${currentStep}`"
                  value="Verdadeiro"
                  v-model="respostas[currentStep - 1]"
                  class="w-4 h-4 text-blue-600"
                />
                <span class="ml-3 text-gray-700 text-sm">Verdadeiro</span>
              </label>
              <label class="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                <input
                  type="radio"
                  :name="`pergunta-${currentStep}`"
                  value="Falso"
                  v-model="respostas[currentStep - 1]"
                  class="w-4 h-4 text-blue-600"
                />
                <span class="ml-3 text-gray-700 text-sm">Falso</span>
              </label>
            </div>
          </div>

          <!-- Mensagem de Erro -->
          <div
            v-if="mostrarErroGenerico"
            class="bg-red-50 border border-red-300 text-red-700 px-4 py-2 rounded text-sm mb-4"
          >
            Campo obrigatório
          </div>
        </div>

        <!-- Footer com Botões -->
        <div class="flex gap-3 p-6 bg-gray-50 border-t border-gray-200">
          <button
            @click="irAnterior"
            :disabled="currentStep === 1"
            class="flex-1 px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500 transition-colors text-sm font-medium"
          >
            ← Anterior
          </button>

          <button
            v-if="currentStep < totalSteps"
            @click="irProximo"
            class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Próximo →
          </button>
          <button
            v-else
            @click="enviarFormulario"
            :disabled="enviando"
            class="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 text-sm font-medium"
          >
            {{ enviando ? "Enviando..." : "Enviar" }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { supabase } from '@/utils/supabaseClient'

const props = defineProps<{
  aberto: boolean
}>()

const emit = defineEmits<{
  fechar: []
}>()

interface Pergunta {
  pergunta: string
  tipo: 'multipla' | 'verdadeiro-falso'
  opcoes?: string[]
  resposta_correta: string
}

const perguntas = ref<Pergunta[]>([
  {
    pergunta: 'Qual é o problema com o botão "Entrar" no header?',
    tipo: 'multipla',
    opcoes: [
      'Tem cor muito chamativa',
      'O hover é imperceptível (mudança de cor muito fraca)',
      'Tem tamanho inconsistente',
      'Está em posição errada',
    ],
    resposta_correta: 'O hover é imperceptível (mudança de cor muito fraca)',
  },
  {
    pergunta: 'Observe os parágrafos da hero section. O espaçamento entre eles é consistente?',
    tipo: 'verdadeiro-falso',
    resposta_correta: 'Falso',
  },
  {
    pergunta: 'As descrições das funcionalidades (Sincronização, Segurança, etc) são suficientemente claras?',
    tipo: 'verdadeiro-falso',
    resposta_correta: 'Falso',
  },
  {
    pergunta: 'Qual problema você identifica na seção de Funcionalidades?',
    tipo: 'multipla',
    opcoes: [
      'Os cards têm cores muito vibrantes',
      'Há inconsistência nos tamanhos de fonte dos títulos',
      'Os ícones estão faltando',
      'O layout é confuso',
    ],
    resposta_correta: 'Há inconsistência nos tamanhos de fonte dos títulos',
  },
  {
    pergunta: 'Os dois botões na hero section ("Começar Grátis" e "Ver Demo") têm estilos visuais facilmente distinguíveis?',
    tipo: 'verdadeiro-falso',
    resposta_correta: 'Falso',
  },
])

const currentStep = ref(1)
const totalSteps = ref(perguntas.value.length)
const respostas = ref<string[]>(Array(totalSteps.value).fill(''))
const enviando = ref(false)
const mostrarErroGenerico = ref(false)

const currentQuestion = computed(() => {
  return perguntas.value[currentStep.value - 1]
})

const irProximo = () => {
  if (respostas.value[currentStep.value - 1] === '') {
    mostrarErroGenerico.value = true
    setTimeout(() => {
      mostrarErroGenerico.value = false
    }, 2500)
    return
  }

  if (currentStep.value < totalSteps.value) {
    currentStep.value++
    mostrarErroGenerico.value = false
  }
}

const irAnterior = () => {
  if (currentStep.value > 1) {
    currentStep.value--
    mostrarErroGenerico.value = false
  }
}

const enviarFormulario = async () => {
  if (respostas.value[currentStep.value - 1] === '') {
    mostrarErroGenerico.value = true
    return
  }

  enviando.value = true

  try {
    let pontos = 0
    let respostasCorretas = 0

    respostas.value.forEach((resposta, index) => {
      const pergunta = perguntas.value[index]
      if (!pergunta) return

      const ehCorreta = resposta.toLowerCase().trim() ===
                        pergunta.resposta_correta.toLowerCase().trim()

      if (ehCorreta) {
        pontos += 20
        respostasCorretas++
      }
    })

    const dadosParaEnvio = {
      data: new Date().toISOString(),
      total_perguntas: totalSteps.value,
      respostas_corretas: respostasCorretas,
      pontos: pontos,
      detalhes_respostas: respostas.value.map((r, i) => {
        const pergunta = perguntas.value[i]
        return {
          pergunta: pergunta?.pergunta || '',
          resposta_usuario: r,
          resposta_correta: pergunta?.resposta_correta || '',
        }
      }),
    }

    const { error } = await supabase.from('gamificacao_respostas').insert([dadosParaEnvio])

    if (error) {
      console.error('Erro:', error)
      alert('Erro ao enviar!')
    } else {
      const mensagem = `✅ Quiz enviado!\n\nAcertos: ${respostasCorretas}/5\nPontos: ${pontos}`
      alert(mensagem)
      resetarFormulario()
      emit('fechar')
    }
  } catch (err) {
    console.error('Erro:', err)
    alert('Erro ao enviar!')
  } finally {
    enviando.value = false
  }
}

const resetarFormulario = () => {
  currentStep.value = 1
  respostas.value = Array(totalSteps.value).fill('')
  mostrarErroGenerico.value = false
}

const fecharModal = () => {
  resetarFormulario()
  emit('fechar')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
