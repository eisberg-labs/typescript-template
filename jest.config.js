/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/tests/"
  ],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {tsconfig: './tsconfig.test.json'},
    ],
  },
  watchman: false,
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@project/(.*)$': ['<rootDir>/src/$1'],
  },
};
