const languageButton = document.querySelector('.languages');
const pageLang = localStorage.getItem('currentLang');
let currentLang = languageButton.innerText;

if (pageLang === null) {
    currentLang = 'EN';
    setHtmlLanguage('EN');
} else {
    setHtmlLanguage(pageLang);
}

languageButton.addEventListener('click',() => {
    currentLang = languageButton.innerText;
    changeLanguageLalue(currentLang);
});

function changeLanguageLalue(langToChange) {
    if (currentLang === 'UA') {
        currentLang = 'EN';
        setHtmlLanguage('EN');
    } else 
    if (currentLang === 'EN'){
        currentLang = 'UA';
        setHtmlLanguage('UA');
    }
}

function setHtmlLanguage(lang) {
    languageButton.innerText = lang;
    html.setAttribute('lang',lang.toLowerCase());
    localStorage.setItem('currentLang',lang);
    console.log ('language changed to ', lang);
}
