const randomItem = require('random-item');

module.exports = actions => async context => {
  await randomItem(actions)(context);
};
