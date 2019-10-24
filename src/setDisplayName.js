const curry = require('lodash/curry');

const setDisplayName = (displayName, Action) => {
  /* eslint-disable no-param-reassign */
  Action.displayName = displayName;
  Object.defineProperty(Action, 'name', { value: displayName });
  /* eslint-enable no-param-reassign */

  return Action;
};

module.exports = curry(setDisplayName);
