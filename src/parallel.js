// FIXME: export public API or somehow improve this
const { run } = require('bottender/dist/bot/Bot');

module.exports = (actions) => {
  const Fn = (context, props) =>
    Promise.all(actions.map((action) => run(action)(context, props)));

  const names = actions.map((action) => action.name || 'Anonymous');

  const name = `Parallel(${names.join(', ')})`;

  Object.defineProperty(Fn, 'name', { value: name });

  return Fn;
};
