const path = require('path');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'reveal-plantuml.min.js'
  },
  resolveLoader: {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
    mainFields: ['loader', 'main']
  }
};
