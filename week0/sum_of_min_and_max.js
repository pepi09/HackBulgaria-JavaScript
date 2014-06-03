"use strict";

var sum_of_min_and_max = function(arr) {
  var n = arr.length;
  arr = arr.sort(function(a, b) { return a - b; } );
  return arr[0] + arr[n - 1];
};

exports.sum_of_min_and_max = sum_of_min_and_max;
