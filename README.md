# New Clean — Site institucional

Site da **New Clean**: limpeza, instalação e manutenção de placas solares em Votuporanga e região.
Feito com React + Vite.

## Como rodar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # versão de produção em dist/
```

## Publicação

O site é publicado na **Cloudflare Pages**, ligada a este repositório. Cada push na branch de
produção gera e publica o site automaticamente (comando de build `npm run build`, pasta `dist`).

## Seções

1. **Início**: foto da equipe limpando placas e botão de orçamento
2. **Serviços**: higienização, instalação e manutenção
3. **Sobre**: apresentação do Wesley, proprietário, com botão "Falar com o Wesley"
4. **Por que limpar**: 3 benefícios
5. **Como funciona**: 4 passos
6. **Dúvidas**: 4 perguntas frequentes
7. **Contato**: WhatsApp e Instagram
8. Botão flutuante de WhatsApp

Entre algumas seções há divisores temáticos (`src/components/ui/Divider.jsx`): ondas d'água, arco
de horizonte com a órbita laranja do logo e gotas subindo. As demais têm corte reto.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| WhatsApp, Instagram, área de atendimento | `src/lib/contact.js` |
| Textos de serviços, benefícios, passos e dúvidas | `src/data/content.js` |
| Texto sobre o Wesley | `src/components/About.jsx` |
| Cores e fontes | `src/styles/global.css` |
| Fotos (inclui `wesley.webp`) | `src/assets/images/` |

## Observação

As fotos de serviço são do [Pexels](https://www.pexels.com). Na foto principal, os logotipos de outra
empresa nos uniformes foram desfocados. O ideal é trocá-la por uma foto real da equipe New Clean
(mesmo nome: `src/assets/images/hero.jpg`).
