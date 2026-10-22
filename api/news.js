const ALLOWED_LOCALES = {
    "en-US": { hl: "en-US", gl: "US", ceid: "US:en" },
    "fr-FR": { hl: "fr-FR", gl: "FR", ceid: "FR:fr" },
};

function decodeXml(value = "") {
    return value
        .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'")
        .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
        .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
        .trim();
}

function getTag(xml, tag) {
    const match = xml.match(new RegExp(`<(?:[\\w-]+:)?${tag}\\b[^>]*>([\\s\\S]*?)<\\/(?:[\\w-]+:)?${tag}\\s*>`, "i"));
    return match ? decodeXml(match[1]) : "";
}

export default async function handler(req, res) {
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");

    if (req.method !== "GET") {
        res.setHeader("Allow", "GET");
        return res.status(405).json({ status: "error", message: "Method not allowed" });
    }

    const topic = String(req.query.topic || "AI Machine Learning").trim().slice(0, 120);
    const locale = ALLOWED_LOCALES[String(req.query.locale || "en-US")] || ALLOWED_LOCALES["en-US"];
    const rssUrl = new URL("https://news.google.com/rss/search");
    rssUrl.searchParams.set("q", topic);
    rssUrl.searchParams.set("hl", locale.hl);
    rssUrl.searchParams.set("gl", locale.gl);
    rssUrl.searchParams.set("ceid", locale.ceid);

    try {
        const response = await fetch(rssUrl, {
            headers: { "User-Agent": "SunmeatPortfolio/1.0 (news feed)" },
            signal: AbortSignal.timeout(8000),
        });

        if (!response.ok) {
            return res.status(502).json({ status: "error", message: "Google News is temporarily unavailable" });
        }

        const xml = await response.text();
        const items = [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)]
            .slice(0, 10)
            .map(([, item]) => {
                const source = getTag(item, "source");
                const title = getTag(item, "title");
                const link = getTag(item, "link");
                const pubDate = getTag(item, "pubDate");
                const description = getTag(item, "description");
                const guid = getTag(item, "guid") || link;
                return {
                    guid,
                    link,
                    title,
                    pubDate,
                    description,
                    content: description,
                    author: source,
                };
            })
            .filter(item => item.title && item.link);

        return res.status(200).json({ status: "ok", items });
    } catch (error) {
        return res.status(502).json({ status: "error", message: "Unable to load Google News", items: [] });
    }
}
