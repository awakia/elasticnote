class Controller {
}

class Directive {
  constructor() {
    return {
      restrict: "E",
      controller: Controller,
      controllerAs: "show",
      templateUrl: "template/show.html",
      scope: {}
    };
  }
}

var angular = require('angular');
var constants = require('../constants');
var app = angular.module(constants.appName);
app.directive(constants.prefix + "Show", function() { return new Directive(); });
