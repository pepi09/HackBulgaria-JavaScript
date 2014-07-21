"use strict";

function Point(x, y) {
  if(!(this instanceof Point)) {
    return new Point(x,y);
  }

  var xInc = function() {
    this.x += 1;
  };

  var xDec = function() {
    this.x -= 1;
  };

  var yInc = function() {
    this.x += 1;
  };

  var yDec = function() {
    this.x -= 1;
  };

  var getX = function() {
    return this.x;
  };

  var getY = function() {
    return this.y;
  };
}

Point.prototype.equals = function(point){
  return this.x === point.x && this.y === point.y;
};

Point.prototype.toString = function() {
  return "Point @ " + this.x + "," + this.y;
};


function Robot (startPoint) {
  if(!(this instanceof Point)) {
    return new Robot(startPoint);
  }

  var getStartPoint = function() {
    return this.startPoint;
   };
}

Robot.prototype.moveLeft = function(amount) {
  amount.times(this.getStartPoint().xDec());
};

Robot.prototype.moveRight = function(amount) {
  amount.times(this.getStartPoint().xInc());
};

Robot.prototype.moveUp = function(amount) {
  amount.times(this.getStartPoint().yDec());
};

Robot.prototype.moveDown = function(amount) {
  amount.times(this.getStartPoint().yInc());
};



Number.prototype.times = function(action) {
  var n = this;
  [].range(1,n).forEach(function() {
    action();
  });
};
