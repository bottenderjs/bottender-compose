const curry = require('lodash/curry');

const setDisplayName = (displayName, action) => {
  /* eslint-disable no-param-reassign */
  action.displayName = displayName;
  /* eslint-enable no-param-reassign */

  return action;
};

module.exports = curry(setDisplayName);
