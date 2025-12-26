# Placement Test Audio Files

## Требуются аудиофайлы для теста на определение уровня

Для 5 listening вопросов нужно создать аудиозаписи и поместить их в папку:
`/Users/matvey/Desktop/english 6/public/audio/placement/`

### Список необходимых файлов:

1. **listening-1.mp3**
   - Диалог о времени отправления поезда
   - Ответ: поезд отправляется в 9:45
   - Пример текста: "Excuse me, what time does the next train to London leave?" - "Let me check... The next one departs at quarter to ten."

2. **listening-2.mp3**
   - Диалог о месте встречи
   - Ответ: встречаются в кофейне
   - Пример текста: "Where should we meet tomorrow?" - "How about the coffee shop near the station? It's convenient for both of us."

3. **listening-3.mp3**
   - Описание профессии женщины
   - Ответ: инженер
   - Пример текста: "What do you do for a living?" - "I'm an engineer. I work on designing sustainable energy systems."

4. **listening-4.mp3**
   - Телефонный звонок
   - Ответ: звонит чтобы сделать бронирование
   - Пример текста: "Hello, I'd like to make a reservation for dinner this Saturday evening for four people, please."

5. **listening-5.mp3**
   - Рекомендация говорящего
   - Ответ: рекомендует использовать велосипед
   - Пример текста: "If you want to stay fit and save money on transport, I'd highly recommend cycling to work. It's good exercise and environmentally friendly too."

### Формат файлов:
- **Формат**: MP3
- **Длительность**: 10-20 секунд каждый
- **Качество**: Четкое произношение, минимум фонового шума
- **Голос**: Носитель языка или качественная TTS

### Структура папок:
```
public/
  audio/
    placement/
      listening-1.mp3
      listening-2.mp3
      listening-3.mp3
      listening-4.mp3
      listening-5.mp3
```

## Текущий статус

- ✅ Тест создан с 20 вопросами:
  - 5 Reading (чтение)
  - 5 Listening (аудирование) - **ТРЕБУЮТСЯ АУДИО**
  - 5 Grammar (грамматика)
  - 5 Vocabulary (лексика)

- ✅ Типы обновлены для поддержки listening вопросов
- ✅ Файл вопросов: `content/assessment/placement-20.json`
- ❌ Аудиофайлы: **НЕ СОЗДАНЫ** - нужно добавить вручную

## Как добавить аудио:

1. Создать папку: `mkdir -p public/audio/placement`
2. Записать или сгенерировать 5 аудиофайлов согласно описанию выше
3. Поместить их в `public/audio/placement/`
4. Убедиться что имена файлов соответствуют: `listening-1.mp3` - `listening-5.mp3`

## Альтернатива (временная):

Если аудио пока нет, можно:
- Использовать TTS API (Google Text-to-Speech, Amazon Polly)
- Записать самостоятельно
- Использовать онлайн TTS сервисы (например, https://ttsmp3.com/)
