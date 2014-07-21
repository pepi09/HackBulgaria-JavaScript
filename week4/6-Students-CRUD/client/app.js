$(document).ready(function(){
  "use strict";
  $(".add").on("click",function(){
    $.ajax({
      url: "http://localhost:3030/student",
      type : "POST",
      contentType: "application/json",
      dataType: "json",
    });
  });




















});
