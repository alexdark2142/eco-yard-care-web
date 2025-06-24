# Базовий образ для Node.js
FROM node:20

# Робоча директорія
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо всі файли проекту
COPY . .

# Відкриваємо порт для Node.js сервера
EXPOSE 3001

# Запускаємо сервер
CMD ["node", "server.cjs"] 