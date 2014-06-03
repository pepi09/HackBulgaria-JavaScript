"use strict";

var nth_fibonacci = require("./nth_fibonacci").nth_fibonacci;

exports.testFibonacciFirst = function(test) {
  test.equal(1, nth_fibonacci(1));
  test.done();
};

exports.testFibonacciSecond = function(test) {
  test.equal(1, nth_fibonacci(2));
  test.done();
};

exports.testFibonacciThird = function(test) {
  test.equal(2, nth_fibonacci(3));
  test.done();
};

exports.testFibonacciTenth = function(test) {
  test.equal(55, nth_fibonacci(10));
  test.done();
};
