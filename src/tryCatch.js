module.exports = (statement, onError) => async context => {
  try {
    await statement(context);
  } catch (err) {
    await onError(context, err);
  }
};
