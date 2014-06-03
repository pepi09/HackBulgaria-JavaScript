"use strict";

var is_number_balanced = require("./is_number_balanced").is_number_balanced;

exports.testOne = function(test) {
  test.equal(is_number_balanced(9), true);
  test.done();
};

exports.testTwo = function(test) {
  test.equal(is_number_balanced(13), false);
  test.done();
};

exports.testThree = function(test) {
  test.equal(is_number_balanced(11), true);
  test.done();
};

exports.testFour = function(test) {
  test.equal(is_number_balanced(121), true);
  test.done();
};

exports.testFive = function(test) {
  test.equal(is_number_balanced(28471), false);
  test.done();
};
