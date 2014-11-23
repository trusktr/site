var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.home = function() {
  this.title = 'Joseph Orbegoso Pea, trusktr.';
  this.render();
}

pagesController.password = function() {
  this.title = 'Password generator by Joe Pea, using jQuery.';
  this.render();
}

pagesController.clobe = function() {
  this.title = 'Clobe by Joe Pea, using Famo.us.';
  this.render();
}

pagesController.calendar = function() {
  this.title = 'Date picker by Joe Pea, using Bootstrap, Bootstrap-Datepicker, and Tooltipster.';
  this.render();
}

pagesController.flipDiagonal = function() {
  this.title = 'Diagonal flip animation by Joe Pea, using Famo.us.';
  this.render();
}

pagesController.passwordReveal = function() {
  this.title = 'Password reveal by Joe Pea, using Famo.us.';
  this.render();
}

pagesController.scrollViewTest = function() {
  this.title = 'ScrollView test by Joe Pea and Alessandro Annini, using Famo.us.';
  this.render();
}

module.exports = pagesController;
