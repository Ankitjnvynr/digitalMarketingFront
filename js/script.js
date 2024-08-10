
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


document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        effect: "fade",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
});
