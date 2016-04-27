(function(module) {
  var gameController = {};
  gameController.index = function() {
    $('#projects').hide();
    $('#repoSection').hide();
    $('#about').hide();
    $('#game').show();
  };

  module.gameController = gameController;
})(window);
