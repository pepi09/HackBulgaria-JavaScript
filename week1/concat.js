"use strict";

var concat = function(a, b) {
  if(typeof a === "string" && typeof b === "string"){
    return a + b;
  }
  else{
    throw new TypeError("ERROR!!");
  }
};

exports.concat = concat;
