# Setup do Banco de Dados Supabase

## Estrutura das Tabelas

### `gamificacao_respostas`
Armazena as respostas dos quizzes de gamificação IHC.

**Colunas:**
- `id` (BIGSERIAL) - Identificador único
- `created_at` (TIMESTAMP) - Data de criação automática
- `data` (TIMESTAMP) - Data do quiz
- `total_perguntas` (INTEGER) - Total de perguntas respondidas
- `respostas_corretas` (INTEGER) - Número de acertos
- `pontos` (INTEGER) - Pontuação total
- `erros_identificados` (INTEGER) - Quantidade de erros encontrados
- `detalhes_respostas` (JSONB) - Array de respostas detalhadas

## Como Criar as Tabelas

### Opção 1: Via SQL Editor do Supabase (Recomendado)

1. Acesse sua conta no [Supabase](https://app.supabase.com)
2. Selecione seu projeto
3. Navegue para **SQL Editor**
4. Clique em **New Query**
5. Cole o conteúdo do arquivo `supabase/migrations/001_create_gamificacao_respostas.sql`
6. Clique em **Run**

### Opção 2: Via Dashboard Supabase

1. Acesse **Tables** no dashboard
2. Clique em **Create a new table**
3. Configure as colunas conforme especificado acima
4. Habilite RLS se desejar

## Estrutura Esperada dos Dados

Quando o quiz é respondido, os seguintes dados são inseridos:

```json
{
  "data": "2024-02-19T10:30:00Z",
  "total_perguntas": 5,
  "respostas_corretas": 4,
  "pontos": 80,
  "erros_identificados": 3,
  "detalhes_respostas": [
    {
      "numero_pergunta": 1,
      "pergunta": "...",
      "resposta_usuario": "...",
      "resposta_correta": "...",
      "acertou": true
    }
  ]
}
```

## Verificação

Para verificar se as tabelas foram criadas corretamente:

1. Acesse o dashboard do Supabase
2. Vá para **Table Editor**
3. Verifique se `gamificacao_respostas` aparece na lista
4. Teste pelo aplicativo - ao responder um quiz, a tabela deve receber novos registros

## Troubleshooting

Se receber erro `PGRST205`:
- Verifique se a tabela foi criada corretamente
- Confirme que está usando o projeto Supabase correto (verifique `VITE_SUPABASE_URL` no `.env`)
- Aguarde alguns segundos após criar a tabela (às vezes há delay na propagação)
- Reinicie o servidor de desenvolvimento (`npm run dev`)
