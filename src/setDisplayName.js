const curry = require('lodash/curry');

const setDisplayName = (displayName, action) => {
  /* eslint-disable no-param-reassign */
  action.displayName = displayName;
  Object.defineProperty(action, 'name', { value: displayName });
  /* eslint-enable no-param-reassign */

  return action;
};

module.exports = curry(setDisplayName);
