"use strict";

var contains = function(element, arr) {
  var result = arr.filter(function(el){
    return element === el;
  }, arr);
  return result !== [];
};

exports.contains = contains;
