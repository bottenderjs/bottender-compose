const {
  common,
  messenger,
  line,
  slack,
  telegram,
  viber,
  fb,
} = require('./methods');
const branch = require('./branch');
const condition = require('./condition');
const parallel = require('./parallel');
const platform = require('./platform');
const random = require('./random');
const series = require('./series');
const tryCatch = require('./tryCatch');
const weight = require('./weight');
const doNothing = require('./doNothing');
const repeat = require('./repeat');

const allMethods = common
  .concat(messenger)
  .concat(line)
  .concat(slack)
  .concat(telegram)
  .concat(viber)
  .concat(fb);

// eslint-disable-next-line no-multi-assign
exports = module.exports = {
  branch,
  condition,
  parallel,
  platform,
  random,
  series,
  tryCatch,
  weight,
  doNothing,
  repeat,
  ...allMethods.reduce((prev, method) => {
    if (!prev[method]) {
      return {
        ...prev,
        [method]: (...args) => context => context[method](...args),
      };
    }
    return prev;
  }, {}),
};
