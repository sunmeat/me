// The URL determines the language. Ukrainian is always the unprefixed default.
export const DEFAULT_LANGUAGE = "uk";
export const SUPPORTED_LANGUAGES = ["en","uk","fr","pt-BR","es","zh","ko-KP","ar","sa","de","ja","hv","qya"];

export function getLanguageFromPath(pathname) {
    const path = (pathname || "/").replace(/^\/+|\/+$/g, "");
    return SUPPORTED_LANGUAGES.includes(path) ? path : DEFAULT_LANGUAGE;
}

export function getLanguagePath(language) {
    return language !== DEFAULT_LANGUAGE && SUPPORTED_LANGUAGES.includes(language)
        ? `/${language}` : "/";
}
