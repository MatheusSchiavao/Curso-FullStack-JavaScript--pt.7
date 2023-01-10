"use strict";
exports.__esModule = true;
var lodash = require("lodash");
var xwing = {
    name: "x-wing",
    pilot: "Luke Skywalker",
    speed: 50,
    weapons: 4
};
console.log(lodash.camelCase(xwing.pilot));
