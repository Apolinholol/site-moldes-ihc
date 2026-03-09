/**
 * Utilities para questionários sobre análise de IHC
 * Estrutura unificada para todas as práticas
 */

import type { GeminiQuestion, GeminiAnalysisResult } from '@/types/gemini'
import { geminiClient } from '@/utils/geminiClient'

/**
 * ============================================
 * PRÁTICA 1: Website CloudSync - Erros Subtis
 * ============================================
 */
const pratica1Questions: GeminiQuestion[] = [
  {
    id: 'q1-button-hover',
    pergunta:
      'Qual é o erro de IHC no botão "Entrar" do cabeçalho da página CloudSync? Por que afeta a experiência do usuário?',
    contexto:
      'Análise da página de exemplo CloudSync - Botão de navegação com hover muito fraco (apenas mudança de cor em 500ms)',
    tipo: 'aberta',
  },
  {
    id: 'q2-spacing-consistency',
    pergunta:
      'Identifique o problema de espaçamento/padding na seção de funcionalidades. Como isso afeta a hierarquia visual?',
    contexto: 'Análise de Grid de funcionalidades com padding inconsistente em alguns itens',
    tipo: 'aberta',
  },
  {
    id: 'q3-typography-size',
    pergunta:
      'Qual é o erro de tipografia nos cards de funcionalidades? Qual heurística de Nielsen é violada?',
    contexto:
      // 'Alguns titles têm text-base e outros text-sm, causando inconsistência visual',
          'Tem o contexto envolvendo as fontes em negrito e tamanhos variados, criando confusão na hierarquia visual',
    tipo: 'multipla',
    opcoes: [
      'Heurística 1: Visibilidade do Status do Sistema',
      'Heurística 4: Consistência e Padrões',
      'Heurística 8: Estética e Design Minimalista',
      'Heurística 9: Ajudar usuários a reconhecer erros',
    ],
  },
  {
    id: 'q4-label-clarity',
    pergunta:
      'Os labels dos cards de funcionalidades são suficientemente descritivos? O que deveria estar incluído?',
    contexto: 'Labels genéricos como "Sincronização" e "Segurança" sem explicação clara do valor',
    tipo: 'aberta',
  },
  {
    id: 'q5-cta-visibility',
    pergunta:
      'Como melhorar a visibilidade do botão de Call-to-Action principal? Qual princípio de design seria violado na versão atual?',
    contexto:
      'Análise de botões primários vs secundários e sua diferenciação visual',
    tipo: 'aberta',
  },
]

const pratica1Answers: Record<string, string> = {
  'q1-button-hover':
    'O botão tem uma transição de 500ms muito lenta para o hover, além do contraste fraco. Isso viola a Heurística 1 (visibilidade) e 4 (consistência) de Nielsen. A vida real não demora 500ms para responder.',
  'q2-spacing-consistency':
    'O padding é inconsistente entre os cards, afetando a hierarquia visual e criando confusão. Isso viola a Heurística 4 (consistência). Deve-se manter um sistema de espaciamento uniforme (8px, 16px, 24px etc).',
  'q3-typography-size': 'Heurística 4: Consistência e Padrões',
  'q4-label-clarity':
    'Os labels são genéricos demais. Deveriam incluir o valor específico, como "Sincronização em Tempo Real - Mantenha seus dados atualizados em segundos" ao invés de apenas "Sincronização".',
  'q5-cta-visibility':
    'O botão primário deveria ser bem diferenciado do secundário em cor, tamanho e posição. Viola a Heurística 8 (estética e design minimalista) e a regra de contraste visual.',
}

/**
 * ============================================
 * PRÁTICA 2: Website TaskFlow - Análise de Erros Sutis
 * ============================================
 */
const pratica2Questions: GeminiQuestion[] = [
  {
    id: 'p2-q1-icon-inconsistency',
    pergunta: 'Identifique os problemas visuais de inconsistência nos ícones do header.',
    contexto: '',
    tipo: 'aberta',
  },
  {
    id: 'p2-q2-hierarchy-confusion',
    pergunta: 'Analise a hierarquia visual nos cards de tarefas. Qual é o problema com a tipografia?',
    contexto: '',
    tipo: 'aberta',
  },
  {
    id: 'p2-q3-button-states',
    pergunta: 'Critique os botões de filtro por status. Como os estados visuais poderiam ser melhorados?',
    contexto: '',
    tipo: 'aberta',
  },
  {
    id: 'p2-q4-color-semantics',
    pergunta: 'Observe os avatares dos membros da equipe. Qual é o problema com o uso de cores?',
    contexto: '',
    tipo: 'aberta',
  },
  {
    id: 'p2-q5-interaction-affordance',
    pergunta: 'Analise a interatividade nas seções de estatísticas. Identifique inconsistências no feedback visual.',
    contexto: '',
    tipo: 'aberta',
  },
]

