-- Migration: Adicionar coluna 'pratica' à tabela gamificacao_respostas
-- Data: 2026-03-12
-- Descrição: Identifica qual prática (1 ou 2) o quiz foi respondido

ALTER TABLE gamificacao_respostas
ADD COLUMN pratica INTEGER DEFAULT 1;
