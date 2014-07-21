"use strict";

function Shape(type) {
  this.getType = function() {
    return type;
  };
}

Shape.prototype.area = function() {
  throw new Error("Cannot call area of Shape. Use subclasses!");
};

function Rectangle(width, heigh) {
  Shape.call(this,"Rectangle");
  this.width = width;
  this.heigh = heigh;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.area = function() {
  return this.width * this.heigh;
};


function Triangle(a, b, c) {
  Shape.call(this,"Triangle");
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.area = function() {
  var p = (this.a + this.b + this.c) / 2;
  return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
};


function Circle(r) {
  Shape.call(this,"Circle");
  this.r = r;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.area = function() {
  return 2 * Math.PI * this.r;
};
