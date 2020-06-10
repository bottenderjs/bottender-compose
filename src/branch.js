const curry = require('lodash/curry');
const { withProps } = require('bottender');

function Noop() {}

const branch = (predicate, OnTrue, OnFalse = Noop) => {
  const Fn = async (context, props) => {
    if (await predicate(context, props)) {
      return withProps(OnTrue, props);
    }
    return withProps(OnFalse, props);
  };

  const name = `Branch(${OnTrue.name || 'Anonymous'}, ${
    OnFalse.name || 'Anonymous'
  })`;

  Object.defineProperty(Fn, 'name', { value: name });

  return Fn;
};

module.exports = curry(branch);
