module.exports = {
	root: true,
	parser: 'babel-eslint',
	plugins: [ 'import', 'jsx-a11y', 'react' ],
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true,
	},
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			generators: true,
			experimentalObjectRestSpread: true,
		},
	},
	settings: {
		'import/ignore': [ 'node_modules' ],
		'import/extensions': [ '.js' ],
		'import/resolver': {
			node: {
				extensions: [ '.js', '.json' ],
			},
		},
	},
	globals: {
		'React': true
	},
	rules: {
		/****************************************
				новые правила
		****************************************/
		'no-constant-condition': [ 'warn', { 'checkLoops': false } ],
		'no-empty': [ 'warn', { 'allowEmptyCatch': true } ],
		'react/no-unknown-property': 'warn',
		'react/self-closing-comp': [ 'warn', { 'component': true, 'html': true } ],

		'prefer-template': [ 'warn' ],
		'prefer-spread': [ 'warn' ],
		'prefer-destructuring': [ 'warn', {
			'array': false,
			'object': true,
		}, {
			'enforceForRenamedProperties': false,
		} ],
		'no-var': [ 'warn' ],
		'no-duplicate-imports': [ 'warn' ],
		'comma-dangle': [ 'warn', 'always-multiline' ],
		'camelcase': [ 'warn', { 'properties': 'always' } ],
		'react/jsx-space-before-closing': [ 'warn', 'never' ],
		'react/no-string-refs': [ 'warn' ],
		/****************************************
			create-react-app отсюда
		****************************************/
		'array-callback-return': 'warn',
		'default-case': [ 'warn', { 'commentPattern': '^no default$' } ],
		'eqeqeq': [ 'warn', 'allow-null' ],
		'no-array-constructor': 'warn',
		'no-caller': 'warn',
		'no-cond-assign': [ 'warn', 'always' ],
		'no-const-assign': 'warn',
		'no-control-regex': 'warn',
		'no-delete-var': 'warn',
		'no-dupe-args': 'warn',
		'no-dupe-class-members': 'warn',
		'no-dupe-keys': 'warn',
		'no-duplicate-case': 'warn',
		'no-empty-character-class': 'warn',
		'no-empty-pattern': 'warn',
		'no-eval': 'warn',
		'no-ex-assign': 'warn',
		'no-extend-native': 'warn',
		'no-extra-bind': 'warn',
		'no-extra-label': 'warn',
		'no-fallthrough': 'warn',
		'no-func-assign': 'warn',
		'no-implied-eval': 'warn',
		'no-invalid-regexp': 'warn',
		'no-iterator': 'warn',
		'no-label-var': 'warn',
		'no-labels': [ 'warn', { 'allowLoop': false, 'allowSwitch': false } ],
		'no-lone-blocks': 'warn',
		'no-loop-func': 'warn',
		'no-mixed-operators': [ 'warn', {
			'groups': [
				[ '&', '|', '^', '~', '<<', '>>', '>>>' ],
				[ '==', '!=', '===', '!==', '>', '>=', '<', '<=' ],
				[ '&&', '||' ],
				[ 'in', 'instanceof' ],
			],
			'allowSamePrecedence': false,
		} ],
		'no-multi-str': 'warn',
		'no-native-reassign': 'warn',
		'no-negated-in-lhs': 'warn',
		'no-new-func': 'warn',
		'no-new-object': 'warn',
		'no-new-symbol': 'warn',
		'no-new-wrappers': 'warn',
		'no-obj-calls': 'warn',
		'no-octal': 'warn',
		'no-octal-escape': 'warn',
		'no-redeclare': 'warn',
		'no-regex-spaces': 'warn',
		'no-restricted-syntax': [ 'warn', 'LabeledStatement', 'WithStatement' ],
		'no-script-url': 'warn',
		'no-self-assign': 'warn',
		'no-self-compare': 'warn',
		'no-sequences': 'warn',
		'no-shadow-restricted-names': 'warn',
		'no-sparse-arrays': 'warn',
		'no-template-curly-in-string': 'warn',
		'no-this-before-super': 'warn',
		'no-throw-literal': 'warn',
		'no-undef': 'error',
		'no-restricted-globals': [ 'error', 'event' ],
		'no-unexpected-multiline': 'warn',
		'no-unreachable': 'warn',
		'no-unused-expressions': [ 'warn', {
			'allowShortCircuit': true,
			'allowTernary': true,
		} ],
		'no-unused-labels': 'warn',
		'no-unused-vars': [ 'warn', {
			'vars': 'local',
			'varsIgnorePattern': '^_',
			'args': 'none',
			'ignoreRestSiblings': true,
		} ],
		'no-use-before-define': [ 'warn', 'nofunc' ],
		'no-useless-computed-key': 'warn',
		'no-useless-concat': 'warn',
		'no-useless-constructor': 'warn',
		'no-useless-escape': 'warn',
		'no-useless-rename': [ 'warn', {
			'ignoreDestructuring': false,
			'ignoreImport': false,
			'ignoreExport': false,
		} ],
		'no-with': 'warn',
		'operator-assignment': [ 'warn', 'always' ],
		'radix': ['warn', 'as-needed'],
		'require-yield': 'warn',
		'strict': [ 'warn', 'never' ],
		'unicode-bom': [ 'warn', 'never' ],
		'use-isnan': 'warn',
		'valid-typeof': 'warn',
		'no-restricted-properties': [ 'error', {
			'object': 'require',
			'property': 'ensure',
			'message': 'Please use import() instead. More info: https://webpack.js.org/guides/code-splitting-import/#dynamic-import',
		}, {
			'object': 'System',
			'property': 'import',
			'message': 'Please use import() instead. More info: https://webpack.js.org/guides/code-splitting-import/#dynamic-import',
		} ],

		'import/no-webpack-loader-syntax': 'error',
		'react/jsx-no-duplicate-props': [ 'warn', { 'ignoreCase': true } ],
		'react/jsx-no-undef': 'error',
		'react/jsx-pascal-case': [ 'warn', {
			'allowAllCaps': true,
			'ignore': [],
		} ],
		'react/jsx-uses-react': 'warn',
		'react/jsx-uses-vars': 'warn',
		'react/no-danger-with-children': 'warn',
		'react/no-deprecated': 'warn',
		'react/no-direct-mutation-state': 'warn',
		'react/no-is-mounted': 'warn',
		'react/require-render-return': 'warn',
		'react/style-prop-object': 'warn',
		'jsx-a11y/aria-role': 'warn',
		'jsx-a11y/img-redundant-alt': 'warn',
		'jsx-a11y/no-access-key': 'warn',

		'no-console': 'warn',
		'no-debugger': 'warn',
		
		'space-infix-ops': 'warn',
		'import/newline-after-import': [ 'warn', { 'count': 2 } ],
		'no-confusing-arrow': [ 'warn', { 'allowParens': true } ],
		'generator-star-spacing': [ 'error', { 'before': false, 'after': true } ],
		'array-bracket-spacing': [ 'warn', 'always' ],
		'arrow-spacing': [ 'warn', { 'before': true, 'after': true } ],
		'arrow-parens': [ 'warn', 'always' ],
		'arrow-body-style': [ 'warn', 'as-needed' ],
		'space-unary-ops': [ 'warn', { 'words': true, 'nonwords': false } ],
		'space-in-parens': [ 'warn', 'never' ],
		'space-before-function-paren': [ 'warn', {
			'anonymous': 'always',
			'named': 'always',
			'asyncArrow': 'always'
		} ],
		'space-before-blocks': [ 'warn', 'always' ],
		'semi': [ 'warn', 'never' ],
		'quotes': [ 'warn', 'single' ],
		'object-curly-spacing': [ 'warn', 'always' ],
		'no-multiple-empty-lines': 'error',
		'no-lonely-if': 'warn',
		'newline-per-chained-call': [ 'warn', { 'ignoreChainWithDepth': 3 } ],
		'max-len': [ 'warn', 120, 2 ],
		'linebreak-style': [ 'warn', 'unix' ],
		'keyword-spacing': [ 'warn', { 'before': true, 'after': true } ],
		'key-spacing': [ 'warn', { 'beforeColon': false } ],
		'jsx-quotes': [ 'warn', 'prefer-double' ],
		'indent': [ 'warn', 'tab', { 'SwitchCase': 1 } ],
		'eol-last': [ 'warn', 'always' ],
		'func-call-spacing': [ 'warn', 'never' ],
		'block-spacing': [ 'warn', 'always' ],
		'computed-property-spacing': [ 'warn', 'never' ],
		'comma-spacing': [ 'warn', { 'before': false, 'after': true } ],
		'brace-style': [ 'warn', 'stroustrup', { 'allowSingleLine': true } ],
		'dot-location': [ 'warn', 'property' ],
		'new-parens': 'warn',
		'no-whitespace-before-property': 'warn',
		
		'react/jsx-curly-spacing': [ 'warn', 'never' ],
		'react/jsx-indent': [ 'warn', 'tab' ],
		'rest-spread-spacing': [ 'warn', 'never' ],
		'react/jsx-equals-spacing': [ 'warn', 'never' ],
	},
}
