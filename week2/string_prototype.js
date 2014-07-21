"use strict";

String.prototype.capitalize = function() {
  return this.toUpperCase();
};

String.prototype.dasharize = function() {
  return this.replace("_", "-");
};

String.prototype.times = function(number) {
  var that = this;
  return [].range(1,number).map(function(_){
    return that;
  }).join(" ");
};

// String.prototype.blank = function() {
//   var that = this;
//   var regExp = /\s*/g;
//   console.log(that.match(regExp) === that);
//   return that === "" ;
// };


