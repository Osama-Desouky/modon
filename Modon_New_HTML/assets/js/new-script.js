$(document).ready(function(){
  var productsSlider = new Swiper('.products-slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    }
  });
  $("a.fancy").fancybox();
  $(".slide-toggle").on('click',function(){
   var toggler= $(this);
   toggler.addClass("active");
   var wrapper=$(this).parent().parent().find(".slide-wrapper");
   wrapper.fadeIn();
   wrapper.find(".slide-close").on('click',function(){
    toggler.removeClass("active");
    wrapper.fadeOut();
   })
  })
})