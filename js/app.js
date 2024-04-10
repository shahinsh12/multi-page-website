$(function () {



 
   

                      /**************  home page javascript starts**************/
                       

    /* banner slider */

    $('.banner-slider').slick({
        prevArrow: '<i class="banner-icons fa fa-chevron-left prv-arrow"></i>',
        nextArrow: '<i class="banner-icons fa fa-chevron-right nxt-arrow"></i>',
        dots: false,
        autoplay: true,
        speed: 1000,
        fade: true,
        
        
    })

    /* banner slider */

    


    /* brand slider */
   $('.brand-slider').slick({
        prevArrow: '<i class="brand-icons fa fa-chevron-left prv-arrow"></i>',
        nextArrow: '<i class="brand-icons fa fa-chevron-right nxt-arrow"></i>',
        dots: false,
        autoplay: true,
        speed: 900,
        fade: false,
         centerMode: true,
         centerPadding: '0px',
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
    {
      breakpoint: 992,
      settings: {
        
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
  ]
    });
   /* brand slider */

    




    /* latest product slider */
    $('.latest-slider').slick({
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        speed: 700,
        slidesToScroll: 1,
        prevArrow: '<i class="latest-icons fa fa-chevron-left prv-arrow"></i>',
        nextArrow: '<i class="latest-icons fa fa-chevron-right nxt-arrow"></i>',
        responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
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
      breakpoint: 321,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
    /* latest product slider */

    /* testimonial slider */

    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 2,
        autoplay: true,
        slidesToScroll: 1,
        prevArrow: '<i class="testimonial-icons fa fa-chevron-left prv-arrow"></i>',
        nextArrow: '<i class="testimonial-icons fa fa-chevron-right nxt-arrow"></i>',
         responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });

    /* testimonial slider */
    

    /* featured section plugin js */
    $('.filtr-container').filterizr();

    $('#filter-list li').on('click', function () {
        $(this).addClass('active1');

        $(this).siblings('.active1').removeClass('active1');
    })
    /* featured section plugin js */
    

        /* microsoft section countdown */
    $('#countdown').countdown('2022/10/10', function (event) {
        var $this = $(this).html(event.strftime('' +
            '<div class="time"><span>%D</span> <p>Days</p> </div> ' +
            '<div class="time"><span>%H</span> <p>Hours</p> </div>' +
            '<div class="time"><span>%M</span> <p>Mins</p> </div>' +
            '<div class="time"><span>%S</span> <p>Sec</p>  </div>'
        ));
    });
    /* microsoft section countdown */







                         /**************  home page javascript starts**************/















})