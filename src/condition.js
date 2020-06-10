const { withProps } = require('bottender');

module.exports = (conds) => {
  const Fn = async (context, props) => {
    for (let i = 0; i < conds.length; i += 1) {
      const [predicate, Action] = conds[i];

      /* eslint-disable no-await-in-loop */
      if (await predicate(context, props)) {
        return withProps(Action, props);
      }
      /* eslint-enable no-await-in-loop */
    }
  };

  const names = conds.map(([, Action]) => Action.name || 'Anonymous');

  const name = `Condition(${names.join(', ')})`;

  Object.defineProperty(Fn, 'name', { value: name });

  return Fn;
};
