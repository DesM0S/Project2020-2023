/* eslint-disable */
import $ from 'jquery';
import 'jquery-mask-plugin';
import Swiper from 'swiper';
// import 'swiper/css';


window.$ = $;
window.jQuery = $;

$(() => {
	$("#app-menu__close").click(function () {
		$('.app-menu').toggleClass('active')
		$("#app-menu__close").toggleClass('active')
	})
	
})


//slider start
$(() => {
	const swiper = new Swiper('.start_swiper', {
		slidesPerView: 1,
		loop: true,
		spaceBetween: 20,
		pagination: {
			el: '.start_swiper-pagination',
		},
	});
})


//slider products index.html
$(() => {
	const swiper = new Swiper(".start_products_swiper", {
		direction: "vertical",
		slidesPerView: 2,
		spaceBetween: 0,
		freeMode: true,
		breakpoints: {
			320: {
				direction: "horizontal",
				slidesPerView: 1,
				spaceBetween: 20
			},
			400: {
				direction: "horizontal",
				slidesPerView: 2,
				spaceBetween: 20
			},
			769: {
				direction: "horizontal",
				slidesPerView: 3,
				spaceBetween: 20
			},
			993: {
				direction: "vertical",
				slidesPerView: 2,
			}
		},
		scrollbar: {
			el: ".start_products_swiper_scrollbar",
		},
		mousewheel: true,
	});
})

//modal mobile
$(() => {
	$(".header_burger").click(function () {
		$(".modal_menu").fadeIn( "slow" );
		$('html').addClass('no-scroll')
	});

	$(".modal_menu").click(function (event) {
		if (event.target == this) {
			$(".modal_menu").fadeOut( "slow" )
			$('html').removeClass('no-scroll')
		}
	});

	$(".modal_menu_close img").click(function (event) {
		$(".modal_menu").fadeOut( "slow" )
		$('html').removeClass('no-scroll')
	})
})


//modal form product
$(() => {
	$(".product_btn").click(function () {
		$(".modal_product_form").fadeIn( "slow" );
		$('html').addClass('no-scroll')
	});

	$(".modal_product_form").click(function (event) {
		if (event.target == this) {
			$(".modal_product_form").fadeOut( "slow" )
			$('html').removeClass('no-scroll')
		}
	});

	$(".modal_product_form_close").click(function (event) {
		$(".modal_product_form").fadeOut( "slow" )
		$('html').removeClass('no-scroll')
	})
})



//form change
$(() => {
	$('.writeus_label input').on('focus blur', function (evt) {
		$(this).parent('.writeus_label').toggleClass('active', evt.type === 'focus');
	});
	$('.writeus_textarea').on('focus blur', function (evt) {
		$(this).toggleClass('active', evt.type === 'focus');
	});

	$('input[type*="tel"]').mask('+7 (000) 000 00-00');
})


// scroll to id
$(() => {
	$("a.scroll-to").on("click", function(e){
		e.preventDefault();
		var anchor = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(anchor).offset().top - 160
		}, 800);
	});
})