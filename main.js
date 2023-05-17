const overlay = document.getElementById('overlay');
const openMenu = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');
const mainImg = document.querySelector('.first figure img');


openMenu.addEventListener('click', () => {
    overlay.style.opacity = '1';
    overlay.style.zIndex = '999';
    nav.style.right = '0';
    openMenu.style.display = 'none'
})
closeMenu.addEventListener('click', () => {
    overlay.style.opacity = '0';
    overlay.style.zIndex = '-1';

    nav.style.right = '-350px';
    openMenu.style.display = 'block'
})
window.onresize = (e) => {
    if (innerWidth < 991) {
        mainImg.src = '/assets/images/image-web-3-mobile.jpg'
        console.log('done')
    } else {
        mainImg.src = '/assets/images/image-web-3-desktop.jpg'
    }
}
