"use strict";

var groupBy = function(groupingFunction, arr) {
  var result = {};
  arr.forEach(function(elem){
    if(typeof result[groupingFunction(elem)] !== "undefined"){
    result[groupingFunction(elem)].push(elem);
  }
  else{
    result[groupingFunction(elem)] = [];
    result[groupingFunction(elem)].push(elem);
  }
  });

  return result;
};

exports.groupBy = groupBy;
