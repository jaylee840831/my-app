#!/bin/bash

CONTAINER_NAME="my-app-dev"
PORT=3000

# Git Bash on Windows 必備
export MSYS_NO_PATHCONV=1

echo "Stop old dev container..."
docker rm -f $CONTAINER_NAME 2>/dev/null

echo "Starting dev container..."

docker run -it \
  -p $PORT:3000 \
  -v $(pwd -W):/app \
  -v /app/node_modules \
  -w /app \
  node:20-alpine \
  sh -c "npm install && npm run dev"

echo "Dev running: http://localhost:$PORT"