"use strict";

var contains = require("./contains").contains;

exports.testContains = function(test) {
    test.equal(contains(5, ["kiki",5,123,5]), true);
    test.done();
};

exports.testNotContains = function(test) {
  test.equal(contains(0, ["kiki",5,123]), false);
  test.done();
};
