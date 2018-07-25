const get = require('lodash/get');
const replace = require('lodash/replace');
const warning = require('warning');

const TEMPLATE_WHITELIST_KEYS = [
  'context',
  'session',
  'user',
  'event',
  'state',
];

const contextKeyPrefixResolveMap = {
  context: '',
  session: 'session.',
  user: 'session.user.',
  event: 'event.',
  state: 'state.',
};

const VARIABLE = `(${TEMPLATE_WHITELIST_KEYS.join('|')})((\\.\\w+)+)`;

exports.isValidTemplate = str => {
  const VALID_TEMPLATE = new RegExp(`{{\\s*${VARIABLE}\\s*}}`, 'g');

  return VALID_TEMPLATE.test(str);
};

exports.compileTemplate = tpl => context => {
  let compiledResult = tpl;
  const VALID_TEMPLATE = new RegExp(`{{\\s*${VARIABLE}\\s*}}`, 'g');

  const matchStrings = tpl.match(VALID_TEMPLATE);

  for (const matchString of matchStrings) {
    const [
      targetString,
      firstWhitelistKey,
      ...otherResults
    ] = VALID_TEMPLATE.exec(matchString);

    const properties = `${
      contextKeyPrefixResolveMap[firstWhitelistKey]
    }${otherResults[0].slice(1)}`;

    const value = get(context, properties);

    warning(
      typeof value === 'string',
      `Properties accessors in template is invalid -- expected return a string but got: ${typeof value}`
    );

    compiledResult = replace(compiledResult, targetString, value);

    VALID_TEMPLATE.lastIndex = 0;
  }

  return compiledResult;
};
