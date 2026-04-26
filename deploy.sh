#!/bin/bash

IMAGE_NAME="my-app"
CONTAINER_NAME="my-app-container"
DOCKER_FILE="docker_build/Dockerfile.prod"
PORT=3000

# Git Bash on Windows 必備
export MSYS_NO_PATHCONV=1

echo "Stop old container..."
docker rm -f $CONTAINER_NAME 2>/dev/null

echo "Build image..."
docker build -t $IMAGE_NAME -f $DOCKER_FILE .

if [ $? -ne 0 ]; then
  echo "Build failed"
  exit 1
fi

echo "▶️ Run container..."
docker run -d \
  -p $PORT:3000 \
  --name $CONTAINER_NAME \
  --restart unless-stopped \
  $IMAGE_NAME

echo "Running: http://localhost:$PORT"