"use strict";

class CircularBuffer {
  static EMPTY_VALS = [undefined, null];

  constructor(size) {
    this.size = size;
    this.elements = Array(this.size);
    this.clear();
  }

  clear() {
    this.elements.fill(CircularBuffer.EMPTY_VALS[0]);
  }

  numberFilled() {
    return this.elements.filter((elem) =>
      !CircularBuffer.EMPTY_VALS.includes(elem)
    ).length;
  }

  isFull() {
    return this.numberFilled() >= this.size;
  }

  isEmpty() {
    return this.numberFilled() === 0;
  }

  nextEmptySpot() {
    return this.elements.findIndex((elem) =>
      CircularBuffer.EMPTY_VALS.includes(elem)
    );
  }

  write(input) {
    if (this.isFull()) throw new Error("Buffer is full");
    this.elements.splice(this.nextEmptySpot(), 1, input);
  }

  read() {
    if (this.isEmpty()) throw new Error("Buffer is empty");
    this.elements.push(CircularBuffer.EMPTY_VAL);
    return this.elements.shift();
  }

  forceWrite(input) {
    if (this.isFull()) {
      this.elements.push(CircularBuffer.EMPTY_VAL);
      this.elements.shift();
    }
    this.write(input);
  }
}

module.exports = CircularBuffer;