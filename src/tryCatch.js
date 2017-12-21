const curry = require('lodash/curry');

const tryCatch = (statement, onError) => async context => {
  try {
    await statement(context);
  } catch (err) {
    await onError(context, err);
  }
};

module.exports = curry(tryCatch);
