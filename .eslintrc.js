module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //缩进为4个空格，否则warn
    "indent": ["error", 4],
    //关闭最后一个逗号提示
    "comma-dangle": 0,
    //关闭函数参数前空格
    "space-before-function-paren": 0,
    // 注释// 与内容间不加空格提示warn
    "spaced-comment": 1,
    // more than one blank lines will not throw error again
    "no-multiple-empty-lines": 0,
    // 分号结尾
    "semi": 0,
    // 定义未被使用则warn
    "no-unused-vars": 1
  }
}
