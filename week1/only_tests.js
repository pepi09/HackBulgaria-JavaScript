"use strict";

var only = require("./only").only;

exports.testTrue = function(test) {
  test.equal(only("number", [1,2,3]), true);
  test.done();
};

exports.testFalse = function(test) {
  test.equal(only("string", ["pepi",9]), false);
  test.done();
};
