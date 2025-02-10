# JSONPlaceholder Data Viewer

## Опис

Цей проект створює структуру сторінок для відображення користувачів, постів і коментарів, отриманих із [JSONPlaceholder](https://jsonplaceholder.typicode.com/). Використовуємо динамічні маршрути для відображення деталей кожного елемента.

## Функціональність

- `/users` — список користувачів з активними посиланнями.
- `/posts` — список постів з активними посиланнями.
- `/comments` — список коментарів з активними посиланнями.
- `/users/:id` — детальна сторінка певного користувача.
- `/posts/:id` — детальна сторінка певного поста.
- `/comments/:id` — детальна сторінка певного коментаря.

## Встановлення та запуск

1. Клонуйте репозиторій:
   ```sh
   git clone https://github.com/your-repository.git
   cd your-repository
   ```

2. Встановіть залежності:
   ```sh
   npm install
   ```

3. Запустіть проєкт:
   ```sh
   npm start
   ```

## API

Проєкт використовує публічний API [JSONPlaceholder](https://jsonplaceholder.typicode.com/):
- `https://jsonplaceholder.typicode.com/users`
- `https://jsonplaceholder.typicode.com/posts`
- `https://jsonplaceholder.typicode.com/comments`

## Технології

- React / Next.js
- Axios / Fetch API
- React Router (якщо використовується React)
- Tailwind CSS / Bootstrap (за потреби)

## Автор
Hutsaliuk Yuriy
