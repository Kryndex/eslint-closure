/**
 * @fileoverview Custom ESLint configuration to adhere to the Google style guide
 * for ES6.
 *
 * Short link to the Google JS Style Guide: https://git.io/vured
 */


// Named constants for the numbers eslint uses to indicate lint severity.
const OFF = 0;
const WARNING = 1;
const ERROR = 2;


// Possible Errors
// These rules relate to possible syntax or logic errors in JavaScript code.
const POSSIBLE_ERROR_RULES = {};


// Best Practices
// These rules relate to better ways of doing things to help you avoid problems.
const BEST_PRACTICE_RULES = {};


// Strict Mode
// These rules relate to strict mode directives.
const STRICT_MODE_RULES = {};


// Variables
// These rules relate to variable declarations.
const VARIABLE_DECLARATION_RULES = {};


// Node.js and CommonJS
// These rules relate to code running in Node.js, or in browsers with CommonJS.
const NODEJS_RULES = {};


// Stylistic Issues
// These rules relate to style guidelines, and are therefore quite subjective.
const STYLISTIC_RULES = {
  // Require or disallow trailing commas.
  // Google ES6 Section 5.2.1, 5.3.1
  'comma-dangle': [WARNING, 'always-multiline'],

  // Disallow irregular whitespace outside of strings and comments.
  // Google ES6 Section 2.3.1
  'no-irregular-whitespace': ERROR,

  // Disallow tabs in file.
  // Google ES6 Section 2.3.1
  'no-tabs': ERROR,
};


// ECMAScript 6
// These rules relate to ES6, also known as ES2015.
const ES6_RULES = {
  // Require braces around arrow function bodies.
  'arrow-body-style': OFF,

  // Require parentheses around arrow function arguments.
  'arrow-parens': OFF,

  // Enforce consistent spacing before and after the arrow in arrow functions.
  'arrow-spacing': OFF,

  // Require super() calls in constructors.  #eslint
  // Google ES6 Section 5.4.1
  'constructor-super': ERROR,

  // Enforce consistent spacing around * operators in generator functions.
  'generator-star-spacing': OFF,

  // Disallow reassigning class members.  #eslint
  'no-class-assign': ERROR,

  // Disallow arrow functions where they could be confused with comparisons.
  'no-confusing-arrow': OFF,

  // Disallow reassigning const variables.  #eslint
  'no-const-assign': ERROR,

  // Disallow duplicate class members.  #eslint
  'no-dupe-class-members': ERROR,

  // Disallow duplicate module imports.
  'no-duplicate-imports': OFF,

  // Disallow new operators with the Symbol object.  #eslint
  'no-new-symbol': ERROR,

  // Disallow specified modules when loaded by import.
  'no-restricted-imports': OFF,

  // Disallow this/super before calling super() in constructors.  #eslint
  // Google ES6 Section 5.4.1
  'no-this-before-super': ERROR,

  // Disallow unnecessary computed property keys in object literals.
  'no-useless-computed-key': OFF,

  // Disallow unnecessary constructors.
  'no-useless-constructor': OFF,

  // Disallow renaming import, export, and destructured assignments to the same
  // name.
  'no-useless-rename': OFF,

  // Require let or const instead of var.
  // Google ES6 Section 5.1.1
  'no-var': ERROR,

  // Require or disallow method and property shorthand syntax for object
  // literals.
  // Google ES6 Section 5.3.5
  'object-shorthand': [ERROR, 'methods'],

  // Require arrow functions as callbacks.
  'prefer-arrow-callback': OFF,

  // Require const declarations for variables that are never reassigned after
  // declared.
  'prefer-const': OFF,

  // Require Reflect methods where applicable.
  'prefer-reflect': OFF,

  // Require rest parameters instead of arguments.
  'prefer-rest-params': OFF,

  // Require spread operators instead of .apply().
  // Google ES6 Section 5.5.8
  'prefer-spread': WARNING,

  // Require template literals instead of string concatenation.
  'prefer-template': OFF,

  // Require generator functions to contain yield.  #eslint
  'require-yield': ERROR,

  // Enforce spacing between rest and spread operators and their expressions.
  'rest-spread-spacing': OFF,

  // Enforce sorted import declarations within modules.
  'sort-imports': OFF,

  // Require or disallow spacing around embedded expressions of template
  // strings.
  'template-curly-spacing': OFF,

  // Require or disallow spacing around the * in yield* expressions.
  // Google ES6 Section 5.5.4
  'yield-star-spacing': [WARNING, 'after'],
};

