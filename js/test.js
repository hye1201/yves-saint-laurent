$(function(){


	$('.bp_slider').slick({
		autoplay: true,
		infinity: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: false,
		nextArrow: false,
		rows: 1,

		autoplaySpeed: 2000,
		responsive: [

			{
				breakpoint: 531,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					rows: 1
				}
			}
		]
	});


	$('.slick-slide img').css('display', 'inline');

	$('#best_nav li a').on('click', function (e) {

		const i = $(this).parent().index();
		$('#best_nav li a').removeClass('on');
		$(this).addClass('on');

		if (i == 0) {
			$('.bp_slider').slick('slickUnfilter');
		}

		else if (i == 1) {
			$('.bp_slider').slick('slickUnfilter');
			$('.bp_slider').slick('slickFilter', $('.bp_slider li').filter('.slider_makeup'));

		}

		else if (i == 2) {
			$('.bp_slider').slick('slickUnfilter');
			$('.bp_slider').slick('slickFilter', $('.bp_slider li').filter('.slider_purfume'));

		}

		else {
			$('.bp_slider').slick('slickUnfilter');
			$('.bp_slider').slick('slickFilter', $('.bp_slider li').filter('.slider_skincare'));

		}

		e.preventDefault();

	});


});