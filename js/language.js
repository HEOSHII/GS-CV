
const languages = new CustomSelect('#languages', {
    name: 'lang', // значение атрибута name у кнопки
    targetValue: 'en', // значение по умолчанию
    options: [['en', 'En'], ['ua', 'Ua']], // опции
});

const landuageButtons = document.querySelectorAll('.select__option');
let pageLang = localStorage.getItem('pageLang');
console.log(pageLang);
setLang(pageLang);


landuageButtons.forEach(langButton => {
    langButton.addEventListener('click', () => {
    const langToSet = langButton.getAttribute('data-value');
    setLang(langToSet);
    });
});


function setLang(lang) {
    html.setAttribute('lang',lang);
    localStorage.setItem('pageLang',lang);
}