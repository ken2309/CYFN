$(document).ready(function(){

    'use strict';

    var banner = $('.banner-contain');
    console.log(banner);
    banner.owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        items:1,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 600,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});