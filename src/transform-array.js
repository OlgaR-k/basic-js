const CustomError = require("../extensions/custom-error");

module.exports = function transform( /* arr */ ) {
   throw new CustomError('Not implemented');
  // remove line with error and write your code here
  /*
  if (!Array.isArray(arr)) {
    throw new Error('arr is not Array');
  }

  const discard_next = `--discard-next`;
  const discard_prev = `--discard-prev`;
  const double_next = `--double-prev`;
  const double_prev = `--double-prev`;

  let res = [];
  if ( arr.indexOf( discard_next ) !== -1 ) {
    return get_discard_next(arr, arr.indexOf( discard_next ) );
  } else if ( arr.indexOf( discard_prev ) !== -1 ) {
    return get_discard_prev(arr, arr.indexOf( discard_prev ) );
  } else if ( arr.indexOf( double_next ) !== -1 ) {
    return get_double_next(arr, arr.indexOf( double_next ) );
  } else if ( arr.indexOf( double_prev ) !== -1 ) {
    return get_double_prev(arr, arr.indexOf( double_prev ) );
  }
  return res;
  */
};

function get_discard_next( arr, ind ) {
  let res = arr.concat();
  res.splice(ind, 2);
  return res;
}
function get_discard_prev( arr, ind ) {
  let res = arr.concat();
  res.splice(ind - 1, 2);
  return res;
}
function get_double_next( arr, ind ) {
  let res = arr.concat();
  res.splice(ind, 1);
  return res.map( (elem, index) => index === ind ? elem * 2 : elem );
}
function get_double_prev( arr, ind ) {
  let res = arr.concat();
  res.splice(ind, 1);
  return res.map( (elem, index) => index - 1 === ind ? elem * 2 : elem );
}
