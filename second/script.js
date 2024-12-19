const HeaderMenu = document.querySelector('.header-menu');
const button = document.querySelector('.burg-menu');

button.addEventListener('click', () => {
    HeaderMenu.style.display = 'block';
})

window.addEventListener('click', (e) => {
    if(e.target != HeaderMenu && e.target != button) {
        HeaderMenu.style.display = "none";
    }
})