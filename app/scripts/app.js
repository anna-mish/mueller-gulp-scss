import $ from './libs/jquery'
import moment from './libs/moment';
import Swiper from './libs/swiper';

const onPageLoaded = () => {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        nextButton: $('.swiper-button-next'),
        prevButton: $('.swiper-button-prev'),

        speed: 400,
        spaceBetween: 30
    });


    // $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     responsive: {
    //         320: {
    //             items: 1
    //         },
    //         767: {
    //             items: 2
    //         },
    //         992: {
    //             items: 3
    //         }
    //     }
    // })
};
const ticker = () => {
    $('#ticker').html(moment().format('dddd, do MMMM YYYY --- hh:mm:ss'));
};

$(document).ready(onPageLoaded);
