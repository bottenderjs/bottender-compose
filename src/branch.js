const curry = require('lodash/curry');

function noop() {}

const branch = (predicate, onTrue, onFalse = noop) => async context => {
  if (await predicate(context)) {
    await onTrue(context);
  } else {
    await onFalse(context);
  }
};

module.exports = curry(branch);
