(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $('#projects').hide();
    $('#about').show();
    $('#game').hide();
  };

  module.aboutController = aboutController;
})(window);
