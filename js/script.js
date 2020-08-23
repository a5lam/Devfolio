
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
    var statsTopOffset = $('.statsSection').offset().top;
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
        if (!countUp && window.pageYOffset > statsTopOffset - $(window).height() + 200){
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

    // scroll animation for navigation bar
    $(window).on('scroll', stickyNavigation);

    // align top offset with nav bar
    function stickyNavigation() {
        var body = $('body');

        if($(window).scrollTop() >= navTop) {
            body.css('padding-top', navHeight +'px');
            body.addClass('fixedNav');
        }
        else {
            body.css('padding-top', 0);
            body.removeClass('fixedNav');
        }

    }

    $('#navigation li a').click( function(e) {
        e.preventDefault();

        // collapse navigation menu
        $('.navbar-collapse').collapse('hide');

        var targetElement = $(this).attr('href');
        var targetPosition = $(targetElement).offset().top;
        $('html, body').animate({scrollTop: targetPosition - navHeight}, 'slow');

    });

});