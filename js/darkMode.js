const changeThemeButton = document.querySelector('.change-theme');
let darkMode = localStorage.getItem('darkMode'); //получаем инфу из памяти

//меняем тему в зависимости что нахоится в памяти
if (darkMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

//меняем тему при нажатии на кнопку
changeThemeButton.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode'); //перезаписываем переменную с новым значением
    if (darkMode !== 'enabled'){
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});



function enableDarkMode() {
    changeThemeButton.classList.add('active');
    body.classList.add('darkmode');
    localStorage.setItem('darkMode','enabled')
}

function disableDarkMode() {
    changeThemeButton.classList.remove('active');
    body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}
