// FIXME: export public API or somehow improve this
const { run } = require('bottender/dist/bot/Bot');

module.exports = actions => {
  const Fn = async (context, props) => {
    for (let i = 0; i < actions.length; i++) {
      await run(actions[i])(context, props); // eslint-disable-line no-await-in-loop
    }
  };

  const names = actions.map(action => action.name || 'Anonymous');

  const name = `Series(${names.join(', ')})`;

  Object.defineProperty(Fn, 'name', { value: name });

  return Fn;
};
