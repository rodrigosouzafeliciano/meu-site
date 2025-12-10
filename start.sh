#!/bin/bash

# Script de inicialização para o projeto RG Móveis

echo "=================================================="
echo "   Iniciando RG Móveis Rústicos (Fullstack)"
echo "=================================================="

# Function to kill processes on exit
cleanup() {
    echo "Encerrando serviços..."
    kill $(jobs -p)
    exit
}
trap cleanup SIGINT SIGTERM

# Check if Java/Maven is installed
if ! command -v mvn &> /dev/null; then
    echo "ERRO: Maven não encontrado. Por favor instale o Maven (sudo apt install maven)."
    exit 1
fi

# Check if Node/NPM is installed
if ! command -v npm &> /dev/null; then
    echo "ERRO: Node.js/NPM não encontrado. Por favor instale o Node.js."
    exit 1
fi

# Start Backend
echo ">> Iniciando Backend (Spring Boot)..."
cd backend
mvn spring-boot:run > ../backend.log 2>&1 &
BACKEND_PID=$!
echo "Backend rodando (PID: $BACKEND_PID). Logs em backend.log"

# Wait a bit for backend to start
sleep 5

# Start Frontend
echo ">> Iniciando Frontend (Vite)..."
cd ../frontend
if [ ! -d "node_modules" ]; then
    echo "Instalando dependências do frontend..."
    npm install
fi

echo "Iniciando servidor de desenvolvimento..."
npm run dev -- --host &
FRONTEND_PID=$!
echo "Frontend rodando (PID: $FRONTEND_PID)."

echo "=================================================="
echo "   APLICAÇÃO RODANDO"
echo "   Frontend: http://localhost:5173"
echo "   Backend:  http://localhost:8080/api/contato"
echo "=================================================="
echo "Pressione Ctrl+C para parar."

wait
