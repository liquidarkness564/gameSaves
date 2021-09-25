module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": false
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        indent: ['warn', 4],
        'react/jsx-indent': ['warn', 4, { checkAttributes: true }],
        'react/react-in-jsx-scope': 'off',
        'react/destructuring-assignment': 'off',
        'no-nested-ternary': 'warn',
        'react/prop-types': 'warn',
    }
};