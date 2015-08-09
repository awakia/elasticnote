class DocumentStore {
  constructor() {
    this.documents = [
      {
        title: "hogehoge",
        content: "aiueo\nabcde",
      },
      {
        title: "document 2",
        content: "test\ndocuments",
      },
    ]
  }
}

var angular = require('angular');
var constants = require('../constants');
var app = angular.module(constants.appName);
app.service(DocumentStore.name, function() { return new DocumentStore(); });
