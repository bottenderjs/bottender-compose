const curry = require('lodash/curry');

const repeat = (times, action) => {
  const fn = async (context, ...otherArgs) => {
    for (let i = 0; i < times; i += 1) {
      await action(context, ...otherArgs); // eslint-disable-line no-await-in-loop
    }
  };

  const name = `Repeat(${times}, ${action.name || 'Anonymous'})`;

  Object.defineProperty(fn, 'name', { value: name });

  return fn;
};

module.exports = curry(repeat);
