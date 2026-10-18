# GitHub Community & Automation

This directory contains the repository's contributor experience, security guidance, dependency automation, and manual maintenance workflow.

## Contents

- `DISCUSSION_TEMPLATE/` — structured project-showcase discussions.
- `ISSUE_TEMPLATE/` — a contributor-volunteering issue form.
- `PULL_REQUEST_TEMPLATE/` — a detailed community-process pull request template.
- `workflows/manual-repository-audit.yml` — an opt-in repository audit.
- `PULL_REQUEST_TEMPLATE.md` — the default pull request checklist.
- `pull_request_template.md` — compatibility copy for the lowercase filename used in the reference repository.
- `VULNERABILITY_REPORT.yml` — a human-readable security-reporting guide; GitHub's private vulnerability reporting must also be enabled in repository settings.
- `dependabot.yml` — weekly npm and GitHub Actions dependency updates.

## Principles

- Keep workflows opt-in unless automation is clearly safe and useful.
- Grant GitHub Actions only the permissions it needs.
- Never commit credentials, tokens, private keys, or personal data.
- Prefer focused pull requests with reproducible checks.
- Keep public issue and discussion templates free of sensitive information.

---

# Конфигурация GitHub: сообщество и автоматизация

В этой папке собраны шаблоны для участников проекта, правила безопасности, автоматическое обновление зависимостей и ручная проверка репозитория.

## Содержимое

- `DISCUSSION_TEMPLATE/` — шаблон обсуждения и демонстрации проектов.
- `ISSUE_TEMPLATE/` — форма для желающих помочь проекту.
- `PULL_REQUEST_TEMPLATE/` — расширенный шаблон pull request для изменений процессов сообщества.
- `workflows/manual-repository-audit.yml` — ручной аудит репозитория.
- `PULL_REQUEST_TEMPLATE.md` — основной чек-лист pull request.
- `pull_request_template.md` — совместимая копия с именем в нижнем регистре, как в исходном примере.
- `VULNERABILITY_REPORT.yml` — справочная инструкция по сообщению об уязвимостях; приватное сообщение об уязвимостях также нужно включить в настройках репозитория.
- `dependabot.yml` — еженедельное обновление зависимостей npm и GitHub Actions.

## Принципы

- Не запускать необязательные проверки автоматически без необходимости.
- Выдавать GitHub Actions только минимально необходимые разрешения.
- Не добавлять в репозиторий пароли, токены, приватные ключи и персональные данные.
- Делать pull request небольшими и проверяемыми.
- Не публиковать конфиденциальные сведения в открытых issue и обсуждениях.
