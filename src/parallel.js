module.exports = actions => context =>
  Promise.all(actions.map(action => action(context)));
