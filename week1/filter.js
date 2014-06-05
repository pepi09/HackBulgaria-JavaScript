"use strict";

var filter = function(pred, arr) {
  var result = [];

  for (var element in arr) {
    if (pred(element) === true) {
      result.push(element);
    }
  }

  return result;
};

exports.filter = filter;
