module.exports = actions => {
  const fn = (context, ...otherArgs) =>
    Promise.all(actions.map(action => action(context, ...otherArgs)));

  const names = actions.map(action => action.name || 'Anonymous');

  const name = `Parallel(${names.join(', ')})`;

  Object.defineProperty(fn, 'name', { value: name });

  return fn;
};
