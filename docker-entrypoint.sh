#!/bin/sh
set -e

# Em produção, roda as migrações (deploy) antes de subir a aplicação
if [ "$NODE_ENV" = "production" ]; then
  echo ">>> Aplicando migrações no banco de dados Postgres (Production)..."
  prisma migrate deploy
fi

echo ">>> Iniciando aplicação Next.js..."
exec "$@"
