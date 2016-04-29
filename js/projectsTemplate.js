
(function(module) {
  //constructor function that creates new article/html element for each project
  function Project (opts) {
    this.title = opts.title;
    this.tagline = opts.tagline;
    this.description = opts.description;
    this.imgSRC = opts.imgSRC;
    this.category = opts.category;
    this.urlToSite = opts.urlToSite;
    this.publishedOn = opts.publishedOn;
  };

  //empty array for rawData to push to
  Project.all = [];

  //function that creates JQ objects with methods using html elements within constructor function
  Project.prototype.toHtml = function() {

    //using Handlebars to render templates
    var source = $('#portfolioTemplate').html();
    var template = Handlebars.compile(source);

    return template(this);

  };

 // +++++++++++++++++ fizzbuzz +++++++++++++++++++

  var emoji = {
    fizz: ' 🍾 ',
    buzz: ' 🌩 '
  };
  var obj = [];
  
  var fizzBuzzLogic = function() {
    var stringToPrint;
    for (var i = 1; i <= 50 ; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        stringToPrint += f+b;
      } else if (i % 3 === 0) {
        stringToPrint += f;
      } else if (i % 5 === 0) {
        stringToPrint += b;
      } else {
        stringToPrint += (' ' + i + ' ');
      };
    };
    return stringToPrint;
  };

  $('button').one('click', function() {
    obj = emoji;
    f = emoji.fizz;
    b = emoji.buzz;
    $('#results').append(fizzBuzzLogic());
  });

  //wrapping rawData.sort and rawData.forEach
  Project.loadAll = function(rawData) {
    //sorts posts based on date - newest first
    rawData.reduce(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    Project.all = rawData.map(function(item) {
      return new Project(item);
    });
  };


  Project.fetchAll = function(fetchAllCallback) {
    if (localStorage.portfolioData) {
      Project.loadAll(JSON.parse(localStorage.portfolioData));
      fetchAllCallback();
    } else {
      $.getJSON('../data/data.json', function(portfolioData) {
        Project.loadAll(portfolioData);
        localStorage.portfolioData = JSON.stringify(portfolioData);
        fetchAllCallback();
      });
    }
  };

  Project.initIndexPage = function() {
    //function that loops through the array to paste to the html
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml());
    });
  };

  module.Project = Project;
}) (window);
