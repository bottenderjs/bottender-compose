const curry = require('lodash/curry');

function noop() {}

const branch = (predicate, onTrue, onFalse = noop) => async (
  context,
  ...otherArgs
) => {
  if (await predicate(context, ...otherArgs)) {
    await onTrue(context, ...otherArgs);
  } else {
    await onFalse(context, ...otherArgs);
  }
};

module.exports = curry(branch);
