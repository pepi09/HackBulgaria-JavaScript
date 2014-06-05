"use strict";

var find = require("./find").find;
var even = function(number){
  return number % 2 === 0;
};

exports.testFind = function(test) {
  test.deepEqual(find(even, [10,2,3]), [10]);
  test.done();
};

exports.testUndefined = function(test) {
  test.deepEqual(find(even, [1,7,3]), undefined);
  test.done();
};
