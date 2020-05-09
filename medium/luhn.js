"use strict";

class Luhn {
  constructor(string) {
    this.value = string.replace(/ /g, '');;
  }

  valid() {
    if (this.value .length < 2 || this.value .match(/[^0-9]/)) return false;

    return this.value.split('')
      .reverse()
      .reduce((sum, numChar, idx) => {
        let thisNum = Number(numChar);
        let doubled = thisNum * 2 > 9 ? (thisNum * 2) - 9 : thisNum * 2;
        return sum + (idx % 2 === 1 ? doubled : thisNum);
      }, 0) % 10 === 0;
  }
}

module.exports = Luhn;
