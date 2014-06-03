"use strict";

var sum_of_digits = function(number) {
  if ( number < 0){
    number = Math.abs(number);
  }

  var result = 0;

  while(number > 0){
    result = result + (number % 10);
    number = parseInt(number / 10, 10);
  }

  return result;
};

exports.sum_of_digits = sum_of_digits;
