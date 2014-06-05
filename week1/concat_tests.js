"use strict";

var concat = require("./concat").concat;

exports.testNumber = function(test) {
  test.equal(concat("Pepa", "Simeonova"), "PepaSimeonova");
  test.done();
};

exports.testErrors = function(test) {
  test.throws(function() {
    concat(2,"jj");
  });
  test.done();
};
