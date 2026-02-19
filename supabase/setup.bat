@echo off
REM Script para instruir setup do Supabase no Windows

echo.
echo =======================================
echo Setup do Banco de Dados Supabase
echo =======================================
echo.
echo Este script ajudara a criar as tabelas necessarias.
echo.
echo IMPORTANTE: Voce precisa fazer isso manualmente no dashboard Supabase:
echo.
echo 1. Acesse https://app.supabase.com
echo 2. Selecione seu projeto
echo 3. Va para "SQL Editor"
echo 4. Clique em "New Query"
echo 5. Cole o conteudo dos arquivos em supabase/migrations/
echo 6. Execute (Run)
echo.
echo Arquivos a executar em ordem:
echo   - 001_create_gamificacao_respostas.sql
echo   - 002_create_metricas_formulario.sql
echo.
echo Apos criar as tabelas, seu aplicativo funcionara normalmente!
echo.
pause
