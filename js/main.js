$(document).ready(function(){
    // init Isotope
var $grid = $('.item1').isotope({
  itemSelector:'.item-box',
});
// filter items on button click
$('.filter-button-group').on( 'click', 'a.btnf', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
});
