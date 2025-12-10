# RG Móveis Rústicos - Projeto Fullstack

Este projeto é uma modernização do site da RG Móveis Rústicos, migrando de HTML estático para uma aplicação **React (Vite)** com backend **Java (Spring Boot)**.

## 🚀 Estrutura do Projeto

- **frontend/**: Aplicação React com componentes modulares e estilos CSS.
- **backend/**: API Spring Boot para processamento do formulário de contato.
- **start.sh**: Script para rodar tudo automaticamente.

## 🛠️ Pré-requisitos

Certifique-se de ter instalado:
- **Java JDK 17+**
- **Maven**
- **Node.js LTS**
- **Ngrok** (para deploy público)

## ▶️ Como Rodar Localmente

1.  **Dê permissão de execução ao script:**
    ```bash
    chmod +x start.sh
    ```

2.  **Execute o script:**
    ```bash
    ./start.sh
    ```

3.  **Acesse:**
    - Frontend: [http://localhost:5173](http://localhost:5173)
    - Backend: [http://localhost:8080](http://localhost:8080)

O formulário de contato salvará as mensagens no arquivo `backend/submissions.json`.

---

## 🌐 Deploy Público com Ngrok

Para expor o seu projeto para o mundo (ou testar em mobile), use o **ngrok**.

### 1. Expor o Backend (API)
Abra um terminal e rode:
```bash
ngrok http 8080
```
Copie a URL gerada (ex: `https://abcd-123.ngrok-free.app`).

**Importante:** Vá no arquivo `frontend/src/components/Contact.jsx` e atualize a URL do fetch para o endereço do ngrok se quiser testar a integração remota completa, ou configure o proxy do Vite. Para testes rápidos, o frontend rodando localmente ainda pode acessar o backend localhost se o navegador permitir (mas para acesso externo completo, ambos devem estar expostos).

### 2. Expor o Frontend
Abra **outro** terminal e rode:
```bash
ngrok http 5173
```
Envie este link para qualquer pessoa acessar seu site.

---

## 📂 Estrutura de Arquivos Gerada

### Frontend
- `src/components/`: Contém todos os blocos do site (Header, Hero, About, etc).
- `src/index.css`: Estilos globais migrados do original.
- `src/App.jsx`: Componente principal que monta a página.

### Backend
- `ContactController`: Define o endpoint POST `/api/contato`.
- `ContactService`: Salva os dados em JSON.
- `submissions.json`: Arquivo onde os dados são persistidos.

## 📝 GitHub

Para enviar para seu repositório:

```bash
git init
git add .
git commit -m "Migração inicial para React + Spring Boot"
git branch -M main
git remote add origin https://github.com/rodrigosouzafeliciano/meu-site.git
git push -u origin main
```
