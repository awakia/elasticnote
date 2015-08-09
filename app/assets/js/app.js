require("angular");
var constants = require("./constants");

angular.module(constants.appName, constants.externalModules);

require("./service/document_store");
require("./directive/all");
