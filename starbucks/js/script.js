$(function () {
    const menus = $('.menus');
    const header = $('header');
    const nav = $('.nav')
    menus.mouseenter(function () {

            menus.removeClass('active');
            $(this).addClass('active');
            $(this).find('.center').stop().slideDown(500);

        })
        .mouseleave(function () {
            menus.removeClass('active');
            $(this).find('.center').stop().slideUp(200);


        })
        .click(function () {
            menus.removeClass('active');
            $(this).addClass('active');
        })

})