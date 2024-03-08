module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    extends: [
      'airbnb-typescript'
    ],
      parserOptions: {
        project: './tsconfig.json'
    },
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "project": ["./tsconfig.json"],
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import",
    ],
    "rules": {
        "@typescript-eslint/no-shadow": "off",
        "import/no-extraneous-dependencies": ["error",  {"devDependencies": true}],
    }
}
