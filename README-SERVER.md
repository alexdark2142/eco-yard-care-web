# Запуск сервера на cPanel (Namecheap)

## Кроки для налаштування:

### 1. Після деплою через Git
Після того як код буде завантажено на сервер через Git, виконайте наступні кроки:

### 2. Підключення до cPanel через SSH
```bash
ssh abcaqnid@ab-calgary-landscaping.com
```

### 3. Перехід в директорію проекту
```bash
cd public_html
```

### 4. Встановлення залежностей
```bash
npm install --production
```

### 5. Запуск сервера

#### Варіант 1: Прямий запуск
```bash
node server.js
```

#### Варіант 2: Через PM2 (рекомендовано)
```bash
# Встановлення PM2 (якщо не встановлено)
npm install -g pm2

# Запуск через PM2
pm2 start ecosystem.config.js

# Перевірка статусу
pm2 status

# Перегляд логів
pm2 logs eco-yard-care-server
```

#### Варіант 3: Через screen (альтернатива)
```bash
# Встановлення screen
sudo apt-get install screen

# Створення нової сесії
screen -S eco-yard-server

# Запуск сервера
node server.js

# Відключення від сесії (Ctrl+A, потім D)
# Повернення до сесії
screen -r eco-yard-server
```

### 6. Налаштування автозапуску

#### Через PM2:
```bash
pm2 startup
pm2 save
```

#### Через crontab:
```bash
crontab -e
# Додати рядок:
@reboot cd /home/abcaqnid/public_html && node server.js
```

### 7. Перевірка роботи
- Відкрийте сайт: https://ab-calgary-landscaping.com
- Спробуйте відправити форму контакту
- Перевірте логи сервера

### 8. Корисні команди

```bash
# Перегляд процесів
ps aux | grep node

# Зупинка сервера
pkill -f "node server.js"

# Перегляд логів
tail -f /home/abcaqnid/public_html/logs/app.log

# Перезапуск сервера
pm2 restart eco-yard-care-server
```

### 9. Troubleshooting

#### Якщо сервер не запускається:
1. Перевірте чи встановлені всі залежності: `npm install`
2. Перевірте логи: `pm2 logs` або `node server.js`
3. Перевірте чи порт 3001 не зайнятий: `netstat -tulpn | grep 3001`

#### Якщо API не працює:
1. Перевірте чи сервер запущений
2. Перевірте чи правильно налаштований CORS
3. Перевірте чи правильно налаштований SMTP

### 10. Конфігурація домену
Переконайтеся, що ваш домен налаштований на правильний порт або використовуйте reverse proxy для перенаправлення запитів з порту 80 на порт 3001. 