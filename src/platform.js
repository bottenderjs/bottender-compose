const mapValues = require('lodash/mapValues');
const { withProps } = require('bottender');

// eslint-disable-next-line consistent-return
module.exports = (config) => {
  const Fn = (context, props) => {
    if (config[context.platform]) {
      return withProps(config[context.platform], props);
    }

    if (config.others) {
      return withProps(config.others, props);
    }
  };

  const str = Object.entries(mapValues(config, (action) => action.name))
    .map(([key, name]) => `${key}: ${name}`)
    .join(', ');

  const name = `Platform(${str})`;

  Object.defineProperty(Fn, 'name', { value: name });

  return Fn;
};
