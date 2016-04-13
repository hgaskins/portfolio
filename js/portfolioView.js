// //view object to hold functions for dynamic updates
// var portfolioView = {};
//
// portfolioView.handleMainNav = function() {
//     $('.main-nav').on('click', function() {
//         $('li.portfolioLink').click(function() {
//             $('#about').hide();
//             $('#projects').show();
//         });
//         $('li.aboutLink').click(function() {
//             $('#about').show();
//             $('#projects').hide();
//         });
//     });
// };
//
// $(document).ready(function() {
//     portfolioView.handleMainNav();
// });

var $ul = $('ul.dropdown-menu');

$ul.on('click', 'li', function() {
    if ($(this)[0].className == 'portfolioLink') {
        $('#about').hide();
        $('#projects').show();
    } else if ($(this)[0].className == 'aboutLink') {
        $('#about').show();
        $('#projects').hide();
    };
    console.log($(this));
});
