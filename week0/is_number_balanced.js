"use strict";
var sum_of_digits = require("./sum_of_digits").sum_of_digits;

var toArray = function(number){
  var arr = [],i = 0;
  while(number > 0){
    arr.push(number % 10);
    number = parseInt(number / 10, 10);
  }
  return arr;
};

var is_number_balanced = function(number) {
  var arr = toArray(number);
  if (number % 2 === 0){
    var firstN = arr.slice(0,arr.length / 2).reduce(function(acc, next) {
      acc + next;
    }, 0);
  }

}
