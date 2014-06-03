"use strict";

var prime_number_of_divisors = require("./prime_number_of_divisors").prime_number_of_divisors;

exports.testPrime = function(test) {
  test.equal(prime_number_of_divisors(7), true);
  test.done();
};

exports.testNotPrime = function(test) {
  test.equal(prime_number_of_divisors(8), false);
  test.done();
};

exports.testTrue = function(test) {
  test.equal(prime_number_of_divisors(9), true);
  test.done();
};
