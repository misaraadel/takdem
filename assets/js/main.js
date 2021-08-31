$(document).ready(function () {
    /*start the loading page */
    jQuery("#preloader").fadeOut(3000);
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".scroll-top-button").addClass('active-scroll');
        } else {
            $(".scroll-top-button").removeClass('active-scroll');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".bottom-nav").addClass('active-bottom-nav');
        } else {
            $(".bottom-nav").removeClass('active-bottom-nav');
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
     //Wow intit
     wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //start active navbar
    $('.toggle-nav').click(function(){
        $('.mobile-nav').addClass('active-nav');
    });
    $('.close-nav').click(function(){
        $('.mobile-nav').removeClass('active-nav');
    });
    $('.product').click(function(){
        $('.product-menu').addClass('active-product');
    });
    $('.back-manu').click(function(){
        $('.product-menu').removeClass('active-product');
    });
    $('.search-icon').click(function(){
        $('.popup').addClass('active-popup');
    });
    $('.popup-close').click(function(){
        $('.popup').removeClass('active-popup');
    });
    //change navbar color on scroll
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
     //start active navbar
     $('.cart-circle').click(function(){
        $('.cart-shape ').addClass('active-cart');
    });
    $('.cart-overlay').click(function(){
        $('.cart-shape ').removeClass('active-cart');
    });
    $('.close-cart').click(function(){
        $('.cart-shape ').removeClass('active-cart');
    });
    //owl header screen 
    $('.owl-header').owlCarousel({
        rtl: true,
        loop:false,
        margin: 0,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-angle-right"></i>',
            '<i class="fas fa-angle-left"></i>'
        ],
        responsive:{
            0:{
                items:1 ,
                nav:false,
                dots: true,
                touchDrag  :true,
                mouseDrag  : true
            },
            600:{
                items:1,
                nav:false,
                dots: true,
                touchDrag  :true,
                mouseDrag  : true
            },
            1000:{
                items:1 ,
                nav:true,
                dots: true,
                touchDrag  :false,
                mouseDrag  : false
            }
        }
    });
    //product slider 
    $('.owl-product').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-angle-right"></i>',
            '<i class="fas fa-angle-left"></i>'
        ],
        responsive:{
            0:{
                items:1,
                nav:false,
                dots: true,
            },
            600:{
                items:2,
                nav:false,
                dots: true,
            },
            1000:{
                items:4,
                nav:true,
                dots: true,
            }
        }
    });
    //offers slider 
    $('.owl-offers').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-angle-right"></i>',
            '<i class="fas fa-angle-left"></i>'
        ],
        responsive:{
            0:{
                items:1,
                nav:false,
                dots: true,
            },
            600:{
                items:2,
                nav:false,
                dots: true,
            },
            1000:{
                items:2,              
                nav: true,
                dots: true,
            }
        }
    });
    //category slider 
    $('.owl-category').owlCarousel({
        rtl: true,
        loop: false,
        margin: 20,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-angle-right"></i>',
            '<i class="fas fa-angle-left"></i>'
        ],
        responsive:{
            0:{
                items:1,
                nav:false,
                dots: true,
            },
            600:{
                items:2,
                nav:false,
                dots: true,
            },
            1000:{
                items:3,
                nav:true,
                dots: true,
            }
        }
    });
    //bottom nav
    $('.bottom-nav').click(function(){
        $('.toggler').toggleClass('active');
        $('ul').toggleClass('active');
    });
    //cutstomers slier
    $('.owl-cutstomers').owlCarousel({
        rtl: true,
        loop: true,
        margin: 20,
        autoplay: true,
        nav: false,
        dots: true,
        center: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    //favorite shape
    const favorite = document.querySelectorAll('.fa-heart');
    favorite.forEach(button => {
        button.addEventListener('click' , activeClass);
    });
    //function for clickable
    function activeClass(){
        let button = this ;
        button.classList.toggle('far')
        button.classList.toggle('fas');
        button.classList.toggle('active');
    }
    //favorite box
    const favoriteBox = document.querySelectorAll('.favorite');
    favoriteBox.forEach(button => {
        button.addEventListener('click' , activeClassfavoriteBox);
 
    });
    //function for clickable
    function activeClassfavoriteBox(){
        let button = this ;
        button.classList.toggle('active-favorite-box');
    }
    //delete button 
    document.querySelectorAll('.deleteBnt').forEach(button => button.addEventListener('click', e => {
        if(!button.classList.contains('delete')) {
            button.classList.add('delete');
            setTimeout(() => button.classList.remove('delete'), 3200);
        }
        e.preventDefault();
    }));
    //add to cart 
    document.querySelectorAll('.truck-button').forEach(button => {
    button.addEventListener('click', e => {

        e.preventDefault();
        
        let box = button.querySelector('.box'),
            truck = button.querySelector('.truck');
        
        if(!button.classList.contains('done')) {
            
            if(!button.classList.contains('animation')) {

                button.classList.add('animation');

                gsap.to(button, {
                    '--box-s': 1,
                    '--box-o': 1,
                    duration: .3,
                    delay: .5
                });

                gsap.to(box, {
                    x: 0,
                    duration: .4,
                    delay: .7
                });

                gsap.to(button, {
                    '--hx': -5,
                    '--bx': 50,
                    duration: .18,
                    delay: .92
                });

                gsap.to(box, {
                    y: 0,
                    duration: .1,
                    delay: 1.15
                });

                gsap.set(button, {
                    '--truck-y': 0,
                    '--truck-y-n': -26
                });

                gsap.to(button, {
                    '--truck-y': 1,
                    '--truck-y-n': -25,
                    duration: .2,
                    delay: 1.25,
                    onComplete() {
                        gsap.timeline({
                            onComplete() {
                                button.classList.add('done');
                            }
                        }).to(truck, {
                            x: 0,
                            duration: .4
                        }).to(truck, {
                            x: 40,
                            duration: 1
                        }).to(truck, {
                            x: 20,
                            duration: .6
                        }).to(truck, {
                            x: 96,
                            duration: .4
                        });
                        gsap.to(button, {
                            '--progress': 1,
                            duration: 2.4,
                            ease: "power2.in"
                        });
                    }
                });
                
            }
            
        } else {
            button.classList.remove('animation', 'done');
            gsap.set(truck, {
                x: 4
            });
            gsap.set(button, {
                '--progress': 0,
                '--hx': 0,
                '--bx': 0,
                '--box-s': .5,
                '--box-o': 0,
                '--truck-y': 0,
                '--truck-y-n': -26
            });
            gsap.set(box, {
                x: -24,
                y: -6
            });
        }

    });
    });
    //verticle slider
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        spaceBetween: 50,
        slidesPerView: 2,
        keyboard: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + ( 0 + index + 1) + '</span>';
          },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    window.onload = () => {
        const buttons = document.querySelectorAll(".bottom-nav button");
        buttons.forEach((button, index) => {
          button.addEventListener("mouseover", () => {
            if (index > 0) {
              const prevTooltip = buttons[index-1].querySelector("div");
              prevTooltip.classList.remove("animate-right");
              prevTooltip.classList.add("animate-left");
            }
            if (index < buttons.length - 1) {
              const nextTooltip = buttons[index+1].querySelector("div");
              nextTooltip.classList.remove("animate-left");
              nextTooltip.classList.add("animate-right");
            }
          });
        });
    }
});