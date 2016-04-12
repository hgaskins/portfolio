//empty array for rawData to push to
var projects = [];

//constructor function that creates new article/html element for each project
function Project (projectIndex) {

  this.title = projectIndex.title;
  this.tagline = projectIndex.tagline;
  this.description = projectIndex.description;
  this.imgSRC = projectIndex.imgSRC;
  this.category = projectIndex.category;
  this.urlToSite = projectIndex.urlToSite;
}

//function that creates JQ objects with methods using html elements within constructor function
Project.prototype.toHtml = function() {

    //
    var $newProject = $('article.template').clone();

    $newProject.find('h1').html(this.title);

    $newProject.find('h3').html(this.tagline);

    $newProject.find('.projectDescription').html(this.description);

    //for img
    $newProject.find('img').attr('src', this.imgSRC);
    $newProject.find('alt').attr('src', this.title);

    $newProject.attr('data-category', this.category);

    $newProject.find('.byline a').attr('href', this.urlToSite);

    $newProject.removeClass('template');

    return $newProject;
}

//sorts posts based on date - newest first
rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

//function that fills the array
rawData.forEach(function(ele) {
  projects.push(new Project(ele));
})

//function that loops through the array to past to the html
projects.forEach(function(a){
  $('#projects').append(a.toHtml())
});
