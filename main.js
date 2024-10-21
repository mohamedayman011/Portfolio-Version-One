window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let toggle_up = document.querySelector(".toggle-up")
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        toggle_up.classList.add("active")
    } else {
        header.classList.remove('scrolled');
        toggle_up.classList.remove("active")
    }
});

let toggle_menu = document.querySelector(".menu-toggle");
toggle_menu.addEventListener('click', function (){
    let menu = document.querySelector(".menu");
    menu.classList.toggle("active")
});


let toggleMode1 = document.querySelector("#more-1");
toggleMode1.addEventListener('click', function (){
    toggleMode1.classList.toggle("active")
});

let toggleMode2= document.querySelector("#more-2");
toggleMode2.addEventListener('click', function (){
    toggleMode2.classList.toggle("active")
});

let toggleMode3 = document.querySelector("#more-3");
toggleMode3.addEventListener('click', function (){
    toggleMode3.classList.toggle("active")
});

const modeToggleBtn = document.querySelector('#mode');
const body = document.body;

function updateTheme(theme) {
    let header = document.querySelector('header');
    if (theme === 'dark') {
        header.classList.add("active");
        body.classList.add('dark-mode');
        modeToggleBtn.classList.add('dark');
        modeToggleBtn.classList.remove('light');
        document.documentElement.style.setProperty('--title-color', '#FFF');
        document.documentElement.style.setProperty('--body-color', '#191523');
        document.documentElement.style.setProperty('--footer-color', '#0c0d1a');
        document.documentElement.style.setProperty('--text-color', '#b3b3b3');
        document.documentElement.style.setProperty('--box-color', '#1f1d31');
    } else {
        header.classList.remove("active");
        body.classList.remove('dark-mode');
        modeToggleBtn.classList.add('light');
        modeToggleBtn.classList.remove('dark');
        document.documentElement.style.setProperty('--title-color', '#242329');
        document.documentElement.style.setProperty('--body-color', '#fbfbfe');
        document.documentElement.style.setProperty('--footer-color', '#6e57e0');
        document.documentElement.style.setProperty('--text-color', '#6d6a7c');
        document.documentElement.style.setProperty('--box-color', '#FFF');
    }
}

window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme') || 'light';
    updateTheme(theme);
});

modeToggleBtn.addEventListener('click', () => {
    const newTheme = body.classList.toggle('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    updateTheme(newTheme);
});
