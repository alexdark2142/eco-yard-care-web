#!/bin/bash

# Eco Yard Care Web - Docker Run Script

echo "🐳 Starting Eco Yard Care Web with Docker..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

# Build and run with docker-compose
echo "📦 Building and starting the application..."
docker-compose up --build

echo "✅ Application should be running at http://localhost:8080"
echo "🔄 Hot-reloading is enabled - changes to your code will automatically refresh the browser"
echo "⏹️  Press Ctrl+C to stop the application" 