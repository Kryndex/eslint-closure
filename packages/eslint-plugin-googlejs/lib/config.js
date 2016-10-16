goog.module('googlejs.config');

/** @suppress {extraRequire} */
const camelcase = goog.require('googlejs.rules.camelcase');
/** @suppress {extraRequire} */
const indent = goog.require('googlejs.rules.indent');
/** @suppress {extraRequire} */
const inlineCommentSpacing = goog.require('googlejs.rules.inlineCommentSpacing');
/** @suppress {extraRequire} */
const jsdoc = goog.require('googlejs.rules.jsdoc');

/**
 *  @const {!ESLint.Config}
 */
const PLUGIN_ESLINT_CONFIG = {
  rules: {
    camelcase,
    indent,
    'inline-comment-spacing': inlineCommentSpacing,
    jsdoc,
  },
};

// For node.js.
module.exports = PLUGIN_ESLINT_CONFIG;

// For closure in case anyone decides to goog.require this module.
exports = PLUGIN_ESLINT_CONFIG;
