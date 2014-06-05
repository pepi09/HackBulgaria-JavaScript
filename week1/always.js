"use strict";

var always = function(value){
  return function(value){
    return value;
  } (value);
};

exports.always = always;
