$(document).ready(function(){  
    // 메뉴 : 하나씩 나오기
    $(".header__right > ul > li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    }) 
    $(".header__right > ul > li").mouseout(function(){
         $(this).find(".submenu").stop().slideUp(200);
    }) 

    // $(".header__right > ul > li").focusin(function(){
    //     $(this).find(".submenu").stop().slideDown(200);
    // }) 
    // $(".header__right > ul > li").focusout(function(){
    //      $(this).find(".submenu").stop().slideUp(200);
    // }) 
    
    // 슬라이드효과
    let currentIndex = 0;
    const slider = $(".slider");
    //모든이미지 숨김 첫이미지만 나옴
    slider.hide().first().show(); 

    setInterval(function(){
        let nextIndex = (currentIndex + 1) % slider.length;

        slider.eq(currentIndex).fadeOut(1200);
        slider.eq(nextIndex).fadeIn(1200);

        currentIndex = nextIndex;
    },3000)

    // 탭매뉴 
    const tabBtn = $(".info-menu > a");
    const tabCont = $(".info-cont > ul");
    tabCont.hide().eq(0).show();

    tabBtn.on("click",function(){
        const index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        tabCont.eq(index).show().siblings().hide();
    })
    
});
