const html = document.querySelector('html');
const back = document.querySelector(".back");
const back2 = document.querySelector(".back2");
const back3 = document.querySelector(".back3");
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
const tagsArr = [
    '<div>',
    '</>',
    'display: flex;',
    'padding',
    'margin',
    '@media',
    '<h1>',
    '<input>',
    '<body>',
    '<script>',
    '<style>',
    '<a>',
    '<img>',
    '<section>',
    'border',
    'color',
    'animation',
    'transition',
    '<footer>',
    '<html>',
    '<canvas>',
    'display: grid;',
    'const',
    'let',
    'if',
    'addEventListener',
    'function()',
    'return',
    'setTimeout()',
    'object{}',
    'array[]'
];
// =========== <SET LENAGUAGE>
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
// =========== </ SET LENAGUAGE>



// ========= <TABS>
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
// ========= </TABS>



// ========= <DARKMODE>
const changeThemeButton = document.querySelector('.change-theme');
changeThemeButton.addEventListener('click', () => {
    changeThemeButton.classList.toggle('active');
    body.classList.toggle('darkmode');
});
// ========= </DARKMODE>


// ========= <LEFT SUB MENU>
contactsButton.addEventListener('mouseover', () => {
    contacts.classList.add('show');
});
contacts.addEventListener('mouseleave', () => {
    contacts.classList.remove('show');
});
// ========= </LEFT SUB MENU>



// ========= <BACKGROUND PARALAX SCROLLING>
document.addEventListener('scroll', () => {
    let y = window.scrollY;
    back.style.backgroundPositionY = (- y / 1.25) + 'px';
    back2.style.top = (- y / 10) + 'px';
});
// ========= </BACKGROUND PARALAX SCROLLING>

// =======     <CURSOR>
  html.onmousemove = function(event) {
    event = event || window.event;
    cursor.style.top = event.clientY - 10 + "px";
    cursor.style.left = event.clientX - 10 + "px";
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
// =======     </CURSOR>




setInterval(() => {
    showNewBlock ();
}, 150);



function showNewBlock () {
    const rand = Math.floor(Math.random() * tagsArr.length);
    const textBlock = document.createElement('div');
            textBlock.innerText = tagsArr[rand];
            textBlock.className = 'text-block';
            textBlock.style.top = Math.floor(Math.random() * back2.scrollHeight) + 'px';
            textBlock.style.left = Math.floor(Math.random() * back.scrollWidth) + 'px';
            textBlock.style.fontSize = getRndInteger(5, 70) + 'px';
            textBlock.style.transition = 'all 4s ease-out';
            textBlock.style.filter = `blur(${getRndInteger(1, 6)}px)`;
            textBlock.style.transform = `rotate(${getRndInteger(-8, 6)}deg)`;
            setTimeout(() => {
                textBlock.style.transform = `rotate(${getRndInteger(-5, 2)}deg)`;
            }, 500);
    back2.prepend(textBlock);
    setTimeout(() => {
        textBlock.classList.add('show');
    }, 100);
    setTimeout(() => {
        textBlock.classList.remove('show');
    }, 2000);
    setTimeout(() => {
        textBlock.remove();
    }, 4500);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // document.querySelector(".menus").style.top = "0";
    document.querySelector(".menus").classList.remove('hide')
  } else {
    // document.querySelector(".menus").style.top = "-100%";
    document.querySelector(".menus").classList.add('hide')
  }
  prevScrollpos = currentScrollPos;
}


