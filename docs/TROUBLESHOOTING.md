# Troubleshooting · Решение проблем

<p align="center">
  <strong>Diagnose the cause before changing the configuration.</strong><br />
  <em>Сначала найди причину, затем меняй конфигурацию.</em>
</p>

<p align="center">🇬🇧 English · 🇷🇺 Русский</p>

---

## 🇬🇧 English

### Dependencies fail to install

- Check your Node.js and npm versions.
- Read the complete error output before retrying.
- If a lockfile exists, try a clean reproducible install with `npm ci`.
- Do not delete the lockfile or upgrade every dependency as a first response.

### The development server does not start

- Confirm that the terminal is in the repository root.
- Run `npm install` and check for installation errors.
- Make sure the configured local port is not already in use.
- Review the first meaningful error in the terminal, not just the final stack trace.

### The production build fails

- Run `npm run build` locally and identify the first failing module or asset.
- Check import paths, filename casing, missing dependencies, and syntax errors.
- Remember that case-sensitive build environments can reveal import mistakes that were hidden on another operating system.
- Re-run `npm run lint` after fixing the issue.

### A page or asset is missing after deployment

- Check the browser console and network panel for failed requests.
- Verify the asset path and filename casing.
- Confirm the deployment uses the expected branch and build output directory.
- Check whether the deployment is complete and whether a cached version is being served.

### Social previews still show old information

- Verify the live HTML and image URL first.
- Check the relevant Open Graph or Twitter metadata.
- Give the platform time to refresh its cache and use its official preview/debugging tool when available.
- Avoid repeatedly changing URLs solely to bypass caching unless there is a clear reason.

### Need to report a defect?

Include the affected URL or component, expected behavior, actual behavior, reproducible steps, browser/device details, and relevant logs with secrets removed. For security concerns, follow [SECURITY.md](../SECURITY.md) instead of publishing exploit details.

## 🇷🇺 Русский

### Не устанавливаются зависимости

- Проверь версии Node.js и npm.
- Прочитай полный текст ошибки перед повторной попыткой.
- Если есть lock-файл, попробуй чистую воспроизводимую установку через `npm ci`.
- Не удаляй lock-файл и не обновляй все зависимости без выяснения причины.

### Не запускается сервер разработки

- Убедись, что терминал открыт в корне репозитория.
- Выполни `npm install` и проверь ошибки установки.
- Проверь, не занят ли настроенный локальный порт.
- Изучи первую содержательную ошибку в терминале, а не только последнюю часть stack trace.

### Не проходит production-сборка

- Выполни `npm run build` локально и найди первый проблемный модуль или ресурс.
- Проверь пути импортов, регистр букв в именах файлов, отсутствующие зависимости и синтаксис.
- Помни, что окружение с чувствительностью к регистру может выявить ошибки импортов, незаметные в другой операционной системе.
- После исправления снова выполни `npm run lint`.

### После деплоя пропала страница или картинка

- Проверь консоль браузера и сетевые запросы.
- Сверь путь и регистр букв в имени ресурса.
- Убедись, что деплой использует нужную ветку и каталог сборки.
- Проверь, завершилась ли публикация и не отдаётся ли кешированная версия.

### В превью соцсетей осталась старая информация

- Сначала проверь HTML сайта и доступность URL изображения.
- Проверь соответствующие Open Graph или Twitter-метаданные.
- Дай платформе время обновить кеш и при наличии используй её официальный инструмент проверки превью.
- Не меняй URL снова и снова только ради обхода кеширования, если для этого нет ясной причины.

### Как сообщить об ошибке?

Укажи URL или компонент, ожидаемое и фактическое поведение, шаги воспроизведения, браузер и устройство, а также относящиеся к проблеме логи без секретов. Проблемы безопасности описывай по правилам [SECURITY.md](../SECURITY.md), не публикуя детали эксплуатации.
