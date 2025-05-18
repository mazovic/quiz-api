const tseslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = [
	// Ignored files
	{
		ignores: [
			'dist/**',
			'node_modules/**',
			'coverage/**',
			'commitlint.config.js',
			'eslint.config.js',
			'src/migrations/*',
			'src/seeders/*',
			'src/config/*',
			'src/models/*.js',
			'ecosystem.config.js',
			'src/migrations/*',
			'src/seeders/*',
			'src/config/*',
			'src/models/*.js',
			'ecosystem.config.js',
			'src/**/*.js',
		],
	},

	// Main config

	// Main config
	{
		files: ['**/*.ts'],
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: __dirname,
				project: './tsconfig.json',
				tsconfigRootDir: __dirname,
				sourceType: 'module',
				ecmaVersion: 2022,
			},
			globals: {
				process: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly',
				module: 'readonly',
				require: 'readonly',
				jest: 'readonly',
				describe: 'readonly',
				test: 'readonly',
				it: 'readonly',
				expect: 'readonly',
				beforeEach: 'readonly',
				afterEach: 'readonly',
				beforeAll: 'readonly',
				afterAll: 'readonly',
			},
		},

		plugins: {
			'@typescript-eslint': tseslint,
			prettier: prettierPlugin,
		},

		rules: {
			...tseslint.configs.recommended.rules,

			'prettier/prettier': ['error', { endOfLine: 'auto' }],

			'@typescript-eslint/interface-name-prefix': 'off',
			'@typescript-eslint/explicit-function-return-type': 'warn',
			'@typescript-eslint/explicit-module-boundary-types': 'warn',
			'@typescript-eslint/no-explicit-any': 'off',

			// 'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					varsIgnorePattern: '^_',
					argsIgnorePattern: '^_',
				},
			],

			'@typescript-eslint/no-explicit-any': 'off',

			// 'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					varsIgnorePattern: '^_',
					argsIgnorePattern: '^_',
				},
			],

			'node/no-missing-import': 'off',
			'node/no-unpublished-import': 'off',
		},

		settings: {
			node: {
				tryExtensions: ['.ts', '.js', '.json', '.node'],
			},
		},
	},
];
