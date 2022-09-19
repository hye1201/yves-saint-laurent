$(function(){
    $('.slider').slick({
        autoplay: true,
        infinity: true,
        slidesToShow:3,
        slidesToScroll:1, 
        dots: true,        
          responsive: [   
                     {
                   breakpoint: 769,
                   settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1
                   }
                 },
                 {
                   breakpoint: 480,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 }
           ]        
   });

   $(".slick-buttons a").on("click", function(e) {
    const n=$(this).index();
    $(".slick-buttons a").removeClass();
    $(this).addClass("on");
    
    
    if (n==0) {
    $(".slider").slick("slickUnfilter");
    
    //slickUnfilter = 걸려있던 필터를 해제해라 >> 그래야 all이라서 데이터가 다 나옴
    }else if(n==1){
    $(".slider").slick("slickUnfilter");
    $(".slider").slick("slickFilter", 
           $(".slider li").filter(".aaa"));   

    //걸려있던 모든 필터를 해제하고 .slide li 중 aaa만 필터만 나오게 해라 

    }else if(n==2){
        $(".slider").slick("slickUnfilter");
        $(".slider").slick("slickFilter", 
                   $(".slider li").filter(".bbb")); 

    }else{
        $(".slider").slick("slickUnfilter");
        $(".slider").slick("slickFilter", 
                   $(".slider li").filter(".ccc"));  
    }

 //slickUnfilter, 적용된 .filter를 해체.
     e.preventDefault();
   }); 
});