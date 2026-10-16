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

## Escrevendo um post

Crie um arquivo `.mdx` em `data/blog/` com o frontmatter:

```yaml
---
title: 'Título do post'
date: 'AAAA-MM-DD'
tags: ['Flutter']
draft: false
summary: 'Resumo exibido na listagem e nas redes sociais.'
authors: ['default']
images: ['/static/images/meu-banner.png']
---
```

Imagens ficam em `public/static/images/`. Configurações gerais do site estão em `data/siteMetadata.js`.

## Créditos

Baseado no [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog).
