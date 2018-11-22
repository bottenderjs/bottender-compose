module.exports = conds => async (context, ...otherArgs) => {
  for (let i = 0; i < conds.length; i += 1) {
    const [predicate, action] = conds[i];

    /* eslint-disable no-await-in-loop */
    const predicateResult = await predicate(context, ...otherArgs);

    if (Array.isArray(predicateResult)) {
      await action(context, ...otherArgs, ...predicateResult);
      break;
    } else if (predicateResult) {
      await action(context, ...otherArgs);
      break;
    }
    /* eslint-enable no-await-in-loop */
  }
};
