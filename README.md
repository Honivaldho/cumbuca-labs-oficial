# 🎮 Cumbuca Labs - Estúdio de Games Independente

Um site profissional e moderno para um estúdio brasileiro de desenvolvimento de games independentes, com identidade visual cyberpunk/futurista.

## 🌐 Acesse Online

**[cumbucalabs.com](https://cumbucalabs.com)** (Em breve)

## ✨ Características

- 🎨 **Design Cyberpunk**: Identidade visual futurista com cores neon
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- ⚡ **Performance Otimizada**: Build rápido com Vite, carregamento ultrarrápido
- 🎯 **SEO Otimizado**: Meta tags, Open Graph, Schema.org estruturado
- ♿ **Acessível**: Semântica HTML correta, contraste adequado
- 🎪 **Animações Suaves**: Efeitos cyberpunk com glow, float e hover
- 📊 **Pronto para Produção**: Minificado, otimizado e pronto para deploy

## 🏗️ Stack Técnico

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 8.0
- **Estilização**: Tailwind CSS 4.2 + CSS Customizado
- **Hospedagem**: Vercel (recomendado)
- **Versionamento**: Git

## 📋 Seções do Site

1. **Header** - Navegação responsiva com menu hamburger
2. **Hero** - Seção inicial impactante com logo animada
3. **Sobre Nós** - Missão, visão, valores e apresentação da equipe
4. **Portfólio** - Showcase de 6 projetos de games
5. **Serviços** - 6 serviços oferecidos
6. **Contato** - Formulário funcional + informações
7. **Footer** - Links, políticas e copyright

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação Local

```bash
# Clone ou acesse o diretório
cd cumbuca_labs

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no seu navegador.

### Build para Produção

```bash
# Gera a pasta dist/ otimizada
npm run build

# Visualiza a build localmente
npm run preview
```

## 📦 Deploy

### Opção 1: Vercel (Recomendado)

```bash
# Instale o CLI do Vercel
npm install -g vercel

# Faça o deploy
vercel
```

### Opção 2: Netlify

```bash
# Instale o CLI do Netlify
npm install -g netlify-cli

# Faça o deploy
netlify deploy --prod --dir=dist
```

### Opção 3: GitHub Pages

```bash
# Atualize vite.config.ts com base: '/cumbuca_labs/'
npm run build
# Faça push para gh-pages branch
```

## 🎨 Personalização

### Cores
Edite `src/index.css` para alterar a paleta de cores:
- `#00F0FF` - Neon Blue
- `#8A2BE2` - Electric Purple
- `#39FF14` - Vibrant Green
- `#0A0A0A` - Dark Background

### Conteúdo
Edite os componentes em `src/components/`:
- `Hero.tsx` - Texto principal
- `About.tsx` - Sobre, missão, visão
- `Portfolio.tsx` - Projetos
- `Services.tsx` - Serviços
- `Contact.tsx` - Formulário e contato

### Logo
Substitua `/public/logo.png` com sua própria logo.

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local`:

```env
VITE_API_URL=https://api.cumbucalabs.com
VITE_SITE_URL=https://cumbucalabs.com
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

Veja `.env.example` para todas as variáveis disponíveis.

## 📊 SEO

O site inclui:
- ✅ Meta tags otimizadas
- ✅ Open Graph para compartilhamento social
- ✅ Twitter Card
- ✅ Canonical URLs
- ✅ Sitemap (adicione em `public/sitemap.xml`)
- ✅ robots.txt (adicione em `public/robots.txt`)

## 🎯 Próximos Passos

- [ ] Integrar formulário de contato com backend
- [ ] Adicionar Google Analytics
- [ ] Criar blog/artigos
- [ ] Expandir portfólio com mais projetos
- [ ] Implementar dark/light mode toggle
- [ ] Adicionar multi-idioma (EN, PT-BR)
- [ ] Integração com redes sociais
- [ ] Newsletter signup

## 📁 Estrutura do Projeto

```
cumbuca_labs/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── logo.png
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── package.json
├── vercel.json
└── README.md
```

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Abra uma issue ou pull request.

## 📝 Licença

Este projeto está sob a licença MIT. Veja LICENSE para mais detalhes.

## 📞 Contato

- **Email**: contato@cumbucalabs.com
- **LinkedIn**: [Cumbuca Labs](https://linkedin.com/company/cumbuca-labs)
- **Instagram**: [@cumbucalabs](https://instagram.com/cumbucalabs)
- **GitHub**: [cumbucalabs](https://github.com/cumbucalabs)

---

**Desenvolvido com ❤️ para Cumbuca Labs**

Última atualização: Abril de 2026
