RG MÓVEIS RÚSTICOS – PROJETO FULLSTACK 🪵🧩
========================================

Projeto fullstack com frontend em React (Vite) e backend em Java Spring Boot,
integrados via API REST e com opção de acesso externo usando ngrok 🌐


📁 ESTRUTURA DO PROJETO
-----------------------

RG Móveis Rústicos - Projeto Fullstack/
│
├── frontend/        → Aplicação React (Vite)
├── backend/         → API Java Spring Boot
├── index.html       → Versão estática inicial
├── start.sh         → Script auxiliar (opcional)
└── README.md


✅ REQUISITOS DO SISTEMA
-----------------------

- Linux / macOS / Windows
- Node.js (LTS)
- npm
- Java JDK 17
- Maven
- ngrok (opcional – acesso externo)


🛠 INSTALAÇÃO DOS PRÉ-REQUISITOS (LINUX)
----------------------------------------

Node.js e npm:
sudo apt install nodejs npm -y

Java 17 e Maven:
sudo apt install openjdk-17-jdk maven -y

Verificação:
node -v
npm -v
java -version
mvn -version


▶️ EXECUTANDO O PROJETO LOCALMENTE
---------------------------------

1️⃣ BACKEND (SPRING BOOT)

cd backend
mvn spring-boot:run

Resultado esperado:
Tomcat started on port 8080 ✅

API disponível em:
http://localhost:8080

Endpoint ativo:
POST /api/contato


2️⃣ FRONTEND (REACT + VITE)

cd frontend
npm install
npm run dev

Frontend disponível em:
http://localhost:5173 🚀


🔗 INTEGRAÇÃO FRONTEND ↔ BACKEND
--------------------------------

O formulário do frontend envia os dados para:

POST http://localhost:8080/api/contato

Campos enviados:
- name
- email
- phone
- interest
- message

O backend recebe os dados, cria o ContactDTO
e processa a submissão via ContactService 🧠


🌍 EXPOSIÇÃO DO BACKEND COM NGROK (OPCIONAL)
--------------------------------------------

Permite acesso externo ao backend local.

Instalação do ngrok (Linux):
sudo snap install ngrok

Autenticação (obrigatória):
1. Criar conta em https://dashboard.ngrok.com
2. Copiar o Authtoken 🔑
3. Executar:
ngrok config add-authtoken SEU_TOKEN_AQUI


🔌 SUBINDO O TÚNEL NGROK
-----------------------

Com o backend rodando:

ngrok http 8080

Exemplo:
Forwarding https://xxxx.ngrok-free.dev -> http://localhost:8080


✏️ AJUSTE NECESSÁRIO NO FRONTEND PARA NGROK
-------------------------------------------

Arquivo:
frontend/src/components/Contact.jsx

Alterar a URL do fetch:
fetch('https://xxxx.ngrok-free.dev/api/contato', {...})

Sempre que o ngrok gerar um novo domínio,
essa URL deve ser atualizada ♻️


🔐 CONFIGURAÇÃO DE CORS
----------------------

Arquivo:
backend/src/main/java/com/rgmoveis/backend/config/CorsConfig.java

Adicionar domínios permitidos:
- http://localhost:5173
- https://xxxx.ngrok-free.dev

Ou, para ambiente de prova:
allowedOrigins("*")


🧪 COMO TESTAR O PROJETO
-----------------------

1. Rodar o backend
2. Rodar o ngrok (opcional)
3. Rodar o frontend
4. Acessar http://localhost:5173
5. Enviar o formulário de contato ✉️
6. Conferir:
   - Logs no terminal do backend
   - Requisição POST no painel do ngrok


📌 OBSERVAÇÕES TÉCNICAS
----------------------

- Backend é uma API REST
- Não há rota GET na raiz (/)
- /api/contato aceita apenas POST
- Respostas 405 em GET são esperadas
- Projeto pronto para demo, prova ou evolução 🚧➡️🏭


⚙️ TECNOLOGIAS UTILIZADAS
-------------------------

- React + Vite
- Java Spring Boot 3
- Maven
- Fetch API
- ngrok


✅ Projeto pronto para execução local e demonstração externa.
