
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

 //object literals to set for types of fizzbuzzes
 //classic to be used with second button
  var classic = {
    fizz: 'FIZZ',
    buzz: 'BUZZ'
  };

  var emoji = {
    fizz: ' 🍾 ',
    buzz: ' 🌩 '
  };
  var obj = [];

  $('#action').on('click', function(){
    obj = emoji;
    f = emoji.fizz;
    b = emoji.buzz;
    //calling a function that is passed as a parameter
    appendToPage(fizzBuzzLogic(50)('Here\'s emoji fizzbuzz: '));
  });

  $('#actionTwo').on('click', function(){
    console.log('🍋');
    obj = classic;
    f = classic.fizz;
    b = classic.buzz;
    appendToPage(fizzBuzzLogic(30)('Here\'s emoji fizzbuzz: '));
  });

  //
  function appendToPage(callback) {
    $('#results').append(callback);
  };
  //function generating string based on external context
  var fizzBuzzLogic = function(num) {
    var stringToPrint;
    for (var i = 1; i < num; i++) {
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
    //function that is used in appendToPage and passed as a param
    return function(heresWhat) {
      var message = 'Let\'s do it! ' + heresWhat + stringToPrint;
      return message;
    };
  };

  //wrapping rawData.sort and rawData.forEach
  Project.loadAll = function(rawData) {
    //sorts posts based on date - newest first
    rawData.reduce(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });
    // //REFACORTED TO INCLUDE .MAP
    // //function that fills the array
    // rawData.forEach(function(ele) {
    //   Project.all.push(new Project(ele));
    // });
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
