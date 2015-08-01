var url = require('url');

exports.appName = "Elasticnote";
exports.prefix = "eln";
exports.externalModules = [];


var apiHost = "http://localhost:3000";
exports.apiUrl = function (path) {
  return url.resolve(apiHost, path);
}
