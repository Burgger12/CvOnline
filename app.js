$(document).ready(function(){
    $('.fa-bars').click(function(){
        if($('.menu').hasClass('hide')){
            $('.menu').removeClass('hide');
            $('.menu').addClass('menu');
            $('.izquierda, .derecha').addClass('hide');
        }
        else{
            $('.menu').addClass('hide');
            $('.izquierda, .derecha').removeClass('hide');
        }
    });
    $(window).scroll(function(){
        if($(document).scrollTop() > 0){
            if($('.menu').hasClass('menu')){
                $('.menu').addClass('hide');
                $('.izquierda, .derecha').removeClass('hide');
            }
        }
    })
});