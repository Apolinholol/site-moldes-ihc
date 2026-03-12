<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
    <!-- HEADER -->
    <header class="bg-white border-b border-slate-200 py-4 sticky top-0 z-40 shadow-sm">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <h1 class="text-xl sm:text-2xl font-semibold text-slate-800">CloudSync</h1>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-6">
          <button class="text-slate-600 text-sm font-medium hover:text-slate-700 transition-colors duration-300 cursor-pointer">Recursos</button>
          <button class="text-slate-600 text-sm font-medium hover:text-slate-700 transition-colors duration-300 cursor-pointer">Preços</button>
          <button class="px-5 py-2 bg-slate-100 text-slate-800 text-sm rounded hover:bg-slate-110 transition-colors duration-500 cursor-pointer">Entrar</button>
        </nav>

        <!-- Mobile Nav Button -->
        <div class="md:hidden">
          <button class="text-slate-800 cursor-pointer">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>

    <!-- HERO SECTION -->
    <section class="bg-white py-12 sm:py-16 border-b border-slate-200">
      <div class="container mx-auto px-4 text-center md:text-left">
        <div class="max-w-2xl mx-auto md:mx-0">
          <h2 class="text-4xl sm:text-5xl font-bold text-slate-900 mb-5">Sincronize com confiança</h2>
          <p class="text-md sm:text-lg text-slate-600 mb-8 leading-relaxed">
            Plataforma de sincronização de dados em tempo real para equipes modernas.
          </p>
          <p class="text-base text-slate-500 mb-10 sm:mb-12">
            Com tecnologia proprietária e suporte 24/7.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button class="px-7 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">Começar Grátis</button>
            <button class="px-7 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">Ver Demo</button>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTEÚDO PRINCIPAL -->
    <div class="container mx-auto px-4 py-8 sm:py-12">
      <!-- SEÇÃO DE FEATURES -->
      <section class="bg-white p-4 sm:p-8 rounded-lg border border-slate-200 mb-12">
        <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">Funcionalidades</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="border border-slate-200 p-5 rounded">
            <h4 class="font-semibold text-slate-800 mb-2 text-base">Sincronização</h4>
            <p class="text-sm text-slate-600">Mantenha seus dados atualizados</p>
          </div>
          <div class="border border-slate-200 p-5 rounded">
            <h4 class="font-semibold text-slate-800 mb-2 text-base">Segurança</h4>
            <p class="text-sm text-slate-600">Proteja suas informações</p>
          </div>
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

      <!-- PLANOS -->
      <section class="bg-white p-4 sm:p-8 rounded-lg border border-slate-200 mb-12">
        <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-2 text-center">Planos de Preço</h3>
        <p class="text-slate-600 mb-8 text-center">Escolha o plano certo para sua equipe. Todos incluem suporte técnico dedicado.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- PLANO BÁSICO -->
          <div class="border-2 border-slate-300 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all duration-300">
            <h4 class="text-lg font-bold text-slate-900 mb-2">Plano Básico</h4>
            <p class="text-sm text-slate-600 mb-4">Para pequenas equipes começando.</p>
            <div class="mb-6">
              <span class="text-3xl font-bold text-slate-900">$29</span>
              <span class="text-slate-600">/mês</span>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> Até 5 usuários
              </li>
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> 10 GB de armazenamento
              </li>
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> Sincronização diária
              </li>
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> Suporte por e-mail
              </li>
            </ul>
            <button class="w-full px-4 py-2 bg-slate-200 text-slate-900 font-medium rounded-lg hover:bg-slate-300 transition-colors duration-300 cursor-pointer">Começar Agora</button>
          </div>

          <!-- PLANO PROFISSIONAL -->
          <div class="border-2 border-blue-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">Mais Popular</div>
            <h4 class="text-lg font-bold text-slate-900 mb-2">Plano Profissional</h4>
            <p class="text-sm text-slate-600 mb-4">Recomendado para equipes em crescimento.</p>
            <div class="mb-6">
              <span class="text-3xl font-bold text-blue-600">$79</span>
              <span class="text-slate-600">/mês</span>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> Até 50 usuários
              </li>
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> 250 GB de armazenamento
              </li>
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> Sincronização em tempo real
              </li>
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> Suporte por chat ao vivo
              </li>
            </ul>
            <button class="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">Começar Agora</button>
          </div>

          <!-- PLANO EMPRESA -->
          <div class="border-2 border-slate-300 p-6 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1">
            <h4 class="text-lg font-bold text-slate-900 mb-2">Plano Empresa</h4>
            <p class="text-sm text-slate-600 mb-4">Para organizações de grande escala.</p>
            <div class="mb-6">
              <span class="text-3xl font-bold text-slate-900">Customizado</span>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> Usuários ilimitados
              </li>
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> Armazenamento ilimitado
              </li>
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> Integração com APIs personalizadas
              </li>
              <li class="text-sm text-slate-700 flex items-center gap-2">
                <Check :size="18" class="text-green-600" /> Gerente de conta dedicado
              </li>
            </ul>
            <button class="w-full px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-black transition-colors duration-300 cursor-pointer">Contatar Vendas</button>
          </div>
        </div>
      </section>

      <!-- DEPOIMENTOS -->
      <section class="bg-slate-800 text-white p-4 sm:p-8 rounded-lg mb-12">
        <h3 class="text-xl sm:text-2xl font-bold mb-2 text-center">O Que Nossos Clientes Dizem</h3>
        <p class="text-slate-300 mb-8 text-center">Confira as experiências reais de empresas que usam o CloudSync.</p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="bg-slate-700 p-6 rounded-lg">
            <div class="flex items-center gap-1 mb-4">
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
            </div>
            <p class="text-sm text-slate-200 mb-4 leading-relaxed">
              "O CloudSync transformou como gerenciamos nossos dados. A sincronização em tempo real economizou horas de trabalho manual. Altamente recomendado!"
            </p>
            <div class="font-semibold text-slate-100">Maria Silva</div>
            <div class="text-xs text-slate-400">Gestora de Projetos, Empresa da Silva</div>
          </div>

          <div class="bg-slate-700 p-6 rounded-lg">
            <div class="flex items-center gap-1 mb-4">
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
            </div>
            <p class="text-sm text-slate-200 mb-4 leading-relaxed">
              "A interface é intuitiva e o suporte técnico respondeu todas as minhas dúvidas em menos de uma hora. Excelente custo-benefício!"
            </p>
            <div class="font-semibold text-slate-100">João Santos</div>
            <div class="text-xs text-slate-400">CTO, Startup do João</div>
          </div>

          <div class="bg-slate-700 p-6 rounded-lg">
            <div class="flex items-center gap-1 mb-4">
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
              <Star :size="16" class="text-yellow-400 fill-yellow-400" />
            </div>
            <p class="text-sm text-slate-200 mb-4 leading-relaxed">
              "Implementamos em uma semana. A documentação é clara e o onboarding foi suave. Estamos muito satisfeitos com a solução."
            </p>
            <div class="font-semibold text-slate-100">Alana Costa</div>
            <div class="text-xs text-slate-400">Diretora de TI, Rede Globe</div>
          </div>
        </div>
      </section>

      <!-- SEGURANÇA E CONFIANÇA -->
      <section class="bg-white p-4 sm:p-8 rounded-lg border border-slate-200 mb-12">
        <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-2 text-center">Segurança em Primeiro Lugar</h3>
        <p class="text-slate-600 mb-8 text-center">Seus dados estão protegidos com os padrões mais altos de segurança da indústria.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-4">
            <div class="flex justify-center mb-3">
              <Lock :size="32" class="text-slate-900" />
            </div>
            <h4 class="font-bold text-slate-900 mb-2">Criptografia de Ponta a Ponta</h4>
            <p class="text-xs text-slate-600">Seus dados são criptografados em trânsito e em repouso com padrão AES-256.</p>
          </div>
          <div class="text-center p-4">
            <div class="flex justify-center mb-3">
              <Check :size="32" class="text-green-600" />
            </div>
            <h4 class="font-bold text-slate-900 mb-2">Conformidade Internacional</h4>
            <p class="text-xs text-slate-600">Certificado com GDPR, HIPAA e ISO 27001 para máxima conformidade regulatória.</p>
          </div>
          <div class="text-center p-4">
            <div class="flex justify-center mb-3">
              <Shield :size="32" class="text-slate-900" />
            </div>
            <h4 class="font-bold text-slate-900 mb-2">Backup Automático</h4>
            <p class="text-xs text-slate-600">Backups redundantes em múltiplos data centers para recuperação garantida.</p>
          </div>
          <div class="text-center p-4">
            <div class="flex justify-center mb-3">
              <Users :size="32" class="text-slate-900" />
            </div>
            <h4 class="font-bold text-slate-900 mb-2">Controle de Acesso</h4>
            <p class="text-xs text-slate-600">Permissões granulares e auditoria completa de todas as ações dos usuários.</p>
          </div>
        </div>
      </section>

      <!-- CTA FINAL -->
      <section class="bg-gradient-to-r from-blue-600 to-blue-700 p-8 sm:p-12 rounded-lg text-white text-center mb-12">
        <h3 class="text-2xl sm:text-3xl font-bold mb-4">Pronto para Sincronizar?</h3>
        <p class="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Junte-se a centenas de empresas que já transformaram seu fluxo de trabalho com o CloudSync. Comece seu teste gratuito de 14 dias hoje.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer">
            Iniciar Teste Gratuito
          </button>
          <button class="px-8 py-3 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors duration-300 border-2 border-white cursor-pointer">
            Agendar Demo
          </button>
        </div>
      </section>

      <!-- FAQ -->
      <section class="bg-white p-4 sm:p-8 rounded-lg border border-slate-200 mb-12 max-w-3xl mx-auto">
        <h3 class="text-xl sm:text-2xl font-bold text-slate-900 mb-2 text-center">Perguntas Frequentes</h3>
        <p class="text-slate-600 mb-8 text-center">Respostas rápidas para as dúvidas mais comuns sobre o CloudSync.</p>
        <div class="space-y-4">
          <details class="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-300">
            <summary class="px-4 sm:px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50 transition-colors duration-300 flex items-center justify-between">
              <span>Qual é o tempo de implementação?</span>
              <ChevronDown :size="20" class="text-slate-400" />
            </summary>
            <div class="px-4 sm:px-6 py-4 bg-slate-50 border-t border-slate-200 text-slate-700 text-sm">
              A maioria das implementações leva entre 3 a 7 dias, dependendo da complexidade. Nosso time de onboarding guiará você em cada etapa do processo.
            </div>
          </details>

          <details class="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-300">
            <summary class="px-4 sm:px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50 transition-colors duration-300 flex items-center justify-between">
              <span>Posso migrar dados de outro sistema?</span>
              <ChevronDown :size="20" class="text-slate-400" />
            </summary>
            <div class="px-4 sm:px-6 py-4 bg-slate-50 border-t border-slate-200 text-slate-700 text-sm">
              Sim! O CloudSync suporta importação de dados de praticamente qualquer plataforma. Oferecemos ferramentas automatizadas e assistência técnica para garantir uma migração suave.
            </div>
          </details>

          <details class="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-300">
            <summary class="px-4 sm:px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50 transition-colors duration-300 flex items-center justify-between">
              <span>O suporte está disponível 24/7?</span>
              <ChevronDown :size="20" class="text-slate-400" />
            </summary>
            <div class="px-4 sm:px-6 py-4 bg-slate-50 border-t border-slate-200 text-slate-700 text-sm">
              Clientes dos planos Profissional e Empresa têm acesso a suporte 24/7 via chat, e-mail e telefone. Plano Básico inclui suporte comercial durante o horário comercial.
            </div>
          </details>

          <details class="border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-300">
            <summary class="px-4 sm:px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50 transition-colors duration-300 flex items-center justify-between">
              <span>Posso cancelar minha assinatura a qualquer momento?</span>
              <ChevronDown :size="20" class="text-slate-400" />
            </summary>
            <div class="px-4 sm:px-6 py-4 bg-slate-50 border-t border-slate-200 text-slate-700 text-sm">
              Absolutamente. Você pode cancelar sua assinatura a qualquer momento, sem penalidades. Seus dados permanecerão acessíveis por 30 dias após o cancelamento.
            </div>
          </details>
        </div>
      </section>
    </div>

    <!-- BOTÃO PARA ABRIR O QUIZ -->
    <div class="flex flex-col sm:flex-row justify-center items-center mb-12 gap-4">
      <RouterLink to="/">
        <button class="px-4 sm:px-6 py-3 bg-slate-600 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer">
          <Home :size="20" />
          Voltar ao Início
        </button>
      </RouterLink>
      <button
        @click="modalAberto = true"
        class="px-4 sm:px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
      >
        <Target :size="20" />
        Clique para Praticar!
      </button>
    </div>

      <!-- INFO BOX -->
      <div class="bg-blue-50 border border-blue-200 p-4 sm:p-6 rounded-lg max-w-2xl mx-auto mb-12">
        <div class="flex items-center gap-2 mb-3">
          <ClipboardList :size="20" class="text-blue-900" />
          <h4 class="font-semibold text-blue-900 text-lg">Como Funciona</h4>
        </div>
        <p class="text-sm text-blue-800 leading-relaxed mb-3">
          Observe a página atentamente. Ela parece uma página de produto normal, mas contém <strong>5 erros sutis de IHC</strong> que você deve identificar.
        </p>
        <p class="text-sm text-blue-800">
          Clique no botão acima para abrir o quiz e responda as perguntas sobre os problemas de usabilidade que você conseguir encontrar!
        </p>
      </div>

    <!-- Modal do Quiz -->
    <PraticaModal :aberto="modalAberto" @fechar="modalAberto = false" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Target, Home, ClipboardList, Check, Lock, Shield, Users, Star, ChevronDown } from 'lucide-vue-next'
import PraticaModal from '@/components/PraticaModal.vue';

const modalAberto = ref(false)
</script>

<style scoped></style>
