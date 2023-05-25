$(document).ready(function () {
  //Windows scroll class add
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 1) {
      $('body').addClass('fixed');
    } else {
      $('body').removeClass('fixed');
    }
  });

  if ($(".euronnav").length) {
    $('.euron-icon').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $('.euronpart').slideToggle('slow');
        return false;
    });
    $(".euronnav li a").each(function() {
        if ($(this).next().length) {
            $(this).parent().addClass("parent");
        }
    });
    $(".euronnav li.parent").each(function() {
        if ($(this).has(".euronarrow").length <= 0) {
            $(this).append('<i class="euronarrow">&nbsp;</i>');
        }
    });
    $(".euronarrow").on('click', function() {
        if ($(this).hasClass("active")) {
            if ($(this).parents("li").hasClass("parent")) {
                $(this).closest("li").find(".sub-euron-menu").slideUp(250);
                $(this).removeClass("active");
            } else {}
        } else {
            if ($(this).parents("li").hasClass("parent")) {} else {
                $(".sub-euron-menu").slideUp(250);
                $(".euronarrow").removeClass("active");
            }
            $(this).closest("li").find(".sub-euron-menu:first").slideDown(250);
            $(this).addClass("active");
        }
    });
}
 // Index Banner Slider  
    $(".hmbanner-slider").owlCarousel({
        autoplay: true,
        lazyLoad: false,
        loop: true,
        margin: 0,
        mouseDrag: false,
        touchDrag:false,
        animateOut: 'fadeOut',
        responsiveClass: true,
        autoplayTimeout: 5000,
        smartSpeed: 300,
        dots:false,
        nav: false,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
            nav:false,
            mouseDrag: true,
            touchDrag:true,
            margin: 0,
          },
          768: {
            items: 1
          }
        }
    });
    // chosse slider
    $(".hmadvantage-three").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 24,
      mouseDrag: true,
      touchDrag: true,
      autoplayTimeout: 5000,
      smartSpeed: 800,
      dots:false,
      nav: true,
      navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        992: {
          items: 3,
          mouseDrag: false,
          touchDrag:false,
          loop: false,
          autoplay: false,
          nav: false
        }
      }
    });
    // service slider
    $(".homeservices").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 24,
      mouseDrag: true,
      touchDrag: true,
      autoplayTimeout: 5000,
      smartSpeed: 800,
      dots:false,
      nav: true,
      navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        992: {
          items: 5,
          mouseDrag: false,
          touchDrag:false,
          loop: false,
          autoplay: false,
          nav: false,
          margin: 24
        }
      }
    });
    // team slider
    $(".hmdentistslider").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 24,
      mouseDrag: true,
      touchDrag: true,
      autoplayTimeout: 5000,
      smartSpeed: 800,
      dots:false,
      nav: true,
      navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2,
        },
        768: {
          items: 3
        }
      }
    });
   
    
  if ($(".mfpyoutube").length) {
    //$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({

    $(".mfpyoutube").magnificPopup({
      type: "iframe",

      mainClass: "mfp-fade",

      removalDelay: 160,

      preloader: false,

      fixedContentPos: false,
    });
  }

   // gallery
   if ($(".mfpgallery").length) {
    $(".mfpgallery").magnificPopup({
      delegate: "a",

      type: "image",

      gallery: {
        enabled: true,
      },
    });
  }
  if($(".hmgallerythumb").length){     
    var $hmgallerylrgimg = $('.hmgallerylrgimg').find('img').attr('data-src');
    $('.hmgallerylrgimg').css({'backgroundImage': 'url(' + $hmgallerylrgimg +')'});
    
    $(".hmgallerythumb").hover(function(){
      var $imgURL = $(this).attr("data-img");
      $(".hmgallerythumb").fadeIn(400, function() {
        $('.hmgallerylrgimg').css({'backgroundImage': 'url(' + $imgURL +')'});
      });
    }, function(){
      $(".hmgallerythumb").fadeIn(400, function() {
        $('.hmgallerylrgimg').css({'backgroundImage': 'url(' + $hmgallerylrgimg +')'});
      });
    });
    
    $(".hmgallerythumb").click(function(e){
      e.preventDefault();
    });
  }


  // Partner Logo Slider - When 3 Items
  $(".clientlogo-four").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 24,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    mouseDrag: true,
    touchDrag:true,
    dots:true,
    nav: false,
    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      360: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4,
        mouseDrag: false,
        touchDrag:false,
        loop: false,
        autoplay: false,
        dots: false,
      }
    }
  });
  if ($(".mfpinline").length) {
    $(".mfpinline").magnificPopup({
      type: "inline",
      midClick: true,
    });
  }

    AOS.init({duration: 2000,});
});