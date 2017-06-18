const compiler = require('./momo.js');

module.exports = function(momoSource) {
  const { buffer } = compiler.compileSource(momoSource, {});
  this.callback(null, buffer);
};

