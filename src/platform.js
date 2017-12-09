// eslint-disable-next-line consistent-return
module.exports = config => context => {
  if (config[context.platform]) {
    return config[context.platform](context);
  }

  if (config.others) {
    return config.others(context);
  }
};
