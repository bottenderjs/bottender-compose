const curry = require('lodash/curry');

const tryCatch = (statement, onError) => {
  const fn = async (context, ...otherArgs) => {
    try {
      await statement(context, ...otherArgs);
    } catch (err) {
      await onError(context, err);
    }
  };

  const name = `TryCatch(${statement.name || 'Anonymous'}, ${onError.name ||
    'Anonymous'})`;

  Object.defineProperty(fn, 'name', { value: name });

  return fn;
};

module.exports = curry(tryCatch);
