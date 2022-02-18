const html = document.querySelector('html');
const back = document.querySelector(".back");
const back2 = document.querySelector(".back2");
const body = document.querySelector('body');
const tabs = document.querySelectorAll ('.tab');
const contacts = document.querySelector('.contacts');
const contactsButton = document.querySelector('.contacts__toogle');
const cursor = document.querySelector('.cursor');
const settings = document.querySelector('.setting');
const menu = document.querySelector(".menus");
const logo = document.querySelector(".logo");
const links = document.querySelectorAll(".menu__link");
const icons = document.querySelectorAll(".icons-item");
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

// ========= <TABS>
tabs.forEach(tab => {
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

setInterval(() => {
    showNewBlock ();
}, 350);

function showNewBlock () {
    const rand = Math.floor(Math.random() * tagsArr.length);
    const textBlock = document.createElement('div');
            textBlock.innerText = tagsArr[rand];
            textBlock.className = 'text-block';
            textBlock.style.top = Math.floor(Math.random() * back2.scrollHeight) + 'px';
            textBlock.style.left = Math.floor(Math.random() * back.scrollWidth) + 'px';
            textBlock.style.fontSize = getRndInteger(5, 75) + 'px';
            textBlock.style.transition = 'all 4s ease-out';
            textBlock.style.filter = `blur(${getRndInteger(1, 5)}px)`;
            textBlock.style.transform = `rotate(${getRndInteger(-8, 6)}deg)`;
            setTimeout(() => {
                textBlock.style.transform = `rotate(${getRndInteger(-5, 2)}deg)`;
            }, 2000);
    back2.prepend(textBlock);
    setTimeout(() => {
        textBlock.classList.add('show');
    }, 100);
    setTimeout(() => {
        textBlock.classList.remove('show');
    }, 3000);
    setTimeout(() => {
        textBlock.remove();
    }, 6000);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
    closeSettings();
  }
  prevScrollpos = currentScrollPos;
  if (currentScrollPos < 300) {
    menu.classList.remove('hide');
  }
}

function closeSettings(){
    settings.classList.remove('on');
    langs.classList.remove('on');
    theme.classList.remove('on');
    cursorChanger.classList.remove('on');
}



