module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks', // check
    '../../.eslintrc.cjs',
    'plugin:jsx-a11y/recommended', // check,
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname
  }
};
