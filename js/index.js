$(document).ready(function () {


    /**
     * 购物车hover动画
     */
    $(".shop_car").hover(function () {
        $(this).css("background-color", "#ffffff");
        $(this).children("a").css("color", "#ff6700");
        $(".shop_car_on").stop(true, false).slideDown('fast');
    }, function () {
        $(this).css("background-color", "#424242");
        $(".shop_car_on").stop(true, false).slideUp('fast');
        $(this).children("a").css("color", "#b0b0b0");
    });

    /**
     * 搜索框下拉动画
     */
    $(".header_search_input").focus(function () {
        $(".header_search input").css("border-color", "#ff6700");
        $(".search_lists").show();
    });

    $(".header_search_input").blur(function () {
        $(".header_search input").css("border-color", "#e0e0e0");
        $(".search_lists").hide();
    });

    /**
     * 导航栏hover动画
     */
    $(".header_nav").hover(function () {
        $(".header_nav_lists").stop(true, false).slideDown(250);
    }, function () {
        $(".header_nav_lists").stop(true, false).slideUp(250);
    })

    /**
     * banner左右滑动效果
     */
    $(".category_class_pager_direction_left").click(function () {
        $(".category_banner_box a").each(function () {
            if($(this).children().is(":visible")){
                $(".category_class_pager div").removeClass("category_class_pager_point_activity");
                if($(this).index() == 0){
                    $(this).children().fadeOut();
                    $(".category_banner_box a").last().find("img").fadeIn();
                    $(".category_class_pager div").last().addClass("category_class_pager_point_activity")
                } else {
                    $(this).children().fadeOut();
                    $(this).prev().find("img").fadeIn();
                    $(".category_class_pager div").eq($(this).index()-1).addClass("category_class_pager_point_activity")
                }
                return false;
            }
        })
    })

    $(".category_class_pager_direction_right").click(function () {
        $(".category_banner_box a").each(function () {
            if($(this).children().is(":visible")){
                $(".category_class_pager div").removeClass("category_class_pager_point_activity");
                if($(this).next().length == 0){
                    $(this).children().fadeOut();
                    $(".category_banner_box a").first().find("img").fadeIn();
                    $(".category_class_pager div").first().addClass("category_class_pager_point_activity")
                    return false;
                } else {
                    $(this).children().fadeOut();
                    $(this).next().find("img").fadeIn();
                    $(".category_class_pager div").eq($(this).index()+1).addClass("category_class_pager_point_activity")
                return false;}
            }
        })
    })

    /**
     * banner圆点滑动动画
     */
    $(".category_class_pager a").click(function () {
        $(this).parent().children().children().removeClass("category_class_pager_point_activity");
        $(this).children("div").addClass("category_class_pager_point_activity");
        $(".category_banner_box").find("img").fadeOut();
        $(".category_banner_box").find("img").eq($(this).index()).fadeIn();
    })

    /**
     * banner定时滑动效果，5秒后滑动到下一张
     */
    setInterval("$('.category_class_pager_direction_right').click()", 5000);

    $(".left_classify ul").hover(function () {
        $(this).children("div").show();
    }, function () {
        $(this).children("div").hide();
    })
});