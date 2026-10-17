# Melhorias pendentes

Lista do que ainda pode melhorar no site, levantada depois da reformulação do portfólio.
Cada item foi conferido no código.

## Interface (não dependem de informação nova)

### 1. Página do post

É a última página com a cara do template: título centralizado, barra lateral com autor e tags,
e a paleta cinza antiga (`gray-*`), diferente do resto do site (`zinc-*`).

- Cabeçalho alinhado à esquerda, como nos estudos de caso: autor, data e tempo de leitura numa
  linha só, e as tags logo abaixo.
- Texto numa coluna de leitura confortável.
- Sumário lateral que acompanha a rolagem nos posts longos (BLoC, ISO 27000 e fila de prioridade
  passam de 10 minutos de leitura).

Arquivos: `layouts/PostLayout.js`.

### 2. Seção de skills na home

- Os cards usam classes que não existem no projeto (`dark:bg-darkPrimary`,
  `hover:dark:bg-darkSecondary`), então o fundo no tema escuro não funciona.
- O brilho que segue o cursor (`lib/windowAnimation.js`) destoa do resto do site.
- Deixar no mesmo estilo dos outros cards.

Arquivos: `components/Skills.js`, `lib/windowAnimation.js`.

### 3. Experiência na home

O card da DDMX tem 11 itens e ocupa a tela inteira. Mostrar os 4 principais e esconder o resto
atrás de um "Mostrar mais".

Arquivos: `components/ExperienceCard.js`, `data/experienceData.js`.

### 4. Menu no celular

Ainda é o do template: fundo cinza translúcido e texto em negrito com letras espaçadas. Também não
tem o seletor de idioma dentro do menu.

Arquivos: `components/MobileNav.js`.

### 5. Página de Tags

Layout do template, com "Tags" grande à esquerda e as tags centralizadas. Seguir o padrão das
outras páginas: título, uma frase e as tags agrupadas.

Arquivos: `pages/tags.js`.

### 6. Imagens de compartilhamento (Open Graph)

Ao compartilhar um link no LinkedIn, a prévia mostra o banner genérico "Andershow Blog" ou banners
antigos em português ("Escrito por…"), inclusive nos posts em inglês. Gerar no build uma imagem por
página e por idioma, com o título e o nome.

Arquivos: `components/SEO.js`, script novo em `scripts/`.

### 7. Revisão em celular de verdade

O Chrome em modo headless não simula telas menores que cerca de 500px, então o layout em largura de
celular nunca foi conferido. Abrir o site num celular e anotar o que estiver estranho.

## Conteúdo (precisam de informação)

### 8. Trabalho profissional

Os 6 projetos são pessoais ou desafios técnicos de 2023. Os sete apps B2B da DDMX (logística e IoT
industrial) só aparecem em texto. Um card de "trabalho profissional", mesmo sem prints nem nomes de
clientes, com o tipo de app, a stack e um resultado concreto.

### 9. Recomendações

Duas ou três citações curtas de recomendações do LinkedIn na home ou no About.

### 10. Mestrado na home

O M.Sc. em Ciência da Computação (UNIFEI, 2026) só aparece no About. Mencionar no topo da home.

### 11. Currículo em português

O botão "Baixar currículo" da versão em português baixa o PDF em inglês. Colocar o PDF em
`public/static/files/` e preencher `resume['pt-BR']` em `data/siteMetadata.js`.

### 12. Banner do Zaffre

O banner ainda tem "Imobiliária Virtual" escrito na imagem
(`public/static/images/projects/zaffre/Zaffre-banner.png`).

### 13. Ritmo do blog

O último post é de fevereiro de 2026. Um post curto por mês sobre o dia a dia (WebSockets, SDKs
nativos, migração para BLoC). Cada post novo precisa das duas versões: `data/blog/en-US/` e
`data/blog/pt-BR/`, com o mesmo nome de arquivo.

## Ordem sugerida

1. Página do post (1) e imagens de compartilhamento (6): é o que mais aparece para quem chega pelo
   LinkedIn.
2. Skills, experiência, menu no celular e Tags (2 a 5).
3. Conteúdo (8 a 13), conforme as informações estiverem disponíveis.
