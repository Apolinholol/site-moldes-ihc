-- Criar tabela metricas_formulario (tabela legada, mantida para compatibilidade)
CREATE TABLE IF NOT EXISTS public.metricas_formulario (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  usuario TEXT,
  data TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
  total_perguntas INTEGER NOT NULL,
  total_marcadas INTEGER,
  respostas_corretas INTEGER NOT NULL,
  porcentagem_acerto INTEGER,
  detalhes_perguntas JSONB
);

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_metricas_formulario_usuario 
  ON public.metricas_formulario(usuario);

CREATE INDEX IF NOT EXISTS idx_metricas_formulario_created_at 
  ON public.metricas_formulario(created_at DESC);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.metricas_formulario ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura pública
CREATE POLICY "Enable read access for all users" 
  ON public.metricas_formulario 
  FOR SELECT 
  USING (true);

-- Política para permitir insert de qualquer um
CREATE POLICY "Enable insert for all users" 
  ON public.metricas_formulario 
  FOR INSERT 
  WITH CHECK (true);
