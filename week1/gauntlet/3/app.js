"use strict";

$(document).ready(function() {

  $("#search-button").on("click", function(){
    var url = $("#search-input").val();
    var $img = $("<img>").attr("src", url);

    $img
      .load(function(){
          $("#image").append($img);
        });

    $img.on("click", function(){
          $img.remove();
        });

    $img.error(function(){
        alert("Failed to load image!");
      });
  });

  $("#search-input").on("keyup", function(event){
      if(event.keyCode === 13){
        $("#search-button").trigger("click");
      }
    });

});
