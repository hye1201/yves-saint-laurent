$(function(){

const Main1Prev =$('.main1_prev');
const Main1PrevText =$('.main1_prev_text');
const Main1=$('.main1');
const Main1_bg=$('.main1_bg');
const Main1Text=$('.main1_text');


// 메인 시작시 로드 움직임
window.onload=function(){
	setTimeout(function(){
		Main1Prev.addClass('active');
	},1000);

	setTimeout(function(){
		Main1Prev.addClass('change');
	},4000)

	setTimeout(function(){
		Main1Prev.addClass('scale');
	},4000);

	setTimeout(function(){
		Main1Prev.addClass('remove');
		Main1.addClass('on');
	},5000);

	setTimeout(function(){
		Main1_bg.addClass('active');
	},5000);

};

window.addEventListener('scroll',function(){
    if(5<window.scrollY){
        Main1Text.style.opacity = '0';
    }else{
        Main1Text.style.opacity = '1';
    };
});




});


