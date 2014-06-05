"use strict";

var always = require("./always").always;

exports.testOne = function(test) {
  test.equal(always(9), 9);
  test.done();
};

exports.testTwo = function(test) {
  test.equal(always("ll"), "ll");
  test.done();
};
