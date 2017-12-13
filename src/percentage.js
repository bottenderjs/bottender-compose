module.exports = conds => async context => {
  const totalPercentage = conds.reduce((sum, cond) => cond[0] + sum, 0);
  const d = Math.random();

  let accum = 0;

  for (let i = 0; i < conds.length; i += 1) {
    const [percentage, action] = conds[i];
    accum += percentage / totalPercentage;
    if (d < accum) {
      /* eslint-disable no-await-in-loop */
      await action(context);
      /* eslint-enable no-await-in-loop */
      break;
    }
  }
};
