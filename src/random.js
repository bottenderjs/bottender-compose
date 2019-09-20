const randomItem = require('random-item');

module.exports = actions => {
  const fn = async (context, ...otherArgs) => {
    await randomItem(actions)(context, ...otherArgs);
  };

  const names = actions.map(action => action.name || 'Anonymous');

  const name = `Random(${names.join(', ')})`;

  Object.defineProperty(fn, 'name', { value: name });

  return fn;
};
