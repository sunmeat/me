# Accessibility Statement

**Project:** [sunmeat/me](https://github.com/sunmeat/me) · [sunmeat.dev](https://sunmeat.dev)  
**Maintainer:** [@sunmeat](https://github.com/sunmeat)  
**Languages:** English and Русский

This document describes the accessibility principles guiding this portfolio, the practices the project aims to follow, and how to report an accessibility barrier. Accessibility is an ongoing responsibility, not a one-time checkbox.

## English

### Our Commitment

The goal of this portfolio is to make its content, projects, and contact paths usable by as many people as reasonably possible, including people who use assistive technologies or navigate in different ways.

The project uses the **Web Content Accessibility Guidelines (WCAG) 2.2, Level AA** as its design and evaluation reference. This is a target for ongoing work, **not a claim of verified conformance or certification**. No independent accessibility audit or complete assistive-technology test is represented by this document.

Reference: [W3C Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).

### Accessibility Principles

Development and review should consider the four WCAG principles:

- **Perceivable:** provide meaningful text alternatives, sufficient contrast, readable content, and information that is not conveyed by color alone.
- **Operable:** support keyboard navigation, visible focus, usable controls, and responsive layouts across screen sizes.
- **Understandable:** use clear language, consistent navigation, descriptive labels, and predictable interactions.
- **Robust:** prefer semantic HTML and standard web patterns that work with modern browsers and assistive technologies.

### Design and Implementation Practices

The following practices guide accessibility-related changes:

- **Structure and semantics:** use a logical heading hierarchy, landmarks, descriptive page titles, and native HTML elements according to their purpose.
- **Keyboard access:** ensure interactive features can be reached and operated with a keyboard wherever the interaction does not inherently require another input method. Avoid keyboard traps and preserve a visible focus indicator.
- **Color and contrast:** do not use color as the only signal. Check text, controls, borders, and focus indicators for sufficient contrast, including in the site's dark visual theme.
- **Text alternatives:** give informative images meaningful alternative text. Keep purely decorative images out of the accessibility tree where appropriate. Provide accessible names for icon-only controls.
- **Responsive and zoom support:** aim to keep content and functionality usable on mobile devices, at increased zoom, and at narrow viewport widths without unnecessary horizontal scrolling.
- **Motion and animation:** avoid unnecessary motion, respect reduced-motion preferences where applicable, and do not rely on animation alone to communicate important information.
- **Forms and controls:** provide associated labels, understandable instructions, clear validation feedback, and programmatically exposed states.
- **Language:** declare the primary language of each page and identify passages in another language when practical.
- **Links:** use meaningful link text so that destinations make sense outside their surrounding paragraph.
- **Third-party content:** recognize that embedded services and linked websites may have their own accessibility limitations outside this repository's direct control.

These are development objectives. Their presence in this document does not mean every item has been fully implemented or independently verified.

### Compatibility and Assistive Technology

The site is intended for use with current mainstream browsers and a range of devices. Actual accessibility can vary with browser versions, operating systems, assistive technologies, and third-party services.

If a specific page, browser, device, or assistive technology causes a barrier, please include those details in your report so the issue can be reproduced.

### Known Limitations and Continuous Improvement

Accessibility is evaluated as the site evolves. The project may contain barriers that have not yet been identified, and third-party content may not be fully accessible. No claim is made that every page currently meets every WCAG 2.2 Level AA success criterion.

When issues are reported or discovered, they may be prioritized according to their impact, the number of people affected, severity, and the feasibility of a reliable fix.

### Report an Accessibility Issue

If you encounter an accessibility barrier, feedback is welcome.

1. Open the repository's [Issues](https://github.com/sunmeat/me/issues) page.
2. Create a report with a clear title and a description of the barrier.
3. Where possible, include the affected page or URL, browser and operating system, assistive technology (if used), steps to reproduce the issue, and the result you expected.
4. Avoid including passwords, authentication tokens, private information, or other sensitive data.

If you cannot use GitHub Issues accessibly or prefer another contact method, use the contact options listed on the [maintainer's GitHub profile](https://github.com/sunmeat).

Please report security vulnerabilities privately according to the repository's [Security Policy](https://github.com/sunmeat/me/blob/master/SECURITY.md), rather than in a public accessibility issue.

### Response and Review

Reports will be reviewed as time and project capacity allow. The project does not promise a fixed response or remediation deadline. Additional information may be requested to help reproduce and understand the issue.

This statement will be reviewed as accessibility practices and the website change.

---

## Русский

### Наш подход

Цель этого портфолио — сделать его содержание, проекты и способы связи доступными максимально широкому кругу людей, в том числе тем, кто использует вспомогательные технологии или взаимодействует с сайтом альтернативными способами.

В качестве ориентира для разработки и проверки проект использует **Рекомендации по доступности веб-контента WCAG 2.2, уровень AA**. Это цель постоянного улучшения, **а не заявление о подтверждённом соответствии стандарту или наличии сертификации**. Этот документ не подразумевает, что независимый аудит доступности или полное тестирование со вспомогательными технологиями уже проводились.

Стандарт: [Рекомендации W3C по доступности веб-контента (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).

### Принципы доступности

При разработке и проверке учитываются четыре принципа WCAG:

- **Воспринимаемость:** содержательные текстовые альтернативы, достаточная контрастность, читаемый текст и информация, не зависящая исключительно от цвета.
- **Управляемость:** навигация с клавиатуры, заметный индикатор фокуса, удобные элементы управления и адаптация к разным размерам экрана.
- **Понятность:** ясный язык, последовательная навигация, понятные подписи и предсказуемое поведение интерфейса.
- **Надёжность:** семантический HTML и стандартные веб-паттерны, совместимые с современными браузерами и вспомогательными технологиями.

### Практики проектирования и разработки

При внесении изменений, связанных с доступностью, проект ориентируется на следующие практики:

- **Структура и семантика:** логичная иерархия заголовков, области навигации, понятные заголовки страниц и нативные HTML-элементы по назначению.
- **Управление с клавиатуры:** интерактивные функции должны быть доступны с клавиатуры, если сама природа взаимодействия не требует другого способа ввода. Следует избегать клавиатурных ловушек и сохранять заметный индикатор фокуса.
- **Цвет и контрастность:** цвет не должен быть единственным способом передать информацию. Контраст текста, элементов управления, границ и индикаторов фокуса следует проверять, в том числе для тёмной темы сайта.
- **Текстовые альтернативы:** содержательные изображения должны иметь осмысленный альтернативный текст. Декоративные изображения по возможности исключаются из дерева доступности. Элементы управления, состоящие только из значков, должны иметь доступные названия.
- **Адаптивность и масштабирование:** сайт должен оставаться удобным на мобильных устройствах, при увеличении масштаба и на узких экранах без неоправданной горизонтальной прокрутки.
- **Движение и анимация:** следует избегать лишней анимации, учитывать настройку уменьшения движения, когда это применимо, и не передавать важную информацию исключительно через анимацию.
- **Формы и элементы управления:** подписи должны быть связаны с полями, инструкции понятны, ошибки валидации заметны, а состояния элементов доступны вспомогательным технологиям.
- **Язык:** для каждой страницы следует указывать основной язык и, по возможности, обозначать фрагменты на другом языке.
- **Ссылки:** текст ссылки должен достаточно ясно описывать назначение даже вне окружающего абзаца.
- **Сторонний контент:** встроенные сервисы и внешние сайты могут иметь собственные ограничения доступности, не находящиеся под непосредственным контролем этого репозитория.

Это цели разработки. Сам факт их перечисления в документе не означает, что каждый пункт уже полностью реализован или прошёл независимую проверку.

### Совместимость и вспомогательные технологии

Сайт рассчитан на использование в современных распространённых браузерах и на разных устройствах. Фактическая доступность может зависеть от версий браузера, операционной системы, вспомогательных технологий и сторонних сервисов.

Если проблема возникает на определённой странице, в конкретном браузере, устройстве или вспомогательной технологии, укажите эти сведения в сообщении, чтобы проблему можно было воспроизвести.

### Ограничения и постоянное улучшение

Доступность пересматривается по мере развития сайта. На проекте могут оставаться невыявленные барьеры, а сторонний контент может быть доступен не полностью. Мы не заявляем, что каждая страница на данный момент соответствует всем критериям WCAG 2.2 уровня AA.

При рассмотрении обнаруженных проблем приоритет может определяться их влиянием, количеством затронутых пользователей, серьёзностью и возможностью надёжного исправления.

### Как сообщить о проблеме доступности

Если вы столкнулись с барьером доступности, мы будем признательны за обратную связь.

1. Откройте страницу [Issues репозитория](https://github.com/sunmeat/me/issues).
2. Создайте сообщение с понятным заголовком и описанием проблемы.
3. По возможности укажите затронутую страницу или URL, браузер и операционную систему, используемую вспомогательную технологию (если применимо), шаги для воспроизведения и ожидаемый результат.
4. Не публикуйте пароли, токены авторизации, личную информацию и другие чувствительные данные.

Если вам трудно воспользоваться GitHub Issues или вы предпочитаете другой способ связи, используйте доступные контакты в [профиле сопровождающего проекта на GitHub](https://github.com/sunmeat).

Уязвимости безопасности следует сообщать конфиденциально в соответствии с [Политикой безопасности](https://github.com/sunmeat/me/blob/master/SECURITY.md), а не в публичном issue о доступности.

### Ответ и пересмотр документа

Сообщения рассматриваются по мере наличия времени и ресурсов проекта. Фиксированные сроки ответа или исправления не гарантируются. Для воспроизведения и понимания проблемы могут потребоваться дополнительные сведения.

Документ будет пересматриваться по мере изменения сайта и практик обеспечения доступности.

---

<sub>Last reviewed: 18 October 2026 · Последняя проверка: 18 октября 2026</sub>
