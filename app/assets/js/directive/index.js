class Controller {
  constructor(DocumentStore) {
    this.documents = DocumentStore.documents;
  }
}

Controller.$inject = ["DocumentStore"];

class Directive {
  constructor() {
    this.restrict = "E";
    this.controller = Controller;
    this.controllerAs = "indexController";
    this.templateUrl = "template/index.html";
    this.scope = {
      "documents": "="
    };
  }
}

var angular = require('angular');
var constants = require('../constants');
var app = angular.module(constants.appName);
app.directive(constants.prefix + "Index", function() { return new Directive(); });
