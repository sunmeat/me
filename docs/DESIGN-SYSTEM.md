# Design System · Дизайн-система

<p align="center">
  <strong>A quiet terminal aesthetic, built for real work and readable content.</strong><br />
  <em>Сдержанная терминальная эстетика для реальных проектов и читаемого контента.</em>
</p>

<p align="center">🇬🇧 English · 🇷🇺 Русский</p>

---

## 🇬🇧 English

### Visual identity

The portfolio uses a dark, terminal-inspired visual language. Its established palette centers on a near-black background (`#0e1116`) and a vivid green accent (`#3ddc84`). Typography is based on Space Grotesk for display text, Inter for body copy, and JetBrains Mono for terminal-like labels and technical details.

Treat these values as established design references, not permission to replace the existing styling architecture. Check `src/App.css` before introducing or changing tokens.

### Design principles

- **Purpose before decoration.** Visual elements should clarify content, hierarchy, or interaction.
- **Strong hierarchy.** Make section titles, project names, supporting details, and actions easy to distinguish.
- **Responsive by default.** Support narrow phones, tablets, laptops, and wide desktop screens.
- **Consistent interaction.** Links, buttons, focus states, and active navigation should behave predictably.
- **Low visual noise.** Avoid unnecessary gradients, ornamental cards, and dependencies that dilute the existing identity.

### Responsive review

When a layout changes, check at least one narrow mobile width and one desktop width. Look for horizontal overflow, clipped text, overlapping fixed navigation, undersized controls, awkward line breaks, and images that distort or dominate the content.

### Accessibility

- Preserve semantic headings, landmarks, and native controls.
- Ensure interactive elements are keyboard reachable and have visible focus.
- Do not communicate state through color alone.
- Provide useful alternative text for informative images and accessible names for icon-only controls.
- Respect reduced-motion preferences when animations are involved.
- Test contrast in the actual dark theme rather than relying on color names.

The project targets accessibility as an ongoing practice; this document does not claim that every page has passed an independent audit.

## 🇷🇺 Русский

### Визуальная идентичность

Портфолио использует тёмный визуальный язык с терминальными мотивами. Основу палитры составляют почти чёрный фон (`#0e1116`) и выразительный зелёный акцент (`#3ddc84`). В типографике используются Space Grotesk для заголовков, Inter для основного текста и JetBrains Mono для терминальных меток и технических деталей.

Считай эти значения установленными ориентирами, а не поводом заменять существующую архитектуру стилей. Перед добавлением или изменением токенов изучи `src/App.css`.

### Принципы дизайна

- **Сначала смысл, затем декор.** Элементы интерфейса должны прояснять содержание, иерархию или взаимодействие.
- **Выразительная иерархия.** Заголовки секций, названия проектов, пояснения и действия должны легко различаться.
- **Адаптивность по умолчанию.** Поддерживай узкие телефоны, планшеты, ноутбуки и широкие мониторы.
- **Последовательное взаимодействие.** Ссылки, кнопки, состояния фокуса и активная навигация должны вести себя предсказуемо.
- **Минимум визуального шума.** Избегай лишних градиентов, декоративных карточек и зависимостей, размывающих характер проекта.

### Проверка адаптивности

При изменении макета проверь как минимум узкий мобильный экран и десктоп. Ищи горизонтальную прокрутку, обрезанный текст, конфликты с фиксированной навигацией, слишком маленькие элементы управления, неудачные переносы и искажённые либо чрезмерно крупные изображения.

### Доступность

- Сохраняй семантические заголовки, области страницы и нативные элементы управления.
- Обеспечивай доступ с клавиатуры и видимый фокус.
- Не передавай состояние только цветом.
- Добавляй полезный альтернативный текст информативным изображениям и доступные имена кнопкам только с иконками.
- Учитывай настройку уменьшения анимации.
- Проверяй контраст в реальной тёмной теме, а не по названиям цветов.

Доступность рассматривается как постоянная задача. Этот документ не означает, что каждая страница прошла независимый аудит.
