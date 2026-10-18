# Architecture · Архитектура

<p align="center">
  <strong>Small components, clear responsibilities, one coherent portfolio.</strong><br />
  <em>Небольшие компоненты, понятные обязанности, единое портфолио.</em>
</p>

<p align="center">🇬🇧 English · 🇷🇺 Русский</p>

---

## 🇬🇧 English

### Runtime and tooling

The site is a single-page React application built with **React 19** and **Vite 8**. Styling is authored in plain CSS; the interface uses inline SVG rather than an icon library. Oxlint provides a fast lint check.

The primary commands are defined in `package.json`:

- `npm run dev`: start the local Vite development server.
- `npm run lint`: run Oxlint.
- `npm run build`: create the production bundle in `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run deploy`: publish `dist/` through the configured `gh-pages` workflow. Confirm that this matches the intended hosting setup before using it.

### Application composition

`src/App.jsx` composes the page from focused components. The current composition includes navigation, hero, offer, about, skills, apps, websites, open-source projects, experience, contact, estimator, news feed, and footer.

| Location | Responsibility |
| --- | --- |
| `src/App.jsx` | Top-level page composition |
| `src/components/` | Individual portfolio sections and UI components |
| `src/App.css` | Shared styling and visual rules |
| `src/main.jsx` | React application entry point |
| `index.html` | HTML shell and document-level metadata |
| `public/` | Static assets served as-is |
| `package.json` | Scripts and dependency declarations |
| `vite.config.js` | Vite and React plugin configuration |

Check the actual source before assuming a component's data model or side effects. Some sections may have their own data, integrations, or loading behavior.

### Change boundaries

- Place a section-specific behavior in the component that owns that section.
- Put genuinely shared visual rules in the shared stylesheet; avoid duplicating near-identical rules.
- Keep document-wide metadata in the HTML shell or the existing metadata implementation.
- Avoid introducing a dependency when a small native React, CSS, or browser solution is sufficient.
- Keep components understandable and avoid unrelated refactors in a content-only change.

### Data and external services

The portfolio links to independently maintained applications and websites. A linked project can be unavailable or change independently of this repository. Do not imply that this repository operates those services unless the source code confirms it. Firebase is listed among project dependencies; inspect its actual usage and configuration before changing related code.

## 🇷🇺 Русский

### Стек и инструменты

Сайт представляет собой одностраничное React-приложение на **React 19** и **Vite 8**. Стили написаны на обычном CSS, а интерфейс использует встроенные SVG вместо библиотеки иконок. Для быстрой проверки кода применяется Oxlint.

Основные команды определены в `package.json`:

- `npm run dev`: запуск локального сервера разработки Vite.
- `npm run lint`: запуск Oxlint.
- `npm run build`: production-сборка в каталоге `dist/`.
- `npm run preview`: локальный просмотр production-сборки.
- `npm run deploy`: публикация `dist/` через настроенный сценарий `gh-pages`. Перед использованием убедись, что он соответствует текущей схеме хостинга.

### Состав приложения

Файл `src/App.jsx` собирает страницу из специализированных компонентов. Сейчас композиция включает навигацию, главный экран, предложение, разделы «Обо мне», навыки, приложения, сайты, open-source-проекты, опыт, контакты, калькулятор, новостную ленту и подвал.

| Путь | Назначение |
| --- | --- |
| `src/App.jsx` | Композиция страницы верхнего уровня |
| `src/components/` | Отдельные секции портфолио и UI-компоненты |
| `src/App.css` | Общие стили и визуальные правила |
| `src/main.jsx` | Точка входа React-приложения |
| `index.html` | HTML-оболочка и метаданные документа |
| `public/` | Статические файлы, отдаваемые без обработки |
| `package.json` | Скрипты и зависимости |
| `vite.config.js` | Конфигурация Vite и React-плагина |

Перед изменением проверяй исходный код, не предполагая заранее модель данных или побочные эффекты конкретного компонента. У отдельных секций могут быть собственные данные, интеграции или логика загрузки.

### Границы изменений

- Поведение отдельной секции размещай в компоненте, который за неё отвечает.
- Общие визуальные правила храни в общей таблице стилей, не размножая почти одинаковые правила.
- Глобальные метаданные размещай в HTML-оболочке или уже существующем механизме управления метаданными.
- Не добавляй зависимость, если задачу достаточно решить средствами React, CSS или браузера.
- Сохраняй компоненты понятными и не смешивай контентные изменения с посторонним рефакторингом.

### Данные и внешние сервисы

Портфолио ссылается на независимо поддерживаемые приложения и сайты. Внешний проект может быть недоступен или измениться независимо от этого репозитория. Не утверждай, что данный репозиторий управляет сторонним сервисом, если это не подтверждается кодом. Firebase присутствует среди зависимостей: перед изменением соответствующей логики изучи фактическое использование и конфигурацию.