// Google Plugin Rules
// These rules are specific to Google code.  See
// https://github.com/jschaf/googlejs/packages/eslint-plugin-googlejs
const GOOGLE_PLUGIN_RULES = {
  // Disallow opt_ prefix and var_args as identifiers.
  'googlejs/camelcase': [ERROR, {
    allowVarArgs: false,
    allowOptPrefix: false,
    allowLeadingUnderscore: true,
    allowTrailingUnderscore: true,
    checkObjectProperties: true,
  }],
};


// JSDoc Plugin Rules
// https://github.com/gajus/eslint-plugin-jsdoc
const JSDOC_PLUGIN_RULES = {
  'jsdoc/check-param-names': ERROR,
  'jsdoc/check-tag-names': OFF,
  'jsdoc/check-types': WARNING,
  'jsdoc/newline-after-description': OFF,
  'jsdoc/require-description-complete-sentence': WARNING,
  'jsdoc/require-hyphen-before-param-description': OFF,
  'jsdoc/require-param': ERROR,
  // Not required if obvious.
  'jsdoc/require-param-description': OFF,
  'jsdoc/require-param-type': ERROR,
  'jsdoc/require-returns-description': OFF,
  'jsdoc/require-returns-type': ERROR,

};

const ECMA_FEATURES = {
  // Enable arrow functions.
  arrowFunctions: true,

  // Enable binary literals.
  binaryLiterals: true,

  // Enable let and const (aka block bindings).
  blockBindings: true,

  // Enable classes.
  classes: true,

  // Enable default function parameters.
  defaultParams: true,

  // Enable destructuring.
  destructuring: true,

  // Enable for-of loops.
  forOf: true,

  // Enable generators.
  generators: true,

  // Enable modules and global strict mode.  Required by Section 3.3.2.
  modules: false,

  // Enable computed object literal property names.
  objectLiteralComputedProperties: true,

  // Enable duplicate object literal properties in strict mode.
  objectLiteralDuplicateProperties: true,

  // Enable object literal shorthand methods.
  objectLiteralShorthandMethods: true,

  // Enable object literal shorthand properties.
  objectLiteralShorthandProperties: true,

  // Enable octal literals.
  octalLiterals: true,

  // Enable the regular expression u flag.
  regexUFlag: true,

  // Enable the regular expression y flag.
  regexYFlag: true,

  // Enable the rest parameters.
  restParams: true,

  // Enable the spread operator for arrays.
  spread: true,

  // Enable super references inside of functions.
  superInFunctions: true,

  // Enable template strings.
  templateStrings: true,

  // Enable code point escapes.
  unicodeCodePointEscapes: true,

}


const GOOGLE_ES6_RULES = {

  extends: [
    require.resolve('eslint-config-googlejs-base'),
  ],

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script',
    ecmaFeatures: ECMA_FEATURES,
  },

  plugins: [
    'googlejs',
    'jsdoc',
  ],


  // The list of rules and options are available at
  // http://eslint.org/docs/rules/.
  rules: Object.assign(
    {},

    // ESLint built-in rules.
    POSSIBLE_ERROR_RULES,
    BEST_PRACTICE_RULES,
    STRICT_MODE_RULES,
    VARIABLE_DECLARATION_RULES,
    NODEJS_RULES,
    STYLISTIC_RULES,
    ES6_RULES,

    // Custom plugin rules.
    GOOGLE_PLUGIN_RULES,
    JSDOC_PLUGIN_RULES
  ),
}

module.exports = GOOGLE_ES6_RULES;
