"use strict";
var is_prime = require("./is_prime").is_prime;

var number_of_divisors = function(num) {
  var count = 0, i = 0;

  while(i <= num){
    if (num % i === 0){
      count ++;
      i++;
    }
    else{
      i++;
    }
  }

  return count;
};

var prime_number_of_divisors = function(number) {
  return is_prime(number_of_divisors(number));
};

exports.prime_number_of_divisors = prime_number_of_divisors;
