"use strict";

$(document).ready(function(){
  var $data = $.getJSON("http://localhost:3000/students", function(students){
    students = groupBy(function(elem){
        return elem.course;
    },students);

    var tii = $("#course-pick").append("k;l;");
    tii.append("ll;");
    console.log(students);
    });
    // $("#course-pick <option>").attr(student.course);
  });


var groupBy = function(groupingFunction, arr) {
  var result = {};
  arr.forEach(function(elem){
    if(typeof result[groupingFunction(elem)] !== "undefined"){
    result[groupingFunction(elem)].push(elem);
  }
  else{
    result[groupingFunction(elem)] = [];
    result[groupingFunction(elem)].push(elem);
  }
  });

  return result;
};

/*<option>Frontend JavaScript</option>
                            <option>Core Java</option>
                            <option>Programming 101</option>*/
