"use strict";

var is_int_palindrome = require("./is_int_palindrome").is_int_palindrome;

exports.testTrue = function(test) {
  test.equal(is_int_palindrome(1), true);
  test.done();
};

exports.testFalse = function(test) {
  test.equal(is_int_palindrome(42), false);
  test.done();
};

exports.testTrueOddNumberDigits = function(test) {
  test.equal(is_int_palindrome(999), true);
  test.done();
};

exports.testFalseOddNumberDigits = function(test) {
  test.equal(is_int_palindrome(123), false);
  test.done();
};
