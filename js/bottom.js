$(function () {




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







});





























