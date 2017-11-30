module.exports = actions => async context => {
  for (let i = 0; i < actions.length; i++) {
    await actions[i](context); // eslint-disable-line no-await-in-loop
  }
};
