'use strict';
$(function() {
  $('.js-play-yoututbe').on('click', function(ev) {
    var videoWrapper = $(this).siblings('.js-video-youtube');
    videoWrapper.children('iframe')[0].src += "rel=0&autoplay=1";
    videoWrapper.css('opacity', '1');
    $(this).fadeOut('fast');
    ev.preventDefault();
  });
});