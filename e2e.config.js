module.exports = {
  preset: 'jest-puppeteer',
  moduleFileExtensions: ['js'],
  testMatch: ['**/?(*.)+(e2e).js?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/app/',
    '<rootDir>/tests/pages/'
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest'
  }
};
