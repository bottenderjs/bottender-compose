module.exports = function sendText(text) {
  return context => context.sendText(text);
};
