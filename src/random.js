const randomItem = require('random-item');
const { withProps } = require('bottender');

module.exports = actions => {
  const Fn = async (context, props) => {
    return withProps(randomItem(actions), props);
  };

  const names = actions.map(action => action.name || 'Anonymous');

  const name = `Random(${names.join(', ')})`;

  Object.defineProperty(Fn, 'name', { value: name });

  return Fn;
};
