"use strict";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var canvasWidth = $("#canvas").width();
var canvasHeight = $("#canvas").height();

var points = [],
    fillColor = "#000000",
    bgColor =  "#ffffff",
    name = localStorage.key(0);

function Tile(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;

        this.print = function() {
            ctx.fillRect(this.x,this.y, 1, 1);
          }
}

var make_triangle = function(pointsArr){
  if (isItTriangle(pointsArr[0],pointsArr[1],pointsArr[2])) {
    ctx.beginPath();
    ctx.moveTo(pointsArr[0].x, pointsArr[0].y);
    ctx.lineTo(pointsArr[1].x, pointsArr[1].y);
    ctx.lineTo(pointsArr[2].x, pointsArr[2].y);
    ctx.closePath();

    ctx.fillStyle = fillColor;
    ctx.fill();
}

}

var isItTriangle = function(point1, point2, point3) {
  var a = side_length(point1,point2),
      b = side_length(point2,point3),
      c = side_length(point3,point1);

  if (((a + b) > c) && ((b + c) > a) && ((a + c) > b)){
    return true;
  }
  else {
    return false;
  }
}


var side_length = function(point1, point2) {
  var a = point1.x - point2.x,
      b = point1.y - point2.y;
  return Math.sqrt(a*a + b*b);
}

$(document).ready(function(){

for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  $("#saved-images").append("<option>" + localStorage.key(i) + "</option>");
}

$("#canvas").on("click",function( event ){
  var p = new Tile(event.pageX, event.pageY, ctx);
  points.push(p);
  if (points.length === 3){
    make_triangle(points);
    points.splice(0,3);
  }
  p.print();
})

$("#clear").on("click", function(){
  $('#canvas').css('background-color', "#ffffff");
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
})

$("#fill-color").on("change",function(){
  fillColor = this.value;
})

$("#background-color").on("change",function(){
  bgColor = this.value;
  $('#canvas').css('background-color', bgColor);
})

$("#save").on("click", function(){
   var new_name = prompt("Set name:");
   localStorage.setItem(new_name,canvas.toDataURL());
   $("#saved-images").append("<option>" + new_name + "</option>");
})

$("#saved-images").on("change", function(){
  name = this.value;
})

$("#load").on("click", function(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img,0,0);
  }
  img.src = localStorage.getItem(name);
})

})
