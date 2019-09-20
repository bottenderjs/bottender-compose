const delay = require('delay');

// eslint-disable-next-line no-unused-vars
module.exports = ms => {
  const fn = () => delay(ms);

  const name = `Delay(${ms})`;

  Object.defineProperty(fn, 'name', { value: name });

  return fn;
};
