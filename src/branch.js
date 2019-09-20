const curry = require('lodash/curry');

function Noop() {}

const branch = (predicate, onTrue, onFalse = Noop) => {
  const fn = async (context, ...otherArgs) => {
    if (await predicate(context, ...otherArgs)) {
      await onTrue(context, ...otherArgs);
    } else {
      await onFalse(context, ...otherArgs);
    }
  };

  const name = `Branch(${onTrue.name || 'Anonymous'}, ${onFalse.name ||
    'Anonymous'})`;

  Object.defineProperty(fn, 'name', { value: name });

  return fn;
};

module.exports = curry(branch);
