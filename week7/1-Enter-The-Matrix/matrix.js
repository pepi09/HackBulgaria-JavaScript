"use strict";

require.config({
  paths : {
    underscore : bower_components/underscore/underscore
  }
});

require([underscore], function(_){
define(function(){
function Matrix(N, M){
  var matrix = [];

  var create = function(){
    _.range(N).forEach(function(row){
      matrix[row] = [];
    });
  };

  this.getN = function(){
    return N;
  };

  this.getM = function(){
    return M;
  };

  this.getRow = function(index){
    return matrix[index - 1];
  };

  this.getCol = function(index){
    return matrix.map(function(row){
      return row[index - 1];
    });
  };

  this.setRow = function(index, row){
    if(index <= N + 1){
      matrix[index - 1] = row;
    }
  };

  this.setCol = function(index, col){
    if(index <= N + 1){
      matrix.forEach(function(row, i){
        row[index - 1] = col[i];
      });
    }
  };

  this.gatAt = function(i, j){
    return matrix[i - 1][j - 1];
  };

  this.setAt = function(i, j, value){
    matrix[i - 1][j - 1] = value;
  };

  this.getData = function(){
    return matrix;
  };

  this.toString = function(){
    matrix.forEach(function(row){
      console.log(row.toString() + "\n");
    });
  };
}
return Matrix;
});
});
