"use strict";

Array.prototype.first = function(){
  return this[0];
};

Array.prototype.range = function(from,to){
  var result = [];
  while(from <= to){
    result.push(from);
    from += 1;
  }
  return result;
};

Array.prototype.sum = function() {
  return this.reduce(function(first, second) {
    return first + second;
  });
};

Array.prototype.average = function() {
  return this.sum() / this.length;
};

Number.prototype.times = function(action) {
  var n = this;
  [].range(1,n).forEach(function(_) {
    action();
  });
};


