const burgerIcon = document.querySelector('.burger__icon');
const body = document.body;

if (burgerIcon) {
    const menu = document.querySelector('.menu__body');

    burgerIcon.addEventListener("click", () => {
        burgerIcon.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    });

    menu.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener("click", () => {
            body.classList.remove('lock');
            burgerIcon.classList.remove('active');
            menu.classList.remove('active');
        })
    })
}

// *========================================================*

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
});

// swiper

new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
      },
});
