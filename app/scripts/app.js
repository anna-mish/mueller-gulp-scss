import $ from './libs/jquery'
import Swiper from './libs/swiper';

const onPageLoaded = () => {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpointsInverse: true,
        breakpoints: {
            320: {
            slidesPerView: 1,
            spaceBetween: 15
            },
            767: {
            slidesPerView: 2,
            spaceBetween: 15
            },
            992: {
            slidesPerView: 3,
            spaceBetween: 15
            },
            1200: {
            slidesPerView: 3,
            spaceBetween: 30
            }
        }
    });
};

$(document).ready(onPageLoaded);
