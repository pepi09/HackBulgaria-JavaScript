"use strict";

var range = require("./range").range;

exports.testOne = function(test) {
  test.deepEqual(range(5,10), [5,6,7,8,9,10]);
  test.done();
};

exports.testTwo = function(test) {
  test.deepEqual(range(1,5), [1,2,3,4,5]);
  test.done();
};
