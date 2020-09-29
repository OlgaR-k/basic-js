const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let earCat = '^^';
  let count = 0;
  for (let array of matrix) {
    for (let elem of array) {
      if (elem === earCat) {
        count++;
      }
    }
  }
  return count;
};
