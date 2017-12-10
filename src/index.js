const { common, messenger, line, slack, telegram, viber } = require('./methods');

const allMethods = common
  .concat(messenger)
  .concat(line)
  .concat(slack)
  .concat(telegram)
  .concat(viber);

allMethods.forEach(method => {
  if (!exports[method]) {
    exports[method] = (...args) => context => context[method](...args);
  }
});

exports.random = require('./random');
exports.series = require('./series');
exports.parallel = require('./parallel');
exports.condition = require('./condition');
exports.branch = require('./branch');
exports.tryCatch = require('./tryCatch');
