class Controller {
}

class Directive {
  constructor() {
    return {
      restrict: "E",
      controller: Controller,
      controllerAs: "index",
      templateUrl: "template/index.html",
      scope: {}
    };
  }
}

var angular = require('angular');
var constants = require('../constants');
var app = angular.module(constants.appName);
app.directive(constants.prefix + "Index", function() { return new Directive(); });
