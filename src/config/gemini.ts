/**
 * Configuração do Google Gemini
 * As chaves de API devem estar em variáveis de ambiente
 */

import type { GeminiConfig } from '@/types/gemini'

// Obter chave da API de variáveis de ambiente
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || ''
const MODEL = import.meta.env.VITE_GEMINI_MODEL || 'gemini-3-flash-preview'

export const geminiConfig: GeminiConfig = {
  apiKey: API_KEY,
  model: MODEL,
  temperature: 0.5, // equilibrio entre criatividade e consistência
  maxTokens: 2048, // limite de tokens para respostas
}

/**
 * Validar se a chave da API está configurada
 */
export function isGeminiConfigured(): boolean {
  return geminiConfig.apiKey !== '' && geminiConfig.apiKey !== undefined
}

/**
 * Obter mensagem de erro se não configurado
 */
export function getGeminiConfigError(): string {
  if (!isGeminiConfigured()) {
    return 'Google Gemini não configurado. Configure a variável VITE_GEMINI_API_KEY no arquivo .env'
  }
  return ''
}
