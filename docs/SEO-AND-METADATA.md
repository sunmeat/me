# SEO and Metadata · SEO и метаданные

<p align="center">
  <strong>Make the portfolio understandable to search engines and shareable across the web.</strong><br />
  <em>Помогаем поисковикам понимать сайт, а людям красиво делиться ссылками.</em>
</p>

<p align="center">🇬🇧 English · 🇷🇺 Русский</p>

---

## 🇬🇧 English

### Metadata surfaces

The HTML document and deployed assets influence how the portfolio appears in search results, browser tabs, and social previews. The README describes the current implementation as including a page title, meta description, Open Graph metadata, Twitter Cards, a canonical URL, and JSON-LD structured data.

Before changing metadata, inspect `index.html` and the current source. Do not assume every tag or structured-data field is generated dynamically.

### Safe editing rules

- Keep the page title specific, concise, and consistent with the public identity.
- Write an accurate meta description; do not stuff it with unrelated keywords.
- Ensure the canonical URL points to the preferred production URL.
- Keep Open Graph and Twitter metadata consistent with the page's real content.
- Verify that preview images exist at their published paths and render at useful dimensions.
- Keep JSON-LD aligned with visible, verifiable information on the site.
- Do not mark up ratings, credentials, or achievements that cannot be substantiated.

### Verification

After a metadata change:

1. Run `npm run build`.
2. Inspect the generated HTML in `dist/`.
3. Open the production URL and check the page title and metadata.
4. Verify that referenced images are publicly accessible.
5. Allow for caching by social platforms; a stale preview does not necessarily mean the deployment failed.

Search indexing and social-card refresh timing are controlled partly by external services and cannot be guaranteed by this repository.

## 🇷🇺 Русский

### Где используются метаданные

HTML-документ и опубликованные ресурсы влияют на то, как портфолио выглядит в поиске, вкладке браузера и превью социальных сетей. В README указано, что текущая реализация включает заголовок страницы, meta description, Open Graph, Twitter Cards, canonical URL и структурированные данные JSON-LD.

Перед изменением метаданных изучи `index.html` и актуальный исходный код. Не предполагай, что каждый тег или поле структурированных данных генерируется динамически.

### Правила безопасного редактирования

- Делай заголовок страницы конкретным, кратким и согласованным с публичным образом автора.
- Пиши точное meta description без набора несвязанных ключевых слов.
- Проверяй, что canonical URL указывает на предпочтительный production-адрес.
- Поддерживай согласованность Open Graph и Twitter-метаданных с реальным содержанием страницы.
- Проверяй наличие превью-изображений по опубликованным путям и их подходящие размеры.
- Содержимое JSON-LD должно соответствовать видимой и проверяемой информации сайта.
- Не размечай рейтинги, квалификации и достижения, которые нельзя подтвердить.

### Проверка

После изменения метаданных:

1. Выполни `npm run build`.
2. Проверь сгенерированный HTML в `dist/`.
3. Открой production-URL и проверь заголовок страницы и метаданные.
4. Убедись, что изображения доступны публично.
5. Учитывай кеширование социальными платформами: старое превью не обязательно означает ошибку деплоя.

Индексация поиска и обновление превью зависят в том числе от внешних сервисов, поэтому репозиторий не может гарантировать сроки обновления.
