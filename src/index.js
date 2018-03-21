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
    exports[method] = (...args) => context =>
      context[method](
        ...args.map(arg => {
          if (typeof arg === 'function') {
            return arg(context);
          }
          return arg;
        })
      );
  }
});

exports.branch = require('./branch');
exports.condition = require('./condition');
exports.parallel = require('./parallel');
exports.platform = require('./platform');
exports.random = require('./random');
exports.series = require('./series');
exports.tryCatch = require('./tryCatch');
exports.weight = require('./weight');
exports.doNothing = require('./doNothing');
exports.repeat = require('./repeat');
exports.delay = require('./delay');
