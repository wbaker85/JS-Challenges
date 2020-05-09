"use strict";

function markMultiples(arr, num) {
  return arr.map((val) => (val % num === 0 && val > num ? 0 : val));
}

function primes(max) {
  let range = Array(max - 1).fill().map((_, idx) => idx + 2);

  for (let idx = 0; idx < range.length; idx += 1) {
    if (range[idx] === 0) continue;
    range = markMultiples(range, range[idx]);
  }

  return range.filter((val) => !!val);
}

module.exports = primes;
