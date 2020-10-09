const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  str = String(str);
  let repeatTimes = options['repeatTimes'] || 0;
  let separator = options['separator'] || '+';
  let addition = options['addition'];
  if ( !isNaN(addition) ) {
    addition = String(addition);
  } else {
    addition = addition || '';
  }
  let additionRepeatTimes = options['additionRepeatTimes'] || 1;
  let additionSeparator = String(options['additionSeparator']) || '|';

  let additionStr = '';
  if ( additionRepeatTimes > 0 ) {
    additionStr = addition;
    for ( let i = 1; i < additionRepeatTimes; i++ ) {
      additionStr += additionSeparator + addition;
    }
  }

  let res = str + additionStr;
  for (let i = 1; i < repeatTimes; i++ ) {
    res += separator + str + additionStr;
  }
  return res;

};
