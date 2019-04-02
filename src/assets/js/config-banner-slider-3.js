'use strict';
$(function() {
  jQuery("#slider-3").revolution({
      sliderType:"standar",
      sliderLayout:"fullscreen",
     fullScreenOffsetContainer:"header",
     disableProgressBar:"on",
      delay:6000,
      spinner:"on",
      navigation: {
        arrows:{
          enable:true,
          style: "slider-2-button",
        },  
        onHoverStop:"off"        
      },    
      parallax: {
                  type:"mouse",
                  origo:"slidercenter",
                  speed:2000,
                  levels:[2,3,4,5,6,7,12,16,10,50],
                },
      responsiveLevels:[1170,1024,778,480],
      gridwidth:[1170,1024,778,480],
      lazyType:"smart"
    }); 
});  