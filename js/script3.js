// Hero Slider Initialization
const swiper1 = new Swiper('.heroslider', {
    direction: 'horizontal',
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    speed: 2000,
    autoplay: {
        delay: 2000,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Testimonial Slider Initialization
const testimonialSwiper = new Swiper('.testimonial', {
    effect: "cards",
    grabCursor: true,
});

// Toggle Mobile Menu
function toggleNavbar() {
    const menu = document.getElementById('mobile-menu');
    const isExpanded = menu.classList.contains('max-h-0');
    menu.classList.toggle('max-h-0', !isExpanded);
    menu.classList.toggle('opacity-0', !isExpanded);
    menu.classList.toggle('max-h-screen', isExpanded);
    menu.classList.toggle('opacity-100', isExpanded);
}


window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {  // Change '50' to the scroll distance you want
        navbar.classList.add('scrolled');

        console.log(window.scrollY);
        
    } else {
        navbar.classList.remove('scrolled');
        
    }
});

