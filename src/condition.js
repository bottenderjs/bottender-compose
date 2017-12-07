module.exports = conds => async context => {
  for (let i = 0; i < conds.length; i += 1) {
    const [predicate, action] = conds[i];

    /* eslint-disable no-await-in-loop */
    if (await predicate(context)) {
      await action(context);
      break;
    }
    /* eslint-enable no-await-in-loop */
  }
};
