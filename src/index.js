const {
  common,
  messenger,
  line,
  slack,
  telegram,
  viber,
  fb,
} = require('./methods');
const { isValidTemplate, compileTemplate } = require('./utils');

const allMethods = common
  .concat(messenger)
  .concat(line)
  .concat(slack)
  .concat(telegram)
  .concat(viber)
  .concat(fb);

allMethods.forEach(method => {
  if (!exports[method]) {
    exports[method] = (...args) => (context, ...otherArgs) =>
      context[method](
        ...args.map(arg => {
          if (typeof arg === 'function') {
            return arg(context, ...otherArgs);
          }
          if (typeof arg === 'string' && isValidTemplate(arg)) {
            return compileTemplate(arg)(context);
          }
          return arg;
        })
      );
  }
});

exports._ = require('./_');
exports.branch = require('./branch');
exports.condition = require('./condition');
exports.match = require('./match');
exports.parallel = require('./parallel');
exports.platform = require('./platform');
exports.random = require('./random');
exports.series = require('./series');
exports.tryCatch = require('./tryCatch');
exports.weight = require('./weight');
exports.doNothing = require('./doNothing');
exports.repeat = require('./repeat');
exports.delay = require('./delay');
exports.setDisplayName = require('./setDisplayName');
