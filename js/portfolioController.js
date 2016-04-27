(function(module) {
  var portfolioController = {};
  portfolioController.index = function() {
    $('#projects').show();
    $('#repoSection').hide();
    $('#about').hide();
    $('#game').hide();
  };

  module.portfolioController = portfolioController;
})(window);
