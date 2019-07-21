const main = document.querySelector('.main');
const slide = document.querySelector('.slide');
const logo = document.querySelector('#Logo');
const menu = document.querySelector('.menu');
const TituloImagen = document.querySelector('.titulo-img');
const TituloInfo = document.querySelector('.titulo');
const arrow = document.querySelector('.fa-chevron-down');

var tl = new TimelineMax();

tl.fromTo(main,1,{height:"0%"}, {height:"80%", ease:Power2.easeInOut})
    .fromTo(main,1.2, {width:"100%"},{width:"80%", ease:Power2.easeInOut})
    .fromTo(slide, 1.2,{x:'-100%'}, {x:'0%',ease:Power2.easeInOut},"-=1.2")
    .fromTo(logo,0.5,{opacity:0, x:30}, {opacity:1, x:0}, "-=0.5")
    .fromTo(menu,0.5,{opacity:0, x:30}, {opacity:1, x:0}, "-=0.5")
    .fromTo(TituloImagen,0.5,{opacity:0, x:30}, {opacity:1, x:0}, "-=0.5")
    .fromTo(arrow, .5, {opacity:0, y:-30}, {opacity:1, y:0}, "-=0.5");

$(document).ready(function(){
    $('.fa-times').click(function(){
        $('.collapse').removeClass('show');
    });
    $('.nav-link').click(function(){
        $('.collapse').removeClass('show');
    });
});