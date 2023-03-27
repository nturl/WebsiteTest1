/* Slide 104 (#10) */

$(function(){
  $(document).ready(function(){
    window.slick104 = $('.slider-104').each(function(){
      $(this).slick({ 
        asNavFor: '.slider-104-controller',
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,        
        variableWidth: true,
        infinite: true,
        speed: 500,
        touchThreshold: 1/0,
        swipeToSlide: true,
      });
    });
    window.slick104controller = $('.slider-104-controller').each(function(){
      $(this).slick({ 
        asNavFor: '.slider-104',
        dots: false,
        arrows: true,
        prevArrow: $(this).prev("li").find(".slick-prev"),
        nextArrow: $(this).next("li").find(".slick-next"),
        infinite: true,
        fade: true,
        speed: 300,
        slidesToShow: 1, 
        slidesToScroll: 1    
      });
    });   
  });
});

/* Slide 110 (#12) */

$(function(){
  window.swiper110 = new Swiper('.swiper-110', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
      436: {
        spaceBetween: 40,
      },
    }    
  });
});

/* Slide 99 (#15) */

$(function(){
  window.swiper99 = new Swiper('.swiper-99', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    breakpoints: {
      436: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    }
  });
});

/* Slide 136 (#18) */

$(function(){
  window.swiper136 = new Swiper('.swiper-136', { 
    slidesPerView: 'auto', 
    spaceBetween: 40,
    centeredSlides: true,
    breakpoints: {
      435: {
        slidesPerView: 2,
        centeredSlides: false,
      },
      767: {
        slidesPerView: 3,
        centeredSlides: false,
      },
      991: {
        slidesPerView: 4,
        centeredSlides: false,
      },
    }  
  });
});