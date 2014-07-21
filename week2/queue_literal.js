"use strict";

var counter = (function() {
  var count = -1;

  return function() {
    count = count + 1;
    return count;
  };
} () );

var queue  = {
  push:function(item) {
    this[counter()] = item;
  },
  pop:function(){
    return this[0];
  },
  isEmpty:function(){
    return  typeof this[0] === "undefined";
  }
};
