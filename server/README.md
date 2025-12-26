# Reviews Server

Express.js сервер для системы модерации отзывов с SQLite базой данных.

## Функции

- ✅ Публичный просмотр одобренных отзывов
- ✅ Отправка новых отзывов на модерацию
- ✅ Админ-панель для модерации (одобрение/отклонение/удаление)
- ✅ Защита от XSS атак (санитизация ввода)
- ✅ Rate limiting (5 отзывов за 15 минут с одного IP)
- ✅ Аутентификация админа через Bearer token
- ✅ Пагинация для админ-панели
- ✅ Настраиваемый CORS для production

## Установка

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл `.env` на основе `.env.example`:
```bash
cp .env.example .env
```

3. **ВАЖНО**: Сгенерируйте безопасный admin token:
```bash
# macOS/Linux
openssl rand -hex 32

# Или используйте Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

4. Откройте `.env` и замените `your-secure-admin-token-here` на сгенерированный токен:
```env
ADMIN_TOKEN=ваш_сгенерированный_токен_здесь
```

## Переменные окружения

| Переменная | Обязательная | Описание |
|------------|--------------|----------|
| `PORT` | Нет | Порт сервера (по умолчанию: 3001) |
| `ADMIN_TOKEN` | **ДА** | Токен для доступа к админ-панели |
| `ALLOWED_ORIGINS` | Нет | Разрешенные origins для CORS (через запятую) |

### Пример production конфигурации:

```env
PORT=3001
ADMIN_TOKEN=a1b2c3d4e5f6...your-secure-token
ALLOWED_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

## Запуск

### Development:
```bash
npm run dev
```

### Production:
```bash
npm start
```

Сервер будет доступен на `http://0.0.0.0:3001`

## API Endpoints

### Публичные endpoints

#### GET /reviews/approved
Получить все одобренные отзывы.

**Response:**
```json
[
  {
    "id": "Иван",
    "text": "Отличный курс!",
    "isTrue": true
  }
]
```

#### POST /reviews
Отправить новый отзыв на модерацию.

**Body:**
```json
{
  "id": "Имя (2-40 символов)",
  "text": "Текст отзыва (10-500 символов)"
}
```

**Rate Limit:** 5 запросов за 15 минут с одного IP

**Response:**
```json
{
  "reviewId": "uuid",
  "id": "Имя",
  "text": "Текст",
  "isTrue": false,
  "message": "Review submitted for moderation"
}
```

### Админ endpoints (требуют Bearer token)

Все админ-эндпоинты требуют заголовок:
```
Authorization: Bearer YOUR_ADMIN_TOKEN
```

#### GET /admin/reviews?page=1&limit=50
Получить все отзывы с пагинацией.

**Query params:**
- `page` (default: 1) - номер страницы
- `limit` (default: 50) - кол-во на странице

**Response:**
```json
{
  "reviews": [...],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 123,
    "totalPages": 3
  }
}
```

#### PATCH /admin/reviews/:reviewId/approve
Одобрить отзыв (isTrue = true).

#### PATCH /admin/reviews/:reviewId/reject
Отклонить отзыв (isTrue = false).

#### DELETE /admin/reviews/:reviewId
Удалить отзыв.

#### GET /health
Health check endpoint.

## База данных

SQLite база данных (`reviews.db`) создается автоматически при первом запуске.

**Схема таблицы `reviews`:**
```sql
CREATE TABLE reviews (
  reviewId TEXT PRIMARY KEY,    -- UUID
  id TEXT NOT NULL,              -- Имя пользователя (2-40 символов)
  text TEXT NOT NULL,            -- Текст отзыва (10-500 символов)
  isTrue INTEGER NOT NULL,       -- 0 = на модерации, 1 = одобрен
  createdAt INTEGER NOT NULL     -- Timestamp
)
```

## Безопасность

✅ **Обязательный admin token** - сервер не запустится без `ADMIN_TOKEN`
✅ **Санитизация ввода** - защита от XSS атак
✅ **Rate limiting** - защита от спама (5 отзывов/15 мин)
✅ **Настраиваемый CORS** - ограничение origins в production
✅ **Валидация данных** - проверка длины и типов на сервере

### Рекомендации для production:

1. **Используйте HTTPS** - не передавайте токен по HTTP
2. **Установите ALLOWED_ORIGINS** - не используйте `origin: true` в production
3. **Регулярно меняйте ADMIN_TOKEN**
4. **Храните .env в безопасном месте** - не коммитьте в git
5. **Используйте reverse proxy** (nginx) для rate limiting на уровне сервера
6. **Настройте firewall** - ограничьте доступ к порту сервера

## Troubleshooting

### Ошибка "ADMIN_TOKEN environment variable is not set"
Создайте файл `.env` и установите `ADMIN_TOKEN`:
```bash
echo "ADMIN_TOKEN=$(openssl rand -hex 32)" > .env
```

### CORS errors в браузере
Убедитесь, что ваш origin добавлен в `ALLOWED_ORIGINS`:
```env
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
```

### База данных не создается
Проверьте права доступа к папке сервера:
```bash
chmod 755 /path/to/server
```

## License

MIT
