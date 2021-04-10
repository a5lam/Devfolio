
// gif added as pre-loader
$(window).on('load', function() {
   
    $('.loader .inner').fadeOut(500, function(){
        $('.loader').fadeOut(750);
    });

    // loading all the portfolio images with preloader
    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

});

// Slides animation
$( document ).ready(function() {
    $('#slides').superslides({
        animation:  'fade',
        play:   3000,
        pagination: false
    });

    // subtitle animation
    var typed = new Typed('.typed',{
        strings: ['Software Engineer.', 'Web Developer.', 'Student.'],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    // skills slider
    $('.owl-carousel').owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[3000])
    });
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
        
    
    var skillsTopOffset = $('.skillsSection').offset().top;
    var potfolioTopOffset = $('.portfolioSection').offset().top;
    var countUp = false
    $(window).scroll( function(){

        // skills pie-chart animation
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
                easing:'easeInOut',
                barColor:'#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function(from, to, percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        };

        // skills number counter
        if (!countUp && window.pageYOffset > potfolioTopOffset - $(window).height() + 200){
            $('.counter').each(function(){
                var ele = $(this);
                var endVal = parseInt(ele.text());
                ele.countup(endVal);
            });
            countUp = true;
        };
    });

    // portfolio box layout
    $('[data-fancybox]').fancybox();

    // Portfolio filtering 
    $('#filters a').click(function() {

        $('#filters .current').removeClass('current');
        $(this).addClass('current');
        console.log(this);
        
        var selector = $(this).attr('data-filter');
        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    const nav = $('#navigation');
    const navTop = nav.offset().top;
    const navHeight = nav.outerHeight();
    const sectionLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    $("#navigation a").on("click", function(){
        
        
        // collapse navigation menu
        $('.navbar-collapse').collapse('hide');
        
        // scroll on click with easing animation
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - navHeight)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();

        var e = $(this);
        // console.log(e);
        setTimeout(function() {
        
        // change avtive tab on nav bar
        $(".navbar-nav").find(".active").removeClass("active");
        $(e).parent().addClass("active");
        },1300);

    });

    $(".navbar-brand").on("click", function(){
        
        
        // collapse navigation menu
        $('.navbar-collapse').collapse('hide');
        
        // scroll on click with easing animation
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - navHeight)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();


    });

    var activeOn = 0;
    $(window).on('scroll', scrollNavigation);

    
    function scrollNavigation() {
        
        var body = $('body');

        // scroll animation for navigation bar
        if($(window).scrollTop() >= navTop) {
            // align top offset with nav bar
            body.css('padding-top', navHeight +'px');
            body.addClass('fixedNav');
        }
        else {
            body.css('padding-top', 0);
            body.removeClass('fixedNav');
        }

        // Change active tab on nav bar
        sectionLinks.forEach(function(e) {

            var sectionId = e.getAttribute('href');
            
            if ($(sectionId).visible()){
                activeOn++;
                $('.navbar-nav li').removeClass('active');
                console.log($('.nav li'));
                $(e.parentElement).addClass('active');
                    // activeOn = true;
            }
            else{
                activeOn--;
            };


            if ($(sectionId).visible(true) && activeOn<=1){

                activeOn++;
                $('.navbar-nav li').removeClass('active');
                console.log($('.nav li'));
                $(e.parentElement).addClass('active');

            }
            else{
                activeOn--;
            };
            
            
        });


    }
    
    
    
    // $('#navigation li a').click( function(e) {
    
    //     // collapse navigation menu
    //     $('.navbar-collapse').collapse('hide');

        
    //     $('.navbar-nav li').removeClass('active');
        
    //     $(e.parentElement).addClass('active');
             
    // });

});