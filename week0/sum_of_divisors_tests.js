"use strict";

var sum_of_divisors = require("./sum_of_divisors").sum_of_divisors;

exports.testOne = function(test) {
  test.equal(sum_of_divisors (8), 15);
  test.done();
};

exports.testTwo = function(test) {
  test.equal(sum_of_divisors(7), 8);
  test.done();
};
