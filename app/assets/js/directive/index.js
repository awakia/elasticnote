function Controller() {
}

function Directive() {
  return {
    restrict: "E",
    controller: Controller,
    controllerAs: "index",
    template: "<div>hoge fuga</div>",
    scope: {}
  };
}

var angular = require('angular');
var constants = require('../constants');
var app = angular.module(constants.appName);
app.directive(constants.prefix + "Index", Directive);
