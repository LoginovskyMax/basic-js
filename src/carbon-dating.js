const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(activity) {
  if(typeof activity!= 'string'){return false}
  let Activ = parseFloat(activity)
  if(Number.isNaN(Activ)){return false}
  if(Activ>15){return false}
  if(Activ<=0){return false}
  let age = Math.ceil(Math.log((15/Activ))/(0.693/5730))
  return age
}


module.exports = {
  dateSample
};
