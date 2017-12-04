module.exports = (intents, actions) => async context => {
  const intent = await intents(context);

  if (intent in actions) {
    await actions[intent](context);
  }
};
