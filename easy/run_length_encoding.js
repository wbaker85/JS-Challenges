let encode = function(string) {
  return string.replace(/(.)\1+/g, (match, p1) => `${match.length}${p1}`);
};

let decode = function(string) {
  return string.replace(/(\d+)(\D{1})/g, (_, p1, p2) => p2.repeat(p1));
};

module.exports = {
  encode,
  decode,
};