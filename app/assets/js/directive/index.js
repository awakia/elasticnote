class Controller {
}

class Directive {
  constructor() {
    this.restrict = "E";
    this.controller = Controller;
    this.controllerAs = "index";
    this.templateUrl = "template/index.html";
    this.scope = {};
  }
}

var angular = require('angular');
var constants = require('../constants');
var app = angular.module(constants.appName);
app.directive(constants.prefix + "Index", function() { return new Directive(); });
