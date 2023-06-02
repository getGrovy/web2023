$(function(){
    let currentIndex = 0;
    $(".slider__inner").append($(".slider").first().clone(true));
    setInterval(function(){
        
        if(currentIndex == 0){
            setTimeout(function(){
                $(".slider__inner").animate({marginTop:-1200},0);
                currentIndex = 3 ;
            },700)
        }
        $(".slider__inner").animate({marginTop:-400*currentIndex + "px"},600);
        console.log(currentIndex)
        currentIndex--;
    },3000);
});

const menu = document.querySelector(".tab");
const submenu = document.querySelectorAll(".tabsub");


menu.addEventListener("mouseover", () => {
    submenu.forEach((e,i) =>{
        submenu[i].style.display = "flex"; 
    })
});    


menu.addEventListener("mouseout", () => {
    submenu.forEach((e,i) =>{
        submenu[i].style.display = "none"; 
    })
});

$(".noticelink").on("click", function() {
    $(".gallery").css("display", "none");
    $(".notice").css("display", "block");
    $(this).addClass("active");
    $(".gallerylink").removeClass("active");

  });
$(".gallerylink").on("click", function() {
    $(".gallery").css("display", "block");
    $(".notice").css("display", "none");
    $(this).addClass("active");
    $(".noticelink").removeClass("active");

});

