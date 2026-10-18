# Development and Deployment · Разработка и публикация

<p align="center">
  <strong>Reproducible local checks before any public release.</strong><br />
  <em>Воспроизводимые локальные проверки перед каждой публикацией.</em>
</p>

<p align="center">🇬🇧 English · 🇷🇺 Русский</p>

---

## 🇬🇧 English

### Requirements

Use a currently supported Node.js LTS release and npm. If a lockfile is present, keep it in sync with dependency changes and prefer `npm ci` for reproducible installs in CI environments.

### Local development

```bash
git clone https://github.com/sunmeat/me.git
cd me
npm install
npm run dev
```

Vite prints the local address in the terminal. Use that address to test the site in a browser.

### Validation and production preview

```bash
npm run lint
npm run build
npm run preview
```

Resolve lint and build errors before publishing. Preview the generated production bundle rather than relying exclusively on the development server.

### Publishing

The repository has a `deploy` script that invokes `gh-pages -d dist`, while the live domain and project may also be configured through Vercel. These are distinct publishing paths. **Confirm which provider and deployment workflow is authoritative before deploying.** Do not assume that running `npm run deploy` updates the live Vercel site.

For Vercel deployments, verify the linked project, production branch, build command (`npm run build`), and output directory (`dist`) in the project configuration. Exact settings can vary, so inspect the current dashboard and repository configuration before changing them.

### Environment variables and secrets

Never commit API keys, tokens, service credentials, or private environment files. If a feature requires configuration, document variable names and safe setup steps without publishing secret values. Client-side environment variables are not a secure place for server secrets.

### Rollback

If a release causes a production issue, use the hosting provider's deployment history to inspect and, when appropriate, restore a known-good deployment. Follow up with a focused fix and verify the restored site.

## 🇷🇺 Русский

### Требования

Используй поддерживаемую LTS-версию Node.js и npm. Если в репозитории есть lock-файл, поддерживай его в соответствии с зависимостями; для воспроизводимой установки в CI предпочтительна команда `npm ci`.

### Локальная разработка

```bash
git clone https://github.com/sunmeat/me.git
cd me
npm install
npm run dev
```

Vite выведет локальный адрес в терминал. Открой его в браузере для проверки сайта.

### Проверки и production-просмотр

```bash
npm run lint
npm run build
npm run preview
```

Исправь ошибки линтера и сборки до публикации. Проверяй именно собранную production-версию, а не только сервер разработки.

### Публикация

В репозитории есть скрипт `deploy`, запускающий `gh-pages -d dist`, при этом домен и проект могут быть настроены на Vercel. Это разные пути публикации. **Перед деплоем уточни, какой провайдер и сценарий являются основными.** Не предполагай, что команда `npm run deploy` обновит сайт на Vercel.

Для Vercel проверь привязанный проект, production-ветку, команду сборки (`npm run build`) и каталог результата (`dist`) в конфигурации проекта. Настройки могут меняться, поэтому перед изменениями изучи актуальный dashboard и файлы репозитория.

### Переменные окружения и секреты

Никогда не коммить API-ключи, токены, учётные данные сервисов и приватные файлы окружения. Если функции нужна конфигурация, документируй названия переменных и безопасный способ настройки, но не публикуй значения секретов. Клиентские переменные окружения не подходят для хранения серверных секретов.

### Откат

Если релиз вызывает проблему в production, открой историю деплоев хостинг-провайдера, найди заведомо рабочую версию и при необходимости восстанови её. Затем подготовь целевое исправление и проверь восстановленный сайт.
