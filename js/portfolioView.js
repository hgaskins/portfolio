//view object to hold functions for dynamic updates
var portfolioView = {};

portfolioView.handleMainNav = function() {
    $('.main-nav').on('click', function() {
        $('li.portfolioLink').click(function() {
            console.log("portfolio");
            $('#about').hide();
            $('#projects').show();
        });
        $('li.aboutLink').click(function() {
            console.log("about");
            $('#about').show();
            $('#projects').hide();
        });
    });
};

$(document).ready(function() {
    portfolioView.handleMainNav();
})
