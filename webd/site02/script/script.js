$(function () {
    $(".nav > ul > li").mouseover(function () {
        $(".nav > ul>li>ul").stop().fadeIn(400);
        $("#header .container").addClass("on");
    });
    $(".nav > ul > li").mouseout(function () {
        $(".nav > ul>li>ul").stop().fadeOut(200);
        $("#header .container").removeClass("on");

    });
});