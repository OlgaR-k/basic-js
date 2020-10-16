const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;
const ln2 = 0.639;

module.exports = function dateSample( sampleActivity ) {
  if ( isNaN(sampleActivity) || typeof(sampleActivity) !== 'string' || sampleActivity === '' || !!sampleActivity) {
    return false;
  }
  return Math.ceil(Math.log( MODERN_ACTIVITY / sampleActivity) / ln2 * HALF_LIFE_PERIOD);
};
