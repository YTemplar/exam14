
$('.mobile-btn') .on('click', function () {
    $('.mobile-btn') .toggleClass('show');
    $('.menu') .toggleClass('show-menu');
    $('.icons') .toggleClass('show-menu2');

});
$('.menu a').on('click', function () {
    $('.menu').removeClass('show');
    $('.icons').removeClass('show2');
    $('.mobile-btn').removeClass('show-menu')
});