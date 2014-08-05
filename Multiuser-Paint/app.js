"use strict";

var
  canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),

  canvasWidth = $("#canvas").width(),
  canvasHeight = $("#canvas").height(),
  mouseDown = false,
  mousePos = {x: 0, y: 0},
  lastMousePos = {x: undefined, y: undefined},
  tool = "brush";


$(document).ready(function(){

$("#canvas").on("click", function(event){
  if(tool === "brush"){
  ctx.rect(event.pageX, event.pageY, 1, 1);
  ctx.fill();
  ctx.stroke();
}
})

$("#canvas").on("mousedown", function(){
  mouseDown = true;
  if(tool === "line"){
      draw_line(event);
    }
});

$("#canvas").on("mouseup", function(event){
  mouseDown = false;
  if(tool === "brush"){
    lastMousePos.x = undefined;
    lastMousePos.y = undefined;
  }
});

$("#canvas").on("mousemove ",function(event){
  if(mouseDown === true){
    if(tool === "brush"){
      painting(event);
    }
    if(tool === "rectangle"){
      draw_rectangle(event);
    }
    if(tool === "circle"){
      draw_circle(event);
    }
    if(tool === "eraser"){
      erase(event);
    }

}
});

$("#btn-paint").on("click", function(){
  tool = "brush";
});

$("#btn-rectangle").on("click",function(){
  tool = "rectangle";
})

$("#btn-line").on("click",function(){
  tool = "line";
})

$("#btn-circle").on("click",function(){
  tool = "circle";
})

$("#btn-erase").on("click",function(){
  tool = "eraser";
})


});

var set_mouse_positions = function(event){
  if(lastMousePos.x === undefined && lastMousePos.y === undefined){
      mousePos.x = event.pageX;
      mousePos.y = event.pageY;
    }
  lastMousePos.x = mousePos.x;
  lastMousePos.y = mousePos.y;

  mousePos.x = event.pageX;
  mousePos.y = event.pageY;
}


var painting = function(event){
  set_mouse_positions(event);
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.moveTo(lastMousePos.x, lastMousePos.y);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
  ctx.closePath();
}

var draw_line = function(event){
  set_mouse_positions(event);
  if(lastMousePos.x !== mousePos.x && lastMousePos.y !== mousePos.y){
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.moveTo(lastMousePos.x, lastMousePos.y);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke();
  ctx.closePath();
}
}

var draw_rectangle = function(event){
  set_mouse_positions(event);


}
