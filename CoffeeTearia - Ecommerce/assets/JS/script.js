
// init Isotope // Isotope filtering (bestsellers) //
var $grid = $('.productList').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('btn-active');
    $grid.isotope({ filter: filterValue });
  });


var filter = $('.filter-button-group').find('button');
function resetFilterBtns(){
    filter.each(function(){
        $(this).removeClass('btn-active');
    })
}
// ============== End of Isotope filtering (bestsellers) ================ //



// init Isotope // Isotope filtering (All Products) //
var $grid = $('.productList').isotope({
  itemSelector: '.product-item',
  layoutMode: 'fitRows'
});

$('.filters').on( 'click', 'input', function() {
  var filterValue = this.value;
  $grid.isotope({ filter: filterValue });
});

// ============== End of Isotope filtering (All Products) ================ //

// ============== Scroll to Top ================ //
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

window.addEventListener('scroll', function() {
  var scrollButton = document.getElementById('scroll-to-top');
  if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
  } else {
      scrollButton.style.display = 'none';
  }
});

// ============== End of Scroll to Top ================ //

