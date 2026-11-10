// One canonical, same-origin photo list for each language edition.
// Never substitute a different edition's artwork after a loading error.
export const AVATAR_URL = "/profile-photo.jpg";

export const PHOTO_SOURCES = Object.freeze({
    en: ["/3040b08e-60cf-4135-9e08-b9488c39fbd4.png"],
    uk: ["/d56f81e4-57ff-436b-8b3f-9e7d4b784329.png"],
    fr: [AVATAR_URL],
    es: ["/Матадор с гитарой на арене.png"],
    "pt-BR": ["/Солнечный Рио с видом на Христа-Искупителя.png"],
    de: ["/39d2c09e-2982-4516-a791-b86496d10b8a.png"],
    ja: ["/Неоновый самурай среди дождливого Токио.png"],
    zh: ["/Будівничий Великої Китайської стіни з тигреням.png"],
    ar: ["/Роскошный балкон с видом на Дубай.png"],
    sa: [
        "/Бенгалуру_ гуру кода среди технологий и традиций-1.png",
        "/Бенгалуру_ код и традиции-2.png",
    ],
    hv: ["/47f878cc-5125-4ca5-9775-6b7c70ee2a2b.png"],
    "ko-KP": ["/file_000000000e6082438350c0b79cfda177.png"],
    qya: ["/file_000000009cc88243ba4264c215d39b35.png"],
});

export function getEditionPhotos(language) {
    return PHOTO_SOURCES[language] || [AVATAR_URL];
}

export function getEditionPhotoUrl(language, index = 0) {
    const photos = getEditionPhotos(language);
    return photos[((index % photos.length) + photos.length) % photos.length];
}

export function nextPhotoIndex(index, count) {
    return count > 0 ? (index + 1) % count : 0;
}
