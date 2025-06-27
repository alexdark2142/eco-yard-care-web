#!/bin/bash

# Eco Yard Care Server Startup Script for cPanel

echo "Starting Eco Yard Care Server..."

# Navigate to the application directory
cd /home/abcaqnid/public_html

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install --production
fi

# Start the server
echo "Starting server on port 3001..."
node server.js 