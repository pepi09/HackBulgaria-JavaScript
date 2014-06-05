"use strict";

var countBy = function(countingFunction, arr) {
  var result = {};
  arr.forEach(function(elem){
    if(typeof result[countingFunction(elem)] !== "undefined"){
    result[countingFunction(elem)] += 1;
  }
  else{
    result[countingFunction(elem)] = 0;
    result[countingFunction(elem)] += 1;
  }
  });

  return result;
};

exports.countBy = countBy;
