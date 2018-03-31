const randomItem = require('random-item');

module.exports = actions => async (context, ...otherArgs) => {
  await randomItem(actions)(context, ...otherArgs);
};
