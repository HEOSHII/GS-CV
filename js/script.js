const html = document.querySelector('html');
const back = document.querySelector(".back");
const body = document.querySelector('body');
const tabs = document.querySelectorAll ('.tab');
const contacts = document.querySelector('.contacts');
const contactsButton = document.querySelector('.contacts__toogle');
const cursor = document.querySelector('.cursor');
const classes = [
    'change-theme',
    'change-theme active',
    'select__toggle',
    'link',
    'smile-img',
    'outer_bDW',
    'to-my-pets',
    'contact-me',
    'to-my-pets-inner'
    ];

const languages = new CustomSelect('#languages', {
    name: 'lang', // значение атрибута name у кнопки
    targetValue: 'en', // значение по умолчанию
    options: [['en', 'En'], ['ua', 'Ua']], // опции
});

landuageByttons = document.querySelectorAll('.select__option');
landuageByttons.forEach(button => {
    button.addEventListener('click', () => {
    html.setAttribute('lang',button.getAttribute('data-value'));
    })
});

tabs.forEach(tab => {
    tab.addEventListener('mousedown', () => {
        tab.classList.add('down');
    });
    tab.addEventListener('mouseup', () => {
        tab.classList.remove('down')
    });
    tab.addEventListener('click', () => {
        tabs.forEach(el => {
            el.classList.remove('active');
        });
        tab.classList.add('active');
        const value = event.target.querySelector('.tab-title').innerHTML.toLowerCase();
        const tabItems = document.querySelectorAll('.tab-item');
        const itemToActive = document.querySelector(`.${value}`);
        tabItems.forEach(el => {
            el.classList.remove('active');
        });
        itemToActive.classList.add('active');
    });
});

const changeThemeButton = document.querySelector('.change-theme');
changeThemeButton.addEventListener('click', () => {
    changeThemeButton.classList.toggle('active');
    body.classList.toggle('darkmode');
});



contactsButton.addEventListener('mouseover', () => {
    contacts.classList.add('show');
});

contacts.addEventListener('mouseleave', () => {
    contacts.classList.remove('show');
});

document.addEventListener('scroll', () => {
    let y = window.scrollY;
    back.style.backgroundPositionY = (- y / 1.25) + 'px';
});



  html.onmousemove = function(event) {
    event = event || window.event;
    cursor.style.top = event.clientY - 10 + "px";
    cursor.style.left = event.clientX - 10 + "px";
    // console.log(event.target.className);
    if (classes.includes(event.target.className)) {
        cursor.style.width = 10 + 'px';
        cursor.style.height = 10 + 'px';
        cursor.style.opacity = 0;
    } else {
        cursor.style.width = 25 + "px";
        cursor.style.height = 25 + "px";
        cursor.style.opacity = 1;
    }
    
    if (event.clientX < 100) {
        if (event.clientY > 280 && event.clientY < 550){
            contactsButton.classList.add('hovered');
        } else {
            contactsButton.classList.remove('hovered');
        }
    } else {
        contactsButton.classList.remove('hovered');
    }
    
}

window.addEventListener('mousedown', () => {
    cursor.classList.add('down');
});

window.addEventListener('mouseup', () => {
    cursor.classList.remove('down');
});

