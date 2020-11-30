$(document).ready(function () {
  var productsSlider = new Swiper(".products-slider", {
    effect: "coverflow",
    coverflowEffect: {
      rotate: 45,
      slideShadows: false,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  $("a.fancy").fancybox();
  $(".slide-toggle").on("click", function () {
    var toggler = $(this);
    toggler.toggleClass("active");
    var wrapper = $(this).parent().parent().find(".slide-wrapper");
    wrapper.fadeToggle();
    wrapper.find(".slide-close").on("click", function () {
      toggler.removeClass("active");
      wrapper.fadeOut();
    });
  });

  // Animate on Scroll function call
  AOS.init({
    duration: 600,
    easing: "linear",
    once: true,
  });
});

// timeline swiper About us page 

jQuery('.timeline').timeline({
    mode:'horizontal',
    visibleItems: 5,
    verticalStartPosition:'right',
    horizontalStartPosition:'top',
    moveItems: 2,
    startIndex: 0,
    // rtlMode: true

  });
  
  function showMoreContent(){
    $('.toggle-content').toggleClass('show-More-Content');
    $('.nabza').toggleClass('auto-Height');
    $('.detailsLnk').addClass('hide-me');
  }
  function hideMoreContent(){
    $('.toggle-content').toggleClass('show-More-Content');
    $('.nabza').toggleClass('auto-Height');
    $('.detailsLnk').removeClass('hide-me');

  }