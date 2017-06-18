# momo file loader for webpack

Checkout [momo-language](https://github.com/maierfelix/momo) here.

Converts `.momo` files to `wasm` bytecode.

## Install

```
npm install --save-dev momo-loader wasm-loader
```

# Usage

Edit webpack.config.js:

```javascript
loaders: [
  {
    test: /\.wasm$/,
    loaders: ['momo-loader', 'wasm-loader']
  }
]
```


