
(function(module) {
  var routes = {};
  routes.setMapping = function() {
    page.base('/');

    page('', homeController.index);
    page('portfolio',portfolioController.index);
    page('about', aboutController.index);
    page('game', gameController.index);

    page();
  };
  routes.setMapping();
  module.routes = routes;
})(window);
