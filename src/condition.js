module.exports = conds => {
  const fn = async (context, ...otherArgs) => {
    for (let i = 0; i < conds.length; i += 1) {
      const [predicate, action] = conds[i];

      /* eslint-disable no-await-in-loop */
      if (await predicate(context, ...otherArgs)) {
        await action(context, ...otherArgs);
        break;
      }
      /* eslint-enable no-await-in-loop */
    }
  };

  const names = conds.map(([, action]) => action.name || 'Anonymous');

  const name = `Condition(${names.join(', ')})`;

  Object.defineProperty(fn, 'name', { value: name });

  return fn;
};
