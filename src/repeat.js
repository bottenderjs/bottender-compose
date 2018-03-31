const curry = require('lodash/curry');

const repeat = (times, action) => async (context, ...otherArgs) => {
  for (let i = 0; i < times; i += 1) {
    await action(context, ...otherArgs); // eslint-disable-line no-await-in-loop
  }
};

module.exports = curry(repeat);
