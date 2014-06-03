"use strict";

var sum_of_divisors = require("./sum_of_divisors").sum_of_divisors;

var is_prime = function(number) {
  return sum_of_divisors(number) === number + 1;
};

exports.is_prime = is_prime;
