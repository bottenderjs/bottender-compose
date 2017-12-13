module.exports = conds => async context => {
  const totalWeight = conds.reduce((sum, cond) => cond[0] + sum, 0);
  const d = Math.random();

  let accum = 0;

  for (let i = 0; i < conds.length; i += 1) {
    const [weight, action] = conds[i];
    accum += weight / totalWeight;
    if (d < accum) {
      /* eslint-disable no-await-in-loop */
      await action(context);
      /* eslint-enable no-await-in-loop */
      break;
    }
  }
};
