const stylisticTs = require('@stylistic/eslint-plugin-ts');
const parserTs = require('@typescript-eslint/parser');

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: { 
		'react': 'react',
		'@stylistic/ts': stylisticTs
	},
	parser: parserTs,
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off', 
		'@stylistic/ts/indent': ['error', 'tab'],
  }	
}
