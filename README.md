## Маршрути

Всі маршрути починаються з `/api/:collection`, де `:collection` - назва колекції в базі даних.

### Створення даних
- **POST /api/:collection/insertOne** - Додати один документ
- **POST /api/:collection/insertMany** - Додати кілька документів

### Читання даних
- **GET /api/:collection/find** - Отримати документи з параметрами:
  - `filter` (JSON) - Фільтрація документів
  - `projection` (JSON) - Вибір полів
  - `sort` (JSON) - Сортування
  - `skip` (number) - Пропустити документи
  - `limit` (number) - Ліміт документів

### Оновлення даних
- **PUT /api/:collection/updateOne** - Оновити один документ
- **PUT /api/:collection/updateMany** - Оновити кілька документів
- **PUT /api/:collection/replaceOne** - Замінити один документ

### Видалення даних
- **DELETE /api/:collection/deleteOne** - Видалити один документ
- **DELETE /api/:collection/deleteMany** - Видалити кілька документів

### Додавання документу
```http
POST /api/users/insertOne
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}


1. **Пагінація та сортування**: Реалізовано через query-параметри у GET-запиті до `/find`
2. **Гнучкі параметри**: 
   - Фільтрація, проекція та сортування приймаються як JSON-рядки
   - Параметри `skip` та `limit` для пагінації
3. **Статуси відповідей**:
   - 201 Created для успішного створення
   - 200 OK для успішних операцій
   - 400 Bad Request для невірних вхідних даних
   - 500 Internal Server Error для помилок сервера
4. **Безпека**: 
   - Використання змінних середовища для конфіденційних даних
   - Обробка помилок у всіх контролерах