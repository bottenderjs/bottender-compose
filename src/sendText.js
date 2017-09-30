module.exports = function sendText(text) {
  return async context => {
    await context.sendText(text);
  };
};
