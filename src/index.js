const { state, messenger, line, slack, telegram } = require('./methods');

const allMethods = state
  .concat(messenger)
  .concat(line)
  .concat(slack)
  .concat(telegram);

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
exports.platform = require('./platform');
exports.tryCatch = require('./tryCatch');
