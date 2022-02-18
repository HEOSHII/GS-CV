const settings = document.querySelector('.setting');
const langs = document.querySelector('.languages');
const theme = document.querySelector('.themes');
const cursorChanger = document.querySelector('.cursor-change');

settings.addEventListener ('click', () => {
    settings.classList.toggle('on');
    langs.classList.toggle('on');
    theme.classList.toggle('on');
    cursorChanger.classList.toggle('on');
});

window.addEventListener('click', (e) => {
    const targetClass = e.target.classList;
    if (!targetClass.contains('themes') 
    && !targetClass.contains('languages') 
    && !targetClass.contains('form-check')
    && !targetClass.contains('forms')
    && !targetClass.contains('setting')
    && !targetClass.contains('cursor-change')) {
        console.log("close pls");
        closeSettings();
    }
});

function closeSettings(){
    settings.classList.remove('on');
    langs.classList.remove('on');
    theme.classList.remove('on');
    cursorChanger.classList.remove('on');
}