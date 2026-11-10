import test from "node:test";
import assert from "node:assert/strict";
import {SUPPORTED_LANGUAGES} from "../src/language-routing.js";
import {AVATAR_URL, PHOTO_SOURCES, getEditionPhotos, getEditionPhotoUrl, nextPhotoIndex} from "../src/photo-editions.js";

test("every supported edition has a dedicated, local photo selection", () => {
    for (const language of SUPPORTED_LANGUAGES) {
        const photos = getEditionPhotos(language);
        assert.ok(Object.hasOwn(PHOTO_SOURCES, language), language);
        assert.ok(photos.length > 0, language);
        for (const photo of photos) {
            assert.ok(photo.startsWith("/") && !photo.startsWith("//"), photo);
        }
        assert.equal(getEditionPhotoUrl(language), photos[0]);
    }
});

test("Indian edition starts with the first image and cycles in order", () => {
    const photos = getEditionPhotos("sa");
    assert.equal(photos.length, 2);
    assert.match(photos[0], /-1\.png$/);
    assert.match(photos[1], /-2\.png$/);
    assert.equal(getEditionPhotoUrl("sa", 0), photos[0]);
    assert.equal(getEditionPhotoUrl("sa", 1), photos[1]);
    assert.equal(getEditionPhotoUrl("sa", 2), photos[0]);
    assert.equal(nextPhotoIndex(0, photos.length), 1);
    assert.equal(nextPhotoIndex(1, photos.length), 0);
});

test("unknown language and loading fallback use a neutral avatar, never another edition", () => {
    assert.deepEqual(getEditionPhotos("unknown"), [AVATAR_URL]);
    assert.equal(getEditionPhotoUrl("unknown"), AVATAR_URL);
    assert.notEqual(getEditionPhotoUrl("en"), getEditionPhotoUrl("qya"));
    assert.notEqual(getEditionPhotoUrl("uk"), getEditionPhotoUrl("en"));
    assert.equal(getEditionPhotoUrl("fr"), AVATAR_URL);
});
