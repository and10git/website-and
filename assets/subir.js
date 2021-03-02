$(document).ready(function () { //Hacia arriba
    irArriba();
});

function irArriba() { //subir al clickear
    $('.subir').click(function () {
        $('body,html').animate({ scrollTop: '0px' }, 800);
    });

    $(window).scroll(function () { //aparecer cuando bajas
        if ($(this).scrollTop() > 0) {
            $('.subir').slideDown(400);
        } else {
            $('.subir').slideUp(400);
        }
    });
}