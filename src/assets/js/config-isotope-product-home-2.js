'use strict';
$(function() {
  $('.js-product-masonry-filter-layout-2').imagesLoaded( function() {
    $('.js-product-masonry-filter-layout-2').isotope({});
  });

  var $grid = $('.js-product-masonry-filter-layout-2').isotope({
    itemSelector: '.item'
  });

  var iso = $grid.data('isotope');

  $('.js-product-filter-home-2').on( 'click', '.filter-title', function() {
    var filterValue = $( this ).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    if (iso.filteredItems.length === 0) {
      $('.js-out-of-stock-filter-product-home-2').fadeIn();
    } else {
      $('.js-out-of-stock-filter-product-home-2').hide();        
    }
  });

  $('.js-product-filter-home-2').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', '.filter-title', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
});