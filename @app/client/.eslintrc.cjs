module.exports = {
  extends: [
    'airbnb/hooks', // check
    'plugin:jsx-a11y/recommended', // check,
    '../../.eslintrc.cjs'
  ],
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.node.json'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname
  }
};
