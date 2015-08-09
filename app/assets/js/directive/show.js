class Controller {
}

class Directive {
  constructor() {
    this.restrict = "E";
    this.controller = Controller;
    this.controllerAs = "showController";
    this.templateUrl = "template/show.html";
    this.scope = {};
  }
}

var angular = require('angular');
var constants = require('../constants');
var app = angular.module(constants.appName);
app.directive(constants.prefix + "Show", function() { return new Directive(); });
