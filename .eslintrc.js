module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    plugins: ['import'],
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-shadow': ['error', { builtinGlobals: false, hoist: 'never', allow: [] }],
        'no-restricted-globals': ['error', 'event', 'fdescribe'],
    },
}
