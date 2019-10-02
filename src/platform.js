const mapValues = require('lodash/mapValues');

// eslint-disable-next-line consistent-return
module.exports = config => {
  const Fn = context => {
    if (config[context.platform]) {
      return config[context.platform];
    }

    if (config.others) {
      return config.others;
    }
  };

  const str = Object.entries(mapValues(config, action => action.name))
    .map(([key, name]) => `${key}: ${name}`)
    .join(', ');

  const name = `Platform(${str})`;

  Object.defineProperty(Fn, 'name', { value: name });

  return Fn;
};
