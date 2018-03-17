$(document).ready(function () {
    $(".shop_car").hover(function () {
        $(this).css("background-color", "#ffffff");
        $(this).children("a").css("color", "#ff6700");
        $(".shop_car_on").slideDown('fast');
    }, function () {
        $(this).css("background-color", "#424242");
        $(".shop_car_on").slideUp('fast');
        $(this).children("a").css("color", "#b0b0b0");
    });

    $(".header_search_input").focus(function () {
        $(".header_search input").css("border-color", "#ff6700");
        $(".search_lists").show();
    });

    $(".header_search_input").blur(function () {
        $(".header_search input").css("border-color", "#e0e0e0");
        $(".search_lists").hide();
    });

    $(".header_nav").hover(function () {
        $(".header_nav_lists").stop(true, false).slideDown(250);
    }, function () {
        $(".header_nav_lists").stop(true, false).slideUp(250);
    })
});