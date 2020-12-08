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

// e-service-details sticky nav slider  
var mySwiper = new Swiper('.swipee-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  // width: 250,
  spaceBetween:40,
  slidesPerView:5,
  breakpoints: {
    1250: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1050: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  },
  observer:true,
  observeParents:true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
})

// animation when click 

// // handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
  // target element id
  var id = $(this).attr('href');

  // target element
  var $id = $(id);
  if ($id.length === 0) {
      return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $id.offset().top;

  // animated top scrolling
  $('body, html').animate({scrollTop: pos  - 175 }, 'slow');
  // $('html, body').animate({ scrollTop: $(sectionID).offset().top - 175 }, 'slow');

// if ($('.our-slider-ul').length) { 
//     $('.our-slider-ul a').on('click', function (e) { e.preventDefault(); 
// if (!$(this).hasClass('active')) 
//   { var sectionID = $(this).attr('href');
//    scrollToSection(sectionID); } }); 
// }

});

// onscroll change tabs 
/////////////////////////////////////////
// function onScroll(event){
//   var scrollPos = $(document).scrollTop();
//   $('li>a').each(function () {
//       var currLink = $(this);
//       var refElement = $(currLink.attr("href"));
//       if (refElement.offset().top  - 300 <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
//           $('li>a.active').removeClass("active");
//           currLink.addClass("active");
//       }
//       else{
//           currLink.removeClass("active");
//       }
//   });
//   }
//   $(document).ready(function () {
//       $(document).on("scroll", onScroll);
//   }); 






// var scrollToSection = function (sectionID) {
//   $('html, body').animate({ scrollTop: $(sectionID).offset().top - 175 }, 'slow'); 
//   e.preventDefault(); 
// }
// if ($('.swiper-wrapper').length) { 
//     $('.swiper-wrapper a').on('click', function (e) { e.preventDefault(); 
// if (!$(this).hasClass('active')) 
//   { var sectionID = $(this).attr('href');
//    scrollToSection(sectionID); } }); 
// }





if ($('.swiper-section').length) {
  var adminMenuHeight = 0; var stickyNavElement = $('.swiper-section'); var stickyNavTop = stickyNavElement.offset().top;
  //  if ($('body.admin-menu').length) { adminMenuHeight = 21; } 
   if ($(window).width() > 991) { var websiteHeader = $('.navbar.sticynav'); } 
   else { var websiteHeader = $('.navbar.sticynav'); } 
   
   var websiteHeaderHeight = websiteHeader.outerHeight(); 
   var offsetHeight = adminMenuHeight + websiteHeaderHeight - 2; 
   var scrollTop = $(window).scrollTop() + offsetHeight; 
   var acceleratorSections = []; 
   $('.swiper-section .swiper-wrapper a').each(function () {
      var sectionID = $(this).attr('href'); 
      var sectionTop = $(sectionID).offset().top - 176
      acceleratorSections.push(sectionTop);
  }); 
  
  var activeSectionIndex = 0; 
  var changeHighlightedSection = function () {
    for (var i = 0; i > acceleratorSections.length; i++) { 
      if ($(window).scrollTop() - acceleratorSections[i] >= 0) 
      { activeSectionIndex = i; } 
    } 
    
    mySwiper.slideTo(activeSectionIndex); 
    var scrollPos = $(document).scrollTop();
    $('li>a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.offset().top  - 300 <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
          $('.our-slider-ul a.active').removeClass('active');
          $('.our-slider-ul li').eq(activeSectionIndex).find('a').addClass('active');
          $('li>a.active').removeClass("active");
          currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
    // $('.our-slider-ul a.active').removeClass('active');
    // $('.our-slider-ul li').eq(activeSectionIndex).find('a').addClass('active'); 
  }


  var stickyNav = function () {
      if ($('body.admin-menu').length) { adminMenuHeight = 21; } 
      if ($(window).width() > 991) { websiteHeader = $('.navbar.sticynav'); } 
      else { websiteHeader = $('.navbar.sticynav'); } 
      websiteHeaderHeight = websiteHeader.outerHeight(); 
      offsetHeight = adminMenuHeight + websiteHeaderHeight - 2; 
      scrollTop = $(window).scrollTop() + offsetHeight; 
      if (scrollTop > stickyNavTop) { 
        stickyNavElement.css('top', offsetHeight).addClass('sticky').closest('.accelerator-bar-container').addClass('sticky'); 
      } 

        else { stickyNavElement.css('top', 0).removeClass('sticky').closest('.accelerator-bar-container').removeClass('sticky'); 
      } 
      
      acceleratorSections = []; 
      $('.swiper-section .our-slider-ul a').each(function () {
          var sectionID = $(this).attr('href'); var sectionTop = $(sectionID).offset().top - 176
          acceleratorSections.push(sectionTop);
      }); 
      changeHighlightedSection();
  }; 
  stickyNav(); 
  $(window).scroll(function () { stickyNav(); }); 
  $(window).resize(function () { 
    $('.swiper-section .our-slider-ul a').each(function () { 
      var sectionID = $(this).attr('href'); 
      var resizeSectionIndex = $(this).closest('li').index(); 
      var sectionTop = $(sectionID).offset().top - 176; 
      acceleratorSections[resizeSectionIndex] = sectionTop; }); 
      stickyNav(); 
    });
}




// timeline swiper About us page 

jQuery('.timeline').timeline({
    mode:'horizontal',
    visibleItems: 5,
    verticalStartPosition:'right',
    horizontalStartPosition:'top',
    moveItems: 2,
    startIndex: 0,
    rtlMode: true

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