const pratica2Answers: Record<string, string> = {
  'p2-q1-icon-inconsistency':
    'Ícones com tamanhos variados (18px, 20px, 16px) criam inconsistência visual e reduzem profissionalismo. Violam Heurística 4 (Consistência). Solução: manter todos em 20px, usar mesmo peso visual e estilo (outline ou filled).',
  'p2-q2-hierarchy-confusion':
    'Títulos com text-base, text-sm variados e pesos (medium, semibold, bold) diferentes causam confusão na hierarquia. Deve-se padronizar: título sempre text-base bold, descrição sempre text-sm regular. Isso segue Heurística 4.',
  'p2-q3-button-states':
    'Estados visuais muito subtis - diferenciar com: cor de fundo diferente, mudança de cor do texto, borda mais forte. Estado "ativo" deve ter alto contraste. Segue Heurística 1 (Visibilidade do Status).',
  'p2-q4-color-semantics':
    'Azuis variados (400, 500, 600) e indigo sem significado semântico criam confusão. Se não há diferença de status/role, todos devem ter a mesma cor. Violam Heurística 4 (Consistência e Padrões).',
  'p2-q5-interaction-affordance':
    'Card com cursor:pointer mas sem feedback visual claro viola Heurística 1 (Visibilidade). Deve ter: hover com shadow ou background consistente, cursor pointer adequado, e indicação clara de o que acontecerá ao clicar.',
}

/**
 * ============================================
 * ESTRUTURA UNIFICADA DE PRÁTICAS
 * ============================================
 */
export const praticasData = {
  pratica1: {
    questions: pratica1Questions,
    answers: pratica1Answers,
  },
  pratica2: {
    questions: pratica2Questions,
    answers: pratica2Answers,
  },
} as const

/**
 * ============================================
 * FUNÇÕES GENÉRICAS (UNIFICADAS)
 * ============================================
 */

/**
 * Analisar resposta usando Gemini - funciona para todas as práticas
 */
export async function analyzeAnswer(
  pratica: 'pratica1' | 'pratica2',
  questionId: string,
  userResponse: string,
): Promise<GeminiAnalysisResult> {
  const questions = praticasData[pratica].questions
  const answers = praticasData[pratica].answers

  const question = questions.find((q) => q.id === questionId)
  if (!question) {
    throw new Error(`Pergunta não encontrada: ${questionId}`)
  }

  const correctAnswer = answers[questionId] || ''

  try {
    return await geminiClient.analyzeResponse(question, userResponse, correctAnswer)
  } catch (error) {
    console.error(`Erro ao analisar resposta da ${pratica}:`, error)
    throw error
  }
}

/**
 * Obter pergunta específica por ID - funciona para todas as práticas
 */
export function getQuestion(
  pratica: 'pratica1' | 'pratica2',
  questionId: string,
): GeminiQuestion | undefined {
  return praticasData[pratica].questions.find((q) => q.id === questionId)
}

/**
 * Obter todas as perguntas de uma prática
 */
export function getAllQuestions(pratica: 'pratica1' | 'pratica2'): GeminiQuestion[] {
  return praticasData[pratica].questions
}

/**
 * ============================================
 * WRAPPERS DE COMPATIBILIDADE (mantém compatibilidade com código existente)
 * ============================================
 */

// Prática 1 - wrappers
export const ihcQuestionsSet: GeminiQuestion[] = pratica1Questions
export const expectedAnswers: Record<string, string> = pratica1Answers

export async function analyzeIHCAnswer(
  questionId: string,
  userResponse: string,
): Promise<GeminiAnalysisResult> {
  return analyzeAnswer('pratica1', questionId, userResponse)
}

export function getQuestionPratica1(questionId: string): GeminiQuestion | undefined {
  return getQuestion('pratica1', questionId)
}

export function getAllQuestionsPratica1(): GeminiQuestion[] {
  return getAllQuestions('pratica1')
}

// Prática 2 - wrappers
export const pratica2QuestionsSet: GeminiQuestion[] = pratica2Questions
export const pratica2ExpectedAnswers: Record<string, string> = pratica2Answers

export async function analyzePratica2Answer(
  questionId: string,
  userResponse: string,
): Promise<GeminiAnalysisResult> {
  return analyzeAnswer('pratica2', questionId, userResponse)
}

export function getPratica2Question(questionId: string): GeminiQuestion | undefined {
  return getQuestion('pratica2', questionId)
}

export function getAllPratica2Questions(): GeminiQuestion[] {
  return getAllQuestions('pratica2')
}
