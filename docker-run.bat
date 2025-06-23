@echo off
echo 🐳 Starting Eco Yard Care Web with Docker...

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker is not running. Please start Docker and try again.
    pause
    exit /b 1
)

REM Build and run with docker-compose
echo 📦 Building and starting the application...
docker-compose up --build

echo ✅ Application should be running at http://localhost:8080
echo 🔄 Hot-reloading is enabled - changes to your code will automatically refresh the browser
echo ⏹️  Press Ctrl+C to stop the application
pause 