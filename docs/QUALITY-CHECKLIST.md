# Quality Checklist · Контроль качества

<p align="center">
  <strong>Small changes deserve careful verification.</strong><br />
  <em>Даже небольшие изменения заслуживают внимательной проверки.</em>
</p>

<p align="center">🇬🇧 English · 🇷🇺 Русский</p>

---

## 🇬🇧 English

Use this checklist for content updates, interface changes, dependency updates, and release preparation. Not every item applies to every change; use judgment and record anything that could not be checked.

### Content and links

- [ ] Names, dates, claims, and project descriptions are accurate.
- [ ] Internal and external links point to the intended destination.
- [ ] Images, logos, and screenshots are current and have meaningful alt text where appropriate.
- [ ] Public contact details are intentional; no private information or secrets were added.

### Interface and accessibility

- [ ] The page works at a narrow mobile width and a desktop width.
- [ ] No horizontal overflow, clipping, overlap, or broken layout is visible.
- [ ] Navigation and interactive controls work as intended.
- [ ] Keyboard focus is visible and controls have accessible names.
- [ ] Contrast, text readability, and reduced-motion behavior were considered.

### Technical checks

- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] The production preview was checked when the change affects rendering or behavior.
- [ ] Browser console and network errors were reviewed when relevant.
- [ ] No unnecessary dependency, credential, token, or private configuration was introduced.

### Git and release readiness

- [ ] The change is focused and the diff contains no accidental edits.
- [ ] The commit message explains the change.
- [ ] Documentation and metadata were updated where needed.
- [ ] The intended hosting workflow and target branch are understood.
- [ ] Any unverified behavior or known limitation is stated clearly.

## 🇷🇺 Русский

Используй этот список при обновлении контента, интерфейса, зависимостей и подготовке релиза. Не каждый пункт применим к каждому изменению: оцени ситуацию и укажи, что не удалось проверить.

### Контент и ссылки

- [ ] Названия, даты, утверждения и описания проектов точны.
- [ ] Внутренние и внешние ссылки ведут туда, куда задумано.
- [ ] Изображения, логотипы и скриншоты актуальны; информативные изображения имеют осмысленный alt-текст.
- [ ] Публичные контакты добавлены намеренно; приватная информация и секреты не попали в репозиторий.

### Интерфейс и доступность

- [ ] Страница работает на узком мобильном экране и на десктопе.
- [ ] Нет горизонтальной прокрутки, обрезания, наложений и сломанной вёрстки.
- [ ] Навигация и интерактивные элементы работают ожидаемо.
- [ ] Фокус клавиатуры виден, а элементы управления имеют доступные имена.
- [ ] Проверены контраст, читаемость и поведение при уменьшении анимации.

### Технические проверки

- [ ] Команда `npm run lint` завершается успешно.
- [ ] Команда `npm run build` завершается успешно.
- [ ] Production-просмотр проверен, если изменение влияет на отображение или поведение.
- [ ] При необходимости проверены ошибки консоли и сетевых запросов.
- [ ] Не добавлены ненужные зависимости, учётные данные, токены или приватная конфигурация.

### Git и готовность к публикации

- [ ] Изменение сфокусировано, в diff нет случайных правок.
- [ ] Сообщение коммита описывает суть изменения.
- [ ] При необходимости обновлены документация и метаданные.
- [ ] Понятны целевая ветка и используемый сценарий публикации.
- [ ] Непроверенное поведение и известные ограничения описаны честно.
