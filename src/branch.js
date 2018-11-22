const curry = require('lodash/curry');

function noop() {}

const branch = (predicate, onTrue, onFalse = noop) => async (
  context,
  ...otherArgs
) => {
  const predicateResult = await predicate(context, ...otherArgs);

  if (predicateResult) {
    if (Array.isArray(predicateResult)) {
      await onTrue(context, ...otherArgs, ...predicateResult);
    } else {
      await onTrue(context, ...otherArgs);
    }
  } else {
    await onFalse(context, ...otherArgs);
  }
};

module.exports = curry(branch);
