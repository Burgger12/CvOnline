 const main = document.querySelector('.main');
 const slide = document.querySelector('.slide');
 const arrow = document.querySelector('.fa-chevron-down');
 var tl = new TimelineMax();

 tl.fromTo(slide, 1.2,{x:'-100%'}, {x:'0%',ease:Power2.easeInOut})
    .fromTo(main, 1.3,{x:'-1000%'},{x:'-50%',ease:Power2.easeInOut}, "-=1.3")
    .fromTo(arrow, 1.4, {y:'-100'},{y:'0%',ease:Power2.easeInOut}, "-=1.4");
$(document).ready(function(){
    $('.fa-times').click(function(){
        $('.collapse').removeClass('show');
    });
    $('.nav-link').click(function(){
        $('.collapse').removeClass('show');
    });
});