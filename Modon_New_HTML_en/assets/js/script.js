(function ($) {

    "use strict";

    /* ================ Check for Mobile. ================ */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('html').addClass('touch');
    } else {
        $('html').addClass('no-touch');
    }
    $('.touch .fx').addClass('animated');

    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    if (isSafari) {
        $('html').addClass('safari');
    }

    /* ================ Dynamic content height. ================ */
    if ($('.pageContent').length) {
        var winH = $(window).height(),
            headH = parseInt($('.top-head').outerHeight(), 10),
            footH = parseInt($('#footWrapper').outerHeight(), 10),
            mtop = winH - 200,
            H = winH - (headH + footH);

        $('.pageContent').css('min-height', H + "px");

    }

    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    /* ================= Animate Numbers Counter =============== */
    $('.odometer').each(function () {
        var the = $(this),
            tm = the.attr('data-timer'),
            af = the.attr('data-after'),
            vl = the.attr('data-value'),
            them = 'default',
            t = $(this).attr('data-theme');

        if (typeof t !== typeof undefined && t !== 'false') {
            t = them;
        }

        var o = new Odometer({
            el: this,
            theme: t
        });
        o.render();

        $(this).appear(function () {
            setInterval(function () {
                o.update(vl);
            }, tm);
        }, { accY: -100 });

    });

    /* ================ window.scroll functions. ================ */
    //$(window).on("scroll", function () {

    //    var ScTop = $(this).scrollTop();

    //    if (ScTop > 200) {
    //        $('#to-top').css({ transform: 'translateY(0px)', WebkitTransform: 'translateY(0px)' });
    //    } else {
    //        $('#to-top').css({ transform: 'translateY(100px)', WebkitTransform: 'translateY(100px)' });
    //    }

    //});


    //$("a").on('click', function (event) {

    //    // Make sure this.hash has a value before overriding default behavior
    //    if (this.hash !== "") {

    //        //Close headerForm If Open
    //        if ($('.headerForm').is(':visible')) {
    //            $('.headerForm').slideUp('slow', function () {
    //                $('.header').removeClass('headerFormShow');
    //            });
    //        }

    //        // Prevent default anchor click behavior
    //        event.preventDefault();

    //        // Store hash
    //        var hash = this.hash;

    //        // Using jQuery's animate() method to add smooth page scroll
    //        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //        $('html, body').animate({
    //            scrollTop: $(hash).offset().top
    //        }, 800, function () {

    //            // Add hash (#) to URL when done scrolling (default click behavior)
    //            window.location.hash = hash;
    //        });
    //    } // End if
    //});


    /* =============== Window.load ================== */
    $(window).on("load", function () {

        /* ================ jQuery Appear: on scroll down animations. =============== */
        $('.no-touch .fx').appear(function () {
            var anim = $(this).attr('data-animate'),
                del = $(this).attr('data-animation-delay');
            $(this).addClass('animated ' + anim).css({ animationDelay: del + 'ms' });
        }, { accY: -95 });

        /* =============== Paralax Effect =================== */
        $.stellar({
            horizontalScrolling: false,
            verticalScrolling: true,
            responsive: true,
            parallaxElements: true,
            verticalOffset: -4,
            hideDistantElements: false
        });

        //$("html").easeScroll();

    });

    /* ================ Back to top button. ================ */
    $('#to-top,.divider .to-top').on("click", function () {
        $('html, body').animate({ scrollTop: '0px' }, 800);
        return false;
    });

    /* ================ Accordion state. ================ */
    $(document).ready(function () {
        $('.collapse').on('shown.bs.collapse', function () {
            $(this).prev().parent().addClass('active-card');
        });

        $('.collapse').on('hidden.bs.collapse', function () {
            $(this).prev().parent().removeClass('active-card');
        });
    });


    //show search action
    $('#searchshow').click(function (e) {
        e.stopPropagation();
        $(".searchbox").fadeToggle("fast", function () {
            // Animation complete.

        });
    });
    $(document).click(function (e) {
        if (!$(e.target).is('.searchbox, .searchbox *')) {
            $(".searchbox").hide();
        }
    });
    $('.closeSearch-btn').click(function (e) {

        $(".searchbox").hide();

    });

    $(document).ready(function () {
        
        //------- Main slider at home page ----//
        if ($('.mainSlider').length > 0) {
            var swiper = new Swiper('.mainSlider', {
                loop: true,
                //slidesPerView: 'auto',
                effect: 'fade',
                spaceBetween: 10,
                centeredSlides: true,
                speed: 2000,
                autoplay: {
                    delay: 7000,
                    disableOnInteraction: false,
                },
                fadeEffect: {
                    crossFade: true
                },
            });
        }

        //------- News slider at home page ----//
        if ($('.homenewsSlider').length > 0) {
            // it exists
            var swiper2 = new Swiper('.homenewsSlider', {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: '.homenewsSliderWrapper .homenewsSlider-swiper-button-next',
                    prevEl: '.homenewsSliderWrapper .homenewsSlider-swiper-button-prev',
                },
                //autoplay: {
                //    delay: 4000,
                //    disableOnInteraction: true,
                //},
                speed: 1500,
                watchOverflow: true,
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        slidesPerGroup: 1,
                    },
                }

            });
        }

        //------- products slider at home page ----//
        if ($('.homeproductsSlider').length > 0) {
            // it exists
            var swiper3 = new Swiper('.homeproductsSlider', {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
                loop: false,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.homeproductsSliderWrapper .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.homeproductsSliderWrapper .swiper-button-next',
                    prevEl: '.homeproductsSliderWrapper .swiper-button-prev',
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        slidesPerGroup: 1,
                    },
                }
            });
        }

        //------- services slider at home page ----//
        if ($('.homeservicesSlider').length > 0) {
            // it exists
            var swiper4 = new Swiper('.homeservicesSlider', {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
                loop: false,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.homeservicesSliderWrapper .swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                        slidesPerGroup: 1,
                    },
                }

                
            });
        }

        //------- video slider at home page ----//
        if ($('.homevideoSlider').length > 0) {
            // it exists
            var swiper5 = new Swiper('.homevideoSlider', {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.homevideoSliderWrapper .swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.homevideoSliderWrapper .homevideoSlider-swiper-button-next',
                    prevEl: '.homevideoSliderWrapper .homevideoSlider-swiper-button-prev',
                },
            });
        }

        //------- events slider at home page ----//
        if ($('.homeeventsSlider').length > 0) {
            // it exists
            var swiper6 = new Swiper('.homeeventsSlider', {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.homeeventsSliderWrapper .swiper-pagination',
                    clickable: true,
                },
            });
        }

        //------- products slider at home page ----//
        if ($('.homerelatedSlider').length > 0) {
            // it exists
            var swiper7 = new Swiper('.homerelatedSlider', {
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 3,
                loop: false,
                loopFillGroupWithBlank: true,
                navigation: {
                    nextEl: '.homerelatedSliderWrapper .swiper-button-next',
                    prevEl: '.homerelatedSliderWrapper .swiper-button-prev',
                },
            });
        }

        //------- content slider  ----//
        if ($('.contentSlider').length > 0) {
            var swiper8 = new Swiper('.contentSlider', {
                slidesPerView: 1,
                spaceBetween: 30,
                slidesPerGroup: 1,
                loop: false,
                loopFillGroupWithBlank: true,
               
            });
        }


    //------ Photo Album Fancybox ----//
    if ($('.fancybox-media').length > 0) {
        $('.fancybox-media')
            .attr('rel', 'media-gallery')
            .fancybox({
                //openEffect: 'none',
                //closeEffect: 'none',
                //prevEffect: 'none',
                //nextEffect: 'none',
                //beforeShow: function() {
                //    if (this.title) {
                //        var URL = encodeURIComponent(_spPageContextInfo.siteAbsoluteUrl + '' + encodeURI(this.href));
                //        var title = this.title;
                //        // Add Socail Div start
                //        this.title = "<span class='ImgTitle'>";
                //        this.title += title;
                //        this.title += "</span>";
                //        this.title += '<div class="sharePhoto fB">';

                //        // Add Socail Share links
                //        this.title += '<a href="http://www.facebook.com/sharer.php?u=' + URL + '" target="_blank"><i class="fa fa-facebook-square"></i></a>';
                //        this.title += '<a href="https://twitter.com/intent/tweet?url=' + URL + '" target="_blank"><i class="fa fa-twitter-square"></i></a>';
                //        this.title += '<a href="https://plus.google.com/share?url=' + URL + '" target="_blank"><i class="fa fa-google-plus-square"></i></a>';
                //        this.title += '<a href="mailto:?subject=' + title + '&body=' + _spPageContextInfo.siteAbsoluteUrl + '' + this.href + '" target="_blank"><i class="fa fa-envelope-o"></i></a>';

                //        // Add Socail Div end
                //        this.title += '</div>';
                //    }
                //},

                padding: 0,
                arrows: true
            });
    }

    //------ Video listing Fancybox ----//
    if ($('.videoLnk').length > 0) {

        // Add Autoplay to the video URL
        $('.videoLnk').each(function() {
            this.href += '?autoplay=1';
        })


        $(".videoLnk").fancybox({
            type: "iframe", //<--added
            maxWidth: 800,
            maxHeight: 600,
            fitToView: false,
            width: '95%',
            height: '95%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none',
            padding: 0,
            aspectRatio: true,


        });
    }
    
    // print
    $("#print").on("click", function() {
        window.print();
    });

     //------ Font Size Function ----//
    if ($('#fontLarge').length > 0) {
        var resizabletxt = '.ArticleContent *';
        $.creaseFont({
            content: resizabletxt,
            unit: 'px',
            defaultSize: 15,
            maxSize: 20,
            minSize: 11,
            bFontLarge: '#fontLarge',
            bFontDefault: '#fontSmall',
            //bFontSmall: '#fontSmall',
            animate: false,
            stepSize: 1
        });
    }

        $('.nav-tabs a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
        $('.page-tabs a').click(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
        //$('.dropdown-toggle').dropdown();
        $('[data-toggle="tooltip"]').tooltip();

        $( ".accordion" ).accordion({
            collapsible: true,
            heightStyle: "content"
        });
        $("select").select2({
            language: "en",
            dir: "ltr"
        });
        $('.gotoid').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: ($($(this).attr('href')).offset().top) - 10
        }, 500, 'linear');
    });

        //show search action
        $('#searchshow').click(function(e) {
        e.stopPropagation();
        $(".searchbox").fadeToggle("fast", function() {
            $(".search-input").focus();
            // Animation complete.
            

        });
    });        $(document).click(function (e) {
            if (!$(e.target).is('.searchbox, .searchbox *')) {
                $(".searchbox").hide();
                //$(".search-input").val("");
            }
        });
        $('.closeSearch').click(function (e) {

            $(".searchbox").hide();
            $(".search-input").val("");

        });


    });




})(jQuery);

