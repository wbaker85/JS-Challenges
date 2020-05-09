"use strict";

class CustomSet {
  constructor(initial) {
    this.vals = (initial || []);
  }
  items() {
    return this.vals;
  }

  size() {
    return this.items().length;
  }

  empty() {
    return this.size() === 0;
  }

  add(item) {
    if (!this.items().includes(item)) {
      this.vals.push(item);
    }
    return this;
  }

  contains(val) {
    return this.items().includes(val);
  }

  subset(otherSet) {
    return this.items().every((val) => otherSet.items().includes(val));
  }

  disjoint(otherSet) {
    return !this.items().some((val) => otherSet.items().includes(val));
  }

  eql(otherSet) {
    return (this.size() === otherSet.size()) && this.subset(otherSet);
  }

  filter(callback) {
    let filtered = this.items().filter(callback);
    return new CustomSet(filtered);
  }

  intersection(otherSet) {
    return this.filter((item) => otherSet.contains(item));
  }

  difference(otherSet) {
    return this.filter((item) => !otherSet.contains(item));
  }

  union(otherSet) {
    let unioned = new CustomSet(this.items());
    otherSet.items().forEach((item) => unioned.add(item));
    return unioned;
  }
}

module.exports = CustomSet;
