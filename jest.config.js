// jest.config.js
module.exports = {
    preset: 'ts-jest',                    // Use ts-jest for TypeScript support
    testEnvironment: 'jsdom',              // Use jsdom for testing in a simulated browser environment
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',    // Use babel-jest to transpile TypeScript files
        '^.+\\.(js|jsx)$': 'babel-jest',    // Use babel-jest to transpile JavaScript files
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'], // Correct import for jest-dom
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  // Mock CSS imports
    },
    globals: {
        'ts-jest': {
            isolatedModules: true,             // Ensure TypeScript files are transpiled
        },
    },
};
