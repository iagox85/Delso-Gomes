# Site de campanha — reprodução estática

Reprodução em HTML5, CSS3 e JavaScript puro da área pública de `https://sitedecampanha1.nexflowbr.site/`, analisada em 24/08/2026.

## Páginas identificadas

- `index.html` — Home completa.
- `propostas.html` — listagem de propostas com detalhes expansíveis.

Não foram encontradas páginas públicas de notícias, contato, galeria, depoimentos ou biografia separada. A biografia integra a Home e os contatos da referência são CTAs de WhatsApp desativados.

## Como visualizar

Abra `index.html` diretamente ou publique a pasta em qualquer hospedagem estática. Os links usam nomes de arquivos e funcionam sem roteamento de servidor.

## Personalização futura

- Cores, tipografia, sombras, largura e raios estão centralizados em `:root`, no início de `css/style.css`.
- Textos e números estão explícitos nos dois HTMLs para facilitar busca e substituição.
- Para ativar WhatsApp, troque os elementos marcados com `is-disabled` por links `a` apontando para `https://wa.me/...`.
- Os placeholders de foto informam a proporção esperada no próprio layout.

## Observação sobre assets

A referência não apresenta imagens de candidato no conteúdo: utiliza placeholders visuais. Por isso, nenhum arquivo de imagem aleatório foi incluído. Os ícones vetoriais usados na interface estão agrupados em `assets/icons/sprite.svg`.
