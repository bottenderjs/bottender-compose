module.exports = actions => async (context, ...otherArgs) => {
  for (let i = 0; i < actions.length; i++) {
    await actions[i](context, ...otherArgs); // eslint-disable-line no-await-in-loop
  }
};
