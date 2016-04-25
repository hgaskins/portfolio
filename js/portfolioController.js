(function(module) {
  var portfolioController = {};
  portfolioController.index = function() {
    $('#projects').show();
    $('#about').hide();
    $('#game').hide();
  };

  module.portfolioController = portfolioController;
})(window);
