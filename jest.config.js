module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/?!(react-icons)'],
  setupTestFrameworkScriptFile: ['<rootDir>/src/setupTests.ts'],
};
