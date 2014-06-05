"use strict";

var containsAll = require("./containsAll").containsAll;

exports.testContainsAll = function(test) {
    test.equal(containsAll([5,123], ["kiki",5,123,5]), true);
    test.done();
};

exports.testNotContainsAll = function(test) {
  test.equal(containsAll([0,5], ["kiki",5,123]), false);
  test.done();
};
