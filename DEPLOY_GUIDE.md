# 🚀 Guia de Deploy - Cumbuca Labs

Este guia fornece instruções passo a passo para fazer deploy do site Cumbuca Labs em produção.

## 📋 Pré-requisitos

- Conta no GitHub (para versionamento)
- Conta no Vercel (recomendado) ou Netlify
- Node.js 18+ instalado localmente
- Git instalado

## 🌐 Opção 1: Deploy em Vercel (Recomendado)

### Passo 1: Preparar o Repositório Git

```bash
cd /home/ubuntu/cumbuca_labs

# Inicializar git (se não estiver inicializado)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit inicial
git commit -m "Initial commit: Cumbuca Labs website"

# Adicionar remote (substitua com seu repositório)
git remote add origin https://github.com/seu-usuario/cumbuca_labs.git

# Fazer push para main branch
git branch -M main
git push -u origin main
```

### Passo 2: Conectar ao Vercel

**Opção A: Via Interface Web (Mais Fácil)**

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Clique em "Import"
5. Vercel detectará automaticamente que é um projeto Vite
6. Clique em "Deploy"

**Opção B: Via CLI**

```bash
# Instale o CLI do Vercel
npm install -g vercel

# Faça login
vercel login

# Deploy
vercel --prod
```

### Passo 3: Configurar Domínio Customizado

1. No painel do Vercel, vá para "Settings" > "Domains"
2. Clique em "Add Domain"
3. Digite seu domínio (ex: cumbucalabs.com)
4. Configure os DNS records conforme instruído

### Passo 4: Configurar Variáveis de Ambiente

1. No painel do Vercel, vá para "Settings" > "Environment Variables"
2. Adicione as seguintes variáveis:

```
VITE_API_URL=https://api.cumbucalabs.com
VITE_SITE_URL=https://cumbucalabs.com
VITE_GOOGLE_ANALYTICS_ID=seu_ga_id
```

## 🌐 Opção 2: Deploy em Netlify

### Passo 1: Preparar o Repositório

Siga o mesmo processo da Opção 1, Passo 1.

### Passo 2: Conectar ao Netlify

**Opção A: Via Interface Web**

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Selecione seu repositório GitHub
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Clique em "Deploy site"

**Opção B: Via CLI**

```bash
# Instale o CLI do Netlify
npm install -g netlify-cli

# Faça login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

### Passo 3: Configurar Domínio

1. No painel do Netlify, vá para "Domain settings"
2. Clique em "Add custom domain"
3. Configure os DNS records

## 🔒 Segurança e Performance

### Checklist de Segurança

- ✅ Ativar HTTPS (automático em Vercel e Netlify)
- ✅ Configurar headers de segurança (veja `vercel.json`)
- ✅ Validar formulários no backend
- ✅ Usar variáveis de ambiente para dados sensíveis
- ✅ Implementar rate limiting no backend

### Otimizações de Performance

- ✅ Minificação de CSS e JS (automático)
- ✅ Compressão Gzip (automático)
- ✅ Cache de assets estáticos (veja `vercel.json`)
- ✅ Lazy loading de imagens
- ✅ CDN global (automático em Vercel/Netlify)

## 📊 Monitoramento

### Google Analytics

1. Crie uma conta em [analytics.google.com](https://analytics.google.com)
2. Adicione sua propriedade web
3. Copie seu ID (GA_ID)
4. Adicione a variável de ambiente:
   ```
   VITE_GOOGLE_ANALYTICS_ID=seu_ga_id
   ```
5. Descomente o script em `index.html`

### Uptime Monitoring

Use serviços como:
- [UptimeRobot](https://uptimerobot.com) (gratuito)
- [Pingdom](https://www.pingdom.com)
- [StatusPage.io](https://www.statuspage.io)

## 🔄 Atualizações Contínuas

### Workflow de Desenvolvimento

```bash
# 1. Criar branch para nova feature
git checkout -b feature/nova-feature

# 2. Fazer mudanças e testar localmente
npm run dev

# 3. Fazer commit
git add .
git commit -m "Add nova feature"

# 4. Fazer push
git push origin feature/nova-feature

# 5. Criar Pull Request no GitHub
# (Vercel fará deploy automático para preview)

# 6. Após aprovação, fazer merge para main
# (Vercel fará deploy automático para produção)
```

## 🐛 Troubleshooting

### Build falha no Vercel

1. Verifique se `npm run build` funciona localmente
2. Verifique se todas as dependências estão em `package.json`
3. Verifique as variáveis de ambiente

### Site carrega lentamente

1. Verifique o tamanho dos bundles em `npm run build`
2. Use DevTools do navegador para identificar gargalos
3. Considere usar lazy loading para componentes pesados

### Formulário não funciona

1. Implemente um backend para processar formulários
2. Use serviços como Formspree, EmailJS ou Netlify Forms
3. Adicione validação no frontend e backend

## 📞 Suporte

- Documentação Vercel: https://vercel.com/docs
- Documentação Netlify: https://docs.netlify.com
- Comunidade React: https://react.dev/community

---

**Última atualização**: Abril de 2026
