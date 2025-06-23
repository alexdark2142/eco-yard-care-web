# Use Node.js 18 Alpine for smaller image size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Expose port 8080
EXPOSE 8080

# Start the development server with host binding for external access
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"] 