const { rules: prettierRules } = require('eslint-config-prettier')

delete prettierRules['vue/html-self-closing']

module.exports = {
  plugins: ['prettier'],
  rules: {
    ...prettierRules,
    'prettier/prettier': 'off',
  },
}
