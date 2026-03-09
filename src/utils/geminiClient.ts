/**
 * Cliente para integração com Google Gemini
 * Fornece métodos para questionamentos e análise de respostas sobre IHC
 */

import { GoogleGenerativeAI } from '@google/generative-ai'
import { geminiConfig, isGeminiConfigured } from '@/config/gemini'
import type { GeminiQuestion, GeminiResponse, GeminiAnalysisResult, GeminiError } from '@/types/gemini'

/**
 * Cliente Gemini singleton
 */
class GeminiClient {
  private client: GoogleGenerativeAI | null = null
  private initialized = false

  /**
   * Inicializar o cliente Gemini
   */
  private initialize(): void {
    if (!isGeminiConfigured()) {
      throw new Error('Google Gemini não configurado. Configure a variável VITE_GEMINI_API_KEY no arquivo .env')
    }

    if (!this.initialized) {
      this.client = new GoogleGenerativeAI(geminiConfig.apiKey)
      this.initialized = true
    }
  }

  /**
   * Fazer uma pergunta sobre erros de IHC
   * @param question - Pergunta estruturada
   * @returns Resposta gerada pelo Gemini
   */
  async askQuestion(question: GeminiQuestion): Promise<GeminiResponse> {
    try {
      this.initialize()

      if (!this.client) {
        throw new Error('Cliente Gemini não inicializado')
      }

      const model = this.client.getGenerativeModel({ model: geminiConfig.model })

      // Construir o prompt com contexto de IHC
      const prompt = this.buildQuestionPrompt(question)

      const response = await model.generateContent({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: geminiConfig.temperature,
          maxOutputTokens: geminiConfig.maxTokens,
        },
        safetySettings: [
          {
            category: 'HARM_CATEGORY_UNSPECIFIED',
            threshold: 'BLOCK_NONE',
          },
        ],
      })

      const resposta = response.response.text()

      return {
        resposta,
        confianca: 0.85, // Valor padrão - pode ser ajustado com análise de confiança
        tipoPergunta: question.tipo,
        timestamp: new Date(),
      }
    } catch (error) {
      const geminiError: GeminiError = {
        code: 'QUESTION_ERROR',
        message: error instanceof Error ? error.message : 'Erro ao fazer pergunta ao Gemini',
        status: 500,
      }
      throw geminiError
    }
  }

  /**
   * Analisar resposta do usuário
   * @param question - Pergunta original
   * @param userResponse - Resposta do usuário
   * @param correctAnswer - Resposta correta (opcional)
   * @returns Análise da resposta
   */
  async analyzeResponse(
    question: GeminiQuestion,
    userResponse: string,
    correctAnswer?: string,
  ): Promise<GeminiAnalysisResult> {
    try {
      this.initialize()

      if (!this.client) {
        throw new Error('Cliente Gemini não inicializado')
      }

      const model = this.client.getGenerativeModel({ model: geminiConfig.model })

      const prompt = this.buildAnalysisPrompt(question, userResponse, correctAnswer)

      const response = await model.generateContent({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.3, // Menor temperatura para análise mais consistente
          maxOutputTokens: geminiConfig.maxTokens,
        },
      })

      const analysisText = response.response.text()

      // Parsear a resposta estruturada do Gemini
      return this.parseAnalysisResponse(analysisText)
    } catch (error) {
      const geminiError: GeminiError = {
        code: 'ANALYSIS_ERROR',
        message: error instanceof Error ? error.message : 'Erro ao analisar resposta',
        status: 500,
      }
      throw geminiError
    }
  }

  /**
   * Gerar feedback detalhado sobre erro de IHC
   * @param errorType - Tipo de erro
   * @param description - Descrição do erro
   * @returns Feedback educacional
   */
  async generateIHCFeedback(errorType: string, description: string): Promise<string> {
    try {
      this.initialize()

      if (!this.client) {
        throw new Error('Cliente Gemini não inicializado')
      }

      const model = this.client.getGenerativeModel({ model: geminiConfig.model })

      const prompt = `
        Você é um especialista em Interação Humano-Computador (IHC) e Experiência do Usuário (UX).

        Classificação de Erro: ${errorType}
        Descrição: ${description}

        Forneça um feedback educacional estruturado com:
        1. Explicação do problema
        2. Impacto no usuário
        3. Boas práticas para evitar esse erro
        4. Exemplo de solução

        Seja conciso e didático, como se estivesse ensinando um aluno.
      `

      const response = await model.generateContent({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: geminiConfig.maxTokens,
        },
      })

      return response.response.text()
    } catch (error) {
      const geminiError: GeminiError = {
        code: 'FEEDBACK_ERROR',
        message: error instanceof Error ? error.message : 'Erro ao gerar feedback',
        status: 500,
      }
      throw geminiError
    }
  }

  /**
   * Construir prompt para perguntas
   */
  private buildQuestionPrompt(question: GeminiQuestion): string {
    return `
      Você é um especialista em Interação Humano-Computador (IHC).

      Contexto: ${question.contexto || 'Análise de interface e experiência do usuário'}

      Pergunta: ${question.pergunta}

      ${
        question.tipo === 'multipla'
          ? `Opções de resposta: ${question.opcoes?.join(', ')}`
          : 'Esta é uma pergunta aberta - forneça uma resposta completa e educacional.'
      }

      Responda de forma clara, objetivo e educacional, como se estivesse ensinando um aluno de IHC.
      Evite respostas muito longas.
    `
  }

  /**
   * Construir prompt para análise de respostas
   */
  private buildAnalysisPrompt(
    question: GeminiQuestion,
    userResponse: string,
    correctAnswer?: string,
  ): string {
    return `
      Você é um avaliador de respostas sobre Interação Humano-Computador (IHC).

      Pergunta: ${question.pergunta}
      Resposta do aluno: ${userResponse}
      ${correctAnswer ? `Resposta esperada: ${correctAnswer}` : ''}

      Analise a resposta e forneça em formato JSON:
      {
        "isCorrect": boolean,
        "feedback": "Mensagem breve de feedback",
        "explicacao": "Explicação detalhada",
        "pontuacao": número de 0 a 100
      }

      Retorne APENAS o JSON, sem markdown ou explicações adicionais.
    `
  }

  /**
   * Parsear resposta de análise
   */
  private parseAnalysisResponse(responseText: string): GeminiAnalysisResult {
    try {
      // Tentar extrair JSON da resposta
      const jsonMatch = responseText.match(/\{[\s\S]*\}/)
      if (!jsonMatch) {
        throw new Error('Resposta não contém JSON válido')
      }

      const parsed = JSON.parse(jsonMatch[0]) as GeminiAnalysisResult

      return {
        isCorrect: parsed.isCorrect ?? false,
        feedback: parsed.feedback ?? 'Análise concluída',
        explicacao: parsed.explicacao ?? '',
        pontuacao: Math.min(100, Math.max(0, parsed.pontuacao ?? 0)),
      }
    } catch {
      // Se falhar o parse, retornar análise genérica
      return {
        isCorrect: false,
        feedback: 'Análise realizada',
        explicacao: responseText,
        pontuacao: 50,
      }
    }
  }
}

// Exportar instância singleton
export const geminiClient = new GeminiClient()

/**
 * Função helper para verificar se Gemini está disponível
 */
export function isGeminiAvailable(): boolean {
  return isGeminiConfigured()
}
