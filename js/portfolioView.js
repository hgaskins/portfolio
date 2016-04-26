//refactored code to implement delegation

var $ul = $('ul.dropdown-menu');

$ul.on('click', 'li', function() {
  if ($(this)[0].className == 'portfolioLink') {
    $('#about').hide();
    $('#projects').show();
    $('#repoSection').show();
    $('#game').hide();
  } else if ($(this)[0].className == 'aboutLink') {
    $('#about').show();
    $('#projects').hide();
    $('#repoSection').hide();
    $('#game').hide();
  } else if ($(this)[0].className == 'gameLink') {
    $('#about').hide();
    $('#projects').hide();
    $('#repoSection').hide();
    $('#game').show();
  };
});
