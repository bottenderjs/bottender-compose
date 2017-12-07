function noop() {}

module.exports = (predicate, onTrue, onFalse = noop) => async context => {
  if (await predicate(context)) {
    await onTrue(context);
  } else {
    await onFalse(context);
  }
};
