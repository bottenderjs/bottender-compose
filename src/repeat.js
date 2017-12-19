module.exports = (times, action) => async context => {
  for (let i = 0; i < times; i += 1) {
    await action(context); // eslint-disable-line no-await-in-loop
  }
};
