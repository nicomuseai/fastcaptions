// Highlight current page in nav

  $(function() {
    $('.sub-menu a[href^="' + location.pathname + '"]').parent('li').addClass('active');
  });