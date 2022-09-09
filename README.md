# @fe92star/eslint-config
* 一个用于个人项目开发的`eslint preset`最佳实践

## Usage

### Install

```bash
pnpm add -D eslint @fe92star/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@fe92star"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
