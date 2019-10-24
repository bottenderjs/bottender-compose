const curry = require('lodash/curry');
// FIXME: export public API or somehow improve this
const { run } = require('bottender/dist/bot/Bot');

const repeat = (times, Action) => {
  const Fn = async (context, props) => {
    for (let i = 0; i < times; i += 1) {
      await run(Action)(context, props); // eslint-disable-line no-await-in-loop
    }
  };

  const name = `Repeat(${times}, ${Action.name || 'Anonymous'})`;

  Object.defineProperty(Fn, 'name', { value: name });

  return Fn;
};

module.exports = curry(repeat);
