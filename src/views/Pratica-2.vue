<template>
  <div class="min-h-screen bg-[#FDFBF5] font-serif">
    <!-- HEADER -->
    <header class="border-b border-gray-200 py-6">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold text-[#333333] tracking-tight">Sabor & Arte</h1>
        <p class="text-lg text-gray-600 mt-1">Uma Experiência Culinária</p>
      </div>
    </header>

    <!-- CATEGORY NAVIGATION -->
    <nav class="py-4">
      <!-- ERRO IHC #5: Non-obvious Navigation -->
      <div class="container mx-auto px-4 flex justify-center flex-wrap gap-x-8 gap-y-2 text-gray-500 text-lg">
        <span @click="activeCategory = 'principais'" :class="{'text-[#333333] font-semibold': activeCategory === 'principais'}" class="cursor-pointer">Pratos Principais</span>
        <span @click="activeCategory = 'aperitivos'" :class="{'text-[#333333] font-semibold': activeCategory === 'aperitivos'}" class="cursor-pointer">Aperitivos</span>
        <span @click="activeCategory = 'sobremesas'" :class="{'text-[#333333] font-semibold': activeCategory === 'sobremesas'}" class="cursor-pointer">Sobremesas</span>
        <span @click="activeCategory = 'bebidas'" :class="{'text-[#333333] font-semibold': activeCategory === 'bebidas'}" class="cursor-pointer">Bebidas</span>
      </div>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        <div v-for="item in filteredMenu" :key="item.nome" class="bg-white rounded-lg shadow-md overflow-hidden">
          <!-- ERRO IHC #1: Images without alt text -->
          <img :src="item.imagem" class="w-full h-56 object-cover">
          <div class="p-5">
            <h2 class="text-2xl font-semibold text-[#333333]">{{ item.nome }}</h2>
            <!-- ERRO IHC #2: Inconsistent Pricing Format -->
            <p class="text-xl text-[#D4AF37] font-bold my-2">{{ item.preco }}</p>
            <!-- ERRO IHC #3: Vague Description -->
            <p class="text-gray-600" style="font-family: sans-serif;">{{ item.descricao }}</p>
            <!-- ERRO IHC #4: No Visual Feedback on "Add to Order" -->
            <button @click="() => {}" class="w-full mt-4 py-2 bg-[#333333] text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">Adicionar ao Pedido</button>
          </div>
        </div>

      </div>

      <!-- INSTRUÇÕES E BOTÕES DE AÇÃO -->
      <section class="mt-16 text-center py-10 bg-white/50 rounded-lg">
        <h2 class="text-2xl font-bold text-[#333333] mb-3">Notou algum problema?</h2>
        <p class="text-gray-600 mb-6">Este cardápio digital contém <strong>5 erros comuns de usabilidade</strong>. Teste seu olhar de designer!</p>

        <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
          <RouterLink to="/">
            <button class="px-6 py-3 bg-slate-600 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors shadow-md flex items-center gap-2 cursor-pointer">
              <Home :size="20" />
              Voltar ao Início
            </button>
          </RouterLink>
          <button
            @click="abrirModal"
            class="px-6 py-3 bg-[#D4AF37] text-white font-bold rounded-lg hover:bg-[#b5942f] transition-colors shadow-md flex items-center gap-2 cursor-pointer"
          >
            <Target :size="20" />
            Começar o Quiz
          </button>
        </div>
      </section>

    </main>

    <!-- MODAL DE QUESTÕES -->
    <transition name="fade">
    <div v-if="modalAberto" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" @click.self="fecharModal">
      <div class="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div class="p-5 flex justify-between items-center sticky top-0 z-10 border-b border-gray-200 bg-white">
          <h2 class="text-xl font-bold text-[#333333]">Quiz de Usabilidade do Cardápio</h2>
          <button @click="fecharModal" class="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors cursor-pointer">✕</button>
        </div>
        <div class="p-6">
          <div v-if="quizFinished">
            <h3 class="text-2xl font-bold text-center text-green-600 mb-4">Quiz Concluído!</h3>
            <p class="text-center text-lg text-gray-700">Você acertou {{ score }} de {{ totalSteps }}!</p>
          </div>
          <div v-else-if="currentQuestion">
            <p class="text-sm text-gray-500 mb-2">Pergunta {{ currentStep }} de {{ totalSteps }}</p>
            <h3 class="text-lg font-semibold text-[#333333] mb-4">{{ currentQuestion.pergunta }}</h3>
            <div style="font-family: sans-serif;" class="space-y-3">
              <label v-for="(opcao, index) in currentQuestion.opcoes" :key="index" class="flex items-center p-4 border rounded-lg cursor-pointer transition-colors"
                :class="{
                  'border-gray-300 hover:border-[#D4AF37]': respostas[currentStep - 1] !== opcao,
                  'border-[#D4AF37] bg-[#FFFBEB] ring-2 ring-[#FDE68A]': respostas[currentStep - 1] === opcao
                }">
                <input type="radio" :name="`pergunta-${currentStep}`" :value="opcao" v-model="respostas[currentStep - 1]" class="w-4 h-4 text-[#D4AF37] focus:ring-[#D4AF37]">
                <span class="ml-3 text-gray-700">{{ opcao }}</span>
              </label>
            </div>
            <div v-if="mostrarErro" class="text-red-600 text-sm mt-4">Por favor, selecione uma opção para continuar.</div>
          </div>
        </div>
        <div class="flex gap-4 p-5 bg-gray-50 border-t border-gray-200">
          <button @click="irAnterior" :disabled="currentStep === 1 || quizFinished || enviando" class="flex-1 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg disabled:opacity-50 hover:bg-gray-300 transition-colors cursor-pointer">Anterior</button>
          <button v-if="currentStep < totalSteps" @click="irProximo" :disabled="quizFinished || enviando" class="flex-1 py-2 bg-[#333333] text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">Próximo</button>
          <button v-else @click="finalizarQuiz" :disabled="enviando" class="flex-1 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 cursor-pointer">
            {{ enviando ? "Enviando..." : "Finalizar" }}
          </button>
        </div>
      </div>
    </div>
  </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { Target, Home } from 'lucide-vue-next';
