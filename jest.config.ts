/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/docs/',
    '/.serverless/',
    '/serverless/',
    '/node_modules/',
  ],
};
