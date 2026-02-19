-- Criar tabela gamificacao_respostas
CREATE TABLE IF NOT EXISTS public.gamificacao_respostas (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  data TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  total_perguntas INTEGER NOT NULL,
  respostas_corretas INTEGER NOT NULL,
  pontos INTEGER NOT NULL,
  erros_identificados INTEGER,
  detalhes_respostas JSONB
);

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_gamificacao_respostas_created_at 
  ON public.gamificacao_respostas(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_gamificacao_respostas_data 
  ON public.gamificacao_respostas(data DESC);

-- Habilitar RLS (Row Level Security) se desejar
ALTER TABLE public.gamificacao_respostas ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura pública (opcional)
CREATE POLICY "Enable read access for all users" 
  ON public.gamificacao_respostas 
  FOR SELECT 
  USING (true);

-- Política para permitir insert de qualquer um
CREATE POLICY "Enable insert for all users" 
  ON public.gamificacao_respostas 
  FOR INSERT 
  WITH CHECK (true);
