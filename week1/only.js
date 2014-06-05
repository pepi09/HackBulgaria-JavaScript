"use strict";

var only = function(type, arr) {
  return arr.every(function(value){
    return typeof value === type;
  });
};

exports.only = only;
