const path = require('path');
const cfg = require('./config');

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	setupFiles: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: [
		'<rootDir>/.next/',
		'<rootDir>/node_modules/',
		...(cfg.graphql ? ['<rootDir>/app/server/rest'] : ['<rootDir>/app/server/graph'])
	],
	testEnvironment: 'node',
	transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  }
};