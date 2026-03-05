/**
 * Tipos e interfaces para integração com Google Gemini
 */

export interface GeminiConfig {
  apiKey: string
  model: string
  temperature: number
  maxTokens: number
}

export interface GeminiQuestion {
  id: string
  pergunta: string
  contexto?: string
  tipo: 'aberta' | 'multipla'
  opcoes?: string[]
}

export interface GeminiResponse {
  resposta: string
  confianca: number
  tipoPergunta: 'aberta' | 'multipla'
  timestamp: Date
}

export interface GeminiAnalysisResult {
  isCorrect: boolean
  feedback: string
  explicacao: string
  pontuacao: number
}

export interface GeminiChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface GeminiError {
  code: string
  message: string
  status: number
}
