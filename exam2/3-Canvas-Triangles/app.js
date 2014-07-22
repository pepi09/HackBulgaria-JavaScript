"use strict";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var canvasWidth = $("#canvas").width();
var canvasHeight = $("#canvas").height();

var points = []

function Tile(x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;

        this.print = function() {
            ctx.fillStyle = "red";
            ctx.fillRect(this.x,this.y, 1, 1);
        }
}

function print_line(point1, point2, ctx) {
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.moveTo(point1.x, point1.y);
      ctx.lineTo(point2.x, point2.y);
      ctx.stroke();
}


var make_triangle = function(pointsArr){
  if (isItTriangle(pointsArr[0],pointsArr[1],pointsArr[2])) {
    print_line(pointsArr[0], pointsArr[1], ctx);
    print_line(pointsArr[1], pointsArr[2], ctx);
    print_line(pointsArr[2], pointsArr[0], ctx);
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
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
})
