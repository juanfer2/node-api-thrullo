module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "error",
            2,
            { "SwitchCase": 1 }
        ],
        "no-empty": [
            "off", 
            "allow-empty-functions", 
            "allow-empty-catch"
        ],
        "no-empty-function": [
            "error", 
            { 
                "allow": [
                    "functions", 
                    "generatorFunctions", 
                    "arrowFunctions",
                    "methods",
                    "generatorMethods",
                    "setters",
                    "asyncFunctions",
                    "asyncMethods",
                    "constructors",
                ] 
            },
        ],
        //"no-unused-vars": [
        //    "error", 
        //    { 
        //        "vars": "all", 
        //        "args": "after-used", 
        //        "ignoreRestSiblings": false 
        //    }
        //],
        "eol-last": [
            "error",
            "always"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
