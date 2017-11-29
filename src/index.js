const { messenger, line, slack, telegram } = require('./methods');

const allMethods = messenger
  .concat(line)
  .concat(slack)
  .concat(telegram);

allMethods.forEach(method => {
  if (!exports[method]) {
    exports[method] = (...args) => context => context[method](...args);
  }
});

exports.random = require('./random');
