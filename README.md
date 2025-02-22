Desafio: Comparação de Respostas de LLMs 

Descrição

Este projeto acessa três modelos de linguagem (LLMs) diferentes - Gemini, Llama e Mixtral - para gerar respostas a uma mesma pergunta e compará-las.

Tecnologias Utilizadas:

Node.js

groq-sdk (SDK para Groq cloud)

Dotenv (para gerenciamento de variáveis de ambiente)

@google/generative-ai (SDK para Google Gemini)

Configuração e Execução

Pré-requisitos:

Antes de executar o projeto, certifique-se de ter:

Node.js instalado (versão 18+)

Chaves de API para Groq (Llama & Mixtral) e Gemini

Como executar : 

Faça um clone do repositório 

Adicione um arquivo .env seguindo o padrão que está no arquivo .env.example do projeto 

Rode "npm install" no terminal para que as dependências sejam baixadas

Use "node src/index.js" para executar o programa

Pronto, agora os modelos irão gerar suaa respostas e fazer o ranking das respostas, você pode acompanhar tudo pelo terminal.
