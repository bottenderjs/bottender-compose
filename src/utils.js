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

const VARIABLE = `(${TEMPLATE_WHITELIST_KEYS.join('|')})((\\.\\w+)+)`;

exports.isValidTemplate = str => {
  const VALID_TEMPLATE = new RegExp(`{{\\s*${VARIABLE}\\s*}}`, 'g');

  return VALID_TEMPLATE.test(str);
};

exports.compileTemplate = tpl => context => {
  let compiledResult = tpl;
  const VALID_TEMPLATE = new RegExp(`{{\\s*${VARIABLE}\\s*}}`, 'g');

  const matchStrings = tpl.match(VALID_TEMPLATE);

  for (let i = 0; i < matchStrings.length; i++) {
    const matchString = matchStrings[i];

    const [
      targetString,
      firstWhitelistKey,
      ...otherResults
    ] = VALID_TEMPLATE.exec(matchString);

    let properties = otherResults[0];

    if (firstWhitelistKey !== 'context') {
      properties = `.${firstWhitelistKey}${properties}`;
    }

    const value = get(context, properties.slice(1));

    warning(
      typeof value !== 'string',
      `Properties accessors in template is invalid -- expected return a string but got: ${typeof value}`
    );

    compiledResult = replace(compiledResult, targetString, value);

    VALID_TEMPLATE.lastIndex = 0;
  }

  return compiledResult;
};
