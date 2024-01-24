module.exports = {
	root: true,
	extends: [
	  'eslint:recommended',
	  'plugin:@typescript-eslint/recommended',
	  'plugin:svelte/recommended',
	  'prettier',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
	  sourceType: 'module',
	  ecmaVersion: 2020,
	  extraFileExtensions: ['.svelte'],
	},
	env: {
	  browser: true,
	  es2017: true,
	  node: true,
	},
	overrides: [
	  {
		files: ['*.svelte'],
		parser: 'svelte-eslint-parser',
		parserOptions: {
		  parser: '@typescript-eslint/parser',
		},
		rules: {
		  'indent': ['error', 2],
		  'space-infix-ops': ['error', { 'int32Hint': false }],
		  'quotes': ['error', 'single'],
		  'semi': ['error', 'always'],
		  'prefer-const': ['error', { 'destructuring': 'all' }],
		  'func-style': ['error', 'expression', { 'allowArrowFunctions': true }],
		  'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
		  'object-curly-spacing': ['error', 'always'],
		  'svelte/onclick-style': ['error', 'arrow'],
		  'svelte/component-name': ['error', { 'componentName': '^[A-Z][a-zA-Z]*$' }],
		  'svelte/no-else-return': ['error'],
		},
	  },
	],
  };
  
