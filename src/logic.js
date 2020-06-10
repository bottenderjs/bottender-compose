const invariant = require('invariant');

function not(predicate) {
  return (context) => !predicate(context);
}

function and(predicates) {
  invariant(
    Array.isArray(predicates),
    `and: predicates must be an array. Recevied ${predicates}`
  );
  return (context) => predicates.every((predicate) => predicate(context));
}

function or(predicates) {
  invariant(
    Array.isArray(predicates),
    `or: predicates must be an array. Recevied ${predicates}`
  );
  return (context) => predicates.some((predicate) => predicate(context));
}

function alwaysTrue() {
  return () => true;
}

function alwaysFalse() {
  return () => false;
}

exports.not = not;
exports.and = and;
exports.or = or;

exports.alwaysTrue = alwaysTrue;
exports.alwaysFalse = alwaysFalse;
