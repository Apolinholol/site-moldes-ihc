import { createClient } from '@supabase/supabase-js'

// ========================================
// CONFIGURAÇÃO DO SUPABASE
// ========================================
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  throw new Error('Variáveis de ambiente do Supabase não configuradas')
}

// Criar e exportar cliente Supabase pré-configurado
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY)


