const bar = document.querySelector('.bar');
const nav = document.querySelector('.nav__ul');
const header = document.querySelector('.header');

bar.addEventListener('click', () => {
    nav.classList.toggle('open');
    bar.classList.toggle('toggle');
});

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    if (scroll > 100) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove('scrolled');
    }
});

