"use strict";

var sum = require("./sum").sum;

exports.testNumber = function(test) {
  test.equal(sum(3,6), 9);
  test.done();
};

exports.testErrors = function(test) {
  test.throws(function() {
    sum(2,"jj");
  });
  test.done();
};
