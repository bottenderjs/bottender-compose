const curry = require('lodash/curry');
const { withProps } = require('bottender');

const _ = require('./_');

const match = (value, mapping) => {
  const defaultMapping = mapping.find(([pattern]) => pattern === _);
  const otherMapping = mapping.filter(([pattern]) => pattern !== _);

  const Fn = async (context, props) => {
    const val =
      typeof value === 'function' ? await value(context, props) : value;

    for (let i = 0; i < otherMapping.length; i++) {
      const [pattern, Action] = otherMapping[i];
      if (pattern === val) {
        return withProps(Action, props);
      }
    }

    if (defaultMapping) {
      const [, DefaultAction] = defaultMapping;
      return withProps(DefaultAction, props);
    }
  };

  const names = mapping.map(([, Action]) => Action.name || 'Anonymous');

  const name = `Match(${names.join(', ')})`;

  Object.defineProperty(Fn, 'name', { value: name });

  return Fn;
};

module.exports = curry(match);
