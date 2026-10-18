# Security Policy

**Project:** [sunmeat/me](https://github.com/sunmeat/me)  
**Maintainer:** [@sunmeat](https://github.com/sunmeat)  
**Policy language:** English and Русский

Thank you for helping keep this project and its visitors safe. This document explains which versions are supported and how to report a potential security vulnerability responsibly.

## English

### Supported Versions

This is a personal portfolio website, not a versioned software product. Security fixes are considered for the latest code on the `master` branch.

| Version | Security updates |
| --- | --- |
| Latest code on `master` | Supported |
| Older commits and snapshots | Not supported |

### Reporting a Vulnerability

**Please do not disclose suspected vulnerabilities in public issues, discussions, pull requests, or social media.** Public disclosure may expose visitors or deployment infrastructure before a fix is available.

1. **Use GitHub's private vulnerability reporting** for this repository if the **Report a vulnerability** option is available in the repository's Security section.
2. If private reporting is unavailable, contact the maintainer privately through the contact options on the [GitHub profile](https://github.com/sunmeat). If you cannot find a private contact method, open a public issue asking only for a secure way to report a security concern. Do not include vulnerability details, exploit steps, secrets, or personal data in that issue.

Please include as much of the following as you can safely share:

- A concise description of the suspected vulnerability and its potential impact.
- The affected URL, file, component, commit, or deployment, if known.
- Clear reproduction steps and a minimal proof of concept, where appropriate.
- Relevant request/response details, logs, screenshots, or error messages, with credentials and personal data removed.
- Any practical mitigation you have identified.

Please make a good-faith effort to avoid accessing, modifying, or deleting other people's data; disrupting service; or degrading the experience of other visitors while investigating.

### What Happens Next

The maintainer will review the report, assess its validity and impact, and may request additional information. If the issue is confirmed, reasonable steps will be taken to investigate, prepare a fix, and publish relevant updates.

This is a personal project, so **no fixed response or remediation time is guaranteed**. Please allow a reasonable amount of time for review. We ask reporters to coordinate disclosure with the maintainer and avoid publishing technical details until the issue has been assessed and, where practical, a fix or mitigation is available.

### Scope

This policy covers security issues in the source code and project configuration maintained in this repository, including vulnerabilities that directly affect the portfolio website and its visitors.

The following are generally outside the project's direct control and are not covered as vulnerabilities in this repository:

- Vulnerabilities in GitHub, Vercel, browsers, operating systems, or other third-party services themselves.
- Issues in third-party websites linked from the portfolio.
- Reports that describe only missing hardening, theoretical concerns without a realistic security impact, or general best-practice recommendations.

If a third-party component is involved, please explain how it creates a concrete, reproducible security impact on this project.

### Disclosure and Rewards

Please follow coordinated disclosure: report privately first and allow time for investigation. This project does not currently operate a bug bounty program, and reports do not imply eligibility for financial compensation. Recognition may be offered at the maintainer's discretion.

---

## Русский

### Поддерживаемые версии

Это персональный сайт-портфолио, а не версионируемый программный продукт. Исправления безопасности рассматриваются для актуального кода в ветке `master`.

| Версия | Обновления безопасности |
| --- | --- |
| Актуальный код в `master` | Поддерживается |
| Старые коммиты и снимки кода | Не поддерживаются |

### Как сообщить об уязвимости

**Пожалуйста, не публикуйте сведения о предполагаемой уязвимости в открытых issues, обсуждениях, pull request или социальных сетях.** До выпуска исправления публичное раскрытие может подвергнуть риску посетителей сайта или инфраструктуру развёртывания.

1. **Используйте приватное сообщение об уязвимости на GitHub**, если в разделе Security этого репозитория доступна функция **Report a vulnerability**.
2. Если приватная отправка недоступна, свяжитесь с сопровождающим проекта конфиденциально через доступные способы связи в [профиле GitHub](https://github.com/sunmeat). Если приватный способ связи найти не удалось, создайте открытый issue только с просьбой предоставить безопасный канал для сообщения об уязвимости. Не указывайте в нём детали уязвимости, шаги эксплуатации, секреты или персональные данные.

По возможности безопасно предоставьте следующую информацию:

- Краткое описание предполагаемой уязвимости и возможных последствий.
- Затронутый URL, файл, компонент, коммит или развёртывание, если они известны.
- Понятные шаги для воспроизведения и минимальный пример, если это уместно.
- Относящиеся к проблеме запросы и ответы, журналы, снимки экрана или сообщения об ошибках. Удалите учётные данные и персональные данные.
- Возможные способы временного снижения риска, если они известны.

При проверке добросовестно избегайте доступа к чужим данным, их изменения или удаления, нарушения работы сервиса и ухудшения опыта других посетителей.

### Что происходит после отправки сообщения

Сопровождающий проекта рассмотрит сообщение, оценит обоснованность и серьёзность проблемы и при необходимости запросит дополнительные сведения. Если уязвимость подтвердится, будут предприняты разумные меры для расследования, подготовки исправления и публикации соответствующих обновлений.

Это персональный проект, поэтому **фиксированные сроки ответа и исправления не гарантируются**. Пожалуйста, предоставьте разумное время для проверки. Мы просим сообщать об уязвимостях конфиденциально и согласовывать раскрытие деталей с сопровождающим проекта, по возможности не публикуя технические подробности до оценки проблемы и подготовки исправления или меры снижения риска.

### Область действия

Политика распространяется на проблемы безопасности исходного кода и конфигурации, сопровождаемых в этом репозитории, включая уязвимости, непосредственно затрагивающие сайт-портфолио и его посетителей.

Как правило, вне прямой зоны ответственности этого репозитория находятся:

- Уязвимости самих GitHub, Vercel, браузеров, операционных систем и других сторонних сервисов.
- Проблемы безопасности сторонних сайтов, на которые ведут ссылки из портфолио.
- Сообщения только об отсутствии дополнительных защитных настроек, теоретические опасения без реалистичного влияния на безопасность и общие рекомендации по улучшению практик.

Если проблема связана со сторонним компонентом, объясните, каким образом она создаёт конкретный и воспроизводимый риск для этого проекта.

### Раскрытие информации и вознаграждения

Придерживайтесь согласованного раскрытия: сначала сообщите об уязвимости конфиденциально и предоставьте время на проверку. В настоящее время у проекта нет программы вознаграждений за найденные уязвимости, и отправка сообщения не подразумевает финансовую компенсацию. Поощрение или упоминание исследователя возможно по усмотрению сопровождающего проекта.

---

<sub>Last reviewed: 18 October 2026 · Последняя проверка: 18 октября 2026</sub>
