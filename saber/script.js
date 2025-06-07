var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    slidesPerView: 3,
    spaceBetween: 30,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10
        },

        700: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        1800: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
});