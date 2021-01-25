const path = require('path')

module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '((\\.|/)(test|spec))\\.(tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    globals: {
        'ts-jest': {
            tsconfig: './tsconfig.json',
        },
    },
    rootDir: path.join(process.cwd(), 'src', 'server'),
    setupFilesAfterEnv: ['./test-setup.ts'],
}
