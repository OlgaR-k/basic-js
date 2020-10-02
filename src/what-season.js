const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if ( !date ) {
    return 'Unable to determine the time of year!';
  } else if ( Object.prototype.toString.call(date) !== '[object Date]' ) {
    throw new TypeError('Type is not Date');
  }
  const spring = 'spring';
  const summer = 'summer';
  const autumn  = 'autumn';
  const winter = 'winter';

  const month = date.getMonth();

  if ( month <= 1 || month === 11 ) {
    return winter;
  } else if ( month <= 4 ) {
    return spring;
  } else if ( month <= 7 ) {
    return summer;
  } else {
    return autumn;
  }
};
