$(function () {

	//header_mo

	// 메뉴 클릭시 햄버거 메뉴 노출
	$('.nav_ham_menu').click(function () {
		$('#burger_menu_container').animate({ marginLeft: "80%" });


	});

	// 닫기 버튼 클릭시 햄버거 메뉴 숨김

	$('.burger_menu_closebox').click(function(){
		$('#burger_menu_container').animate({ marginLeft: "0%" });
	});



	//햄버거 이전 버튼
	$('.nav_header_left').click(function(){
		$('.nav_level2_wrap').removeClass('show');
		$('.nav_header_text').css('visibility', 'hidden');
		$('.nav_header_left').css('visibility', 'hidden');
	});


	//햄버거 메뉴 클릭시 각 카테고리 노출 
	$('#new_btn').click(function () {

		$('.nav_levl2_wrap').removeClass('show');
		$('#newlist').addClass('show');
		$('.nav_header_left').css('visibility', 'visible');
		$('#new-header').css('visibility', 'visible');

	});

	$('#makeup_btn').click(function () {

		$('.nav_levl2_wrap').removeClass('show');
		$('#makeuplist').addClass('show');
		$('.nav_header_left').css('visibility', 'visible');
		$('#makeup-header').css('visibility', 'visible');

	});

	$('#purfume_btn').click(function () {

		$('.nav_levl2_wrap').removeClass('show');
		$('#purfumelist').addClass('show');
		$('.nav_header_left').css('visibility', 'visible');
		$('#purfume-header').css('visibility', 'visible');

	});


	$('#skincare_btn').click(function () {

		$('.nav_levl2_wrap').removeClass('show');
		$('#skincarelist').addClass('show');
		$('.nav_header_left').css('visibility', 'visible');
		$('#skincare-header').css('visibility', 'visible');

	});


	$('#private_btn').click(function () {

		$('.nav_levl2_wrap').removeClass('show');
		$('#privatelist').addClass('show');
		$('.nav_header_left').css('visibility', 'visible');
		$('#private-header').css('visibility', 'visible');

	});








	//header_desktop

	$('.desktop_nav_list > li > button').mouseenter(function () {

		$('.desktop_level2_wrap').css('display', 'none')
		$(this).next().css('display', 'block');
		$(this).next().addClass('fadeIn')

	});


	$('.desktop_nav_list').mouseleave(function () {
		$('.desktop_level2_wrap').css('display', 'none');
		$(this).find('.desktop_level2_wrap').hide();



	});



	
	//Main1 시작 
	const Main1Prev = $('.main1_prev');
	const Main1PrevText = $('.main1_prev_text');
	const Main1 = $('.main1');
	const Main1_bg = $('.main1_bg');
	const Main1Text = $('.main1_text');


	// 메인 시작시 로드 움직임
	window.onload = function () {
		setTimeout(function () {
			Main1Prev.addClass('active');
		}, 1000);

		setTimeout(function () {
			Main1Prev.addClass('change');
		}, 4000)

		setTimeout(function () {
			Main1Prev.addClass('scale');
		}, 4000);

		setTimeout(function () {
			Main1Prev.addClass('remove');
			Main1.addClass('on');
		}, 5000);

		setTimeout(function () {
			Main1_bg.addClass('active');
		}, 5000);

	};





	//BrandMain fixd> 이미지 올라가기 + 글자애니메이션
	const header = $('header').height();
	const BrandMain = $('#BrandMain').offset().top;
	const Brand_fixed = $('.Brand_fixed');
	const Brand_logoLi1 = $('.Brand_logo li:nth-child(1)');
	const Brand_logoLi2 = $('.Brand_logo li:nth-child(2)');
	const Brand_logoLi3 = $('.Brand_logo li:nth-child(3)');
	const BestMain = $('#bestseller_wrap').offset().top;





	window.addEventListener('scroll', function () {


		let scrollPos = window.scrollY + header;
		let BrandMainOn = BrandMain <= scrollPos;

		if (BrandMainOn) {
			Brand_fixed.addClass('fixed');
			Brand_fixed.addClass('back');
			Brand_logoLi1.addClass('Brand_logo_li1');
			Brand_logoLi2.addClass('Brand_logo_li2');
			Brand_logoLi3.addClass('Brand_logo_li3');


		} else {
			Brand_fixed.removeClass('fixed');
			Brand_fixed.removeClass('back');
			Brand_logoLi1.removeClass('Brand_logo_li1');
			Brand_logoLi2.removeClass('Brand_logo_li2');
			Brand_logoLi3.removeClass('Brand_logo_li3');
		};


		//BestMain 시작 시 BrandMain 사람짐

		let BestMainOn = BestMain - 2500 <= scrollPos;
		if (BestMainOn) {
			Brand_fixed.addClass('out');
		} else {
			Brand_fixed.removeClass('out');
		}




	});

	//bestseller slick
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
			$('.bp_slider').slick('slickFilter', $('.bp_slider li').filter('.slider_makeup'))

		}

		else if (i == 2) {
			$('.bp_slider').slick('slickUnfilter');
			$('.bp_slider').slick('slickFilter', $('.bp_slider li').filter('.slider_purfume'))

		}

		else {
			$('.bp_slider').slick('slickUnfilter');
			$('.bp_slider').slick('slickFilter', $('.bp_slider li').filter('.slider_skincare'))

		}

		e.preventDefault();

	});
	


	//상품홍보 배너1


	$('#productMain').bxSlider({
		mode: 'horizontal',
		speed: 100,
		pager: true,
		moveSlides: 1,
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
		auto: true,
		autoHover: true,
		controls: false,

	});




	//상품 홍보 배너 2

	const ProMain = $('#Promain').offset().top;
	const ht = $('#Promain').height();


	console.log(ProMain);
	console.log(ht);

	window.addEventListener('scroll', function () {

		let wh = this.window.innerHeight;

		$('.change_txtbox').css('position', 'absolute');
		$('.change_imgbox').css('position', 'absolute');
		$('.Probtn_box').css('position', 'fixed');


		if (this.scrollY < ProMain) {
			$('.Protext_box .change_txtbox:not(.text_start)').css('visibility', 'hidden');
			$('.Proimg_box .change_imgbox').css('visibility', 'hidden');
			$('.Protext_box .text_start').css('visibility', 'visible');

			//글자
			$('.changebox1').removeClass('active')
			$('.changebox1').removeClass('change')
			//이미지
			$('.changeimg1').removeClass('change')

		}
		else if ((ProMain <= this.scrollY) && (this.scrollY < (ProMain + wh))) {
			$('.Protext_box .change_txtbox:not(.text_start)').css('visibility', 'hidden');
			$('.Proimg_box .change_imgbox:not(.img_start)').css('visibility', 'hidden');
			$('.Protext_box .text_start').css('visibility', 'visible');
			$('.Proimg_box .img_start').css('visibility', 'visible');
			//글자
			$('.changebox1').addClass('active')
			$('.changebox1').addClass('change')
			$('.changebox2').removeClass('active')
			$('.changebox2').removeClass('change')
			//이미지
			$('.changeimg1').addClass('change')
			$('.changeimg2').removeClass('change')

			$('.text_start').css('position', 'fixed');
			$('.img_start').css('position', 'fixed');


		}
		else if (((ProMain + wh) <= this.scrollY) && (this.scrollY < (ProMain + 2 * wh))) {
			$('.Protext_box .change_txtbox:not(.text_second)').css('visibility', 'hidden');
			$('.Proimg_box .change_imgbox:not(.img_second)').css('visibility', 'hidden');
			$('.Protext_box .text_second').css('visibility', 'visible');
			$('.Proimg_box .img_second').css('visibility', 'visible');
			//글자
			$('.changebox1').removeClass('active')
			$('.changebox1').removeClass('change')
			$('.changebox2').addClass('active')
			$('.changebox2').addClass('change')
			$('.changebox3').removeClass('active')
			$('.changebox3').removeClass('change')

			//이미지
			$('.changeimg2').addClass('change')

			$('.text_second').css('position', 'fixed');
			$('.img_second').css('position', 'fixed');


		}
		else if (((ProMain + 2 * wh) <= this.scrollY) && (this.scrollY < (ProMain + 3 * wh))) {
			$('.Protext_box .change_txtbox:not(.text_end)').css('visibility', 'hidden');
			$('.Proimg_box .change_imgbox:not(.img_end)').css('visibility', 'hidden');
			$('.Protext_box .text_end').css('visibility', 'visible');
			$('.Proimg_box .img_end').css('visibility', 'visible');
			//글자
			$('.changebox2').removeClass('active')
			$('.changebox2').removeClass('change')
			$('.changebox3').addClass('active')
			$('.changebox3').addClass('change')
			//이미지
			$('.changeimg2').removeClass('change')
			$('.changeimg3').addClass('change')



			$('.text_end').css('position', 'fixed');
			$('.img_end').css('position', 'fixed');

		}
		else {
			$('.Protext_box .change_txtbox:not(.text_end)').css('visibility', 'hidden');
			$('.Proimg_box .change_imgbox:not(.img_end)').css('visibility', 'hidden');
			$('.Protext_box .text_end').css('visibility', 'visible');
			$('.Proimg_box .img_end').css('visibility', 'visible');
			//글자
			$('.changebox3').removeClass('active')
			$('.changebox3').removeClass('change')
			//이미지
			$('.changeimg3').removeClass('change')
			$('.Probtn_box').css('position', 'inherit');


		}


	});

	//카테고리 애니메이션

	$('.cg_box1').waypoint(function () {
		$('.cg_box1').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});

	$('.cg_box2').waypoint(function () {
		$('.cg_box2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});

	$('.cg_box3').waypoint(function () {
		$('.cg_box3').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});

	$('.cg_box4').waypoint(function () {
		$('.cg_box4').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});

	//footer
	$('#footer_logo a img').mouseenter(function () {
		$(this).attr('src', 'img/logo_gray.png');
	});

	$('.wishlist').on('click', function (e) {
		$(this).toggleClass("wishlist_checked");

		if ($(this).hasClass("wishlist_checked")) {
			$(this).attr("src", "img/icon/full_wishlist.png");
		}
		else {
			$(this).attr("src", "img/icon/empty_wishlist.svg");
		}
	});






});
















