const curry = require('lodash/curry');
const warning = require('warning');

const attachOptions = (options, action) => {
  if (
    !(
      typeof action.argsLength === 'number' &&
      action.argsLength > 0 &&
      action.allowOptions === true
    )
  ) {
    warning(false, 'attachOptions: cannot attach options to this action');

    return action;
  }

  // eslint-disable-next-line no-param-reassign
  action._options = {
    ...action._options,
    ...options,
  };

  return action;
};

module.exports = curry(attachOptions);
