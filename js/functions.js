$(document).ready(function () {
    //function will be here
    $(window).on('scroll', function () {
        if($(window).scrollTop()) {
            $('nav').addClass('navbar');
        }else {
            $('nav').removeClass('navbar');
        }
    });

    /* Header Slider Function */
   
    /*  $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1
      }); */
      $(document).ready(function(){
        $('.slideShow').slick({
          dots: false,
          arrows: false,
          infinite: true,
          centerMode: false,
          fade: true,
          autoplay: true,
          autoplaySpeed: 7000
        });

        /* Product Slides if statement / Function starts here */
  
/*         $(".product-slide").slick ({
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 4,
            centerMode: true,
            autoplay: false,
            autoplaySpeed: 3000,
            slidesToScroll: 1
        }); */


        if($(window).width() >= 1300 ) {
            $(".product-slide").slick ({
                dots: true,
                arrows: false,
                infinite: true,
                rows: 2,
                slidesToShow: 4,
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1
            });
        } 

        if ($(window).width() >= 1000 && $(window).width() <= 1299) {
            $(".product-slide").slick ({
                dots: true,
                arrows: false,
                infinite: true,
                slidesToShow: 3,
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1
            });
        
        } 
        
        if ($(window).width() >= 700 && $(window).width() <= 999) {
            $(".product-slide").slick ({
                dots: true,
                arrows: false,
                infinite: true,
                slidesToShow: 2,
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1
            });
        } 
        
        if ($(window).width() <= 699){
            $(".product-slide").slick ({
                dots: true,
                arrows: false,
                infinite: true,
                slidesToShow: 1,
                centerMode: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1
            });
        }
/* Product if statements ends here  */

        /* News Slides Code starts from here */
        $(".news__list--slider").slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            vertical: true,
            centerMode: false,
          });
          /* News slides code ends here */




      });
    
});