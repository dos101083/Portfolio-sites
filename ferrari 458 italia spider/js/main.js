$(function () {
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true,
        responsive:[{
            breakpoint:820,
            settings:{
                dots:false
            }
        }]
    });
    $('.header-btn').on('click', function () {
        $('.menu').addClass('active');
    });
    $('.close-btn').on('click', function () {
        $('.menu').removeClass('active');
    });
});
