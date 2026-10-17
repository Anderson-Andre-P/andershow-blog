# Andershow Blog

Blog pessoal e portfólio de Anderson Eleutério, com artigos sobre desenvolvimento mobile, web e arquitetura de software.

Site: https://anderson-andre.netlify.app

## Stack

- [Next.js](https://nextjs.org/) + [Tailwind CSS](https://tailwindcss.com/)
- Posts em MDX com [mdx-bundler](https://github.com/kentcdodds/mdx-bundler)
- Comentários com [Giscus](https://giscus.app/)

## Rodando localmente

```bash
yarn install
yarn dev
```

Acesse http://localhost:3000.

## Scripts

| Comando      | Descrição                                       |
| ------------ | ----------------------------------------------- |
| `yarn dev`   | Servidor de desenvolvimento                     |
| `yarn start` | Dev server com recarregamento ao editar `data/` |
| `yarn build` | Build de produção + geração do sitemap          |
| `yarn serve` | Serve o build de produção                       |
| `yarn lint`  | Executa o ESLint com correção automática        |

## Idiomas

O site é bilíngue: inglês (`en-US`, padrão, URLs sem prefixo) e português (`pt-BR`, URLs em `/pt-BR`).
Quem tem o navegador em `pt-BR` vê o site em português; qualquer outro idioma vê em inglês.
O seletor EN/PT no topo grava a escolha do visitante, que passa a valer em vez do idioma do navegador.

- **Textos da interface** (menu, botões, títulos): `data/i18n.js`.
- **Dados com tradução** (`data/siteMetadata.js`, `data/experienceData.js`, `data/projectsData.js`):
  campos no formato `{ 'en-US': '...', 'pt-BR': '...' }`.
- **Bio do About:** `data/authors/en-US/default.md` e `data/authors/pt-BR/default.md`.
- **Currículo:** `resume` em `data/siteMetadata.js`. Se `pt-BR` for `null`, o botão baixa o PDF em inglês.

## Escrevendo um post

Cada post tem um arquivo por idioma, **com o mesmo nome**:

- `data/blog/en-US/meu-post.mdx`
- `data/blog/pt-BR/meu-post.mdx`

Os dois viram `/blog/meu-post` e `/pt-BR/blog/meu-post`. Frontmatter:

```yaml
---
title: 'Título do post'
date: 'AAAA-MM-DD'
tags: ['Flutter']
draft: false
summary: 'Resumo exibido na listagem e nas redes sociais.'
authors: ['default']
images: ['/static/images/meu-banner.jpg']
---
```

Os estudos de caso dos projetos seguem a mesma regra em `data/projects/en-US/` e `data/projects/pt-BR/`.
Se a versão em português de um estudo de caso não existir, a página em português mostra a versão em inglês.

Imagens ficam em `public/static/images/`. Configurações gerais do site estão em `data/siteMetadata.js`.

## Créditos

Baseado no [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog).
