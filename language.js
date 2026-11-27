const languageButton = document.querySelector('.language-button');
const languageName = languageButton.querySelector('span');
const englishTitle = document.title;

const translations = [
    ['data-ar', null],
    ['data-ar-label', 'aria-label'],
    ['data-ar-alt', 'alt'],
    ['data-ar-content', 'content'],
].flatMap(([attribute, target]) => Array.from(document.querySelectorAll(`[${attribute}]`), element => ({
    element,
    target,
    english: target ? element.getAttribute(target) : element.textContent,
    arabic: element.getAttribute(attribute),
})));

function setLanguage(isArabic) {
    document.documentElement.lang = isArabic ? 'ar' : 'en';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    for (const { element, target, english, arabic } of translations) {
        const value = isArabic ? arabic : english;
        if (target) element.setAttribute(target, value);
        else element.textContent = value;
    }
    document.title = isArabic ? 'زاغو لأعمال الألمنيوم والزجاج | المدينة المنورة' : englishTitle;
    languageName.textContent = isArabic ? 'English' : 'العربية';
    languageButton.lang = isArabic ? 'en' : 'ar';
    languageName.dir = isArabic ? 'ltr' : 'rtl';
}

languageButton.addEventListener('click', () => setLanguage(document.documentElement.lang !== 'ar'));
languageButton.hidden = false;
