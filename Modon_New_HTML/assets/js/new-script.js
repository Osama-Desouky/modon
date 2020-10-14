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
