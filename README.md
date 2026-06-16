# Manipulação de Dados com TypeScript

Projeto em TypeScript com Vite para consumir uma API de transações, normalizar os dados e exibir uma tabela com estatísticas resumidas na interface.

## Funcionalidades

- Busca os dados da API `https://api.origamid.dev/json/transacoes.json`.
- Normaliza as transações antes de renderizar.
- Exibe o total movimentado.
- Agrupa pagamentos e status.
- Identifica o dia com mais vendas.
- Renderiza a lista de transações em tabela.

## Requisitos

- Node.js instalado.
- `pnpm` instalado, já que o projeto usa `pnpm-lock.yaml`.

## Instalação

```bash
pnpm install
```

## Como executar

```bash
pnpm dev
```

Depois, abra o endereço mostrado no terminal pelo Vite.

## Build de produção

```bash
pnpm build
```

## Pré-visualização da build

```bash
pnpm preview
```

## Estrutura principal

- `src/main.ts`: ponto de entrada da aplicação.
- `src/fetchData.ts`: busca dos dados da API.
- `src/normalizarTransacao.ts`: ajuste da estrutura recebida.
- `src/Estastisticas.ts`: cálculo das estatísticas.
- `src/countBy.ts`: contagem de ocorrências por chave.
- `src/moedaParaNumero.ts`: conversão de valores monetários.
- `src/stringToDate.ts`: conversão de datas.

## Observação

O projeto exibe os dados diretamente no HTML em `index.html`, sem framework de UI adicional.
