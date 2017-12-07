module.exports = (cond, trueAction, falseAction) => async context => {
  if ((await cond(context)) && trueAction) {
    await trueAction(context);
  } else if (falseAction) {
    await falseAction(context);
  }
};
