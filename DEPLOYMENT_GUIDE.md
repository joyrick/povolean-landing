# GitHub Repository & Vercel Deployment Guide

## 🐙 Vytvorenie GitHub Repository

### 1. Vytvorte nový repository na GitHub

1. Prejdite na [GitHub.com](https://github.com)
2. Kliknite na "New repository" alebo "+" → "New repository"
3. Nastavte repository:
   - **Repository name**: `povolean-landing`
   - **Description**: `Povolean - Automatizácia schvaľovacích procesov`
   - **Public/Private**: Zvoľte podľa potreby (Public pre Vercel free tier)
   - **Nezaškrtávajte** "Add a README file" (už máme)

### 2. Inicializujte Git a pushnutie kódu

Otvorte terminál v priečinku projektu a spustite:

```bash
# Inicializujte git repository (ak ešte nie je)
git init

# Pridajte všetky súbory
git add .

# Prvý commit
git commit -m "Initial commit: Povolean landing page"

# Pridajte remote origin (nahraďte YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/povolean-landing.git

# Pushnutie na GitHub
git push -u origin main
```

## 🚀 Nasadenie na Vercel

### Metóda 1: Vercel Dashboard (Odporúčané)

1. Prejdite na [vercel.com](https://vercel.com)
2. Zalogujte sa cez GitHub účet
3. Kliknite "New Project"
4. Import GitHub repository `povolean-landing`
5. Konfigurácia:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (predvolené)
   - **Output Directory**: `dist` (predvolené)
   - **Install Command**: `npm install` (predvolené)
6. Kliknite "Deploy"

### Metóda 2: Vercel CLI

```bash
# Nainštalujte Vercel CLI
npm i -g vercel

# Prihlásenie
vercel login

# Nasadenie
vercel

# Pre produkčné nasadenie
vercel --prod
```

## ⚙️ Automatické nasadenie

Po pripojení k Vercel sa každý push na `main` branch automaticky nasadí:

```bash
# Príklad workflow pre nové funkcionality
git add .
git commit -m "feat: pridaná nová funkcionalita"
git push origin main
# ↑ Automaticky sa spustí nasadenie na Vercel
```

## 🌐 Vlastná doména (Voliteľné)

1. V Vercel dashboard prejdite do projektu
2. Settings → Domains
3. Pridajte vašu doménu
4. Nakonfigurujte DNS záznamy podľa inštrukcií

## 📊 Environment Variables (Ak potrebné)

Pre produkčné API kľúče alebo konfiguráciu:

1. Vercel Dashboard → Project → Settings → Environment Variables
2. Pridajte potrebné premenné
3. Redeploy projekt

## 🔧 Riešenie problémov

### Build chyby
```bash
# Lokálne testovanie buildu
npm run build
npm run preview
```

### Routing problémy
- `vercel.json` už obsahuje správne rewrites pre SPA
- Všetky routes budú fungovať správne

## 📱 Performance Optimalizácie

Projekt už obsahuje:
- ✅ Vite pre optimalizovaný build
- ✅ Code splitting
- ✅ Asset caching headers v `vercel.json`
- ✅ Optimalizované závislosti

## 🎯 Live URL

Po nasadení bude váš web dostupný na:
- `https://povolean-landing.vercel.app` (Vercel subdomain)
- `https://your-custom-domain.com` (ak nakonfigurujete vlastnú doménu)
