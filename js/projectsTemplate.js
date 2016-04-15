//empty array for rawData to push to
var projects = [];

//constructor function that creates new article/html element for each project
function Project (opts) {

  for (key in opts) this[key] = opts[key];
}

//function that creates JQ objects with methods using html elements within constructor function
Project.prototype.toHtml = function() {

  //using Handlebars to render templates
  var source = $('#portfolioTemplate').html();
  var template = Handlebars.compile(source);

  return template(this);

};

//sorts posts based on date - newest first
rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

//function that fills the array
rawData.forEach(function(ele) {
  projects.push(new Project(ele));
});

//function that loops through the array to past to the html
projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
