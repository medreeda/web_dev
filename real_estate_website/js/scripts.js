$(document).ready(function() {
    // إضافة Animations لزر التسجيل
    $(".btn-primary").hover(function() {
        $(this).animate({
            opacity: 0.8
        }, 200);
    }, function() {
        $(this).animate({
            opacity: 1
        }, 200);
    });
});