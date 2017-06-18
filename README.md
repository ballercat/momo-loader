# momo file loader for webpack

Checkout [momo-language](https://github.com/maierfelix/momo) here. The fastest way to get up and running with WebAssembly.

This loader converts `.momo` files to `wasm` bytecode.

## Install

```
npm install --save-dev momo-loader wasm-loader
```

# Usage

Edit webpack.config.js:

```javascript
resolve: [
  extensions: ['.js', '.momo']
],
...
loaders: [
  {
    test: /\.wasm$/,
    loaders: ['wasm-loader', 'momo-loader']
  }
]
```

You can refer to `example.webpack.config.js` in this repo for an example.

# Example

Here we are going to use main.momo example, and save it to `/momo/main.momo`:

```c
int swap(int *c, int *d) {
  int tmp = *c;
  *c = *d;
  *d = tmp;
  return (0);
};

extern int main() {
  int a = 10;
  int b = 20;
  int &rb = b;
  rb = 33;
  swap(&a, &rb);
  return (a);
};
```

Later simply include the file in your JavaScript and instantiate the module:

```javascript
import Main from '/momo/main';

const mainInstance = new Main();
console.log(mainInstance.exports.main()) // 33
```

That's it.

