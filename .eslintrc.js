module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'prettier', 'eslint:recommended'],

	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},

	plugins: ['react', 'react-native'],
	ignorePatterns: ['!.*', 'dist', 'node_modules', 'regex.js'],
	rules: {
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1,
				ignoredNodes: ['ConditionalExpression'],
			},
		],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-console': ['warn'],
		'no-unused-vars': ['warn', { vars: 'all' }],
		'no-undef': 'warn',
		'react/jsx-key': 'warn',
		'react/prop-types': 'off',
		'react/display-name': 'off',
		'no-empty-pattern': 'off',
		'react/no-unescaped-entities': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'react/no-children-prop': 'off',
	},

	settings: {
		react: {
			version: 'detect',
		},
	},
};
