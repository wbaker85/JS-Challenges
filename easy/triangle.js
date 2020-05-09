"use strict";

class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  kind() {
    this._validateTriangle();

    if (this.isEquilateral()) {
      return 'equilateral';
    } else if (this.isScalene()) {
      return 'scalene';
    } else {
      return 'isosceles';
    }
  }

  isEquilateral() {
    return (new Set(this.sides)).size === 1;
  }

  isScalene() {
    return (new Set(this.sides)).size === 3;
  }

  _validateTriangle() {
    if (
      (this.sides[0] + this.sides[1]) < this.sides[2]
      || (this.sides[0] + this.sides[2]) < this.sides[1]
      || (this.sides[1] + this.sides[2]) < this.sides[0]
      || this.sides.some((side) => side <= 0)
    ) throw new Error('Invalid triangle');
  }
}

module.exports = Triangle;