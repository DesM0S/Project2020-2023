/* eslint-disable */
import $ from 'jquery';
import 'jquery-mask-plugin';
import Swiper from 'swiper';
import 'jquery-parallax.js';

window.$ = $;
window.jQuery = $;

$(function (){
  var $headerBurger = $('.header-burger')
  $headerBurger.click(() =>{
    $headerBurger.toggleClass('header-burger-active')
    $('html').toggleClass('menu-mobile-body__active')
    $('.menu-mobile').toggleClass('menu-mobile__active')
    $headerBurger.toggleClass('header-burger--active')
  })
});