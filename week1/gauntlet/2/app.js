"use strict";

$(document).ready(function(){

  var allParagraph = [];

  $("p").each(function(index, element){
    allParagraph.push($(element).attr("class"));
  });

  $("#toggle-button").on("click", function(){
    $("p").removeClass("highlight");

      var toHighlight = allParagraph.shift();
      $("." + toHighlight).addClass("highlight");

      allParagraph.push(toHighlight);
});
});
console.log("Empty I am.");
