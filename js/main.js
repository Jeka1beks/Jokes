$(document).ready(function(){
    $('.responsive').slick({
        dots: false,
        arrows: false,
        //infinite: true,
        speed: 300,
        //autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        swipeToSlide: true,
        variableWidth: true,
        /*responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]*/
    });

    $( ".category-tag" ).click(function() {
        $( this ).remove();
    });

    $( "#categories-button, #mob-search-button" ).click(function() {
        $('div.filter').slideToggle('1000');
        $(this).find('span').toggleClass('glyphicon-menu-down').toggleClass('glyphicon-menu-up');
    });
});