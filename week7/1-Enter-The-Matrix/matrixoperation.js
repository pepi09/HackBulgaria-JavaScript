"use strict";

define(['matrix'], function(Matrix){
  function MatrixOperations(){
    this.createFromArray = function(data){
      var n = data.length,
          m = data[0].length,
          matrix = new Matrix(n, m);

      data.forEach(function(row, index){
        matrix.setRow(index,row);
      })

      return matrix;
    };

    this.transpose = function(M){
      var matrix = new Matrix(M.getM(), M.getN());
      M.forEach(function(row, index){
        matrix.setCol(index,row);
      })
      return matrix;
    };

    this.add = function(M1, M2){
      var matrix = new Matrix(M1.getN(), M1.getM());
      M1.forEach(function(row, i){
        row.forEach(function(element, j){
          matrix.setAt(i, j, element + M2.getAt(i, j));
        })
      })
      return matrix;
    };

    this.scalarMult = function(scalar, M1){
      var matrix = new Matrix(M1.getN(), M1.getM());
      M1.forEach(function(row, i){
        row.forEach(function(element, j){
          matrix.setAt(i, j, element * scalar);
        })
      })
      return matrix;
    }

    this.multiply = function(M1, M2){
      if (M1.getN() === M2.getM() && M1.getM() === M2.getN()){
        var matrix = new Matrix(M1.getN(), M2.getM()),
            m2 = this.transpose(M2);
        M1.forEach(function(row, i){
          m2.forEach(function(column,j){
            var value = row.reduce(function(previous, current ,index){
              return previous + (element * column[index]);
            })
            matrix.setAt(i, j, value);
          })
        })
        return matrix;
      };
    }
  }
  return MatrixOperations;
})
