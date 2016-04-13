//view object to hold functions for dynamic updates
var portfolioView = {};

portfolioView.handleMainNav = function() {
    $('.main-nav').on('click', function() {
        $('li.portfolioLink').click(function() {
            $('#about').hide();
            $('#projects').show();
        });
        $('li.aboutLink').click(function() {
            $('#about').show();
            $('#projects').hide();
        });
    });
};

$(document).ready(function() {
    portfolioView.handleMainNav();
})
