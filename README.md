# Dev Projects Dashboard

React-приложение для отслеживания учебных и портфолио-проектов frontend-разработчика.

## Возможности

- просмотр списка проектов;
- фильтрация проектов по статусу;
- обычный и компактный режим отображения;
- сохранение настроек интерфейса в localStorage;
- статистика проектов;
- загрузка информации о GitHub-репозитории через GitHub API;
- поиск другого GitHub-репозитория по owner и названию;
- обработка состояний загрузки и ошибок;
- адаптивный интерфейс.

## Технологии

- React
- JavaScript
- Vite
- CSS
- GitHub API
- localStorage

## Что я изучил в этом проекте

Во время разработки проекта я практиковал:

- React-компоненты;
- JSX;
- props и children;
- useState;
- useEffect;
- useCallback;
- custom hooks;
- controlled inputs;
- условный рендеринг;
- рендеринг списков через map;
- derived data;
- работу с API;
- loading и error states;
- разделение UI, React-логики и API-логики;
- адаптивную верстку;
- базовую accessibility;
- Git и GitHub.

## Структура проекта

```text
src/
├── api/
│   └── github.js
├── components/
│   ├── GitHubRepoInfo.jsx
│   ├── Hero.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectList.jsx
│   ├── ProjectStat.jsx
│   ├── ProjectStats.jsx
│   ├── ProjectStatusFilters.jsx
│   ├── RepoCard.jsx
│   ├── RepoSearchForm.jsx
│   └── SectionHeader.jsx
├── data/
│   ├── projects.js
│   └── projectStatuses.js
├── hooks/
│   └── useRepositoryInfo.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx

```
### Основные части

- `components` — React-компоненты интерфейса;
- `data` — данные проектов и статусы;
- `api` — функции для работы с GitHub API;
- `hooks` — переиспользуемая React-логика;
- `App.jsx` — основной компонент приложения.

## Запуск проекта локально

Клонировать репозиторий:

```bash
git clone https://github.com/KanEDGY3000/dev-projects-dashboard.git
```

Перейти в папку проекта:

```bash
cd dev-projects-dashboard
```

Установить зависимости:

```bash
npm install
```

Запустить dev-сервер:

```bash
npm run dev
```

## Production build

Для создания production-сборки:

```bash
npm run build
```

Для проверки кода:

```bash
npm run lint
```

## Live Demo

[Открыть проект](https://dev-projects-dashboard.vercel.app/)