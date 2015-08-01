require("angular");
constants = require("./constants")

angular.module(constants.appName, constants.externalModules)

require("./directive/all")
