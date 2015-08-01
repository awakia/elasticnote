var url = require('url');

var apiHost = "http://localhost:3000"
exports.apiUrl = function (path) {
  return url.resolve(apiHost, path);
}
