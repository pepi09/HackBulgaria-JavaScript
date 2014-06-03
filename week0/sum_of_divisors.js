"use strict";

var sum_of_divisors = function(number) {
  var result = 0, i = 0;

  while(i <= number){
    if (number % i === 0){
      result = result + i;
      i++;
    }
    else{
      i++;
    }
  }

  return result;
};

exports.sum_of_divisors = sum_of_divisors;
