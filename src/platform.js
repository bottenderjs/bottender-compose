const mapValues = require('lodash/mapValues');

// eslint-disable-next-line consistent-return
module.exports = config => {
  const fn = (context, ...otherArgs) => {
    if (config[context.platform]) {
      return config[context.platform](context, ...otherArgs);
    }

    if (config.others) {
      return config.others(context, ...otherArgs);
    }
  };

  const str = Object.entries(mapValues(config, action => action.name))
    .map(([key, name]) => `${key}: ${name}`)
    .join(', ');

  const name = `Platform(${str})`;

  Object.defineProperty(fn, 'name', { value: name });

  return fn;
};
