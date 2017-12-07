module.exports = conds => async context => {
  for (let i = 0; i < conds.length; i += 1) {
    const [cond, action] = conds[i];

    /* eslint-disable no-await-in-loop */
    if (await cond(context)) {
      await action(context);
      break;
    }
    /* eslint-enable no-await-in-loop */
  }
};
