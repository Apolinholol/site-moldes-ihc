# site-moldes-ihc

Plataforma educacional gamificada para ensino de IHC (Interação Humano-Computador) com Vue 3 + Supabase.

## 🚀 Setup Inicial

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar Variáveis de Ambiente
```bash
cp .env.example .env
```

Preencha o `.env` com suas credenciais do Supabase:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

### 3. Criar Tabelas no Banco de Dados
As tabelas devem ser criadas manualmente no Supabase:

1. Acesse [Supabase Dashboard](https://app.supabase.com)
2. Selecione seu projeto
3. Vá para **SQL Editor**
4. Clique em **New Query**
5. Copie o conteúdo de um dos arquivos em `supabase/migrations/`:
   - `001_create_gamificacao_respostas.sql` (principal)
   - `002_create_metricas_formulario.sql` (opcional, para compatibilidade)
6. Clique em **Run**

Veja [supabase/README.md](supabase/README.md) para mais detalhes.

### 4. Executar em Desenvolvimento
```bash
npm run dev
```

O app estará disponível em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── views/
│   ├── Home.vue                 # Página inicial
│   ├── Gamificacao.vue          # Quiz com erros de IHC
│   └── QuestionarioMetricas.vue # Dashboard de métricas
├── components/
│   ├── GamificacaoModal.vue     # Modal do quiz
│   ├── Navbar.vue
│   └── Footer.vue
├── router/
│   └── index.ts                 # Configuração de rotas
├── utils/
│   └── supabaseClient.ts        # Cliente Supabase centralizado
└── assets/
    └── styles.css

supabase/
├── migrations/                  # Scripts SQL para criar tabelas
├── README.md                    # Documentação do banco de dados
└── setup.bat / setup.sh         # Scripts de ajuda
```

## 🎮 Funcionalidades

### Quiz Gamificado
- 5 questões focadas em identificar erros de UX/IHC
- Página mockup realista com 5 erros sutis intencionais
- Feedback imediato e pontuação

### Dashboard de Métricas
- Acompanhamento de performance cumulativa
- Histórico de todos os quizzes respondidos
- Taxa de acerto geral e por quiz

## 🛠 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Compila para produção
npm run preview  # Visualiza build de produção
npm run lint     # Executa ESLint
```

## 📚 Documentação Adicional

- [Supabase Setup](./supabase/README.md) - Configuração do banco de dados
- [Vue 3 Guide](https://vuejs.org/)
- [Vite Guide](https://vitejs.dev/)

## 🔐 Segurança

- Credenciais Supabase armazenadas em `.env` (não commitado)
- Usa PUBLISHABLE_KEY do Supabase v2+
- RLS (Row Level Security) habilitado nas tabelas

## 📝 Recomendações do IDE

[VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (desabilite Vetur)



## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
