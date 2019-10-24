const curry = require('lodash/curry');
const warning = require('warning');

const attachOptions = (options, Action) => {
  if (
    !(
      typeof Action.argsLength === 'number' &&
      Action.argsLength > 0 &&
      Action.allowOptions === true
    )
  ) {
    warning(false, 'attachOptions: cannot attach options to this action');

    return Action;
  }

  // eslint-disable-next-line no-param-reassign
  Action._options = {
    ...Action._options,
    ...options,
  };

  return Action;
};

module.exports = curry(attachOptions);
