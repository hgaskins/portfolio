//refactored code to implement delegation

var $ul = $('ul.dropdown-menu');

$ul.on('click', 'li', function() {
  if ($(this)[0].className == 'portfolioLink') {
    $('#about').hide();
    $('#projects').show();
  } else if ($(this)[0].className == 'aboutLink') {
    $('#about').show();
    $('#projects').hide();
  };
});
