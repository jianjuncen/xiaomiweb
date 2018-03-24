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

    $(".category_class_pager_direction_left").click(function () {
        $(".category_banner_box a").each(function () {
            if($(this).children().is(":visible")){
                if($(this).index() == 0){
                    $(this).children().fadeOut();
                    $(".category_banner_box a").last().find("img").fadeIn();
                }
                $(this).children().fadeOut();
                $(this).prev().find("img").fadeIn();
                return false;
            }
        })
    })

    $(".category_class_pager_direction_right").click(function () {
        $(".category_banner_box a").each(function () {
            if($(this).next().length == 0){
                $(this).children().fadeOut();
                $(".category_banner_box a").first().find("img").fadeIn();
                return false;
            }
            if($(this).children().is(":visible")){
                $(this).children().fadeOut();
                $(this).next().find("img").fadeIn();
                return false;
            }
        })
    })


});