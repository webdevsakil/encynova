(function ($) {

    jQuery(document).ready(function () {


        //    menu 
        $(".open-menu-btn button").on('click', function () {
            $('.mobile-menu').addClass('show-mobile-menu')
            $('body').addClass('bg-gray')
        })
        $('.close-btn').on('click', function () {
            $('.mobile-menu').removeClass('show-mobile-menu')
            $('body').removeClass('bg-gray')
        })

        // brand-active
        $('.brand-active').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
               
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // testimonial slider
        $('.testimonial-slider').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            arrows: true,
            prevArrow: $('.arrow-left'),
            nextArrow: $('.arrow-right'),
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
      
    });




}(jQuery));

// container
const achievementContainer = document.querySelector('.acchievement-container');
if (screen.width > 991) {
    achievementContainer.classList.add('container')
}