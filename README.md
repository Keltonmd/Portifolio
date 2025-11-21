# **Portfólio — Kelton Martins**

> Aplicação de portfólio pessoal desenvolvida em **React + TypeScript**, estruturada com **Vite** e estilizada com **SASS**.
> O projeto foi baseado no template de Yuji Sato (yujisatojr), porém foi **reconstruído, reorganizado e personalizado** para refletir meu estilo e minha identidade profissional.

🔗 **Acesse o site:**
[https://keltonmd.github.io/Portifolio](https://keltonmd.github.io/Portifolio)

---

# **🧭 Visão Geral**

Este repositório contém o código-fonte do meu **portfólio pessoal**, onde apresento meus projetos, habilidades, experiência e formas de contato.
Apesar de ter utilizado um template como referência, fiz alterações profundas no design, organização, componentes, navegação, estilos e estrutura geral da aplicação.

O objetivo principal deste portfólio é demonstrar:

* minha experiência prática com **React + TypeScript**,
* domínio em **componentização**, **responsividade** e **boas práticas**,
* capacidade de trabalhar com **UI moderna**, **animações leves** e **estrutura limpa**,
* integração com serviços externos (ex.: **EmailJS**).

---

# **✨ Funcionalidades principais**

* Navegação completa entre páginas:
  **Home**, **Projetos**, **Habilidades**, **História**, **Contato**.
* Componentes reutilizáveis (NavBar, Footer, FadeIn).
* Layout responsivo com SASS modularizado.
* Envio de mensagens via **EmailJS**.
* Deploy contínuo no **GitHub Pages** via script `npm run deploy`.
* Animações sutis aplicadas em vários elementos (ex.: transições e fade-in).
* Estrutura clara e escalável para fácil manutenção e adição de novas páginas.

---

# **🛠️ Tecnologias utilizadas**

| Categoria                | Tecnologia                     |
| ------------------------ | ------------------------------ |
| **Framework**            | React                          |
| **Linguagem**            | TypeScript                     |
| **Dev Server / Bundler** | Vite                           |
| **Estilos**              | SASS (`.scss`)                 |
| **UI / Ícones**          | Material UI (MUI), FontAwesome |
| **Formulário / Email**   | `@emailjs/browser`             |
| **Deploy**               | GitHub Pages (`gh-pages`)      |

---

# **📂 Estrutura do Projeto**

```
Portifolio
├─ README.md
├─ eslint.config.js
├─ index.html
├─ package.json
├─ public/
│  ├─ favicons e manifest
├─ src/
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ assets/
│  ├─ components/
│  │  ├─ Navigation.tsx
│  │  ├─ Footer.tsx
│  │  └─ FadeIn.tsx
│  ├─ pages/
│  │  ├─ Home.tsx
│  │  ├─ Project.tsx
│  │  ├─ Skills.tsx
│  │  ├─ History.tsx
│  │  └─ Contact.tsx
│  └─ styles/
│     ├─ Home.scss
│     ├─ Project.scss
│     ├─ Skills.scss
│     ├─ History.scss
│     ├─ Contact.scss
│     └─ index.scss
└─ vite.config.ts
```

---

# **🧩 Explicação dos principais arquivos**

### **`index.html`**

Documento principal onde a aplicação React é montada. Contém meta tags, imports iniciais e ponto de montagem `#root`.

### **`main.tsx`**

Entrada da aplicação.
Responsável por:

* inicializar o React,
* renderizar o componente `App`,
* carregar estilos globais.

### **`App.tsx`**

Controla:

* sistema de rotas,
* estrutura global do layout,
* Navbar + página selecionada + Footer.

### **`src/components/`**

Componentes reutilizáveis:

* **Navigation.tsx** – Barra de navegação responsiva (desktop + mobile).
* **Footer.tsx** – Rodapé global.
* **FadeIn.tsx** – Componente para animações suaves de entrada.

### **`src/pages/`**

Cada página do site é isolada:

* **Home** – apresentação inicial e destaque visual.
* **Project** – lista de projetos com descrição e links.
* **Skills** – exibe tecnologias e ícones.
* **History** – uma linha do tempo da minha jornada.
* **Contact** – formulário integrado ao email via EmailJS.

### **`src/styles/`**

Sistema de estilos baseado em SASS, com arquivos separados por página e um arquivo global.

---

# **📜 Scripts disponíveis**

### Instalar dependências

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Pré-visualizar build localmente

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Deploy (GitHub Pages)

```bash
npm run deploy
```

> O script `deploy` usa `gh-pages` e publica automaticamente o diretório `dist` na branch `gh-pages`.

---

# **📬 Envio de e-mail (EmailJS)**

O formulário da página **Contato** utiliza `@emailjs/browser`.

Fluxo:

1. O usuário preenche o formulário.
2. A função do EmailJS envia a mensagem diretamente para meu email configurado.
3. A página exibe feedback (sucesso ou erro).

Vantagens:

* Não exige backend.
* Simples, rápido e seguro para portfólios.

---

# **📱 Responsividade**

Todo o layout foi estruturado com:

* Flexbox e Grid,
* breakpoints personalizados,
* SASS modular,
* componentes adaptativos no mobile.

A navegação possui:

* menu expansível no mobile,
* comportamento fixo e estável no desktop.

---

# **🚀 Deploy**

O deploy é feito pelo comando:

```bash
npm run deploy
```

Que:

1. Gera o build (`npm run build`).
2. Publica automaticamente na branch `gh-pages`.
3. Atualiza o site no GitHub Pages.

O repositório já está configurado com:

* `"homepage": "https://keltonmd.github.io/Portifolio"`
  no `package.json` para ajustar caminhos.

---

# **💡 Origem do projeto**

Baseei a estrutura inicial no template:

**[https://github.com/yujisatojr/react-portfolio-template](https://github.com/yujisatojr/react-portfolio-template)**

Esse modelo serviu como **ponto de partida**, mas passei por todo o código:

* alterando páginas,
* recriando componentes,
* reestruturando estilos,
* ajustando toda navegação,
* substituindo ícones e animações,
* personalizando o design para combinar com minha identidade.

O resultado final é **um portfólio autoral**, usando o template apenas como referência arquitetural.

---

# **📨 Contato**

Se quiser colaborar, sugerir melhorias ou abrir uma discussão:

* Abra uma **issue** no repositório
* Ou me mande uma mensagem pela página de contato do próprio site
* Ou se preferiri um e-mail direto: **keltonmartinsd@gmail.com**

---
