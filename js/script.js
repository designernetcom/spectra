(function($) {

	"use strict";

	function handlePreloader() {

		if($('.preloader').length){

			$('.preloader').delay(200).fadeOut(500);

		}

	}

	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');

			var HeaderHight = $('.main-header').height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}

		}
	}


	headerStyle();


	//Submenu Dropdown Toggle

	if($('.main-header .navigation li.dropdown').length){

		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');



		$('.main-header li.dropdown .dropdown-btn').on('click', function() {

			$(this).prev('ul').slideToggle(500);

		});


		$('.main-header .main-menu li.dropdown .dropdown-btn').on('click', function() {

			$(this).prev('.mega-menu').slideToggle(500);

		});


		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {

			e.preventDefault();

		});

	}




	if ($('.hidden-bar').length) {

		var hiddenBar = $('.hidden-bar');

		var hiddenBarOpener = $('.nav-toggler');

		var hiddenBarCloser = $('.hidden-bar-closer');

		$('.hidden-bar-wrapper').mCustomScrollbar();



		//Show Sidebar

		hiddenBarOpener.on('click', function () {

			hiddenBar.addClass('visible-sidebar');

		});



		//Hide Sidebar

		hiddenBarCloser.on('click', function () {

			hiddenBar.removeClass('visible-sidebar');

		});

	}





	//Hidden Bar Menu Config

	function hiddenBarMenuConfig() {

		var menuWrap = $('.hidden-bar .side-menu');

		// appending expander button

		menuWrap.find('.dropdown').children('a').append(function () {

			return '<button type="button" class="btn expander"><i class="icon fa fa-angle-right"></i></button>';

		});

		// hidding submenu

		menuWrap.find('.dropdown').children('ul').hide();

		// toggling child ul

		menuWrap.find('.btn.expander').each(function () {

			$(this).on('click', function () {

				$(this).parent() // return parent of .btn.expander (a)

					.parent() // return parent of a (li)

						.children('ul').slideToggle();



				// adding class to expander container

				$(this).parent().toggleClass('current');

				// toggling arrow of expander

				$(this).find('i').toggleClass('fa-angle-right fa-angle-down');



				return false;



			});

		});

	}



	hiddenBarMenuConfig();





	//Custom Seclect Box

	if($('.custom-select-box').length){

		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');

	}





	//Jquery Spinner / Quantity Spinner

	if($('.quantity-spinner').length){

		$("input.quantity-spinner").TouchSpin({

		  verticalbuttons: true

		});

	}







	//Event Countdown Timer

	if($('.time-countdown').length){

		$('.time-countdown').each(function() {

		var $this = $(this), finalDate = $(this).data('countdown');

		$this.countdown(finalDate, function(event) {

			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));

		});

	 });

	}





	//Progress Bar

	if($('.progress-line').length){

		$('.progress-line').appear(function(){

			var el = $(this);

			var percent = el.data('width');

			$(el).css('width',percent+'%');

		},{accY: 0});

	}





	//Fact Counter + Text Count

	if($('.count-box').length){

		$('.count-box').appear(function(){



			var $t = $(this),

				n = $t.find(".count-text").attr("data-stop"),

				r = parseInt($t.find(".count-text").attr("data-speed"), 10);



			if (!$t.hasClass("counted")) {

				$t.addClass("counted");

				$({

					countNum: $t.find(".count-text").text()

				}).animate({

					countNum: n

				}, {

					duration: r,

					easing: "linear",

					step: function() {

						$t.find(".count-text").text(Math.floor(this.countNum));

					},

					complete: function() {

						$t.find(".count-text").text(this.countNum);

					}

				});

			}



		},{accY: 0});

	}







	//Accordion Box

	if($('.accordion-box').length){

		$(".accordion-box").on('click', '.acc-btn', function() {



			var outerBox = $(this).parents('.accordion-box');

			var target = $(this).parents('.accordion');



			if($(this).hasClass('active')!==true){

				$(outerBox).find('.accordion .acc-btn').removeClass('active');

			}



			if ($(this).next('.acc-content').is(':visible')){

				return false;

			}else{

				$(this).addClass('active');

				$(outerBox).children('.accordion').removeClass('active-block');

				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);

				target.addClass('active-block');

				$(this).next('.acc-content').slideDown(300);

			}

		});

	}







	//Single Item Carousel

	if ($('.single-item-carousel').length) {

		$('.single-item-carousel').owlCarousel({

			loop:true,

			margin:30,

			nav:true,

			smartSpeed: 500,

			autoplay: 5000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				800:{

					items:1

				},

				1024:{

					items:1

				},

				1200:{

					items:1

				}

			}

		});

	}


	// Services Carousel
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				1024:{
					items:3
				}
			}
		});
	}



	// Two Item Carousel

	if ($('.two-item-carousel').length) {

		$('.two-item-carousel').owlCarousel({

			loop:true,

			margin:0,

			nav:true,

			smartSpeed: 500,

			autoplay: 5000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				800:{

					items:2

				},

				1024:{

					items:2

				},

				1200:{

					items:2

				}

			}

		});

	}





	// Testimonial Carousel

	if ($('.testimonial-carousel').length) {

		$('.testimonial-carousel').owlCarousel({

			loop:true,

			margin:0,

			nav:true,

			smartSpeed: 700,

			autoplay: true,

			navText: [ '<span class="fa fa-long-arrow-left"></span> prev', 'next<span class="fa fa-long-arrow-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				800:{

					items:1

				},

				1024:{

					items:1

				},

				1400:{

					items:1

				}

			}

		});

	}





	// Three Item Carousel

	if ($('.three-item-carousel').length) {

		$('.three-item-carousel').owlCarousel({

			loop:true,

			margin:30,

			nav:true,

			smartSpeed: 500,

			autoplay: 5000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:2

				},

				800:{

					items:3

				},

				1024:{

					items:4

				},

				1200:{

					items:4

				}

			}

		});

	}







	//Main Slider Carousel

	if ($('.main-slider-carousel').length) {

		$('.main-slider-carousel').owlCarousel({

			animateOut: 'fadeOut',

    		animateIn: 'fadeIn',

			loop:true,

			margin:0,

			nav:true,

			autoHeight: true,

			smartSpeed: 500,

			autoplay: 6000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				800:{

					items:1

				},

				1024:{

					items:1

				},

				1200:{

					items:1

				}

			}

		});

	}







	//Main Slider Carousel

	if ($('.slider-carousel').length) {

		$('.slider-carousel').owlCarousel({

			animateOut: 'fadeOut',

    		animateIn: 'fadeIn',

			loop:true,

			margin:0,

			nav:true,

			autoHeight: true,

			smartSpeed: 500,

			autoplay: 6000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:1

				},

				800:{

					items:1

				},

				1024:{

					items:1

				},

				1200:{

					items:1

				}

			}

		});

	}







	// Sponsors Carousel

	if ($('.sponsors-carousel').length) {

		$('.sponsors-carousel').owlCarousel({

			loop:true,

			margin:0,

			nav:true,

			smartSpeed: 500,

			autoplay: 4000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				480:{

					items:2

				},

				600:{

					items:3

				},

				800:{

					items:4

				},

				1024:{

					items:5

				}

			}

		});

	}







	// Sponsors Carousel

	if ($('.sponsors-carousel-two').length) {

		$('.sponsors-carousel-two').owlCarousel({

			loop:true,

			margin:30,

			nav:true,

			smartSpeed: 500,

			autoplay: 4000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				480:{

					items:2

				},

				600:{

					items:3

				},

				800:{

					items:4

				},

				1024:{

					items:4

				}

			}

		});

	}









	//Client Testimonial Carousel

	if ($('.slider-carousel').length && $('.slider-thumb-carousel').length) {



		var $sync3 = $(".slider-carousel"),

			$sync4 = $(".slider-thumb-carousel"),

			flag = false,

			duration = 500;



			$sync3

				.owlCarousel({

					loop:true,

					items: 1,

					margin: 0,

					nav: true,

					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

					dots: true,

					autoplay: true,

					autoplayTimeout: 5000

				})

				.on('changed.owl.carousel', function (e) {

					if (!flag) {

						flag = false;

						$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);

						flag = false;

					}

				});



			$sync4

				.owlCarousel({

					loop:true,

					margin:15,

					items: 1,

					nav: false,

					navText: [ '<span class="icon flaticon-left-arrow-2"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],

					dots: false,

					center: false,

					autoplay: true,

					autoplayTimeout: 5000,

					responsive: {

						0:{

				            items:1,

				            autoWidth: false

				        },

				        400:{

				            items:1,

				            autoWidth: false

				        },

				        600:{

				            items:1,

				            autoWidth: false

				        },

				        1000:{

				            items:1,

				            autoWidth: false

				        },

						1200:{

				            items:1,

				            autoWidth: false

				        }

				    },

				})



		.on('click', '.owl-item', function () {

			$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);

		})

		.on('changed.owl.carousel', function (e) {

			if (!flag) {

				flag = true;

				$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);

				flag = false;

			}

		});

	}







	//Masonary

	function enableMasonry() {

		if($('.masonry-items-container').length){



			var winDow = $(window);

			// Needed variables

			var $container=$('.masonry-items-container');



			$container.isotope({

				itemSelector: '.masonry-item',

				 masonry: {

					columnWidth : '.masonry-item.col-lg-4'

				 },

				animationOptions:{

					duration:500,

					easing:'linear'

				}

			});



			winDow.bind('resize', function(){



				$container.isotope({

					itemSelector: '.masonry-item',

					animationOptions: {

						duration: 500,

						easing	: 'linear',

						queue	: false

					}

				});

			});

		}

	}



	enableMasonry();







	//Product Carousel

	if ($('.project-carousel').length) {

		$('.project-carousel').owlCarousel({

			loop:true,

			margin:6,

			nav:true,

			smartSpeed: 700,

			autoplay: 5000,

			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],

			responsive:{

				0:{

					items:1

				},

				600:{

					items:2

				},

				800:{

					items:2

				},

				1024:{

					items:3

				},

				1200:{

					items:4

				},

				1400:{

					items:4

				},

				1600:{

					items:4

				}

			}

		});

	}





	//Product Tabs

	if($('.project-tab').length){

		$('.project-tab .product-tab-btns .p-tab-btn').on('click', function(e) {

			e.preventDefault();

			var target = $($(this).attr('data-tab'));



			if ($(target).hasClass('actve-tab')){

				return false;

			}else{

				$('.project-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');

				$(this).addClass('active-btn');

				$('.project-tab .p-tabs-content .p-tab').removeClass('active-tab');

				$(target).addClass('active-tab');

			}

		});

	}







	//Tabs Box

	if($('.tabs-box').length){

		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {

			e.preventDefault();

			var target = $($(this).attr('data-tab'));



			if ($(target).is(':visible')){

				return false;

			}else{

				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');

				$(this).addClass('active-btn');

				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);

				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');

				$(target).fadeIn(300);

				$(target).addClass('active-tab');

			}

		});

	}







	//LightBox / Fancybox

	if($('.lightbox-image').length) {

		$('.lightbox-image').fancybox({

			openEffect  : 'fade',

			closeEffect : 'fade',

			helpers : {

				media : {}

			}

		});

	}





	//Contact Form Validation

	if($('#contact-form').length){

		$('#contact-form').validate({

			rules: {

				username: {

					required: true

				},

				email: {

					required: true,

					email: true

				},

				phone: {

					required: true

				},

				zip: {

					required: true

				},

				message: {

					required: true

				}

			}

		});

	}



	//Gallery Filters

	if($('.filter-list').length){

		$('.filter-list').mixItUp({});

	}



	// Scroll to a Specific Div

	if($('.scroll-to-target').length){

		$(".scroll-to-target").on('click', function() {

			var target = $(this).attr('data-target');

		   // animate

		   $('html, body').animate({

			   scrollTop: $(target).offset().top

			 }, 1500);



		});

	}





	// Elements Animation

	if($('.wow').length){

		var wow = new WOW(

		  {

			boxClass:     'wow',      // animated element css class (default is wow)

			animateClass: 'animated', // animation css class (default is animated)

			offset:       0,          // distance to the element when triggering the animation (default is 0)

			mobile:       true,       // trigger animations on mobile devices (default is true)

			live:         true       // act on asynchronously loaded content (default is true)

		  }

		);

		wow.init();

	}





/* ==========================================================================

   When document is Scrollig, do

   ========================================================================== */



	$(window).on('scroll', function() {

		headerStyle();

	});



/* ==========================================================================

   When document is loading, do

   ========================================================================== */



	$(window).on('load', function() {

		handlePreloader();

	});



})(window.jQuery);