import { supabase } from '@/utils/supabaseClient';

interface MenuItem {
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
}

interface MenuCategories {
  [key: string]: MenuItem[];
}

const router = useRouter();

// --- DADOS DO CARDÁPIO ---
const menu: MenuCategories = {
  principais: [
    {
      nome: 'Filé de Salmão',
      preco: 'R$ 65,00',
      descricao: 'Salmão grelhado servido com aspargos e molho de limão.',
      imagem: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
    {
      nome: 'Pizza Margherita',
      preco: 'R$45',
      descricao: 'Pizza clássica com muçarela fresca, tomates San Marzano e manjericão.',
      imagem: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
    {
      nome: 'Prato do Chef',
      preco: 'R$ 55,50',
      descricao: 'Uma deliciosa surpresa do nosso chef.',
      imagem: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
  ],
  aperitivos: [
    {
      nome: 'Bruschetta',
      preco: 'R$ 25',
      descricao: 'Pão italiano tostado com tomates frescos, alho e manjericão.',
      imagem: 'https://images.unsplash.com/photo-1505253716362-afb542c38548?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
    {
      nome: 'Batatas da Casa',
      preco: 'R$ 30,00',
      descricao: 'Saborosas e crocantes.',
      imagem: 'https://images.unsplash.com/photo-1541592106381-b58e7c13c236?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    }
  ],
  sobremesas: [
    {
      nome: 'Petit Gâteau',
      preco: 'Vinte Reais',
      descricao: 'Bolo de chocolate com recheio cremoso, servido com sorvete.',
      imagem: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    }
  ],
  bebidas: [
    {
      nome: 'Suco de Laranja',
      preco: 'R$ 12',
      descricao: 'Feito com laranjas frescas.',
      imagem: 'https://images.unsplash.com/photo-1600271886742-f049cd452bba?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
     {
      nome: 'Refrigerante',
      preco: 'R$ 8,00',
      descricao: '',
      imagem: 'https://images.unsplash.com/photo-1554866585-CD94860890b7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    }
  ]
};

const activeCategory = ref('principais');
const filteredMenu = computed(() => menu[activeCategory.value]);


// --- LÓGICA DO MODAL ---
const modalAberto = ref(false);
const currentStep = ref(1);
const quizFinished = ref(false);
const score = ref(0);
const mostrarErro = ref(false);
const enviando = ref(false);

const perguntas = ref([
    {
    pergunta: "Para usuários que dependem de leitores de tela, qual recurso crucial de acessibilidade está faltando nas imagens dos pratos?",
    opcoes: ["Versões em alta resolução", "Legendas", "Texto alternativo (`alt`) descrevendo a imagem", "Marcas d'água"],
    resposta_correta: "Texto alternativo (`alt`) descrevendo a imagem",
  },
  {
    pergunta: "Ao olhar o cardápio, qual inconsistência dificulta a comparação rápida dos preços dos itens?",
    opcoes: ["Alguns itens são muito caros", "O símbolo da moeda está faltando", "O formato do preço é inconsistente (ex: R$ 18 vs R$ 65,00)", "Os preços estão em cores diferentes"],
    resposta_correta: "O formato do preço é inconsistente (ex: R$ 18 vs R$ 65,00)",
  },
  {
    pergunta: "Por que um cliente pode ter dificuldade em escolher um prato como o 'Prato do Chef' ou as 'Batatas da Casa'?",
    opcoes: ["A imagem não é apetitosa", "O preço é muito alto", "A descrição é vaga ou não existe", "O nome é difícil de pronunciar"],
    resposta_correta: "A descrição é vaga ou não existe",
  },
  {
    pergunta: "Ao clicar no botão 'Adicionar ao Pedido', qual é o principal problema de usabilidade?",
    opcoes: ["O botão é muito pequeno", "O botão tem um erro de ortografia", "Não há nenhum feedback visual para confirmar que o item foi adicionado", "O botão tem a cor errada"],
    resposta_correta: "Não há nenhum feedback visual para confirmar que o item foi adicionado",
  },
  {
    pergunta: "Qual é o problema com as categorias do menu no topo da página (Pratos Principais, Aperitivos, etc.)?",
    opcoes: ["Existem muitas categorias", "Estão ordenadas da forma errada", "O estilo é de texto simples, então não é óbvio que são clicáveis", "A fonte é difícil de ler"],
    resposta_correta: "O estilo é de texto simples, então não é óbvio que são clicáveis",
  },
]);

const totalSteps = ref(perguntas.value.length);
const respostas = ref<string[]>(Array(totalSteps.value).fill(''));
const currentQuestion = computed(() => perguntas.value[currentStep.value - 1]);

const abrirModal = () => { resetarQuiz(); modalAberto.value = true; };
const fecharModal = () => { modalAberto.value = false; };

const irProximo = () => {
  if (respostas.value[currentStep.value - 1] === '') { mostrarErro.value = true; return; }
  if (currentStep.value < totalSteps.value) { currentStep.value++; mostrarErro.value = false; }
};

const irAnterior = () => {
  if (currentStep.value > 1) { currentStep.value--; mostrarErro.value = false; }
};

const salvarResultados = async () => {
  enviando.value = true;
  try {
    const respostasCorretas = score.value;
    const pontuacao = respostasCorretas * 20;

    const dadosParaEnvio = {
      data: new Date().toISOString(),
      pratica: 2,
      total_perguntas: totalSteps.value,
      respostas_corretas: respostasCorretas,
      pontos: pontuacao,
      detalhes_respostas: respostas.value.map((r, i) => {
        const p = perguntas.value[i];
        return {
          pergunta: p?.pergunta || '',
          resposta_usuario: r,
          resposta_correta: p?.resposta_correta || '',
        };
      }),
    };

    const { error } = await supabase.from('gamificacao_respostas').insert([dadosParaEnvio]);

    if (error) {
      console.error('Erro ao salvar no Supabase:', error);
      alert('Houve um erro ao salvar seu resultado.');
    }

  } catch (err) {
    console.error('Erro inesperado:', err);
    alert('Houve um erro inesperado.');
  } finally {
    enviando.value = false;
  }
};


const finalizarQuiz = async () => {
  if (respostas.value[currentStep.value - 1] === '') { mostrarErro.value = true; return; }

  let finalScore = 0;
  respostas.value.forEach((resposta, index) => {
    const pergunta = perguntas.value[index]
    if (pergunta && resposta === pergunta.resposta_correta) { finalScore++; }
  });
  score.value = finalScore;
  quizFinished.value = true;

  await salvarResultados();

  setTimeout(() => {
    fecharModal();
    router.push('/metricas');
  }, 3000);
};

const resetarQuiz = () => {
  currentStep.value = 1;
  respostas.value = Array(totalSteps.value).fill('');
  quizFinished.value = false;
  score.value = 0;
  mostrarErro.value = false;
  enviando.value = false;
};
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
