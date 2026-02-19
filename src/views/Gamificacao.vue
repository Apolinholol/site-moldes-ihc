<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
    <!-- HEADER COM ERROS SUTIS -->
    <header class="bg-white border-b border-slate-200 py-5 sticky top-0 z-40 shadow-sm">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <h1 class="text-2xl font-semibold text-slate-800">CloudSync</h1>
        <!-- ERRO IHC #1: Botão de ação com hover muito fraco -->
        <nav class="flex gap-6">
          <button class="text-slate-600 text-sm font-medium hover:text-slate-700 transition-colors duration-300">Recursos</button>
          <button class="text-slate-600 text-sm font-medium hover:text-slate-700 transition-colors duration-300">Preços</button>
          <button class="px-5 py-2 bg-slate-100 text-slate-800 text-sm rounded hover:bg-slate-110 transition-colors duration-500">Entrar</button>
        </nav>
      </div>
    </header>

    <!-- HERO SECTION COM ERROS SUTIS -->
    <section class="bg-white py-16 border-b border-slate-200">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl">
          <h2 class="text-5xl font-bold text-slate-900 mb-5">Sincronize com confiança</h2>
          <!-- ERRO IHC #2: Spacing/padding inconsistente -->
          <p class="text-lg text-slate-600 mb-8 leading-relaxed">
            Plataforma de sincronização de dados em tempo real para equipes modernas.
          </p>
          <p class="text-base text-slate-500 mb-12">
            Com tecnologia proprietária e suporte 24/7.
          </p>
          <div class="flex gap-4">
            <button class="px-7 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Começar Grátis</button>
            <button class="px-7 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">Ver Demo</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTEÚDO PRINCIPAL -->
    <div class="container mx-auto px-4 py-12">
      <!-- SEÇÃO DE FEATURES COM ERROS SUTIS -->
      <section class="bg-white p-8 rounded-lg border border-slate-200 mb-12">
        <h3 class="text-2xl font-bold text-slate-900 mb-6">Funcionalidades</h3>
        <div class="grid grid-cols-2 gap-6">
          <!-- ERRO SUTIL: Labels genéricos, descrições que não explicam bem o valor -->
          <div class="border border-slate-200 p-5 rounded">
            <h4 class="font-semibold text-slate-800 mb-2 text-base">Sincronização</h4>
            <p class="text-sm text-slate-600">Mantenha seus dados atualizados</p>
          </div>
          <div class="border border-slate-200 p-5 rounded">
            <h4 class="font-semibold text-slate-800 mb-2 text-base">Segurança</h4>
            <p class="text-sm text-slate-600">Proteja suas informações</p>
          </div>
          <!-- ERRO SUTIL: Fonte ligeiramente menor em alguns items -->
          <div class="border border-slate-200 p-5 rounded">
            <h4 class="font-semibold text-slate-800 mb-2 text-sm">API Integrations</h4>
            <p class="text-sm text-slate-600">Conecte suas ferramentas</p>
          </div>
          <div class="border border-slate-200 p-5 rounded">
            <h4 class="font-semibold text-slate-800 mb-2">Analytics</h4>
            <p class="text-sm text-slate-600">Veja métricas em tempo real</p>
          </div>
        </div>
      </section>

      <!-- BOTÃO PARA ABRIR O QUIZ -->
      <div class="flex justify-center mb-12">
        <button
          @click="modalAberto = true"
          class="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
        >
          🎯 Encontre os Erros de IHC - Clique para Começar o Quiz
        </button>
      </div>

      <!-- INFO BOX -->
      <div class="bg-blue-50 border border-blue-200 p-6 rounded-lg max-w-2xl mx-auto">
        <h4 class="font-semibold text-blue-900 mb-3 text-lg">📋 Como Funciona</h4>
        <p class="text-sm text-blue-800 leading-relaxed mb-3">
          Observe a página atentamente. Ela parece uma página de produto normal, mas contém <strong>5 erros sutis de IHC</strong> que você deve identificar.
        </p>
        <p class="text-sm text-blue-800">
          Clique no botão acima para abrir o quiz e responda as perguntas sobre os problemas de UX que você conseguir encontrar!
        </p>
      </div>
    </div>

    <!-- Modal do Quiz -->
    <GamificacaoModal :aberto="modalAberto" @fechar="modalAberto = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GamificacaoModal from '@/components/GamificacaoModal.vue'

const modalAberto = ref(false)
</script>

<style scoped></style>
