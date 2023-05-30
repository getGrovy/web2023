const menu = document.querySelectorAll(".navtop");
const submenu = document.querySelectorAll(".subnav");

menu.forEach((e, i) => {
    e.addEventListener("mouseover", () => {
        submenu[i].style.display = "block";
    });
    e.addEventListener("mouseout", () => {
        submenu[i].style.display = "none";
    });
});

$(function(){
    let currentIndex = 0;
    $(".sliderInner").append($(".slider").first().clone(true));
    setInterval(function(){
        currentIndex++;
        $(".sliderInner").animate({marginTop:-400*currentIndex + "px"},600);
        if(currentIndex == 3){
            setTimeout(function(){
                $(".sliderInner").animate({marginTop:0},0);
                currentIndex = 0 ;
            },700)
        }
},3000);
    

});


