const curry = require('lodash/curry');

const tryCatch = (statement, onError) => async (context, ...otherArgs) => {
  try {
    await statement(context, ...otherArgs);
  } catch (err) {
    await onError(context, err);
  }
};

module.exports = curry(tryCatch);
