
// toogele the mobile menus
function toggleNavbar() {
    const menu = document.getElementById('mobile-menu');

    if (menu.classList.contains('max-h-0')) {
        // Opening menu
        menu.classList.remove('menu-leave', 'menu-leave-active', 'max-h-0', 'opacity-0');
        menu.classList.add('menu-enter', 'menu-enter-active');
    } else {
        // Closing menu
        menu.classList.remove('menu-enter', 'menu-enter-active');
        menu.classList.add('menu-leave', 'menu-leave-active', 'max-h-0', 'opacity-0');
    }
}

const swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});