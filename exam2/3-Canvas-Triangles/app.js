"use strict";

var c = document.getElementById("canvas");
var ctx = c.getContext('2d');

function Tile(x, y, ctx){
        this.x = x;
        this.y = y;
        this.ctx = ctx;

        this.print = function(){
            ctx.fillStyle = "red";
            //ctx.arc(this.x, this.y, 10, 10, Math.PI * 2);
            ctx.fillRect(this.x,this.y, 1, 1);
        }
}

var r = new Tile(10,10, ctx);
r.print();

$("#canvas").on("click",function( event ){
  var p = new Tile(event.pageX, event.pageY, ctx);
  p.print();
  console.log("ha ha");
})


var isItTriangle = function(point1, point2, point3) {
}
