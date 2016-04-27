(function(module) {
  var homeController = {};

  homeController.index = function() {
    Project.fetchAll(Project.initIndexPage);
    $('#projects').show();
    $('repoSection').show();
    $('#articles').show();
    $('#game').show();
  };

  module.homeController = homeController;
})(window);
