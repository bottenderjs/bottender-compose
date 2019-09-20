const curry = require('lodash/curry');

const _ = require('./_');

const match = (value, mapping) => {
  const defaultMapping = mapping.find(([pattern]) => pattern === _);
  const otherMapping = mapping.filter(([pattern]) => pattern !== _);

  const fn = async (context, ...otherArgs) => {
    const val =
      typeof value === 'function' ? await value(context, ...otherArgs) : value;

    for (let i = 0; i < otherMapping.length; i++) {
      const [pattern, action] = otherMapping[i];
      if (pattern === val) {
        return action(context, ...otherArgs);
      }
    }

    if (defaultMapping) {
      const [, defaultAction] = defaultMapping;
      return defaultAction(context, ...otherArgs);
    }
  };

  const names = mapping.map(([, action]) => action.name || 'Anonymous');

  const name = `Match(${names.join(', ')})`;

  Object.defineProperty(fn, 'name', { value: name });

  return fn;
};

module.exports = curry(match);
