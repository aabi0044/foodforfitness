'use strict';
$( document ).ready(function() {
var tpj = jQuery;
  var revapi8;
  tpj(document).ready(function() {
      if (tpj("#slider-4").revolution == undefined) {
          revslider_showDoubleJqueryError("#slider-4");
      } else {
          revapi8 = tpj("#slider-4").show().revolution({
              sliderType: "standard",
              jsFileLocation: "../../revolution/js/",
              sliderLayout: "fullWidth",
              fullScreenOffsetContainer:"header.header-style-4",
              delay: 9000,
              navigation: {
                  arrows:{enable:false},
                  bullets: {enable:false},
              },      
              parallax: {
                type:"mouse",
                origo:"slidercenter",
                speed:2000,
                levels:[2,3,4,5,6,7,12,16,10,50],
              },
              responsiveLevels:[1920,1200,767,481],
              gridwidth:[1583,800,600,480],
              gridheight:[700,700,,]                     
              
          });
      }
  }); /*ready*/
});