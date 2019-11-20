const path = require('path');

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
	testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
	coveragePathIgnorePatterns: ['/node_modules/'],
	setupFiles: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
};