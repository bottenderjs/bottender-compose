const { withProps } = require('bottender');

module.exports = (conds) => {
  const totalWeight = conds.reduce((sum, cond) => cond[0] + sum, 0);

  const Fn = async (context, props) => {
    const d = Math.random();

    let acc = 0;

    for (let i = 0; i < conds.length; i += 1) {
      const [weight, Action] = conds[i];
      acc += weight / totalWeight;
      if (d < acc) {
        return withProps(Action, props);
      }
    }
  };

  const str = conds
    .map(([weight, Action]) => `${Action.name}(${weight}/${totalWeight})`)
    .join(', ');

  const name = `Weight(${str})`;

  Object.defineProperty(Fn, 'name', { value: name });

  return Fn;
};
