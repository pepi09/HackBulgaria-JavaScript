"use strict";

var contains = require("./contains").contains;

var containsAll = function(elements, arr) {
  return elements.every(function(elem){
    return contains(elem, arr);
  });
};

exports.containsAll = containsAll;
