"use strict";

$(document).ready(function(){

  var intervalId, cancelId;

  $("#up").on("click",function(){
    var minutes = parseInt($("#minutes").val());
    var seconds = parseInt($("#seconds").val());
    minutes = minutes * 60 + seconds;

    intervalId = setInterval(function(){ up(minutes); },1000);

    cancelId = setInterval(function(){
      $("#stop").trigger("click");
      alert("Time is up!");
    }, minutes * 1000);

  });

  $("#down").on("click",function(){
    var minutes = parseInt($("#minutes").val());
    var seconds = parseInt($("#seconds").val());
    $("#minute").text(minutes);
    $("#second").text(seconds);

    minutes = minutes * 60 + seconds;

    intervalId = setInterval(function(){ down(); },1000);

    cancelId = setInterval(function(){
      $("#stop").trigger("click");
      alert("Time is up!");
    }, minutes * 1000);

  });

  $("#stop").on("click", function(){
    clearInterval(intervalId);
    clearInterval(cancelId);
    $("#minute").text(0);
    $("#second").text(0);
  });
});

var up = function(){
  var sec, min;
  if (parseInt($("#second").text()) === 59){
    min = parseInt($("#minute").text()) + 1;
    $("#minute").text(min);
    $("#second").text(0);
  }
  else {
    sec = parseInt($("#second").text()) + 1;
    $("#second").text(sec);
  }
};


var down = function(){
  var sec, min;
  if (parseInt($("#second").text()) === 0){
    min = parseInt($("#minute").text()) - 1;

    if (min < 0) {
      min = 0;
    }

    $("#minute").text(min);
    $("#second").text(59);
  }
  else {
    sec = parseInt($("#second").text()) - 1;
    $("#second").text(sec);
  }
};
