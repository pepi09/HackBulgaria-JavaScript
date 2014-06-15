"use strict";

var beerAndFries = function(storage) {
  var beer = [];
  var fries = [];

  storage.forEach(function(item) {
   if (item.type === "beer") {
    beer.push(item.score);
   }
   else {
    fries.push(item.score);
   }
  });

  beer.sort(function(a, b){
    return b-a;
  });

  fries.sort(function(a, b){
    return b-a;
  });


  return beer.map(function(score){
    var index = beer.indexOf(score);
    return score * fries[index];
  }).reduce(function(a,b){
    return a + b;
  },0);
};

exports.beerAndFries = beerAndFries;
