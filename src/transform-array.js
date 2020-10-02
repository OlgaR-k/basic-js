const CustomError = require("../extensions/custom-error");

module.exports = function transform(  arr  ) {
  if (!Array.isArray(arr)) {
    throw new Error('arr is not Array');
  }

  const discard_next = `--discard-next`;
  const discard_prev = `--discard-prev`;
  const double_next = `--double-next`;
  const double_prev = `--double-prev`;

  let res = [];
  let elem;
  let lastIndAdd;

  for ( let i = 0; i < arr.length; i++ ) {
    elem = arr[i];
    if ( elem === discard_next ) {
      ++i;
    } else if ( elem === discard_prev ) {
      if ( i - 1 === lastIndAdd ) {
        res.pop();
      }
    } else if ( elem === double_next ) {
      if ( ++i < arr.length ) {
        res.push( arr[i], arr[i] );
        lastIndAdd = i;
      }
    } else if ( elem === double_prev ) {
      if (  res.length > 0 && i > 0 && i - 1 === lastIndAdd ) {
        res.push( res[ res.length - 1 ] );
        lastIndAdd++;
      }
    } else {
      res.push( elem );
      lastIndAdd = i;
    }
  }
  return res;
};
