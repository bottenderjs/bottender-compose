const delay = require('delay');

// eslint-disable-next-line no-unused-vars
module.exports = ms => {
  const Fn = () => delay(ms);

  const name = `Delay(${ms})`;

  Object.defineProperty(Fn, 'name', { value: name });

  return Fn;
};
