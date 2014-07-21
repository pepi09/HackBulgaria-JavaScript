"use strict";

String.prototype.capitalize = function() {
  return this.toUpperCase();
};

String.prototype.dasharize = function() {
  return this.replace("_", "-");
};

String.prototype.times = function(number) {
  var that = this;
  return [].range(0,number).map(function(){
    return that;
  }).join(" ");
};

String.prototype.blank = function() {
  var that = this;
  var regExp = /\s*/g;
  console.log(that.match(regExp) === that);
  return that === "" ;
};


