(function(module) {
  var aboutController = {};
  aboutController.index = function() {
    $('#projects').hide();
    $('#repoSection').show();
    $('#about').show();
    $('#game').hide();
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
