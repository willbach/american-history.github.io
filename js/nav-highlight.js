$(document).scroll(function() {
    var position = $(this).scrollTop() + 90
    $.fn.reverse = [].reverse;
    $('section').reverse().each(function() {
        var target = $(this).offset().top
        var id = $(this).attr('id')
        if (position >= target) {
            $('.navbar-collapse ul li a').removeClass('active')
            $('.navbar-collapse ul li a[href="#' + id + '"]').addClass('active')
            return false;
        }
    })
})