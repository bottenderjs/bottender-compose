const {
  common,
  messenger,
  line,
  slack,
  telegram,
  viber,
  fb,
} = require('./methods');

const allMethods = common
  .concat(messenger)
  .concat(line)
  .concat(slack)
  .concat(telegram)
  .concat(viber)
  .concat(fb);

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
