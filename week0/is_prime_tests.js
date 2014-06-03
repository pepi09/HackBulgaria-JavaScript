"use strict";

var is_prime = require("./is_prime").is_prime;

exports.testPrime = function(test) {
  test.equal(is_prime(7), true);
  test.done();
};

exports.testNotPrime = function(test) {
  test.equal(is_prime(8), false);
  test.done();
};
