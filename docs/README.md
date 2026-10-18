# Project Documentation · Документация проекта

<p align="center">
  <strong>A field guide to building, maintaining, and publishing sunmeat.shop.</strong><br />
  <em>Практическое руководство по разработке, поддержке и публикации sunmeat.shop.</em>
</p>

<p align="center">🇬🇧 English · 🇷🇺 Русский</p>

---

## 🇬🇧 English

Welcome to the documentation for **[sunmeat/me](https://github.com/sunmeat/me)**, the source repository for [sunmeat.shop](https://sunmeat.shop). This is a personal portfolio, not a generic starter template: changes should preserve its distinct identity and accurately represent the work it showcases.

### Documentation map

| Document | What it covers |
| --- | --- |
| [Architecture](ARCHITECTURE.md) | Application composition, component boundaries, and where code belongs |
| [Content guide](CONTENT-GUIDE.md) | Updating projects, skills, experience, links, and personal information responsibly |
| [Design system](DESIGN-SYSTEM.md) | Visual language, responsive behavior, typography, and interaction principles |
| [Deployment](DEPLOYMENT.md) | Local development, production builds, and publishing options |
| [Quality checklist](QUALITY-CHECKLIST.md) | Review steps before committing or releasing a change |
| [SEO and metadata](SEO-AND-METADATA.md) | Search previews, social cards, canonical URLs, and structured data |
| [Troubleshooting](TROUBLESHOOTING.md) | Common local-development and publishing problems |

### Quick start

```bash
git clone https://github.com/sunmeat/me.git
cd me
npm install
npm run dev
```

Before submitting changes, run `npm run lint` and `npm run build`.

### GitHub community and automation

Repository templates, Dependabot, security-reporting guidance, and the manual audit workflow live in [`.github/`](../.github/README.md).

### Project principles

- Keep the portfolio fast, responsive, and deliberately lightweight.
- Prefer focused changes over broad refactors.
- Preserve the dark, terminal-inspired identity and green accent.
- Verify claims, links, project details, and public contact information before publishing.
- Never commit credentials, private data, or production secrets.

## 🇷🇺 Русский

Добро пожаловать в документацию **[sunmeat/me](https://github.com/sunmeat/me)**, репозитория исходного кода сайта [sunmeat.shop](https://sunmeat.shop). Это персональное портфолио, а не безликий шаблон: изменения должны сохранять индивидуальный характер проекта и точно отражать представленные работы.

### Карта документации

| Документ | Что внутри |
| --- | --- |
| [Архитектура](ARCHITECTURE.md) | Структура приложения, границы компонентов и организация кода |
| [Работа с контентом](CONTENT-GUIDE.md) | Обновление проектов, навыков, опыта, ссылок и личной информации |
| [Дизайн-система](DESIGN-SYSTEM.md) | Визуальный язык, адаптивность, типографика и принципы взаимодействия |
| [Публикация](DEPLOYMENT.md) | Локальная разработка, production-сборка и варианты публикации |
| [Контроль качества](QUALITY-CHECKLIST.md) | Проверки перед коммитом и выпуском изменений |
| [SEO и метаданные](SEO-AND-METADATA.md) | Поисковые сниппеты, превью соцсетей, canonical URL и структурированные данные |
| [Решение проблем](TROUBLESHOOTING.md) | Частые ошибки локальной разработки и публикации |

### Быстрый запуск

```bash
git clone https://github.com/sunmeat/me.git
cd me
npm install
npm run dev
```

Перед отправкой изменений выполни `npm run lint` и `npm run build`.

### Сообщество GitHub и автоматизация

Шаблоны для участников, Dependabot, инструкции по безопасности и ручной аудит собраны в [`.github/`](../.github/README.md).

### Принципы проекта

- Сохранять скорость, адаптивность и намеренную лёгкость сайта.
- Предпочитать небольшие целевые изменения масштабным переделкам.
- Беречь тёмную терминальную эстетику и зелёный акцент.
- Проверять факты, ссылки, сведения о проектах и публичные контакты перед публикацией.
- Никогда не добавлять в Git учётные данные, приватную информацию или production-секреты.
