$(function(){
    let currentIndex = 0;
    $(".sliderWrap").append($(".slider").first().clone(true));
    setInterval(function(){
        currentIndex++;
        $(".sliderWrap").animate({marginLeft:-100*currentIndex + "%"},600);
        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderWrap").animate({marginLeft:0},0);
                currentIndex = 0 ;
            },700)
        }
    },3000);

    $(".nav > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $(".nav > ul > li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

});
