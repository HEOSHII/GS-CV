
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
    
    if (event.clientY < 30) {
        menu.classList.remove('hide');
    }
}
window.addEventListener('mousedown', () => {
    cursor.classList.add('down');
});

window.addEventListener('mouseup', () => {
    cursor.classList.remove('down');
});


const arrow = document.createElement('div');
    arrow.className = 'cursor-change-svg';
    arrow.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 50 50'><path d='M 29.699219 47 C 29.578125 47 29.457031 46.976563 29.339844 46.933594 C 29.089844 46.835938 28.890625 46.644531 28.78125 46.398438 L 22.945313 32.90625 L 15.683594 39.730469 C 15.394531 40.003906 14.96875 40.074219 14.601563 39.917969 C 14.238281 39.761719 14 39.398438 14 39 L 14 6 C 14 5.601563 14.234375 5.242188 14.601563 5.082031 C 14.964844 4.925781 15.390625 4.996094 15.683594 5.269531 L 39.683594 27.667969 C 39.972656 27.9375 40.074219 28.355469 39.945313 28.726563 C 39.816406 29.101563 39.480469 29.363281 39.085938 29.398438 L 28.902344 30.273438 L 35.007813 43.585938 C 35.117188 43.824219 35.128906 44.101563 35.035156 44.351563 C 34.941406 44.601563 34.757813 44.800781 34.515625 44.910156 L 30.113281 46.910156 C 29.980469 46.96875 29.84375 47 29.699219 47 Z'></path></svg>";

const circle = document.createElement('div');
    circle.className = 'cursor-change-circle';


const cursorMode = localStorage.getItem('data-cursor');
console.log(cursorMode)
if (cursorMode === null) {
    body.setAttribute('data-cursor','arrow');
    cursorChanger.prepend(circle);
} else {
    body.setAttribute('data-cursor', cursorMode);
    if (cursorMode === 'arrow') {
        cursorChanger.prepend(circle);
    } else {
        cursorChanger.prepend(arrow);
    }
}

cursorChanger.addEventListener('click', (e) => {
    currentCursor = body.getAttribute('data-cursor');
    if (currentCursor === 'arrow') {
        body.setAttribute('data-cursor','circle');
        currentCursor = body.getAttribute('data-cursor');
        localStorage.setItem('data-cursor','circle');
    } else {
        body.setAttribute('data-cursor','arrow');
        currentCursor = body.getAttribute('data-cursor');
        localStorage.setItem('data-cursor','arrow');
    }
    setCursor(currentCursor);
});

function setCursor(mode) {
    if (mode === "arrow") {
        cursorChanger.replaceChild(circle, arrow);
    } else {
        cursorChanger.replaceChild(arrow, circle);
    }
};