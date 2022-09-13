# @fe92star/eslint-config
* 适用于个人项目开发的`eslint presets`, 包含`Javascript`,`Typescript`,`React`,`Vue`,`Prettier`等

## Usage

```bash
# React, Vue3 和 Prettier
pnpm add -D @fe92star/eslint-config
# Javascript
pnpm add -D @fe92star/eslint-config-basic
# Prettier
pnpm add -D @fe92star/eslint-config-prettier
# React
pnpm add -D @fe92star/eslint-config-react
# Typescript
pnpm add -D @fe92star/eslint-config-ts
# Vue
pnpm add -D @fe92star/eslint-config-vue
```

### Config `.eslintrc.js`

```js
// .eslintrc.js
module.exports = {
  root: true,
  extends: ['@fe92star/eslint-config'],
  rules: {
    // 自定义规则配置
  },
}
```

> 不需要额外加`.eslintignore`，`preset`内部已经自动提供

### package.json的lint脚本

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```
