"use strict";

var is_int_palindrome = function(number) {
  return number.toString() === number.toString()
                .split("")
                .reverse()
                .reduce(function(a, b) {
                  return a + b;
                });
};

exports.is_int_palindrome = is_int_palindrome;

