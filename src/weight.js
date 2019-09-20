module.exports = conds => {
  const totalWeight = conds.reduce((sum, cond) => cond[0] + sum, 0);

  const fn = async (context, ...otherArgs) => {
    const d = Math.random();

    let acc = 0;

    for (let i = 0; i < conds.length; i += 1) {
      const [weight, action] = conds[i];
      acc += weight / totalWeight;
      if (d < acc) {
        /* eslint-disable no-await-in-loop */
        await action(context, ...otherArgs);
        /* eslint-enable no-await-in-loop */
        break;
      }
    }
  };

  const str = conds
    .map(([weight, action]) => `${action.name}(${weight}/${totalWeight})`)
    .join(', ');

  const name = `Weight(${str})`;

  Object.defineProperty(fn, 'name', { value: name });

  return fn;
};
